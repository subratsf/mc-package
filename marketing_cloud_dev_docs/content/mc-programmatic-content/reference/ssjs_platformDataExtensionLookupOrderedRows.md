---
data: <%= reference.ssjs_platformDataExtension.functions.LookupOrderedRows %>
---

##Examples
```
<pre><code>Set @rows2 = LookupOrderedRows(&quot;Cars&quot;,4,&quot;Horsepower Desc&quot;,&quot;MPG&quot;,Field(@cardata,&quot;MPG&quot;))</code></pre>

<p>This call returns the 4 rows from the Cars data extension with the highest horsepower that match the value specified by MPG.</p>
```
