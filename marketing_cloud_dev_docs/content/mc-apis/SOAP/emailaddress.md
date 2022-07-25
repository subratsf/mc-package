---
title: EmailAddress
---
The EmailAddress object represents an email address associated with a Person.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>Address</td><td>xsd:string</td><td>The physical mailing address required at the bottom of all email messages contains the information described by this property (no P.O. Boxes). The address used to communicate with a Person.</td></tr><tr><td>AddressType</td><td>xsd:string</td><td>Indicates what type of address this object represents</td></tr><tr><td>Statuses</td><td>AddressStatus[]</td><td>Array of status values for an address.</td></tr><tr><td>Type</td><td>EmailType</td><td>Indicates type of specific list. Valid values include Public, Private, Salesforce, GlobalUnsubscribe, and Master. Indicates the type of email to send to the address. Valid values include Text and HTML.</td></tr></tbody></table>

##Related Items
<a href="unsubscribing_and_logging_an_unsubevent_with_a_logunsubevent_execute_call.htm" title="Unsubscribing_and_Logging_an_UnsubEvent_with_a_LogUnsubEvent_Execute_Call">Unsubscribe and Log an UnsubEvent with a LogUnsubEvent Execute Call</a>     
