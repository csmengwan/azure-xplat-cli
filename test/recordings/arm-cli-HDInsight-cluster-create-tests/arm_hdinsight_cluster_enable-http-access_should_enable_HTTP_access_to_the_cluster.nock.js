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
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/operationresults/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '0389e91a-dbbc-4be6-81f2-67d392eaf6d4',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0d2199a4-6ea3-4552-8d6e-79017a8541ef',
  'x-ms-routing-request-id': 'WESTUS:20160518T005345Z:0d2199a4-6ea3-4552-8d6e-79017a8541ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:53:45 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway?api-version=2015-03-01-preview', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/operationresults/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview',
  'retry-after': '60',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview',
  'x-ms-request-id': '0389e91a-dbbc-4be6-81f2-67d392eaf6d4',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '0d2199a4-6ea3-4552-8d6e-79017a8541ef',
  'x-ms-routing-request-id': 'WESTUS:20160518T005345Z:0d2199a4-6ea3-4552-8d6e-79017a8541ef',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:53:45 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0c0b3795-9604-4f9e-99db-dae5a03bab97',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '98f85092-dfa5-4c57-8f20-d9b42b27c28c',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T005446Z:98f85092-dfa5-4c57-8f20-d9b42b27c28c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:54:46 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '0c0b3795-9604-4f9e-99db-dae5a03bab97',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14975',
  'x-ms-correlation-request-id': '98f85092-dfa5-4c57-8f20-d9b42b27c28c',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T005446Z:98f85092-dfa5-4c57-8f20-d9b42b27c28c',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:54:46 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2477c2b2-08be-47d0-8e25-918f744f23f1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14871',
  'x-ms-correlation-request-id': '6b66f968-6b67-4c8f-9983-152a9eccb84b',
  'x-ms-routing-request-id': 'WESTUS:20160518T005547Z:6b66f968-6b67-4c8f-9983-152a9eccb84b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:55:46 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '2477c2b2-08be-47d0-8e25-918f744f23f1',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14871',
  'x-ms-correlation-request-id': '6b66f968-6b67-4c8f-9983-152a9eccb84b',
  'x-ms-routing-request-id': 'WESTUS:20160518T005547Z:6b66f968-6b67-4c8f-9983-152a9eccb84b',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:55:46 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7b01fabe-d66e-4c08-b71a-5071aa5a686a',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': 'a7822589-5c61-4f96-a086-5ade1f049489',
  'x-ms-routing-request-id': 'WESTUS:20160518T005648Z:a7822589-5c61-4f96-a086-5ade1f049489',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:56:47 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '7b01fabe-d66e-4c08-b71a-5071aa5a686a',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14956',
  'x-ms-correlation-request-id': 'a7822589-5c61-4f96-a086-5ade1f049489',
  'x-ms-routing-request-id': 'WESTUS:20160518T005648Z:a7822589-5c61-4f96-a086-5ade1f049489',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:56:47 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e0d6f7e1-5c8d-47e0-9620-a1effaee7c5d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '751463ef-839a-48f0-8143-3d62ddcd311e',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T005748Z:751463ef-839a-48f0-8143-3d62ddcd311e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:57:48 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'e0d6f7e1-5c8d-47e0-9620-a1effaee7c5d',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14976',
  'x-ms-correlation-request-id': '751463ef-839a-48f0-8143-3d62ddcd311e',
  'x-ms-routing-request-id': 'CENTRALUS:20160518T005748Z:751463ef-839a-48f0-8143-3d62ddcd311e',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:57:48 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4665a4c9-aead-4aac-89f4-3dfe8cf67be6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14849',
  'x-ms-correlation-request-id': '82c501a6-f865-4ebd-91ea-df9d75b48398',
  'x-ms-routing-request-id': 'WESTUS:20160518T005849Z:82c501a6-f865-4ebd-91ea-df9d75b48398',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:58:49 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"InProgress\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '23',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '4665a4c9-aead-4aac-89f4-3dfe8cf67be6',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14849',
  'x-ms-correlation-request-id': '82c501a6-f865-4ebd-91ea-df9d75b48398',
  'x-ms-routing-request-id': 'WESTUS:20160518T005849Z:82c501a6-f865-4ebd-91ea-df9d75b48398',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:58:49 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('http://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17a3a44c-bcd0-45da-9a56-d25ecdf249ea',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14813',
  'x-ms-correlation-request-id': '826156b6-0811-424c-98ac-4724f7475c94',
  'x-ms-routing-request-id': 'WESTUS:20160518T005951Z:826156b6-0811-424c-98ac-4724f7475c94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:59:50 GMT',
  connection: 'close' });
 return result; },
function (nock) {
var result =
nock('https://management.azure.com:443')
  .get('/subscriptions/26d6d535-5164-443d-82f6-4c695caf7688/resourceGroups/xplatTestRgHDInsightClusterCreate4390/providers/Microsoft.HDInsight/clusters/xplatTestHDInsightClusterCreate9269/configurations/gateway/azureasyncoperations/3d41b268-6a0e-4d66-95d4-68ca0a98cf39-0?api-version=2015-03-01-preview')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '17a3a44c-bcd0-45da-9a56-d25ecdf249ea',
  server: 'Microsoft-IIS/8.5',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14813',
  'x-ms-correlation-request-id': '826156b6-0811-424c-98ac-4724f7475c94',
  'x-ms-routing-request-id': 'WESTUS:20160518T005951Z:826156b6-0811-424c-98ac-4724f7475c94',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Wed, 18 May 2016 00:59:50 GMT',
  connection: 'close' });
 return result; }]];