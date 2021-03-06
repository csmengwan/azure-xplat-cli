// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ce4a7590-4722-4bcf-a2c6-e473e9f11778',
    name: 'Azure Storage DM Test',
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
  process.env['AZURE_ARM_TEST_LOCATION'] = 'East US 2';
  process.env['AZURE_ARM_TEST_RESOURCE_GROUP'] = 'xplattestadlarg05';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadla1035/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla8566' under resource group 'xplattestadla1035' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '102c4a3c-a0df-4822-b8d4-0dc8063f5812',
  'x-ms-correlation-request-id': '102c4a3c-a0df-4822-b8d4-0dc8063f5812',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075036Z:102c4a3c-a0df-4822-b8d4-0dc8063f5812',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:50:36 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadla1035/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566?api-version=2016-11-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.DataLakeAnalytics/accounts/xplattestadla8566' under resource group 'xplattestadla1035' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '102c4a3c-a0df-4822-b8d4-0dc8063f5812',
  'x-ms-correlation-request-id': '102c4a3c-a0df-4822-b8d4-0dc8063f5812',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075036Z:102c4a3c-a0df-4822-b8d4-0dc8063f5812',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:50:36 GMT',
  connection: 'close',
  'content-length': '175' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadla1035/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '16e08be2-f508-47fa-94f7-9036b9b70451',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'fc33f501-5f87-40e4-b7cb-cd624aa6b161',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075042Z:fc33f501-5f87-40e4-b7cb-cd624aa6b161',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:50:41 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/ce4a7590-4722-4bcf-a2c6-e473e9f11778/resourceGroups/xplattestadla1035/providers/Microsoft.DataLakeAnalytics/accounts/xplattestadla8566?api-version=2016-11-01', '*')
  .reply(409, "{\"error\":{\"code\":\"ResourceConflicted\",\"message\":\"Resource Name belongs to another resource.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '94',
  'content-type': 'application/json',
  expires: '-1',
  'x-ms-request-id': '16e08be2-f508-47fa-94f7-9036b9b70451',
  'x-content-type-options': 'nosniff',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1199',
  'x-ms-correlation-request-id': 'fc33f501-5f87-40e4-b7cb-cd624aa6b161',
  'x-ms-routing-request-id': 'EASTASIA:20170217T075042Z:fc33f501-5f87-40e4-b7cb-cd624aa6b161',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Fri, 17 Feb 2017 07:50:41 GMT',
  connection: 'close' });
 return result; }]];