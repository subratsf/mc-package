---
data: <%= reference.ssjs_platformAPI.functions.InvokeRetrieve %>
---

##Example
```
var StatusAndRequestID = [0,0];
var Result = Platform.Function.InvokeRetrieve(apiRetreiveObject,StatusAndRequestID);
var status = StatusAndRequestID[0];
var requestID = StatusAndRequestID[1];

if(Result != null) {
  for(var i in Result) {
     name = Result[i].Name;
     id = Result[i].ObjectID;
```
