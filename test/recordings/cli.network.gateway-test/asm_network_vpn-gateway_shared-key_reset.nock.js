// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'a0d901ba-9956-4f7d-830c-2d7974c36666',
    name: 'Azure Storage DM Dev',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['AZURE_STORAGE_TEST_TYPE'] = 'LRS';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/CliGtTestVnet3384/gateway/connection/CliGtTestLocNetwork8695/sharedkey', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7687864f-e360-40bc-98ec-8142100fdd3a</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dc5a70ecd8879d4e95387eece6f20526',
  date: 'Fri, 22 Apr 2016 10:25:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/CliGtTestVnet3384/gateway/connection/CliGtTestLocNetwork8695/sharedkey', '*')
  .reply(202, "<GatewayOperationAsyncResponse xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><ID>7687864f-e360-40bc-98ec-8142100fdd3a</ID></GatewayOperationAsyncResponse>", { 'cache-control': 'no-cache',
  'content-length': '210',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'dc5a70ecd8879d4e95387eece6f20526',
  date: 'Fri, 22 Apr 2016 10:25:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/operation/7687864f-e360-40bc-98ec-8142100fdd3a')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><ID>7687864f-e360-40bc-98ec-8142100fdd3a</ID><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2016-04-22T10:25:46.0091381</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '350',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '30d3a09ff70f98379fc0938f454a7d47',
  date: 'Fri, 22 Apr 2016 10:26:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/operation/7687864f-e360-40bc-98ec-8142100fdd3a')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><ID>7687864f-e360-40bc-98ec-8142100fdd3a</ID><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2016-04-22T10:25:46.0091381</OperationStartedTime><Status>InProgress</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '350',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '30d3a09ff70f98379fc0938f454a7d47',
  date: 'Fri, 22 Apr 2016 10:26:20 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/operation/7687864f-e360-40bc-98ec-8142100fdd3a')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>7687864f-e360-40bc-98ec-8142100fdd3a</ID><OperationCompletedTime>2016-04-22T10:26:40.2091835</OperationCompletedTime><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2016-04-22T10:25:46.0091381</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '461',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '557c4c82a9cc9545ad413016eb69ebb6',
  date: 'Fri, 22 Apr 2016 10:26:52 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .get('/a0d901ba-9956-4f7d-830c-2d7974c36666/services/networking/operation/7687864f-e360-40bc-98ec-8142100fdd3a')
  .reply(200, "<GatewayOperation xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Data/><HealthStatus/><HttpStatusCode>OK</HttpStatusCode><ID>7687864f-e360-40bc-98ec-8142100fdd3a</ID><OperationCompletedTime>2016-04-22T10:26:40.2091835</OperationCompletedTime><OperationName>ResetSharedKey</OperationName><OperationStartedTime>2016-04-22T10:25:46.0091381</OperationStartedTime><Status>Successful</Status></GatewayOperation>", { 'cache-control': 'no-cache',
  'content-length': '461',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.357 (rd_rdfe_stable.160413-1538) Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth3',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '557c4c82a9cc9545ad413016eb69ebb6',
  date: 'Fri, 22 Apr 2016 10:26:52 GMT',
  connection: 'close' });
 return result; }]];