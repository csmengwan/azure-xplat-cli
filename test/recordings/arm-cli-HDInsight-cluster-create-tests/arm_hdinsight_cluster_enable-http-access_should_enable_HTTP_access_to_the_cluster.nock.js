// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '26d6d535-5164-443d-82f6-4c695caf7688',
    name: 'BDHadoopHumboldtCRPAdhocTestShortTerm',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'NorthCentralUS';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/operationresults/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '69c3dbb5-29d6-4532-9df4-4ea86b6bbe93',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '168bb06d-bf07-46c4-9f9f-30a97502a75f',
  'x-ms-routing-request-id': 'WESTUS:20160428T194626Z:168bb06d-bf07-46c4-9f9f-30a97502a75f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:46:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/operationresults/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '69c3dbb5-29d6-4532-9df4-4ea86b6bbe93',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': '168bb06d-bf07-46c4-9f9f-30a97502a75f',
  'x-ms-routing-request-id': 'WESTUS:20160428T194626Z:168bb06d-bf07-46c4-9f9f-30a97502a75f',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:46:25 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cf0e38f1-e58f-44d4-8dde-149a1a5099d5',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '84f447ed-fa1b-4a7b-a93a-4d47d8ce1d52',
  'x-ms-routing-request-id': 'WESTUS:20160428T194728Z:84f447ed-fa1b-4a7b-a93a-4d47d8ce1d52',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:47:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cf0e38f1-e58f-44d4-8dde-149a1a5099d5',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14938',
  'x-ms-correlation-request-id': '84f447ed-fa1b-4a7b-a93a-4d47d8ce1d52',
  'x-ms-routing-request-id': 'WESTUS:20160428T194728Z:84f447ed-fa1b-4a7b-a93a-4d47d8ce1d52',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:47:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a2cace43-ad17-4bc7-97af-b2f0925cc811',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': 'bfdfdc64-e3b4-4243-bb90-47284cd37a5a',
  'x-ms-routing-request-id': 'WESTUS:20160428T194828Z:bfdfdc64-e3b4-4243-bb90-47284cd37a5a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:48:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'a2cace43-ad17-4bc7-97af-b2f0925cc811',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14953',
  'x-ms-correlation-request-id': 'bfdfdc64-e3b4-4243-bb90-47284cd37a5a',
  'x-ms-routing-request-id': 'WESTUS:20160428T194828Z:bfdfdc64-e3b4-4243-bb90-47284cd37a5a',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:48:27 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '474a3bb5-3ad0-41d9-876f-2cf2ada50be9',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14893',
  'x-ms-correlation-request-id': 'f7763b19-14d7-4580-b375-855370b7c940',
  'x-ms-routing-request-id': 'WESTUS:20160428T194930Z:f7763b19-14d7-4580-b375-855370b7c940',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:49:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '474a3bb5-3ad0-41d9-876f-2cf2ada50be9',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14893',
  'x-ms-correlation-request-id': 'f7763b19-14d7-4580-b375-855370b7c940',
  'x-ms-routing-request-id': 'WESTUS:20160428T194930Z:f7763b19-14d7-4580-b375-855370b7c940',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:49:29 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1f2684aa-ff7a-4591-bbd1-d3d3e87350dd',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '44fed091-27ec-4afd-84c4-d5629ce3a413',
  'x-ms-routing-request-id': 'WESTUS:20160428T195031Z:44fed091-27ec-4afd-84c4-d5629ce3a413',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:50:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '1f2684aa-ff7a-4591-bbd1-d3d3e87350dd',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14950',
  'x-ms-correlation-request-id': '44fed091-27ec-4afd-84c4-d5629ce3a413',
  'x-ms-routing-request-id': 'WESTUS:20160428T195031Z:44fed091-27ec-4afd-84c4-d5629ce3a413',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:50:30 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bd7e33a5-1500-4a2a-8bae-212b4a1d70f9',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '34163f5e-0c8b-4095-8d3f-718c2fc1c1df',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T195132Z:34163f5e-0c8b-4095-8d3f-718c2fc1c1df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:51:31 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate5099/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate3438/configurations/gateway/azureasyncoperations/9103e30e-a659-4144-a01b-95d80401bc3f-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'bd7e33a5-1500-4a2a-8bae-212b4a1d70f9',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14965',
  'x-ms-correlation-request-id': '34163f5e-0c8b-4095-8d3f-718c2fc1c1df',
  'x-ms-routing-request-id': 'CENTRALUS:20160428T195132Z:34163f5e-0c8b-4095-8d3f-718c2fc1c1df',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 28 Apr 2016 19:51:31 GMT',
  connection: 'close' });
 return result; }]];