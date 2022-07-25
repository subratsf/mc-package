---
title: Content Area Functions
---

Use these functions to create and manipulate content areas inside your Marketing Cloud account. Email messages, SMS messages, and landing pages can make use of content areas.

##Load
In your server-side JavaScript code, first load the core library using the syntax below:
```
Platform.Load("core", "1");
```
The example functions in this document use the object ContentAreaObj, which returns the entire content area object. The ContentArea object returns only the content from the specified content area. Use the ContentAreaObj object with content area server-side JavaScript to prevent errors in your code.

##Initialization
To interact with a content area via server-side JavaScript, you must first initialize the object. The code below initializes an email with the external key of myCA.

```
var area = ContentAreaObj.Init("myCA");
```

After you initialize the content area, you can use the remaining functions.
