// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '53d9063d-87ae-4ea8-be90-3686c3b8669f',
    name: 'Visual Studio Ultimate with MSDN',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '6e606ece-3a5a-4674-a654-d6b02bc5a51b',
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
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cf3dd9d1-90a0-496e-a253-f45bb9eb524c',
  'set-cookie': [ 'UserPrincipalSession=46bde4ca-05dd-4eee-8c2a-c2fbb2b33079; path=/; secure; HttpOnly' ],
  'server-perf': '[cf3dd9d1-90a0-496e-a253-f45bb9eb524c][ AuthTime::1511.4733400738::PostAuthTime::31220.0079037995 ][GetAclStatus :: 00:00:048 ms]%0a[HdfsGetAclStatus :: 00:00:097 ms]%0a[SS Response Process :: 00:00:016 ms]%0a[GETACLSTATUS :: 00:00:173 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:55 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': 'cf3dd9d1-90a0-496e-a253-f45bb9eb524c',
  'set-cookie': [ 'UserPrincipalSession=46bde4ca-05dd-4eee-8c2a-c2fbb2b33079; path=/; secure; HttpOnly' ],
  'server-perf': '[cf3dd9d1-90a0-496e-a253-f45bb9eb524c][ AuthTime::1511.4733400738::PostAuthTime::31220.0079037995 ][GetAclStatus :: 00:00:048 ms]%0a[HdfsGetAclStatus :: 00:00:097 ms]%0a[SS Response Process :: 00:00:016 ms]%0a[GETACLSTATUS :: 00:00:173 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:55 GMT',
  connection: 'close',
  'content-length': '271' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A%3Arwx%2Cgroup%3A%3Arwx%2Cother%3A%3A---%2Cmask%3A%3Arwx%2Cdefault%3Auser%3A%3Arwx%2Cdefault%3Agroup%3A%3Arwx%2Cdefault%3Aother%3A%3A---%2Cdefault%3Amask%3A%3Arwx%2Cdefault%3Auser%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=SETACL&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a65319e7-fa1d-4bbf-9ebe-03748a56e9c2',
  contentlength: '0',
  'server-perf': '[a65319e7-fa1d-4bbf-9ebe-03748a56e9c2][ AuthTime::606.89810912105::PostAuthTime::130.874433679381 ][SetAcl :: 00:00:021 ms]%0a[HdfsSetAcl :: 00:00:842 ms]%0a[SETACL :: 00:00:885 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:57 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .put('/webhdfs/v1/%2F?aclspec=user%3A%3Arwx%2Cgroup%3A%3Arwx%2Cother%3A%3A---%2Cmask%3A%3Arwx%2Cdefault%3Auser%3A%3Arwx%2Cdefault%3Agroup%3A%3Arwx%2Cdefault%3Aother%3A%3A---%2Cdefault%3Amask%3A%3Arwx%2Cdefault%3Auser%3A027c28d5-c91d-49f0-98c5-d10134b169b3%3Arwx&op=SETACL&api-version=2015-10-01-preview')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  expires: '-1',
  'x-ms-request-id': 'a65319e7-fa1d-4bbf-9ebe-03748a56e9c2',
  contentlength: '0',
  'server-perf': '[a65319e7-fa1d-4bbf-9ebe-03748a56e9c2][ AuthTime::606.89810912105::PostAuthTime::130.874433679381 ][SetAcl :: 00:00:021 ms]%0a[HdfsSetAcl :: 00:00:842 ms]%0a[SETACL :: 00:00:885 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:57 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"default:user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3bf84d8d-03a3-45d8-b997-94a67047dd6f',
  'set-cookie': [ 'UserPrincipalSession=2069ab9a-1c7d-439a-b55a-ace0474d0b8f; path=/; secure; HttpOnly' ],
  'server-perf': '[3bf84d8d-03a3-45d8-b997-94a67047dd6f][ AuthTime::1375.46522459517::PostAuthTime::30907.7642787917 ][GetAclStatus :: 00:00:028 ms]%0a[HdfsGetAclStatus :: 00:00:027 ms]%0a[SS Response Process :: 00:00:017 ms]%0a[GETACLSTATUS :: 00:00:082 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:58 GMT',
  connection: 'close',
  'content-length': '327' });
 return result; },
function (nock) { 
var result = 
nock('https://xplattestadls7064.azuredatalakestore.net:443')
  .get('/webhdfs/v1/%2F?op=GETACLSTATUS&api-version=2015-10-01-preview')
  .reply(200, "{\"AclStatus\":{\"entries\":[\"user::rwx\",\"group::rwx\",\"other::---\",\"mask::rwx\",\"default:user::rwx\",\"default:group::rwx\",\"default:other::---\",\"default:mask::rwx\",\"default:user:027c28d5-c91d-49f0-98c5-d10134b169b3:rwx\"],\"owner\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"group\":\"2e6c02d2-a364-4530-9137-d17403996cbf\",\"stickyBit\":false}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-request-id': '3bf84d8d-03a3-45d8-b997-94a67047dd6f',
  'set-cookie': [ 'UserPrincipalSession=2069ab9a-1c7d-439a-b55a-ace0474d0b8f; path=/; secure; HttpOnly' ],
  'server-perf': '[3bf84d8d-03a3-45d8-b997-94a67047dd6f][ AuthTime::1375.46522459517::PostAuthTime::30907.7642787917 ][GetAclStatus :: 00:00:028 ms]%0a[HdfsGetAclStatus :: 00:00:027 ms]%0a[SS Response Process :: 00:00:017 ms]%0a[GETACLSTATUS :: 00:00:082 ms]%0a',
  status: '0x0',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=15724800; includeSubDomains',
  date: 'Thu, 28 Apr 2016 18:29:58 GMT',
  connection: 'close',
  'content-length': '327' });
 return result; }]];