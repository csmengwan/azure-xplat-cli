/**
* Copyright (c) Microsoft.  All rights reserved.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var utils = require('../util/utils');
var serviceFabricUtils = require('./serviceFabricUtils');
var serviceFabricClient = require('./serviceFabricClient');
var $ = utils.getLocaleString;


exports.init = function (cli) {
  var log = cli.output;
  
  var serviceFabric = cli.category('servicefabric')
    .description($('Commands to manage your Azure Service Fabric'));
  
  var service = serviceFabric.category('service')
    .description($('Commands to manage your service'));
  
  service.command('show [applicationName] [serviceName]')
    .description($('Show service'))
    .option('--application-name <serviceName>', $('the name of the application'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (applicationName, serviceName, options, _) {
      var progress = cli.interaction.progress($('Show service'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var res = null;
        if (!serviceName) {
          res = client.getServiceList(applicationName, options, _);
        }
        else {
          serviceName = serviceFabricUtils.parseUrl(serviceName, _);
          res = client.getService(applicationName, serviceName, options, _);
        }
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setServiceEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      }
      catch (e) {
        progress.end();
        throw e;
      }
    });
  
  service.command('create [applicationName] [serviceName] [serviceTypeName] [serviceKind] [instanceCount] [targetReplicaSetSize] [minReplicaSetSize] [hasPersistedState] [partitionScheme] [partitionCount] [partitionNames] [partitionLowKey] [partitionHighKey] [placementConstraints] [correlationSchema] [serviceLoadMetrics] [servicePlacementPolicyDescription]')
    .description($('Create service, Example: servicefabric service create --application-name fabric:/app --service-name fabric:/app/service --service-type-name ServiceType1 --service-kind Stateless --instance-count 1 --partition-scheme Singleton'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .option('--service-type-name <serviceTypeName>', $('the name of the service type'))
    .option('--service-kind <serviceKind>', $('the kind of the service, values are [Stateless|Stateful]'))
    .option('--instance-count <instanceCount>', $('the count of the instance'))
    .option('--target-replica-set-size <targetReplicaSetSize>', $('the size of the target replica set'))
    .option('--min-replica-set-size <minReplicaSetSize>', $('the size of the min replica set'))
    .option('--has-persisted-state <hasPersistedState>', $('the state of the persisted'))
    .option('--partition-scheme <partitionScheme>', $('the scheme of the partition'))
    .option('--partition-count <partitionCount>', $('the count of the partition'))
    .option('--partition-names <partitionNames>', $('the names of the partition'))
    .option('--partition-low-key <partitionLowKey>', $('the key of the partition low'))
    .option('--partition-high-key <partitionHighKey>', $('the key of the partition high'))
    .option('--placement-constraints <placementConstraints>', $('the constraints of the placement'))
    .option('--correlation-schema <correlationSchema>', $('the schema of the correlation'))
    .option('--service-load-metrics <serviceLoadMetrics>', $('the metrics of the service load'))
    .option('--service-placement-policy-description <servicePlacementPolicyDescription>', $('the description of the service placement policy'))
    .execute(function (applicationName, serviceName, serviceTypeName, serviceKind, instanceCount, targetReplicaSetSize, minReplicaSetSize, hasPersistedState, partitionScheme, partitionCount, partitionNames, partitionLowKey, partitionHighKey, placementConstraints, correlationSchema, serviceLoadMetrics, servicePlacementPolicyDescription, options, _) {
      applicationName = cli.interaction.promptIfNotGiven('applicationName:', applicationName, _);
      serviceName = cli.interaction.promptIfNotGiven('serviceName:', serviceName, _);
      serviceTypeName = cli.interaction.promptIfNotGiven('serviceTypeName:', serviceTypeName, _);
      serviceKind = cli.interaction.promptIfNotGiven('serviceKind:', serviceKind, _);
      if (serviceKind === 'Stateless') {
        instanceCount = cli.interaction.promptIfNotGiven('instanceCount:', instanceCount, _);
      }
      else if (serviceKind === 'Stateful') {
        targetReplicaSetSize = cli.interaction.promptIfNotGiven('targetReplicaSetSize:', targetReplicaSetSize, _);
        minReplicaSetSize = cli.interaction.promptIfNotGiven('minReplicaSetSize:', minReplicaSetSize, _);
        hasPersistedState = cli.interaction.promptIfNotGiven('hasPersistedState:', hasPersistedState, _);
      }
      partitionScheme = cli.interaction.promptIfNotGiven('partitionScheme:', partitionScheme, _);
      if (!serviceFabricUtils.isSubPath(applicationName, serviceName, _)) {
        throw 'ServiceName is not a sub-path of the applicationName';
      }
      
      var progress = cli.interaction.progress($('Create service'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var serviceDescription = {};
        serviceDescription.applicationName = applicationName;
        serviceDescription.serviceName = serviceName;
        serviceDescription.serviceTypeName = serviceTypeName;
        serviceDescription.ServiceKind = serviceFabricUtils.getEnumVal('serviceKind', serviceKind);// bug in autorest, needs capital
        if (serviceKind === 'Stateless') {
          serviceDescription.instanceCount = Number(instanceCount);
        }
        else if (serviceKind === 'Stateful') {
          serviceDescription.targetReplicaSetSize = Number(targetReplicaSetSize);
          serviceDescription.minReplicaSetSize = Number(minReplicaSetSize);
          if (hasPersistedState === 'true') {
            serviceDescription.hasPersistedState = true;
          }
          else if (hasPersistedState === 'false') {
            serviceDescription.hasPersistedState = false;
          }
        }
        serviceDescription.partitionDescription = {
          partitionScheme: serviceFabricUtils.getEnumVal('partitionScheme', partitionScheme)
        };
        if (partitionCount) serviceDescription.partitionDescription.count = Number(partitionCount);
        if (partitionNames) serviceDescription.partitionDescription.names = JSON.parse(partitionNames);
        if (partitionLowKey) serviceDescription.partitionDescription.lowKey = partitionLowKey;
        if (partitionHighKey) serviceDescription.partitionDescription.highKey = partitionHighKey;
        if (placementConstraints) serviceDescription.placementConstraints = placementConstraints;
        if (correlationSchema) {
          serviceDescription.correlationSchema = JSON.parse(correlationSchema);
          serviceDescription.correlationSchema.forEach(function (element) {
            if (element.serviceCorrelationScheme) {
              element.serviceCorrelationScheme = serviceFabricUtils.getEnumVal('serviceCorrelationScheme', element.serviceCorrelationScheme);
            }
          });
        }
        if (serviceLoadMetrics) serviceDescription.serviceLoadMetrics = JSON.parse(serviceLoadMetrics);
        if (servicePlacementPolicyDescription) {
          serviceDescription.servicePlacementPolicyDescription = JSON.parse(servicePlacementPolicyDescription);
          serviceDescription.servicePlacementPolicyDescription.forEach(function (element) {
            if (element.type) {
              element.type = serviceFabricUtils.getEnumVal('servicePlacementPolicyType', element.type);
            }
          });
        }
        var res = client.newService(serviceFabricUtils.parseUrl(applicationName, _), serviceDescription, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  service.command('update [serviceName] [serviceKind] [instanceCount] [targetReplicaSetSize] [minReplicaSetSize] [replicaRestartWaitDurationInMilliseconds] [quorumLossWaitDurationInMilliseconds] [standByReplicaKeepDurationInMilliseconds]')
    .description($('Update service'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .option('--service-kind <serviceKind>', $('the kind of the service, values are [Stateless|Stateful]'))
    .option('--instance-count <instanceCount>', $('the count of the instance'))
    .option('--target-replica-set-size <targetReplicaSetSize>', $('the size of the target replica set'))
    .option('--min-replica-set-size <minReplicaSetSize>', $('the size of the min replica set'))
    .option('--replica-restart-wait-duration-in-milliseconds <replicaRestartWaitDurationInMilliseconds>', $('the milliseconds of the replica restart wait duration'))
    .option('--quorum-loss-wait-duration-in-milliseconds <quorumLossWaitDurationInMilliseconds>', $('the milliseconds of the quorum loss wait duration'))
    .option('--stand-by-replica-keep-duration-in-milliseconds <standByReplicaKeepDurationInMilliseconds>', $('the milliseconds of the stand by replica keep duration'))
    .execute(function (serviceName, serviceKind, instanceCount, targetReplicaSetSize, minReplicaSetSize, replicaRestartWaitDurationInMilliseconds, quorumLossWaitDurationInMilliseconds, standByReplicaKeepDurationInMilliseconds, options, _) {
      serviceName = cli.interaction.promptIfNotGiven('serviceName:', serviceName, _);
      serviceKind = cli.interaction.promptIfNotGiven('serviceKind:', serviceKind, _);
      
      var progress = cli.interaction.progress($('Update service'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        serviceName = serviceFabricUtils.parseUrl(serviceName, _);
        var updateServiceDescription = {};
        if (serviceKind) updateServiceDescription.ServiceKind = serviceFabricUtils.getEnumVal('serviceKind', serviceKind);
        updateServiceDescription.flags = 0;
        if (targetReplicaSetSize) {
          updateServiceDescription.flags |= 1;
        }
        if (replicaRestartWaitDurationInMilliseconds) {
          updateServiceDescription.flags |= 2;
        }
        if (quorumLossWaitDurationInMilliseconds) {
          updateServiceDescription.flags |= 4;
        }
        if (standByReplicaKeepDurationInMilliseconds) {
          updateServiceDescription.flags |= 8;
        }
        if (minReplicaSetSize) {
          updateServiceDescription.flags |= 16;
        }
        if (serviceKind === 'Stateless') {
          updateServiceDescription.instanceCount = Number(instanceCount);
        }
        else if (serviceKind === 'Stateful') {
          updateServiceDescription.targetReplicaSetSize = Number(targetReplicaSetSize);
          updateServiceDescription.minReplicaSetSize = Number(minReplicaSetSize);
        }
        if (replicaRestartWaitDurationInMilliseconds) updateServiceDescription.replicaRestartWaitDurationInMilliseconds = Number(replicaRestartWaitDurationInMilliseconds);
        if (quorumLossWaitDurationInMilliseconds) updateServiceDescription.quorumLossWaitDurationInMilliseconds = Number(quorumLossWaitDurationInMilliseconds);
        if (standByReplicaKeepDurationInMilliseconds) updateServiceDescription.standByReplicaKeepDurationInMilliseconds = Number(standByReplicaKeepDurationInMilliseconds);
        var res = client.updateService(serviceName, updateServiceDescription, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  service.command('remove [serviceName]')
    .description($('Remove service'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .execute(function (serviceName, options, _) {
      serviceName = cli.interaction.promptIfNotGiven('serviceName', serviceName, _);
      
      var progress = cli.interaction.progress($('Remove service'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        serviceName = serviceFabricUtils.parseUrl(serviceName, _);
        var res = client.removeService(serviceName, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  service.command('resolve [serviceName] [partitionKeyType] [partitionKeyValue] [previousRspVersion]')
    .description($('Resolve service'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .option('--partition-key-type <partitionKeyType>', $('the name of the service'))
    .option('--partition-key-value <partitionKeyValue>', $('the name of the service'))
    .option('--previous-rsp-version <previousRspVersion>', $('the name of the service'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (serviceName, partitionKeyType, partitionKeyValue, previousRspVersion, options, _) {
      serviceName = cli.interaction.promptIfNotGiven('serviceName', serviceName, _);
      
      var progress = cli.interaction.progress($('Resolve service'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        serviceName = serviceFabricUtils.parseUrl(serviceName, _);
        if (partitionKeyType) options.partitionKeyType = serviceFabricUtils.getEnumVal('partitionScheme', partitionKeyType);
        if (partitionKeyValue) options.partitionKeyValue = partitionKeyValue;
        if (previousRspVersion) options.previousRspVersion = previousRspVersion;
        var res = client.resolveService(serviceName, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setServiceEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var serviceTemplate = service.category('template')
    .description($('Commands to manage your service template'));
  
  serviceTemplate.command('create [applicationName] [serviceName] [serviceTypeName]')
    .description($('Create service from template'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .option('--service-type-name <serviceTypeName>', $('the name of the service type'))
    .execute(function (applicationName, serviceName, serviceTypeName, options, _) {
      applicationName = cli.interaction.promptIfNotGiven('applicationName', applicationName, _);
      serviceName = cli.interaction.promptIfNotGiven('serviceName', serviceName, _);
      serviceTypeName = cli.interaction.promptIfNotGiven('serviceTypeName', serviceTypeName, _);
      
      var progress = cli.interaction.progress($('Create service from template'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var serviceTemplate = {};
        if (serviceName) serviceTemplate.serviceName = serviceName;
        if (serviceTypeName) serviceTemplate.serviceTypeName = serviceTypeName;
        var res = client.newServiceFromTemplate(applicationName, serviceTemplate, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var serviceType = service.category('type')
    .description($('Commands to manage your service manifest'));
  
  serviceType.command('show [applicationTypeName] [applicationTypeVersion]')
    .description($('Show service type'))
    .option('--application-type-name <applicationTypeName>', $('the type of the application type'))
    .option('--application-type-version <applicationTypeVersion>', $('the version of the application type'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (applicationTypeName, applicationTypeVersion, options, _) {
      var progress = cli.interaction.progress($('Show service type'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var res = client.getServiceType(applicationTypeName, applicationTypeVersion, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setServiceEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var serviceTypeDeployed  = serviceType.category('deployed')
    .description($('Commands to manage your deployed service type'));
  
  // TODO: document missing
  serviceTypeDeployed.command('show [nodeName] [applicationName]')
    .description($('Show deployed service type'))
    .option('--node-name <nodeName>', $('the name of the node'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('--service-package-name <servicePackageName>', $('the name of the service package'))
    .option('--application-name <applicationName>', $('the name of the application'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (nodeName, applicationName, options, _) {
      var progress = cli.interaction.progress($('ShowDeployedServicePackage'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        applicationName = serviceFabricUtils.parseUrl(applicationName, _);
        var res = client.getDeployedServicePackage(nodeName, applicationName, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setServiceEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var serviceManifest = service.category('manifest')
    .description($('Commands to manage your service manifest'));
  
  serviceManifest.command('show [applicationTypeName] [applicationTypeVersion] [serviceManifestName]')
    .description($('Show service manifest'))
    .option('--application-type-name <applicationTypeName>', $('the type of the application type'))
    .option('--application-type-version <applicationTypeVersion>', $('the version of the application type'))
    .option('--service-manifest-name <serviceManifestName>', $('the name of the service manifest'))
    .execute(function (applicationTypeName, applicationTypeVersion, serviceManifestName, options, _) {
      var progress = cli.interaction.progress($('Show service manifest'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        var res = client.getServiceManifest(applicationTypeName, applicationTypeVersion, serviceManifestName, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setServiceEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var serviceDescription = service.category('description')
    .description($('Commands to manage your service'));
  
  serviceDescription.command('show [serviceName]')
    .description($('Show service description'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (serviceName, options, _) {
      var progress = cli.interaction.progress($('Show service description'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        serviceName = serviceFabricUtils.parseUrl(serviceName, _);
        var res = client.getServiceDescription(serviceName, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setServiceEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  var serviceHealth = service.category('health')
    .description($('Commands to manage your service'));
  
  serviceHealth.command('show [serviceName]')
    .description($('Show service health'))
    .option('--service-name <serviceName>', $('the name of the service'))
    .option('-s --select <fields>', $('select fields to show'))
    .execute(function (serviceName, options, _) {
      var progress = cli.interaction.progress($('Show service description'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        serviceName = serviceFabricUtils.parseUrl(serviceName, _);
        var res = client.getServiceHealth(serviceName, options, _);
        if (options.select) {
          res = serviceFabricUtils.pick(res, options.select, _);
        }
        serviceFabricUtils.setServiceEnumVal(res);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
  
  serviceHealth.command('send [serviceName] [sourceId] [property] [healthState] [description] [timeToLiveInMilliSeconds] [sequenceNumber] [removeWhenExpired]')
    .description($('Send service health'))
    .option('--service-name <serviceName>', $('the id of the partition'))
    .option('--source-id <sourceId>', $('the id of the source'))
    .option('--property <property>', $('the property'))
    .option('--health-state <healthState>', $('the state of the health'))
    .option('--description <description>', $('the description'))
    .option('--time-to-live-in-milliseconds <timeToLiveInMilliSeconds>', $('the time in milliseconds for live'))
    .option('--sequence-number <sequenceNumber>', $('the number of the sequence'))
    .option('--remove-when-expired <removeWhenExpired>', $('the boolean of the remove when expired'))
    .execute(function (serviceName, sourceId, property, healthState, description, timeToLiveInMilliseconds, sequenceNumber, removeWhenExpired, options, _) {
      var progress = cli.interaction.progress($('Send service health'));
      
      try {
        var config = serviceFabricUtils.readServiceFabricConfig(progress, _);
        
        var client = new serviceFabricClient('3.0-preview', serviceFabricUtils.createConnectionUrl(config, _), serviceFabricUtils.getClientOptions(config, _));
        serviceName = serviceFabricUtils.parseUrl(serviceName, _);
        var serviceHealthReport = {};
        if (sourceId) serviceHealthReport.sourceId = sourceId;
        if (property) serviceHealthReport.property = property;
        if (healthState) serviceHealthReport.healthState = serviceFabricUtils.getEnumVal('healthState', healthState);
        if (description) serviceHealthReport.description = description;
        if (timeToLiveInMilliseconds) serviceHealthReport.timeToLiveInMilliSeconds = timeToLiveInMilliseconds;
        if (sequenceNumber) serviceHealthReport.sequenceNumber = sequenceNumber;
        if (removeWhenExpired) serviceHealthReport.removeWhenExpired = removeWhenExpired;
        var res = client.sendServiceHealth(serviceName, serviceHealthReport, options, _);
        
        progress.end();
        
        cli.interaction.formatOutput(res, function (data) {
          log.json(data);
        });
      } catch (e) {
        progress.end();
        throw e;
      }
    });
};