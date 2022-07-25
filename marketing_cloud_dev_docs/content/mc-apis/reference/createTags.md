---
data: <%= swaggerdoc %>
path: "/hub/v1/objects/{objectTypeName}/tags/"
method: "post"
---

###Usage
**Example Request**

```js
Host: https://YOUR_SUBDOMAIN.rest.marketingcloudapis.com
POST hub/v1/objects/InteractionStudio.DefinitionInfo/tags/
Content-Type: application/json
Authorization: Bearer YOUR_ACCESS_TOKEN
{ 
	"objectIds": [
		"B8A7B1AB-71E0-4B45-BC0E-96FBE41BB0A4", 
		"58A39C56-2FF4-4091-B84E-FA926A1098D5"
	], 
	"tagNames": [
		"Fun Run", 
		"5K"
	]
} 
```
##Related Items
[Tag your Journeys](journey-tags.htm)