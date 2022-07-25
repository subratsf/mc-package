---
data: <%= reference.dataextension.functions.LookupOrderedRowsCS %>
---
###Usage
```
%%[
SET @Rows = LOOKUPORDEREDROWS('CustomObject1',10,'Region','City','greenwood','SubscriberID', 100009)
SET @RowsCSF = LOOKUPORDEREDROWSCS('CustomObject1',10,'Region','City','greenwood','SubscriberID', 100009)
SET @RowsCST = LOOKUPORDEREDROWSCS('CustomObject1',10,'Region','City','Greenwood','SubscriberID', 100009)
]%%
Case Insensitive Test:
Row Count: %%=ROWCOUNT(@Rows) =%%
Case Sensitive Test:
Row Count No Match: %%=ROWCOUNT(@RowsCSF) =%%
Row Count Match: %%=ROWCOUNT(@RowsCST) =%%
```
