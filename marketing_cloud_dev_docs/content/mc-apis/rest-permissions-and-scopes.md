---
title: REST API Permission IDs and Scopes
---
Review the permission ID, the path to the permission in Marketing Cloud, and the Installed Packages scope for each REST API resource. Review [API Integration Permission Scopes](https://developer.salesforce.com/docs/atlas.en-us.mc-app-development.meta/mc-app-development/data-access-permissions.htm).

<table class="table table-hover">
<thead align="left">
<tr>
<th>Permission ID</th>
<th>Resource</th>
<th>Path to User Permission</th>
<th>API Permission Scope</th>
</tr>
</thead>
<tbody>
<tr><td>5</td><td>POST /address/v1/validateEmail</td><td>Email > Content > Email > View</td><td>email_read</td></tr>
<tr><td>9</td><td>POST /messaging/v1/messageDefintionSend/{key}/send</td><td>Email > Content > Email > Send</td><td>email_send</td></tr>
<tr><td>48</td><td>GET /messaging/v1/domainverification</td><td>Email > Content > Microsite Layout > View</td><td>saved_content_read</td></tr>
<tr><td>48</td><td>POST /messaging/v1/domainverification</td><td>Email > Content > Microsite Layout > View</td><td>saved_content_read</td></tr>
<tr><td>48</td><td>POST /messaging/v1/domainverification/bulk/insert</td><td>Email > Content > Microsite Layout > View</td><td>saved_content_read</td></tr>
<tr><td>48</td><td>POST /messaging/v1/domainverification/update</td><td>Email > Content > Microsite Layout > View</td><td>saved_content_read</td></tr>
<tr><td>48</td><td>POST /messaging/v1/domainverification/delete</td><td>Email > Content > Microsite Layout > View</td><td>saved_content_read</td></tr>
<tr><td>48</td><td>POST /messaging/v1/domainverification/push</td><td>Email > Content > Microsite Layout > View</td><td>saved_content_read</td></tr>
<tr><td>97</td><td>GET /data/v1/async/{requestId}/results</td><td>Email > Subscribers > Data Extension > View</td><td>data_extensions_read</td></tr>
<tr><td>97</td><td>GET /data/v1/async/{requestId}/status</td><td>Email > Subscribers > Data Extension > View</td><td>data_extensions_read</td></tr>
<tr><td>98</td><td>POST /data/v1/async/dataextensions/{id}/rows</td><td>Email > Subscribers > Data Extension > Update</td><td>data_extensions_write</td></tr>
<tr><td>98</td><td>POST /hub/v1/dataevents/key:{key}/rowset</td><td>Email > Subscribers > Data Extension > Update</td><td>data_extensions_write</td></tr>
<tr><td>98</td><td>PUT /data/v1/async/dataextensions/{id}/rows</td><td>Email > Subscribers > Data Extension > Update</td><td>data_extensions_write</td></tr>
<tr><td>98</td><td>PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}</td><td>Email > Subscribers > Data Extension > Update</td><td>data_extensions_write</td></tr>
<tr><td>98</td><td>PUT /hub/v1/dataevents/key:{key}/rows/{primaryKeys}/column/{col...</td><td>Email > Subscribers > Data Extension > Update</td><td>data_extensions_write</td></tr>
<tr><td>152</td><td>POST /messaging/v1/email/messages/{messageKey}</td><td>Email > Interactions > Messages > Triggered > Create</td><td>email_send</td></tr>
<tr><td>152</td><td>POST /messaging/v1/email/messages</td><td>Email > Interactions > Messages > Triggered > Create</td><td>email_send</td></tr>
<tr><td>152</td><td>POST /messaging/v1/email/definitions</td><td>Email > Interactions > Messages > Triggered > Create</td><td>email_write</td></tr>
<tr><td>153</td><td>GET /messaging/v1/email/messages/{messageKey}</td><td>Email > Interactions > Messages > Triggered > View</td><td>email_read</td></tr>
<tr><td>153</td><td>GET /messaging/v1/email/messages/?type=notSent</td><td>Email > Interactions > Messages > Triggered > View</td><td>email_read</td></tr>
<tr><td>153</td><td>GET /messaging/v1/email/definitions/{definitionKey}/queue</td><td>Email > Interactions > Messages > Triggered > View</td><td>email_read</td></tr>
<tr><td>153</td><td>GET /messaging/v1/email/definitions/{definitionKey}</td><td>Email > Interactions > Messages > Triggered > View</td><td>email_read</td></tr>
<tr><td>153</td><td>GET /messaging/v1/email/definitions</td><td>Email > Interactions > Messages > Triggered > View</td><td>email_read</td></tr>
<tr><td>154</td><td>PATCH /messaging/v1/email/definitions/{definitionKey}</td><td>Email > Interactions > Messages > Triggered > Update</td><td>email_write</td></tr>
<tr><td>154</td><td>DELETE /messaging/v1/email/definitions/{definitionKey}/queue</td><td>Email > Interactions > Messages > Triggered > Update</td><td>email_write</td></tr>
<tr><td>155</td><td>DELETE /messaging/v1/email/definitions/{definitionKey}</td><td>Email > Interactions > Messages > Triggered > Delete</td><td>email_write</td></tr>
<tr><td>161</td><td>POST /messaging/v1/sms/definitions</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_write</td></tr>
<tr><td>162</td><td>GET /sms/definitions/{definitionKey}</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_read</td></tr>
<tr><td>162</td><td>GET /sms/definitions</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_read</td></tr>
<tr><td>162</td><td>GET /sms/definitions/{definitionKey}/queue</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_read</td></tr>
<tr><td>163</td><td>DELETE /sms/definitions/{definitionKey}/queue</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_write</td></tr>
<tr><td>163</td><td>PATCH /sms/definitions/{definitionKey}</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_write</td></tr>
<tr><td>164</td><td>DELETE /sms/definitions/{definitionKey}</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_write</td></tr>
<tr><td>165</td><td>GET /sms/messages/{messageKey}</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>tracking_events_read, sms_read</td></tr>
<tr><td>165</td><td>GET /sms/messages</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>tracking_events_read, sms_read</td></tr>
<tr><td>166</td><td>POST /sms/messages/{messageKey}</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_send</td></tr>
<tr><td>166</td><td>POST /sms/messages</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_send</td></tr>
<!-- New section starts here -->
<tr><td>263</td><td>POST platform/v1/key</td><td>Email > Admin > External Object Sources > File Location > Create</td><td>file_location_create</td></tr>
<tr><td>264</td><td>GET platform/v1/key</td><td>Email > Admin > External Object Sources > File Location > View</td><td>file_location_view</td></tr>
<tr><td>264</td><td>POST /sms/messages</td><td>Email > Admin > External Object Sources > File Location > View</td><td>file_location_view</td></tr>
<tr><td>264</td><td>POST /sms/messages</td><td>Email > Admin > External Object Sources > File Location > View</td><td>file_location_view</td></tr>
<tr><td>264</td><td>POST /sms/messages</td><td>Email > Admin > External Object Sources > File Location > View</td><td>file_location_view</td></tr>
<tr><td>266</td><td>DELETE platform/v1/key/{keyId}</td><td>Email > Admin > External Object Sources > File Location > Delete</td><td>file_location_delete</td></tr>
<tr><td>444</td><td>GET /hub/v1/campaigns</td><td>Salesforce Marketing Cloud > Campaigns > Access</td><td>campaign_read</td></tr>
<tr><td>444</td><td>GET /hub/v1/campaigns/{id}</td><td>Salesforce Marketing Cloud > Campaigns > Access</td><td>campaign_read</td></tr>
<tr><td>444</td><td>GET /hub/v1/campaigns/{id}/assets</td><td>Salesforce Marketing Cloud > Campaigns > Access</td><td>campaign_read</td></tr>
<tr><td>444</td><td>GET /hub/v1/campaigns/{id}/assets/{assetId}</td><td>Salesforce Marketing Cloud > Campaigns > Access</td><td>campaign_read</td></tr>
<tr><td>449</td><td>POST /sms/v1/automation/importSend</td><td>Automation Studio > General > Access</td><td>automations_read</td></tr>
<tr><td>449</td><td>POST /sms/v1/contacts/queueImport/{id}</td><td>Automation Studio > General > Access</td><td>automations_read</td></tr>
<tr><td>479</td><td>DELETE /hub/v1/campaigns/{id}</td><td>Salesforce Marketing Cloud > Campaigns > Delete</td><td>campaign_write</td></tr>
<tr><td>600</td><td>GET /messaging/v1/domainverification</td><td>Administration > General > Access</td><td>email_write</td></tr>
<tr><td>600</td><td>POST /messaging/v1/domainverification</td><td>Administration > General > Access</td><td>email_write</td></tr>
<tr><td>600</td><td>POST /messaging/v1/domainverification/bulk/insert</td><td>Administration > General > Access</td><td>email_write</td></tr>
<tr><td>600</td><td>POST /messaging/v1/domainverification/update</td><td>Administration > General > Access</td><td>email_write</td></tr>
<tr><td>600</td><td>POST /messaging/v1/domainverification/delete</td><td>Administration > General > Access</td><td>email_write</td></tr>
<tr><td>600</td><td>POST /messaging/v1/domainverification/push</td><td>Administration > General > Access</td><td>email_write</td></tr>
<tr><td>1006</td><td>GET /sms/v1/automation/importSend/{tokenid}/status</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>GET /sms/v1/contacts/queueImport/{id}/status/{tokenId}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>GET /sms/v1/contacts/refreshList/{id}/status/{tokenId}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>GET /sms/v1/messageContact/{messageId}/deliveries/{tokenId}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>GET /sms/v1/messageContact/{messageId}/history/{tokenId}/mobile...</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>GET /sms/v1/messageList/{id}/deliveries/{tokenId}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>GET /sms/v1/queueMO/deliveries/{tokenId}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>GET /sms/v1/queueMO/history/{tokenId}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>POST /sms/v1/automation/importSend</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>POST /sms/v1/automation/importSend/{id}/deliveryReport</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>POST /sms/v1/contacts/queueImport/{id}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>POST /sms/v1/contacts/refreshList/{id}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>POST /sms/v1/contacts/subscriptions</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1006</td><td>POST /sms/v1/messageList/{id}/deliveryReport/{tokenId}</td><td>Mobile Connect > General > Access</td><td>sms_read</td></tr>
<tr><td>1007</td><td>DELETE /sms/v1/keyword/{keyword}/{longCode}</td><td>Mobile Connect > General > Administer SMS Channel</td><td>sms_write</td></tr>
<tr><td>1007</td><td>DELETE /sms/v1/keyword/{keyword}/{shortCode}/{countryCode}</td><td>Mobile Connect > General > Administer SMS Channel</td><td>sms_write</td></tr>
<tr><td>1007</td><td>DELETE /sms/v1/keyword/{keywordId}</td><td>Mobile Connect > General > Administer SMS Channel</td><td>sms_write</td></tr>
<tr><td>1007</td><td>POST /sms/v1/keyword</td><td>Mobile Connect > General > Administer SMS Channel</td><td>sms_write</td></tr>
<tr><td>1008</td><td>POST /sms/v1/message/optin</td><td>Mobile Connect > SMS Message > Create And Edit</td><td>sms_write</td></tr>
<tr><td>1010</td><td>GET /sms/v1/messageContact/{messageId}/deliveries/{tokenId}</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_send</td></tr>
<tr><td>1010</td><td>POST /sms/v1/automation/importSend</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_send</td></tr>
<tr><td>1010</td><td>POST /sms/v1/messageContact/{id}/send</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_send</td></tr>
<tr><td>1010</td><td>POST /sms/v1/messageList/{id}/send</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_send</td></tr>
<tr><td>1010</td><td>POST /sms/v1/queueMO</td><td>Mobile Connect > SMS Message > Schedule And Send Message</td><td>sms_send</td></tr>
<tr><td>1012</td><td>DELETE /sms/v1/keyword/{keywordId}</td><td>Mobile Connect > SMS Message > Create Keyword From Message Template</td><td>sms_write</td></tr>
<tr><td>1012</td><td>POST /sms/v1/keyword</td><td>Mobile Connect > SMS Message > Create Keyword From Message Template</td><td>sms_write</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/attributeSetDefinitions/{id}</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/attributeSets/name:{name}</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/contacts/actions/delete/status?operationID=</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/contacts/actions/restrict/status?operationID=</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/contacts/analytics/deleterequests/summary</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/contacts/analytics/deleterequests</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/contacts/deleteOperations</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/customObject/{id}/isUsedInContacts</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/customobjectfield/{id}/relationships</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/schema</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/schemas/{schemaId}/attributeGroups</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/schemas/{schemaId}/attributeGroups/{id}</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>PATCH /contacts/v1/attributeSets/{id}</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>PATCH /contacts/v1/contacts</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>POST /contacts/v1/addresses/email/search</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>POST /contacts/v1/attributes/search</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>list_and_subscribers_read</td></tr>
<tr><td>1018</td><td>POST /contacts/v1/contacts/preferences</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>Contacts_access</td></tr>
<tr><td>1018</td><td>POST /contacts/v1/contacts/id:{contactId}/Preferences</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>Contacts_access</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/contacts/id:{contactId}/Preferences</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>Contacts_access</td></tr>
<tr><td>1018</td><td>POST /contacts/v1/contacts/preferences/search?ReferenceType={ReferenceType}</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>Contacts_access</td></tr>
<tr><td>1018</td><td>GET /contacts/v1/contacts/key:{contactKey}/Preferences</td><td>Salesforce Marketing Cloud > IMH Contacts > Access</td><td>Contacts_access</td></tr>
<tr><td>1018</td><td>POST /interaction/v1/events</td><td>Salesforce Marketing Cloud > Contacts > Read Contact Data</td><td>list_and_subscribers_read</td></tr>
<tr><td>1020</td><td>PATCH /contacts/v1/attributeSets/{id}</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>PATCH /contacts/v1/contacts</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/addresses/email/search</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/attributeGroups/population</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/attributes/search</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/attributeSets/{id}</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contactEvents</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/delete?type=ids</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/delete?type=keys</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/delete?type=listReference</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/delete/configSettings</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/delete/options</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/restrict?type=ids</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/restrict?type=keys</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/contacts/actions/restrict?type=listReference</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/establish</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/operations/delete/{operationID}/retry</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1020</td><td>POST /contacts/v1/operations/restrict/{operationID}/retry</td><td>Salesforce Marketing Cloud > IMH Contacts > Add</td><td>list_and_subscribers_write</td></tr>
<tr><td>1021</td><td>POST /hub/v1/campaigns</td><td>Salesforce Marketing Cloud > Campaigns > Create And Edit</td><td>campaign_write</td></tr>
<tr><td>1022</td><td>DELETE /hub/v1/campaigns/{id}/assets/{assetId}</td><td>Salesforce Marketing Cloud > Campaigns > Associate</td><td>campaign_write</td></tr>
<tr><td>1022</td><td>POST /hub/v1/campaigns/{id}/assets</td><td>Salesforce Marketing Cloud > Campaigns > Associate</td><td>campaign_write</td></tr>
<tr><td>1220</td><td>DELETE /interaction/v1/eventDefinitions/{id}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>DELETE /interaction/v1/interactions/{id}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>GET /interaction/v1/eventDefinitions</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>GET /interaction/v1/eventDefinitions/{id}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>GET /interaction/v1/interactions</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>GET /interaction/v1/interactions/{id}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>GET /interaction/v1/interactions/{id}/audit/{action}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>GET /interaction/v1/interactions/publishStatus/{statusId}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/eventDefinitions</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/events</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/contactexit</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/contactexit/status</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/contactMembership</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/publishAsync/{id}?versionNumbe...</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/stop/{id}?versionNumber={versi...</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>PUT /interaction/v1/eventDefinitions/{id}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>PUT /interaction/v1/interactions</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/pause/{definitionID}?versionNumber={versionNumber}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/pause/key:{definitionKey}?versionNumber={versionNumber}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/resume/{definitionID}?versionNumber={versionNumber}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1220</td><td>POST /interaction/v1/interactions/resume/key:{definitionKey}?versionNumber={versionNumber}</td><td>Journey Builder > General > Access, View</td><td>journeys_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/application/{appId}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/application/{appId}/key</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/contacts/refreshList/{id}/status/{tokenId}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/location</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/location/{locationId}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/message</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/message/{messageID}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/messageApp/{messageId}/deliveries/{tokenId}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/messageContact/{messageId}/deliveries/{tokenId}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/messageList/{messageId}/deliveries/{tokenId}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1279</td><td>GET /push/v1/messageTag/{messageId}/deliveries/{tokenId}</td><td>Mobile Push > General > Access</td><td>push_read</td></tr>
<tr><td>1280</td><td>DELETE /push/v1/application/{appId}/key</td><td>Mobile Push > General > Administer Mobile Push</td><td>push_write</td></tr>
<tr><td>1282</td><td>DELETE /push/v1/application/{appId}/key/{key}</td><td>Mobile Push > Message > Delete</td><td>push_write</td></tr>
<tr><td>1282</td><td>DELETE /push/v1/location/{locationId}</td><td>Mobile Push > Message > Delete</td><td>push_write</td></tr>
<tr><td>1282</td><td>DELETE /push/v1/message/{messageId}</td><td>Mobile Push > Message > Delete</td><td>push_write</td></tr>
<tr><td>1283</td><td>POST /push/v1/contacts/refreshList/{id}</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>POST /push/v1/location</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>POST /push/v1/message</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>POST /push/v1/messageApp/{messageId}/send</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>POST /push/v1/messageBatch/{messageid}/send</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>POST /push/v1/messageContact/{messageId}/send</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>POST /push/v1/messageList/{messageId}/send</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>POST /push/v1/messageTag/{messageId}/send</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>PUT /push/v1/application/{appId}/key</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>PUT /push/v1/application/{appId}/key/{key}</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>PUT /push/v1/location/{locationId}</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1283</td><td>PUT /push/v1/message/{messageId}</td><td>Mobile Push > Message > Schedule And Send Message</td><td>push_send</td></tr>
<tr><td>1348</td><td>POST /hub/v1/objects/{objectTypeName}/tags/</td><td>Interactive Marketing Hub > Tags > Associate/Disassociate</td><td>tags_write</td></tr>
<tr><td>1418</td><td>POST /asset/v1/content/assets</td><td>Content Builder > Assets > Create</td><td>saved_content_write</td></tr>
<tr><td>1420</td><td>GET /asset/v1/content/assets</td><td>Content Builder > Assets > View</td><td>documents_and_images_read</td></tr>
<tr><td>1420</td><td>GET /asset/v1/content/assets/{id}</td><td>Content Builder > Assets > View</td><td>documents_and_images_read</td></tr>
<tr><td>1420</td><td>GET /asset/v1/content/assets/{id}/channelviews/{viewname}</td><td>Content Builder > Assets > View</td><td>documents_and_images_read</td></tr>
<tr><td>1420</td><td>GET /asset/v1/content/assets/{id}/file</td><td>Content Builder > Assets > View</td><td>documents_and_images_read</td></tr>
<tr><td>1420</td><td>GET /asset/v1/content/assets/{id}/salutations</td><td>Content Builder > Assets > View</td><td>documents_and_images_read</td></tr>
<tr><td>1420</td><td>GET /asset/v1/content/assets/salutations</td><td>Content Builder > Assets > View</td><td>documents_and_images_read</td></tr>
<tr><td>1420</td><td>POST /asset/v1/content/assets/query</td><td>Content Builder > Assets > View</td><td>documents_and_images_read</td></tr>
<tr><td>1421</td><td>PATCH /asset/v1/content/assets/{id}</td><td>Content Builder > Assets > Update</td><td>documents_and_images_write</td></tr>
<tr><td>1421</td><td>PUT /asset/v1/content/assets/{id}</td><td>Content Builder > Assets > Update</td><td>documents_and_images_write</td></tr>
<tr><td>1422</td><td>DELETE /asset/v1/content/assets/{id}</td><td>Content Builder > Assets > Delete</td><td>documents_and_images_write</td></tr>
<tr><td>1430</td><td>POST /asset/v1/content/categories</td><td>Content Builder > Folders > Create</td><td>documents_and_images_write</td></tr>
<tr><td>1430</td><td>PUT /asset/v1/content/categories/{id}</td><td>Content Builder > Folders > Create</td><td>documents_and_images_write</td></tr>
<tr><td>1431</td><td>GET /asset/v1/content/categories</td><td>Content Builder > Folders > View</td><td>documents_and_images_read</td></tr>
<tr><td>1431</td><td>GET /asset/v1/content/categories/{id}</td><td>Content Builder > Folders > View</td><td>documents_and_images_read</td></tr>
<tr><td>1434</td><td>DELETE /asset/v1/content/categories/{id}</td><td>Content Builder > Folders > Delete</td><td>documents_and_images_write</td></tr>
<tr><td>1503</td><td>PATCH /hub/v1/approvals/{id}</td><td>Workflows and Approvals > Approval > Approval Items > Create and Edit</td><td>approvals_write</td></tr>
<tr><td>1503</td><td>POST /hub/v1/approvals</td><td>Workflows and Approvals > Approval > Approval Items > Create and Edit</td><td>approvals_write</td></tr>
<tr><td>1509</td><td>PATCH /hub/v1/approvals/settings</td><td>Interactive Marketing Hub > Approvals > Enable for Any Channel</td><td>approvals_write</td></tr>
<tr><td>1611</td><td>POST /contacts/v1/addresses/count/</td><td>Contacts > Audiences > Read > View All Contacts</td><td>audiences_read</td></tr>
<tr><td>1611</td><td>POST /contacts/v1/addresses/search/{attributeName}/</td><td>Contacts > Audiences > Read > View All Contacts</td><td>audiences_read</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/delete?type=ids</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/delete?type=keys</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/delete?type=listReference</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/delete/configSettings</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/delete/options</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/restrict?type=ids</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/restrict?type=keys</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/contacts/actions/restrict?type=listReference</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/operations/delete/{operationID}/retry</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1612</td><td>POST /contacts/v1/operations/restrict/{operationID}/retry</td><td>Contact Builder > Delete Contacts</td><td>list_and_subscribers_write</td></tr>
<tr><td>1631</td><td>GET /hub/v1/approvals</td><td>Workflows and Approvals > Approval > Approval Items > View</td><td>approvals_read</td></tr>
<tr><td>1631</td><td>GET /hub/v1/approvals/{id}</td><td>Workflows and Approvals > Approval > Approval Items > View</td><td>approvals_read</td></tr>
<tr><td>1631</td><td>GET /hub/v1/approvals/{id}/roles</td><td>Workflows and Approvals > Approval > Approval Items > View</td><td>approvals_read</td></tr>
<tr><td>1631</td><td>GET /hub/v1/approvals/settings</td><td>Workflows and Approvals > Approval > Approval Items > View</td><td>approvals_read</td></tr>
<tr><td>1644</td><td>POST /hub/v1/objects/{objectTypeName}/tags/delete</td><td>Salesforce Marketing Cloud > Tags > View</td><td>tags_read</td></tr>

<tr><td>1644</td><td>POST /hub/v1/nestedtags</td><td>Salesforce Marketing Cloud > Tags > View</td><td>tags_read</td></tr>
<tr><td>1644</td><td>GET /hub/v1/nestedtags</td><td>Salesforce Marketing Cloud > Tags > View</td><td>tags_read</td></tr>
<tr><td>1644</td><td>GET /hub/v1/nestedtags/{tagId}</td><td>Salesforce Marketing Cloud > Tags > View</td><td>tags_read</td></tr>
<tr><td>1644</td><td>PUT /hub/v1/nestedtags/{tagId}</td><td>Salesforce Marketing Cloud > Tags > View</td><td>tags_read</td></tr>
<tr><td>1644</td><td>PATCH /hub/v1/nestedtags/{tagId}</td><td>Salesforce Marketing Cloud > Tags > View</td><td>tags_read</td></tr>
<tr><td>1644</td><td>DELETE /hub/v1/nestedtags/{tagId}</td><td>Salesforce Marketing Cloud > Tags > View</td><td>tags_read</td></tr>
<tr><td>1343</td><td>POST /hub/v1/nestedtags</td><td>Salesforce Marketing Cloud > Tags > Create</td><td>tags_create</td></tr>
<tr><td>1344</td><td>PUT /hub/v1/nestedtags/{tagId}</td><td>Salesforce Marketing Cloud > Tags > Edit</td><td>tags_edit</td></tr>
<tr><td>1344</td><td>PATCH /hub/v1/nestedtags/{tagId}</td><td>Salesforce Marketing Cloud > Tags > Edit</td><td>tags_edit</td></tr>
<tr><td>1345</td><td>DELETE /hub/v1/nestedtags/{tagId}</td><td>Salesforce Marketing Cloud > Tags > Delete</td><td>tags_delete</td></tr>

<tr><td>1688</td><td>POST /platform/v1/ens-callbacks</td><td>Event Notifications > Callbacks > Create</td><td>event_notification_callback_create</td></tr>
<tr><td>1689</td><td>GET /platform/v1/ens-callbacks/{callbackId}</td><td>Event Notifications > Callbacks > View</td><td>event_notification_callback_read</td></tr>
<tr><td>1689</td><td>GET /platform/v1/ens-callbacks</td><td>Event Notifications > Callbacks > View</td><td>event_notification_callback_read</td></tr>
<tr><td>1690</td><td>PUT /platform/v1/ens-callbacks</td><td>Event Notifications > Callbacks > Update</td><td>event_notification_callback_update</td></tr>
<tr><td>1690</td><td>POST /platform/v1/ens-verify</td><td>Event Notifications > Callbacks > Update</td><td>event_notification_callback_update</td></tr>
<tr><td>1690</td><td>PUT /platform/v1/ens-regenerate</td><td>Event Notifications > Callbacks > Update</td><td>event_notification_callback_update</td></tr>
<tr><td>1691</td><td>DELETE /platform/v1/ens-callbacks/{callbackId}</td><td>Event Notifications > Callbacks > Delete</td><td>event_notification_callback_delete</td></tr>
<tr><td>1692</td><td>POST /platform/v1/ens-subscriptions</td><td>Event Notifications > Subscriptions > Create</td><td>event_notification_subscription_create</td></tr>
<tr><td>1693</td><td>GET /platform/v1/ens-subscriptions/{subscriptionId}</td><td>Event Notifications > Subscriptions > View</td><td>event_notification_subscription_read</td></tr>
<tr><td>1693</td><td>GET /platform/v1/ens-subscriptions-by-cb/{callbackId}</td><td>Event Notifications > Subscriptions > View</td><td>event_notification_subscription_read</td></tr>
<tr><td>1694</td><td>PUT /platform/v1/ens-subscriptions</td><td>Event Notifications > Subscriptions > Update</td><td>event_notification_subscription_update</td></tr>
<tr><td>1695</td><td>DELETE /platform/v1/ens-subscriptions/{subscriptionId}</td><td>Event Notifications > Subscriptions > Delete</td><td>event_notification_subscription_delete</td></tr>
<tr><td>1707</td><td>GET /data/v1/audit/auditEvents</td><td>Audit Logging > API Access</td><td>tracking_events_read</td></tr>
<tr><td>1707</td><td>GET /data/v1/audit/securityEvents</td><td>Audit Logging > API Access</td><td>tracking_events_read</td></tr>
<tr><td>No permission required</td><td>GET /interaction/v1/rest</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>GET /platform/v1/endpoints</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>GET /platform/v1/endpoints/{endpointType}</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>GET /platform/v1/tokenContext</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>GET YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/discovery</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>GET YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/userinfo</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>POST YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/authorize</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>POST YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v2/token</td><td>None</td><td>None</td></tr>
<tr><td>No permission required</td><td>POST /YOUR_SUBDOMAIN.auth.marketingcloudapis.com/v1/requestToken</td><td>None</td><td>None</td></tr>
</tbody>
</table>
