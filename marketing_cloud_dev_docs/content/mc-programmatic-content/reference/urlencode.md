---
data: <%= reference.http.functions.URLEncode %>
---
###Usage

####Example 1:
```
URLEncode('http://example.com?p=first name')
```
System returns:
```
http://example.com?p=first%20name
```
####Example 2:
```
URLEncode('http://example.com?p=examplé',1,0)
```
System returns:
```
http://example.com?p%3dexampl%c3%a9
```
####Example 3:
```
URLEncode('examplé',1,1)
```
System returns:
```
exampl%c3%a9
```