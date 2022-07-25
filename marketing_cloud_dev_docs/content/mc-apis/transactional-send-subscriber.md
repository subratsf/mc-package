---
title: Transactional Send Subscriber Error Codes
---

A subscriber error code occurs when a message can't be delivered due to an incorrect email address or other incorrect user setup.

##Subscriber Error Codes
<table class="table table-hover">
<thead align="left">
<tr>
<th>Error Code</th>
<th>Error Message</th>
<th>SYSTEM ERROR</th>
<th>Explanation</th>
</tr>
</thead>

<tbody>
<tr>
<td>1</td>
<td>Unsubscribed</td>
<td>The subscriber ExactTarget system status is unsubscribed</td>
<td>Email subscriber’s status in Marketing Cloud is unsubscribed</td>
</tr>

<tr>
<td>2</td>
<td>Held</td>
<td>The subscriber ExactTarget system status is held</td>
<td>Email subscriber’s status in Marketing Cloud is Held</td>
</tr>

<tr>
<td>3</td>
<td>PartnerUnsubscribed</td>
<td>The subscriber partner system status is unsubscribed</td>
<td>Email subscriber’s status in the partner system is unsubscribed</td>
</tr>

<tr>
<td>4</td>
<td>MissingEmailAddress</td>
<td>The subscriber has no email address</td>
<td>Email subscriber doesn’t have an email address</td>
</tr>

<tr>
<td>5</td>
<td>InvalidEmailAddress</td>
<td>The subscriber email address is invalid</td>
<td>Subscriber’s email address isn’t valid</td>
</tr>

<tr>
<td>6</td>
<td>DuplicateEmail</td>
<td>The subscriber email is the same as that of another job subscriber</td>
<td>Subscriber’s email address matches another subscriber’s</td>
</tr>

<tr>
<td>7</td>
<td>InvalidSubscriberIDProvided</td>
<td>The subscriber ID provided is invalid</td>
<td>Invalid subscriber ID</td>
</tr>

<tr>
<td>8</td>
<td>MissingSubscriberID</td>
<td>The subscriber key and subscriber ID are missing</td>
<td>Missing the subscriber key and subscriber ID</td>
</tr>

<tr>
<td>9</td>
<td>MissingOwnerID</td>
<td>This is an enterprise account and the ID for the child client account is missing</td>
<td>Missing the ID for the child client account in this enterprise account</td>
</tr>

<tr>
<td>10 </td>
<td>MissingRequiredAttributes</td>
<td>There are required attribute values missing for the subscriber</td>
<td>Missing required attributes for the subscriber</td>
</tr>

<tr>
<td>11</td>
<td>NoAllSubscribersListEntry</td>
<td>The subscriber is not found on the AllSubscribers list for the account</td>
<td>Subscriber isn’t on the AllSubscribers list for the account</td>
</tr>

<tr>
<td>12</td>
<td>InvalidOwnerIDProvided</td>
<td>The child client account is not a member of the enterprise account</td>
<td>Child client account isn’t a member of the enterprise account</td>
</tr>

<tr>
<td>13</td>
<td>SubscriberKeyMismatch</td>
<td>The subscriber key in the ExactTarget system does not match the subscriber key provided</td>
<td>Marketing Cloud subscriber key doesn’t match the subscriber key provided. Check the subscriber key you provided against the Marketing Cloud subscriber key and try again.</td>
</tr>

<tr>
<td>14</td>
<td>EmailAddressMismatch</td>
<td>The email address in the ExactTarget system does not match the email address provided</td>
<td>Email address in Marketing Cloud doesn’t match the email address provided. Check the email address you provided against the one in Marketing Cloud and try again.</td>
</tr>

<tr>
<td>15</td>
<td>UnspecifiedError</td>
<td>The subscriber did not pass validation. Please contact your customer service representative.</td>
<td>Subscriber didn’t pass validation. Contact your Marketing Cloud account representative.</td>
</tr>

<tr>
<td>16</td>
<td>InvalidAttributeValue</td>
<td>The value specified for a subscriber attribute does not match the attribute type</td>
<td>Subscriber attribute value doesn’t match the attribute type</td>
</tr>

<tr>
<td>17</td>
<td>AttributeValueMaxLengthErr</td>
<td>The value specified for a subscriber attribute is over the maximum length allowed for the attribute</td>
<td>Subscriber attribute is too long for the given attribute size limit</td>
</tr>

<tr>
<td>18</td>
<td>InvalidAttributeValueCount</td>
<td>The number of subscriber attribute values does not match the expected count</td>
<td>Number of subscriber attributes doesn’t match the expected count</td>
</tr>

<tr>
<td>19</td>
<td>MissingRequiredFields</td>
<td>There are required data extension fields missing for the subscriber</td>
<td>Missing required data extension fields for the subscriber</td>
</tr>

<tr>
<td>20</td>
<td>InvalidFieldValue</td>
<td>The value specified for a data extension field does not match the field type</td>
<td>Data extension field value doesn’t match the field type</td>
</tr>

<tr>
<td>21</td>
<td>DuplicateDataExtensionRow</td>
<td>A duplicate row cannot be inserted into the Triggered Send data extension</td>
<td>You can’t insert a duplicate row into the triggered send data extension</td>
</tr>

<tr>
<td>22</td>
<td>DataExtensionInsertFailed</td>
<td>Failed to insert a row into the Triggered Send data extension</td>
<td>Failed to insert a row into the triggered send data extension</td>
</tr>

<tr>
<td>23</td>
<td>DomainExclusion</td>
<td>The subscriber was excluded by a domain exclusion list</td>
<td>Subscriber excluded by a domain exclusion list</td>
</tr>

<tr>
<td>24</td>
<td>ListDetectiveExclusion</td>
<td>The subscriber was excluded by List Detective</td>
<td>Subscriber excluded by List Detective</td>
</tr>

<tr>
<td>25</td>
<td>SubscriberBlackedOut</td>
<td>The subscriber is currently blacked out and the Triggered Send will be rescheduled</td>
<td>Subscriber is not available on their email calendar. The triggered send will be rescheduled.</td>
</tr>

<tr>
<td>26</td>
<td>BuildEmailError</td>
<td>An error occurred when attempting to build an email for the subscriber</td>
<td>An error occurred when attempting to build an email for the subscriber</td>
</tr>

<tr>
<td>27</td>
<td>SuppressionListExclusion</td>
<td>The subscriber was excluded by a suppression list</td>
<td>Subscriber excluded by a suppression list</td>
</tr>

<tr>
<td>28</td>
<td>OptOutListExclusion</td>
<td>The subscriber was excluded by an opt out list</td>
<td>Subscriber excluded by an opt out list</td>
</tr>

<tr>
<td>29</td>
<td>MissingSubscriberKeyValue</td>
<td>The subscriber key value is null or empty</td>
<td>Subscriber key value is null or empty</td>
</tr>

<tr>
<td>30</td>
<td>SubscriberKeyTooLong</td>
<td>The subscriber key value exceeds the maximum length</td>
<td>Subscriber key value is too long. Enter a key that is X or fewer characters.</td>
</tr>

<tr>
<td>31</td>
<td>ListLevelOptOut</td>
<td>The subscriber has opted out of the list</td>
<td>Subscriber opted out of the list.</td>
</tr>

<tr>
<td>32</td>
<td>MissingSendGroupID</td>
<td>The required SendGroupID was not specified for the subscriber</td>
<td>Missing required SendGroupID for the subscriber</td>
</tr>

<tr>
<td>33</td>
<td>AccountLevelOptOut</td>
<td>The subscriber is master unsubscribed at the account, enterprise or business unit level</td>
<td>Subscriber is master unsubscribed at the account, enterprise or business unit level</td>
</tr>

<tr>
<td>34</td>
<td>MissingMessageFileName</td>
<td>The SMTP subscriber message file name is missing</td>
<td>Missing SMTP subscriber message file name</td>
</tr>

<tr>
<td>35</td>
<td>InvalidEmailAddressID</td>
<td>The EmailAddressID for the subscriber supporting data privacy is missing or invalid</td>
<td>Missing or invalid EmailAddressID for the subscriber supporting data privacy</td>
</tr>

<tr>
<td>36</td>
<td>InvalidBusinessUnit</td>
<td>The subscriber is not a member of the enterprise business unit and has been excluded by the business unit filter</td>
<td>Subscriber isn’t a member of the enterprise business unit and is excluded by the business unit filter</td>
</tr>

<tr>
<td>37</td>
<td>QueuedTransactionDeleted</td>
<td>Queued Transaction for a Message has been deleted</td>
<td>Message’s queued transaction was deleted</td>
</tr>

<tr>
<td>38</td>
<td>InvalidSalesforceID</td>
<td>The subscriber has a subscriber key that appears to be an invalid SalesforceID. Case sensitive SFID values cannot be used as Subscriber Key values since these are not case sensitive.</td>
<td>Invalid SalesforceID for the subscriber key. Don’t use case-sensitive SFID values because SalesforceIDs aren’t case sensitive.</td>
</tr>

<tr>
<td>39</td>
<td>SubscriberQueueCleared</td>
<td>Queued unsent subscribers were cleared from the queue.</td>
<td>Queued unsent subscribers are cleared from the queue.</td>
</tr>

<tr>
<td>40</td>
<td>SubscriberDeleted</td>
<td>The subscriber or contact has been deleted and cannot be added back to the system.</td>
<td>Subscriber or contact is deleted and can’t be added to Marketing Cloud.</td>
</tr>

<tr>
<td>41</td>
<td>DuplicateSubscriber</td>
<td>The subscriber is a duplicate of a recent send.</td>
<td>Subscriber is a duplicate of a recent send.</td>
</tr>

<tr>
<td>42</td>
<td>RestrictedForProcessing</td>
<td>The subscriber or contact has been restricted for processing</td>
<td>Subscriber or contact is restricted for processing</td>
</tr>

<tr>
<td>43</td>
<td>SubscriberRequestExpired</td>
<td>The triggered send request to send to the subscriber or contact is expired</td>
<td>Expired triggered send request to the subscriber or contact</td>
</tr>

<tr>
<td>100</td>
<td>Error</td>
<td>Error when building email for subscriber</td>
<td>An error occurred when building the email for the subscriber.</td>
</tr>

<tr>
<td>101</td>
<td>Failure</td>
<td>Failure when sending email to subscriber</td>
<td>Failed to send email to the subscriber.</td>
</tr>

<tr>
<td>102</td>
<td>Excluded</td>
<td>Excluded by send time filter.</td>
<td>Excluded by the send-time filter.</td>
</tr>

<tr>
<td>103</td>
<td>MessageBuildError</td>
<td>An error occurred when building the subscriber message.</td>
<td>An error occurred when building the subscriber message.</td>
</tr>

<tr>
<td>104</td>
<td>RecursiveScriptError</td>
<td>A submitted script contains a self-reference that could lead to an infinite recursion.</td>
<td>A submitted script contains a self-reference that can lead to an infinite recursion.</td>
</tr>

<tr>
<td>105</td>
<td>InvalidSendTimeDataError</td>
<td>The send time data XML is invalid.</td>
<td>Invalid send-time data XML file.</td>
</tr>

<tr>
<td>106</td>
<td>MissingSendDataExtensionSourceRowError</td>
<td>The source row for the subscriber in the data extension send source is missing.</td>
<td>Missing source row for the subscriber in the data extension send source.</td>
</tr>

<tr>
<td>107</td>
<td>MissingSubscriberDataError</td>
<td>The <samp class="codeph nolang">Members_</samp> source row is missing.</td>
<td>Missing <samp class="codeph nolang">members_</samp> source row.</td>
</tr>

<tr>
<td>108</td>
<td>MissingListSubscriberDataError</td>
<td>The tblListSub source row is missing.</td>
<td>Missing tblListSub source row.</td>
</tr>

<tr>
<td>109</td>
<td>MissingSubscriberKeyError</td>
<td>The subscriber key is missing.</td>
<td>Missing subscriber key.</td>
</tr>

<tr>
<td>110</td>
<td>InvalidEmailAddressError</td>
<td>The email address for the subscriber is invalid.</td>
<td>Invalid subscriber email address.</td>
</tr>

<tr>
<td>111</td>
<td>ScriptRaiseError</td>
<td>The subscriber has been excluded by a RaiseError function call.</td>
<td>Subscriber is excluded by a RaiseError function call.</td>
</tr>

<tr>
<td>112</td>
<td>EmptyHTTPGetReturnError</td>
<td>An HTTPGet call for the subscriber returned an empty result.</td>
<td>An HTTPGet request for the subscriber returned an empty result.</td>
</tr>

<tr>
<td>113</td>
<td>EmptyHTTPGetFunctionReturnError</td>
<td>An HTTPGet function call for the subscriber returned an empty result.</td>
<td>An HTTPGet function request for the subscriber returned an empty result.</td>
</tr>

<tr>
<td>114</td>
<td>MissingSFIDError</td>
<td>The Salesforce ID for the subscriber is missing.</td>
<td>Missing subscriber’s Salesforce ID.</td>
</tr>

<tr>
<td>115</td>
<td>MissingSFDataError</td>
<td>The Salesforce data for the subscriber is missing.</td>
<td>Missing subscriber’s Salesforce data.</td>
</tr>

<tr>
<td>116</td>
<td>MissingSFSubscriberDataError</td>
<td>The SF Subscriber row for the subscriber is missing.</td>
<td>Missing subscriber’s SF Subscriber row.</td>
</tr>

<tr>
<td>117</td>
<td>CouldNotResolveSecureEmailToken</td>
<td>The account is configured for secure email addresses, but the secure email address token for this subscriber could not be resolved.</td>
<td>The account is configured for secure email addresses, but the secure email address token for the subscriber could not be resolved.</td>
</tr>

<tr>
<td>118</td>
<td>GlobalUnsub</td>
<td>The email address is on the Global Unsub list.</td>
<td>Email address is on the Global Unsub list.</td>
</tr>

<tr>
<td>119</td>
<td>PartnerUnsub</td>
<td>The email address is on the Partner Unsub list.</td>
<td>Email address is on the Partner Unsub list.</td>
</tr>

<tr>
<td>120</td>
<td>ListDetectiveExclusion</td>
<td>The email address was excluded by List Detective.</td>
<td>Email address was excluded by List Detective.</td>
</tr>

<tr>
<td>121</td>
<td>ProcessedByPairedMember</td>
<td>The alternate job in the highly available job pair processed the subscriber.</td>
<td>The alternate job in the highly available job pair processed the subscriber.</td>
</tr>

<tr>
<td>122</td>
<td>SMTPFileNotFound</td>
<td>The file containing the SMTP message for this subscriber was not found.</td>
<td>Can’t find file containing the subscriber’s SMTP message.</td>
</tr>

<tr>
<td>123</td>
<td>SMTPFileIOError</td>
<td>The file containing the SMTP message for this subscriber could not be read.</td>
<td>Can’t read file containing the subscriber’s SMTP message.</td>
</tr>

<tr>
<td>124</td>
<td>SMTPFileFormatError</td>
<td>The file containing the SMTP message for this subscriber is in an invalid format.</td>
<td>Invalid format for the file containing the subscriber’s SMTP message.</td>
</tr>

<tr>
<td>125</td>
<td>DecryptionFailed</td>
<td>An encrypted field on the sendable data extension could not be decrypted.</td>
<td>Can’t decrypt an encrypted field on the sendable data extension.</td>
</tr>

<tr>
<td>126</td>
<td>MessageVolumeLimitExceeded</td>
<td>Account email volume limit has been exceeded and subscriber will not be processed.</td>
<td>Exceeded account email volume limit. Can’t process subscriber.</td>
</tr>

<tr>
<td>127</td>
<td>EmptySubject</td>
<td>The resolved email subject for this subscriber is empty.</td>
<td>The resolved email subject for the subscriber is empty.</td>
</tr>

<tr>
<td>128</td>
<td>ResolvedEmailBodyTooShort</td>
<td>The resolved email body for this subscriber is too short.</td>
<td>The resolved email body for the subscriber is too short.</td>
</tr>

<tr>
<td>129</td>
<td>PhoneNumberValidationFailed</td>
<td>The phone number failed validation at send time.</td>
<td>Phone number failed validation at send time.</td>
</tr>

<tr>
<td>130</td>
<td>PayloadExceedsMaximum</td>
<td>The payload exceeds maximum.</td>
<td>Payload is too large. Ensure that the payload is less than the maximum data amount specified by your admin.</td>
</tr>

<tr>
<td>131</td>
<td>LinkDataExceedsMaximumSize</td>
<td>The compressed job subscriber link data exceeds the Link database storage capacity of 256k.</td>
<td>Compressed job subscriber link data is too large. Link database storage capacity is 256,000.</td>
</tr>

<tr>
<td>132</td>
<td>InvalidCCEmailAddressError</td>
<td>The resolved CC email address for the subscriber is invalid.</td>
<td>Invalid resolved CC email address for the subscriber.</td>
</tr>

<tr>
<td>133</td>
<td>InvalidBCCEmailAddressError</td>
<td>The resolved BCC email address for the subscriber is invalid.</td>
<td>Invalid resolved BCC email address for the subscriber.</td>
</tr>

<tr>
<td>134</td>
<td>SubscriberDeleted</td>
<td>The subscriber or contact is being processed for deletion and cannot be sent to.</td>
<td>Can’t send because subscriber or contact is being processed for deletion.</td>
</tr>

<tr>
<td>135</td>
<td>RestrictedForProcessing</td>
<td>The subscriber or contact is restricted for processing and cannot be sent to.</td>
<td>Can’t send because subscriber or contact is restricted for processing.</td>
</tr>

<tr>
<td>136</td>
<td>SubscriberKeyMismatch</td>
<td>The subscriber or contact subscriber key no longer matches the send data extension subscriber key value.</td>
<td>Subscriber key or contact key doesn’t match the send data extension subscriber key.</td>
</tr>

<tr>
<td>137</td>
<td>SubscriberIDMismatch</td>
<td>The subscriber or contact subscriber id no longer matches the send data extension subscriber id value.</td>
<td>Subscriber ID or contact ID doesn’t match the send data extension subscriber ID.</td>
</tr>

<tr>
<td>138</td>
<td>ExceededExpirationPolicy</td>
<td>The triggered send request to send to the subscriber or contact is expired.</td>
<td>Expired triggered send request to the subscriber or contact.</td>
</tr>

<tr>
<td>139</td>
<td>TimedoutInQueue</td>
<td>The triggered send request to send to the subscriber or contact is timed out waiting in the queue.</td>
<td>Triggered send request to the subscriber or contact has timed out while waiting in the queue.</td>
</tr>

<tr>
<td>140</td>
<td>UnverifiedFromEmailAddress</td>
<td>The from email address is unverified.</td>
<td>Unverified From email address.</td>
</tr>

<tr>
<td>141</td>
<td>V2TriggeredSendDeletedFromQueue</td>
<td>The subscriber was deleted by the CLEAR_TS_QUEUE slot worker.</td>
<td>Subscriber deleted by the CLEAR_TS_QUEUE slot worker.</td>
</tr>

<tr>
<td>1000</td>
<td>UnsubscribedList</td>
<td>Subscriber excluded from send because unsubscribed from list.</td>
<td>Subscriber excluded from the send because subscriber is unsubscribed from the list.</td>
</tr>

<tr>
<td>1010</td>
<td>UnsubscribedMaster</td>
<td>Subscriber excluded from send because unsubscribed from client all subscriber list.</td>
<td>Subscriber excluded from the send because subscriber is unsubscribed from the client All Subscribers list.</td>
</tr>

<tr>
<td>1020</td>
<td>UnsubscribedGlobal</td>
<td>Subscriber excluded from send because unsubscribed from ExactTarget globally.</td>
<td>Subscriber excluded from the send because subscriber is globally unsubscribed from Marketing Cloud.</td>
</tr>

<tr>
<td>1030</td>
<td>Held</td>
<td>Subscriber excluded from send because held.</td>
<td>Subscriber excluded from send because subscriber is in held status.</td>
</tr>

<tr>
<td>1040</td>
<td>Deleted</td>
<td>Subscriber excluded from send because deleted.</td>
<td>Subscriber excluded from send because subscriber was deleted.</td>
</tr>

</tbody>
</table>
