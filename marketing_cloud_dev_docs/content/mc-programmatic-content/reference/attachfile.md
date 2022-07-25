---
data: <%= reference.content.functions.AttachFile %>
---
###Usage
This example attaches a PDF document from a website to your outgoing email.  The email also includes a link to the file in View As A Web Page with the text 'Click here to download your catalog.'  That link expires from View As A Web Page after four days.

```
%%=AttachFile('HTTP','http://example.com/catalog.pdf',true,'http://example.com/catalog.pdf','Click here to download your catalog',4)=%%
```

If you want to rename the attachment, enter the optional filename argument as shown below:

```
%%=AttachFile('HTTP','http://example.com/catalog.pdf','newFileName.pdf',true,'http://example.com/catalog.pdf','Click here to download your catalog',4)=%%
```

The next example attaches a Word document from the import folder of the Enhanced FTP site.  It also concatenates a new filename from the recipient's full name and the string 'NewCatalog.doc' at the time of attachment.

```
%%=AttachFile('FTP','productCatalog.doc',Concat(FullName,'NewCatalog.doc'))=%%
```

The following file types can be attached to emails sent through Marketing Cloud:

<table class="table table-hover">
<thead align="left">
<tr>
<th>File Type</th>
<th>MIME Type</th>
</tr>
</thead>
<tbody>
<tr>
<td>doc</td>
<td>application/msword</td>
</tr>
<tr>
<td>pdf</td>
<td>application/pdf</td>
</tr>
<tr>
<td>rtf</td>
<td>application/rtf</td>
</tr>
<tr>
<td>pkpass</td>
<td>application/vnd.apple.pkpass</td>
</tr>
<tr>
<td>xls</td>
<td>application/vnd.ms-excel</td>
</tr>
<tr>
<td>ppt</td>
<td>application/vnd.ms-powerpoint</td>
</tr>
<tr>
<td>docm</td>
<td>application/vnd.ms-word.document.macroEnabled.12</td>
</tr>
<tr>
<td>pptx</td>
<td>application/vnd.openxmlformats-officedocument.presentationml.presentation</td>
</tr>
<tr>
<td>xlsx</td>
<td>application/vnd.openxmlformats-officedocument.spreadsheetml.sheet</td>
</tr>
<tr>
<td>docx</td>
<td>application/vnd.openxmlformats-officedocument.wordprocessingml.document</td>
</tr>
<tr>
<td>rar</td>
<td>application/x-rar-compressed</td>
</tr>
<tr>
<td>ics</td>
<td>application/ics</td>
</tr>
<tr>
<td>xml</td>
<td>application/xml</td>
</tr>
<tr>
<td>zip</td>
<td>application/x-zip-compressed</td>
</tr>
<tr>
<td>zip</td>
<td>application/zip</td>
</tr>
<tr>
<td>wav</td>
<td>audio/wav</td>
</tr>
<tr>
<td>wav</td>
<td>audio/x-wav</td>
</tr>
<tr>
<td>gif</td>
<td>image/gif</td>
</tr>
<tr>
<td>jpeg</td>
<td>image/jpeg</td>
</tr>
<tr>
<td>jpg</td>
<td>image/jpeg</td>
</tr>
<tr>
<td>jpg</td>
<td>image/jpg</td>
</tr>
<tr>
<td>png</td>
<td>image/png</td>
</tr>
<tr>
<td>png</td>
<td>image/x-png</td>
</tr>
<tr>
<td>tif</td>
<td>image/tiff</td>
</tr>
<tr>
<td>tiff</td>
<td>image/tiff</td>
</tr>
<tr>
<td>ics</td>
<td>text/calendar</td>
</tr>
<tr>
<td>csv</td>
<td>text/csv</td>
</tr>
<tr>
<td>htm</td>
<td>text/html</td>
</tr>
<tr>
<td>html</td>
<td>text/html</td>
</tr>
<tr>
<td>txt</td>
<td>text/plain</td>
</tr>
<tr>
<td>rtf</td>
<td>text/rtf</td>
</tr>
<tr>
<td>vcf</td>
<td>text/vcard</td>
</tr>
<tr>
<td>vcf</td>
<td>text/x-vcard</td>
</tr>
<tr>
<td>xml</td>
<td>text/xml</td>
</tr>
<tr>
<td>mp4</td>
<td>video/mp4</td>
</tr>
</tbody>
</table>

This function supports secure transmission over HTTPS. If the remote server does not respond to the AttachFile() call within 30 seconds, the send reschedules for 15 minutes later and tries again.

You can only attach files contained in the account used to send the email message. This function does not support shared content from Content Builder or Portfolio.

Review [additional information about email attachments](https://help.salesforce.com/articleView?id=mc_es_email_attachments.htm&type=5).
