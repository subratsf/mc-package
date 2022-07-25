---
title: User-Defined Data Sources
---

Guide Template Language offers two types of user-defined data sources:

* Dataobjects use a global scope, making data available for reuse multiple times via section tags.
* Datasources reside locally within the tags, making data accessible only inside the scope of the datasource tags.

<img src="images/dataobjectanddatasourcenew.png" alt="Flowchart for User-Defined Data Sources" class="img-responsive" style="margin: 25px 0;" />

In this example, the two sections for the dataobject would display this text:

```
Data from Dataobject using Section Tag
```

The first section for the datasource example would display this text:

```
Data from Inside Datasource
```

The second section from the datasource example would display this text:

```
This will not display the output of the out-of-scope variable:
```

The section does not display the template tag because it could not access any relevant data.
