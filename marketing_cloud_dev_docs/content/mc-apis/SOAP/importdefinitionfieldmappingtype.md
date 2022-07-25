---
title: ImportDefinitionFieldMappingType
---
The ImportDefinitionFieldMappingType object defines how fields in an import file are mapped to fields in a data extension.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>InferFromColumnHeadings</td><td>Enumeration</td><td>Indicates system matches field headings in import file to data extension fields as accurately as possible based on similarities in text and values.</td></tr><tr><td>ManualMap</td><td>Enumeration</td><td>Indicates that all relationships between fields in an import file and a data extension are explicitly stated in the API call.</td></tr><tr><td>MapByOrdinal</td><td>Enumeration</td><td>Indicates fields are mapped from an import field to a data extension by their ordinal position in the file. Use a 0-based ordinal when importing to a subscriber list, and use a 1-based ordinal when importing to a data extension.</td></tr></tbody></table>
