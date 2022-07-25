---
title: ValidationResult
---
The ValidationResult object contains specific results of validation call.

##Properties
<table class="table table-hover"> <thead align="left"><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead> <tbody><tr><td>CheckTime</td><td>xsd:dateTime</td><td>Time of validation result check.</td></tr><tr><td>CheckTimeUTC</td><td>xsd:dateTime</td><td>Time of validation result check expressed in UTC format.</td></tr><tr><td>IsResultValid</td><td>xsd:boolean</td><td>Indicates whether an error message is present.</td></tr><tr><td>IsSpam</td><td>xsd:boolean</td><td>Indicates whether message reviewed exceeds spam threshold as part of SpamAssassin evaluation</td></tr><tr><td>Message</td><td>xsd:string</td><td>Contains contents of results message.</td></tr><tr><td>Score</td><td>xsd:double</td><td>Contains score of SpamAssassin validation call.</td></tr><tr><td>Subscriber</td><td>Subscriber</td><td>Identifies subscriber used in call.</td></tr></tbody></table>
