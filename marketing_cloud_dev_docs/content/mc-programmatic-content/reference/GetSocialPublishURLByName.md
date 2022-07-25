---
data: <%= reference.social.functions.GetSocialPublishURLByName %>
---
###Usage
Reference information for social networks and corresponding number codes.

<table class="table table-hover">
<thead align="left">
<tr>
<th>Social Network</th>
<th>Number Code</th>
</tr>
</thead>
<tbody>
<tr>
<td>Facebook</td>
<td>1</td>
</tr>
<tr>
<td>Del.icio.us</td>
<td>2</td>
</tr>
<tr>
<td>Digg</td>
<td>3</td>
</tr>
<tr>
<td>MySpace</td>
<td>4</td>
</tr>
<tr>
<td>StumbleUpon</td>
<td>5</td>
</tr>
<tr>
<td>Google</td>
<td>6</td>
</tr>
<tr>
<td>Microsoft</td>
<td>7</td>
</tr>
<tr>
<td>Yahoo</td>
<td>8</td>
</tr>
<tr>
<td>LinkedIn</td>
<td>9</td>
</tr>
<tr>
<td>ShareThis</td>
<td>10</td>
</tr>
<tr>
<td>Twitter</td>
<td>11</td>
</tr>
<tr>
<td>Google+</td>
<td>15</td>
</tr>
</tbody>
</table>

```
<!-- RegionStart[ name:'Shared content region 1',
title:'First shared email content',
description:'This is an example of shared content',
csskey:'portfolio css 1'] -->
<tablewidth='100%'bgcolor='#FFFFFF'border='0'bordercolor=''cellpadding='5'cellspacing='0'>
<tr>
<tdstyle='font-family:Arial; font-size:13px'>
<imgsrc='http://example.com/images/logo.jpg' title='logo'align='left'border='0'/>
<p id='text-placeholder'style='margin-top: 0px; margin-bottom: 0px;'>This is an example of a shared content area!&amp;nbsp; Please feel free to pass on this information!<br/>
<br/></p>
<!-- Creates a link to share this content with facebook -->
<a href='%%=GetSocialPublishURLByName('Facebook','US','Shared content region 1')=%%' alias='Social Forward to Facebook' title='Publish to Facebook'>
<img src='http://images.dev2.et.local/lib/ffcf14/m/1/social_default_facebook_icon.jpg' alt='Facebook' title='Facebook' border='0'></a>
</td>
</tr>
</table>
<!-- RegionEnd[ name:'Shared content region 1'] -->
```
