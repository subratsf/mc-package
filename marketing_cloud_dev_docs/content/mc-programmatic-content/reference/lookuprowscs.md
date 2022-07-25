---
data: <%= reference.dataextension.functions.LookupRowsCS %>
---
###Usage
```
%%[ VAR @Rows, @RowsCSF, @RowsCST
SET @Rows = LOOKUPROWS('CustomObject1','City','greenwood')
SET @RowsCSF = LOOKUPROWSCS('CustomObject1','City','greenwood')
SET @RowsCST = LOOKUPROWSCS('CustomObject1','City','Greenwood')
]%%
Case Insensitive Test:
Row Count: %%=ROWCOUNT(@Rows) =%%
Case Sensitive Test:
Row Count No Match: %%=ROWCOUNT(@RowsCSF) =%%
Row Count Match: %%=ROWCOUNT(@RowsCST) =%%
```