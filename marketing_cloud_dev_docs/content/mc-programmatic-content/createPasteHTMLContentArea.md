---
Title: Create a PasteHTML Email Content Area
---

Use AMPscript to create a content area and use it in a PasteHTML email message as part of an email send. Create a content area using content taken from outside your Marketing Cloud application, such as an RSS feed, via content syndication.

Use this AMPscript to create the content area:

```
/* CREATE THE CONTENT AREAS */
Set @ca = CreateObject("ContentArea")

SET @customerKey = "XXXXXXX"
SET @content =     "THIS IS THE CONTENT"
SET @name =   "TESTCONTENTAREA"
  
/* ASSIGN THE CONTENT AREA TO THE FOLDER*/
SetObjectProperty(@ca,"CategoryID",522486)
  
/* ASSIGN THE ATTRIBUTES OF THE CONTENT AREA - NOTE THAT THE LAYOUT OF THE CONTENT AREA MUST BE DEFINED HERE */
SetObjectProperty(@ca,"CustomerKey",@customerKey)
SetObjectProperty(@ca,"Content",@content)
SetObjectProperty(@ca,"Name",@name)
SetObjectProperty(@ca,"Layout","PasteHTML")
  
SetObjectProperty(@ca,"IsBlank","false")

Set @StatCode = InvokeCreate(@ca, @StatMessage, @ErrorCode)
```