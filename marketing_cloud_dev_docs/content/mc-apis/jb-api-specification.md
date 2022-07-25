---
title: Journey Builder API Specification
---

The following table includes the most commonly used REST resources that make up the Interaction Service of the Journey Builder API.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Logical Name</th>
<th>HTTP Method</th>
<th>Resource</th>
</tr>
</thead>
<tbody>
<tr>
<td>[Get Event Definitions](routes.htm#detail_getEventDefinitions)</td>
<td>GET</td>
<td>/eventDefinitions</td>
</tr>
<tr>
<td>[Get Event Definition](routes.htm#detail_getEventDefinition)</td>
<td>GET</td>
<td>/eventDefinitions/key:{key} or /eventDefinitions/{id}</td>
</tr>
<tr>
<td>[Create Event Definition](createEventDefinition.htm)</td>
<td>POST</td>
<td>/eventDefinitions</td>
</tr>
<tr>
<td>[Update Event Definition](routes.htm#detail_updateEventDefinition)</td>
<td>PUT</td>
<td>/eventDefinitions/key:{key} or /eventDefinitions/{id}</td>
</tr>
<tr>
<td>[Delete Event Definition](routes.htm#detail_deleteEventDefinition)</td>
<td>DELETE</td>
<td>/eventDefinitions/key:{key} or /eventDefinitions/{id}</td>
</tr>
<tr>
<td>[Fire Entry Event](postEvent.htm)</td>
<td>POST</td>
<td>/events</td>
</tr>
<tr>
<td>[Get Discovery Document](routes.htm#detail_rest)</td>
<td>GET</td>
<td>/rest</td>
</tr>
<tr>
<td>[Get Journey by ID](routes.htm#detail_getInteractionById)</td>
<td>GET</td>
<td>/interactions/{id}</td>
</tr>
<tr>
<td>[Get Collection of Journeys](routes.htm#detail_getInteractionCollection)</td>
<td>GET</td>
<td>/interactions</td>
</tr>
<tr>
<td>[Create or Save Journey](routes.htm#detail_postCreateInteraction)</td>
<td>POST</td>
<td>/interactions</td>
</tr>
<tr>
<td>[Update Journey Version](routes.htm#detail_putUpdateInteraction)</td>
<td>PUT</td>
<td>/interactions</td>
</tr>
<tr>
<td>[Delete Journey by ID](routes.htm#detail_deleteInteractionById)</td>
<td>DELETE</td>
<td>/interactions/{id}</td>
</tr>
<tr>
<td>[Publish Journey Version Async](routes.htm#detail_postPublishInteractionById)</td>
<td>POST</td>
<td>/interactions/publishAsync/{id}?versionNumber={versionNumber}</td>
</tr>
<tr>
<td>[Get Publish Status](routes.htm#detail_getPublishStatus)</td>
<td>GET</td>
<td>/interactions/publishStatus/{statusId}</td>
</tr>
<tr>
<td>[Stop Journey](routes.htm#detail_postStopInteractionById)</td>
<td>POST</td>
<td>/interactions/stop/{id}?versionNumber={versionNumber}</td>
</tr>
<tr>
<td>[Get Journey Audit Log](routes.htm#detail_getInteractionAuditLog)</td>
<td>GET</td>
<td>/interactions/{id}/audit/{action} or /interactions/{key}/audit/{action}</td>
</tr>
</tbody>
</table>

##Related Items
[Get Started with Journey Builder](get-started-jb.htm)
