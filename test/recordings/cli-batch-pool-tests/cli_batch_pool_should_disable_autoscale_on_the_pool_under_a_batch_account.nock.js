// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '6e0b24a6-2bef-4598-9bd3-f87e9700e24c',
    name: 'Windows Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_BATCH_ACCOUNT'] = 'test1';
  process.env['AZURE_BATCH_ENDPOINT'] = 'https://test1.westus.batch.azure.com';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .post('/pools/xplatTestPool/disableautoscale?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Apr 2016 22:49:57 GMT',
  etag: '0x8D3708096639957',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '23a51691-e852-4ea2-b635-5f24d09a177f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '33924373-361f-4bdd-9f7f-cf55d2d9fbb5',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/disableautoscale',
  date: 'Fri, 29 Apr 2016 22:49:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .post('/pools/xplatTestPool/disableautoscale?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "", { 'transfer-encoding': 'chunked',
  'last-modified': 'Fri, 29 Apr 2016 22:49:57 GMT',
  etag: '0x8D3708096639957',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '23a51691-e852-4ea2-b635-5f24d09a177f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '33924373-361f-4bdd-9f7f-cf55d2d9fbb5',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatTestPool/disableautoscale',
  date: 'Fri, 29 Apr 2016 22:49:58 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatTestPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3708096639957\",\"lastModified\":\"2016-04-29T22:49:57.0606423Z\",\"creationTime\":\"2016-04-29T22:46:58.8938301Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-29T22:46:58.8938301Z\",\"allocationState\":\"resizing\",\"allocationStateTransitionTime\":\"2016-04-29T22:49:57.0606423Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT2M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 29 Apr 2016 22:49:57 GMT',
  etag: '0x8D3708096639957',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd9a6d110-81b8-4e50-9cb8-a5d88e58c75d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '964e565c-5607-4b71-9b8e-c119b6b138f6',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Apr 2016 22:50:01 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatTestPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatTestPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatTestPool\",\"eTag\":\"0x8D3708096639957\",\"lastModified\":\"2016-04-29T22:49:57.0606423Z\",\"creationTime\":\"2016-04-29T22:46:58.8938301Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-04-29T22:46:58.8938301Z\",\"allocationState\":\"resizing\",\"allocationStateTransitionTime\":\"2016-04-29T22:49:57.0606423Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT2M\",\"currentDedicated\":3,\"targetDedicated\":3,\"enableAutoScale\":false,\"enableInterNodeCommunication\":true,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo test\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 29 Apr 2016 22:49:57 GMT',
  etag: '0x8D3708096639957',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'd9a6d110-81b8-4e50-9cb8-a5d88e58c75d',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '964e565c-5607-4b71-9b8e-c119b6b138f6',
  dataserviceversion: '3.0',
  date: 'Fri, 29 Apr 2016 22:50:01 GMT',
  connection: 'close' });
 return result; }]];