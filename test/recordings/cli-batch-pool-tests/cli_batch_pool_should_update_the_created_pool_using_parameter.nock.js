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
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D38070B6A98941\",\"lastModified\":\"2016-05-20T05:36:37.8628417Z\",\"creationTime\":\"2016-05-20T05:36:14.4516804Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:36:14.4516804Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:36:14.5626906Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo updated\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:37 GMT',
  etag: '0x8D38070B6A98941',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'dd464cd3-5b64-4188-922f-a694bb36fed2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8b77aa92-8a8b-458b-891f-5fe068193889',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D38070B6A98941\",\"lastModified\":\"2016-05-20T05:36:37.8628417Z\",\"creationTime\":\"2016-05-20T05:36:14.4516804Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:36:14.4516804Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:36:14.5626906Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"cmd /c echo updated\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":true\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:37 GMT',
  etag: '0x8D38070B6A98941',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': 'dd464cd3-5b64-4188-922f-a694bb36fed2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8b77aa92-8a8b-458b-891f-5fe068193889',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatCreatedPool/updateproperties?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Fri, 20 May 2016 05:36:39 GMT',
  etag: '0x8D38070B75C8561',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2d3c7271-6f29-449c-9d0b-cc9bf8676aea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8e848c02-0dcd-4a84-9bb5-3fe2beeb7f95',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatCreatedPool/updateproperties',
  date: 'Fri, 20 May 2016 05:36:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/pools/xplatCreatedPool/updateproperties?api-version=2016-02-01.3.0&timeout=30', '*')
  .reply(204, "", { 'content-length': '0',
  'last-modified': 'Fri, 20 May 2016 05:36:39 GMT',
  etag: '0x8D38070B75C8561',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '2d3c7271-6f29-449c-9d0b-cc9bf8676aea',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '8e848c02-0dcd-4a84-9bb5-3fe2beeb7f95',
  dataserviceversion: '3.0',
  dataserviceid: 'https://test1.westus.batch.azure.com/pools/xplatCreatedPool/updateproperties',
  date: 'Fri, 20 May 2016 05:36:38 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://test1.westus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D38070B75C8561\",\"lastModified\":\"2016-05-20T05:36:39.0358369Z\",\"creationTime\":\"2016-05-20T05:36:14.4516804Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:36:14.4516804Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:36:14.5626906Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"hostname\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:39 GMT',
  etag: '0x8D38070B75C8561',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '70c52809-012c-4441-96a2-e1423f448773',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6acd81ba-dc6b-4577-9c71-95bc546106e7',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://test1.westus.batch.azure.com:443')
  .get('/pools/xplatCreatedPool?api-version=2016-02-01.3.0&timeout=30')
  .reply(200, "{\r\n  \"odata.metadata\":\"https://test1.westus.batch.azure.com/$metadata#pools/@Element\",\"id\":\"xplatCreatedPool\",\"url\":\"https://test1.westus.batch.azure.com/pools/xplatCreatedPool\",\"eTag\":\"0x8D38070B75C8561\",\"lastModified\":\"2016-05-20T05:36:39.0358369Z\",\"creationTime\":\"2016-05-20T05:36:14.4516804Z\",\"state\":\"active\",\"stateTransitionTime\":\"2016-05-20T05:36:14.4516804Z\",\"allocationState\":\"steady\",\"allocationStateTransitionTime\":\"2016-05-20T05:36:14.5626906Z\",\"vmSize\":\"small\",\"resizeTimeout\":\"PT15M\",\"currentDedicated\":0,\"targetDedicated\":0,\"enableAutoScale\":false,\"enableInterNodeCommunication\":false,\"startTask\":{\r\n    \"commandLine\":\"hostname\",\"runElevated\":false,\"maxTaskRetryCount\":0,\"waitForSuccess\":false\r\n  },\"maxTasksPerNode\":1,\"taskSchedulingPolicy\":{\r\n    \"nodeFillType\":\"Spread\"\r\n  },\"cloudServiceConfiguration\":{\r\n    \"osFamily\":\"4\",\"targetOSVersion\":\"*\",\"currentOSVersion\":\"*\"\r\n  }\r\n}", { 'transfer-encoding': 'chunked',
  'content-type': 'application/json;odata=minimalmetadata',
  'last-modified': 'Fri, 20 May 2016 05:36:39 GMT',
  etag: '0x8D38070B75C8561',
  server: 'Microsoft-HTTPAPI/2.0',
  'request-id': '70c52809-012c-4441-96a2-e1423f448773',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'client-request-id': '6acd81ba-dc6b-4577-9c71-95bc546106e7',
  dataserviceversion: '3.0',
  date: 'Fri, 20 May 2016 05:36:39 GMT',
  connection: 'close' });
 return result; }]];