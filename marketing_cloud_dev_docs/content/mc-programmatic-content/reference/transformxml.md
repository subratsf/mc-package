---
data: <%= reference.content.functions.TransformXML %>
---
###Usage
Given the example.xml and the transform.xsl files
```
%%= TransformXML(GetPortfolioItem('formGenXML'),GetPortfolioItem('formGenXSL')) =%%
```
The function uses the GetPortfolioItem() functions to retrieve the formGenXML and formGenXSL files from Portfolio. The ExactTarget application then applies the formGenXSL file to the formGenXML file as part of the transformation process.