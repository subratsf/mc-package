---
title: Retrieve Lists from an Account
---
```
var lists = List.Retrieve({Property:"Name",SimpleOperator:"equals",Value:"All Subscribers"});
for(var i in lists) {
    Write(lists[i].ID + " | " + lists[i].Name + "\");
}
```
