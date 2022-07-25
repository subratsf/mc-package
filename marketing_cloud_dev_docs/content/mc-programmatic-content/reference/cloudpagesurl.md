---
data: <%= reference.sites.functions.CloudPagesURL %>
---
###Usage

```
<p><a title="MyPage" href="%%=RedirectTo(CloudPagesURL(77777))=%%" alias="ThisAlias" conversion="false">Click to unsubscribe</a></p>
```

This example includes the string value as part of a name and value pair.

```
%%=CloudPagesURL(ID, 'CampaignCode', @CampCode)=%%
```

This example includes multiple name and value pairs.

```
%%=CloudPagesURL(ID, 'CampaignCode', @CampCode, 'SegmentName', @SegmentName)=%%
```
