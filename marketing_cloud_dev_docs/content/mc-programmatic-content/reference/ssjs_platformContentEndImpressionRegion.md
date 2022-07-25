---
data: <%= reference.ssjs_platformContent.functions.EndImpressionRegion %>
---

##Example
```
<script runat="server>
     Platform.Function.BeginImpressionRegion("mainBlock");
     var content = Platform.Function.ContentArea("123456");
     var moreContent = Platform.Function.ContentArea("789");
     Platform.Function.EndImpressionRegion("mainBlock");
</script>
```
