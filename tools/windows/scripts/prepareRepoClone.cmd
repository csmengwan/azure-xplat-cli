@echo off
:: Microsoft Azure CLI - Windows Installer - Author file components script
:: Copyright (C) Microsoft Corporation. All Rights Reserved.
::
:: This re-builds partial WiX files for use in cloning the repo after install.
:: heat.exe from the WiX toolset is used for this.
::

:: to avoid https://github.com/npm/npm/issues/6438
chcp 850 

set NODE_VERSION=4.7.0
set NPM_VERSION=1.3.17

:: Add Git to the path as this should be run through a .NET command prompt
:: and not a Git bash shell... We also need the gnu toolchain (for curl & unzip)
set PATH=%PATH%;"C:\Program Files (x86)\Git\bin;"

pushd %~dp0..\

set NODE_X86_DOWNLOAD_URL=http://nodejs.org/dist/v%NODE_VERSION%/win-x86/node.exe
set NODE_X64_DOWNLOAD_URL=http://nodejs.org/dist/v%NODE_VERSION%/win-x64/node.exe
set NPM_DOWNLOAD_URL=http://nodejs.org/dist/npm/npm-%NPM_VERSION%.zip

echo Cleaning previous build artifacts...

set OUTPUT_FOLDER=.\out
if exist %OUTPUT_FOLDER% rmdir /s /q %OUTPUT_FOLDER%
mkdir %OUTPUT_FOLDER%

set TEMP_REPO_FOLDER=zcli
set TEMP_AUX_REPO_FOLDER=zNode
set X86=x86
set X64=x64
set TEMP_REPO=%HOMEDRIVE%%HOMEPATH%\%TEMP_REPO_FOLDER%
set TEMP_AUX_REPO=%HOMEDRIVE%%HOMEPATH%\%TEMP_AUX_REPO_FOLDER%

if not exist %TEMP_REPO% goto CLONE_REPO

echo Temporary clone of the repo already exists. Removing it...
pushd %TEMP_REPO%\..\
if exist %TEMP_REPO_FOLDER% rmdir /s /q %TEMP_REPO_FOLDER%
::rmdir always returns 0, so check folder's existence 
if exist %TEMP_REPO_FOLDER% (
    echo Failed to delete %TEMP_REPO_FOLDER%.
    goto ERROR
)
popd

:CLONE_REPO
mkdir %TEMP_REPO%
echo Cloning the repo elsewhere on disk...
pushd ..\..\
robocopy . %TEMP_REPO% /MIR /XD .git tools features scripts test node_modules /NFL /NDL /NJH /NJS
::robocopy emits error code greater or equal than 8(most other commands use any non-zero values)
if %errorlevel% geq 8 (
    echo Robocopy failed to copy xplat sources to the %TEMP_REPO%.
    goto ERROR
)
popd

if not exist %TEMP_AUX_REPO% goto DOWNLOAD_TASK

echo Temporary clone of auxilary repo exists. Removing it...
pushd %TEMP_AUX_REPO%\..\
if exist %TEMP_AUX_REPO_FOLDER% rmdir /s /q %TEMP_AUX_REPO_FOLDER%
if exist %TEMP_AUX_REPO_FOLDER% (
    echo Failed to delete %TEMP_AUX_REPO_FOLDER%.
    goto ERROR
)
popd

:DOWNLOAD_TASK
mkdir %TEMP_AUX_REPO%
echo Downloading node x86 and x64...
pushd %TEMP_AUX_REPO%
mkdir %X86%
pushd %X86%
curl -o node.exe %NODE_X86_DOWNLOAD_URL%
if %errorlevel% neq 0 goto ERROR
popd
mkdir %X64%
pushd %X64%
curl -o node.exe %NODE_X64_DOWNLOAD_URL%
if %errorlevel% neq 0 goto ERROR
popd
popd

echo.
echo Downloading npm...
pushd %TEMP_REPO%\bin
curl -o npm.zip %NPM_DOWNLOAD_URL%
if %errorlevel% neq 0 goto ERROR
unzip -q npm.zip
if %errorlevel% neq 0 goto ERROR
del npm.zip
popd

echo.
echo Copying node into bin directory...
:: We copy node.exe to bin directory to compile streamline files and other tasks.
:: During clean up phase, we delete it from bin directory. The reason for doing this is because the
:: entire source repo is harvested during set up authoring. We want to author node by hand after determining architecture type (32 or 64 bit).
pushd %TEMP_AUX_REPO%\%X86%
robocopy . %TEMP_REPO%\bin /NFL /NDL /NJH /NJS
if %errorlevel% geq 8 (
    echo Robocopy failed to copy node.exe to the %TEMP_REPO%\bin.
    goto ERROR
)
popd

echo Running npm install...
pushd %TEMP_REPO%
call bin/npm.cmd install --production
echo.
echo if YOU SEE A FAILURE AT THE BOTTOM OF THE NPM OUTPUT:
echo If you do not have Node.js installed on this local machine, the Azure
echo postinstall command run by npm will fail.
echo.
echo This is fine as long as only the Azure module had this issue. Onward!
echo.
popd

echo Compiling streamline files...
pushd %TEMP_REPO%
.\bin\node.exe node_modules\streamline\bin\_node --verbose -c lib
if %errorlevel% neq 0 goto ERROR
.\bin\node.exe node_modules\streamline\bin\_node --verbose -c node_modules\streamline\lib\streams
if %errorlevel% neq 0 goto ERROR
.\bin\node.exe node_modules\streamline\bin\_node --verbose -c node_modules\streamline-streams\lib
if %errorlevel% neq 0 goto ERROR
popd

echo Generating streamline files...
pushd %TEMP_REPO%
.\bin\node.exe bin\azure --gen
popd

echo Removing unncessary files from the enlistment for the CLI to function...
:: This is cleaner than using /EXCLUDE:... commands and easier to see line-by-line...
pushd %TEMP_REPO%

for %%i in (
    .idea
    __temp
    bin\node_modules
) do (
    if exist %%i (
        echo Deleting %%i...
        rmdir /s /q %%i
    )
)

for %%i in (
    *.md
    *.git*
    *.npm*
    *.njsproj
    *.sln
    azure_error
    azure.err
    checkstyle-result.xml
    test-result.xml
    .travis.yml
    .jshintrc
    .gitattributes
    .gitignore
    ChangeLog.txt
    bin\npm.cmd
    bin\node.exe
    LICENSE.txt
) do (
    if exist %%i (
        echo Deleting %%i...
        del /q %%i
    )
)

cd lib
del /Q /S *._js 
cd ..
del /Q /S .ntvs_analysis.*
echo.
popd

echo Creating the wbin (Windows binaries) folder that will be added to the path...
mkdir %TEMP_REPO%\wbin
copy .\scripts\azure.cmd %TEMP_REPO%\wbin\
if %errorlevel% neq 0 goto ERROR
echo Adding license documents...
copy ..\resources\*.rtf %TEMP_REPO%
if %errorlevel% neq 0 goto ERROR
copy ..\resources\ThirdPartyNotices.txt %TEMP_REPO%
if %errorlevel% neq 0 goto ERROR

echo.

:SUCCESS
echo Looks good.

goto END

:ERROR
echo Error occurred, please check the output for details.
exit /b 1

:END
exit /b 0
popd
