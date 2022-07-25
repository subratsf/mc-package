---
title: WSDL and Endpoint Links for the SOAP API
---
When connecting to the SOAP API, use the WSDL file and service endpoint that are shown in Account Settings or Cloud Preferences, if API User is enabled. Your API calls don’t resolve if they are directed at another tenant’s SOAP API endpoint. Configure your development environment to support WS-Security for authentication to the web service.

##WSDL Link for Your Tenant
All instances: https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/etframework.wsdl

##SOAP API with Your Tenant's Endpoints
All instances:
https://YOUR_SUBDOMAIN.soap.marketingcloudapis.com/Service.asmx

##Related Items
* [Determine Your Marketing Cloud Instance](https://help.salesforce.com/articleView?id=mc_overview_determine_your_marketing_cloud_instance.htm&type=5)
* [Your Subdomain and Your Tenant's Endpoints](https://developer.salesforce.com/docs/atlas.en-us.mc-apis.meta/mc-apis/your-subdomain-tenant-specific-endpoints.htm)
