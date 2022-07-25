---
data: <%= reference.content.functions.TreatAsContentArea %>
---
###Usage
The sample code below pulls content from a data extension and saves it for reuse as a virtual content area under the key VirtualCA1:
```
%%=TreatAsContentArea('VirtualCA1', Lookup('DEName', 'DEContentColumn','KeyField', KeyValue))=%%
```
The sample code below pulls content from a data extension and saves it for reuse as a virtual content area under a key specified through the KeyValue attribute or data extension field.
```
%%=TreatAsContentArea(KeyValue, Lookup('DEName', 'DEContentColumn','KeyField', KeyValue))=%%
```
The sample code below pulls content from a data extension, saves it for reuse as a virtual content area under the key VirtualCA1, and assigns it the impression region name of Impression Region One:
```
%%=TreatAsContentArea('VirtualCA1', Lookup('DEName', 'DEContentColumn','KeyField', KeyValue), 'Impression Region One')=%%
```