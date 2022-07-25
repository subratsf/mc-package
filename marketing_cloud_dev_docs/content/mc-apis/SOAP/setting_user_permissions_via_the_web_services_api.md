---
title: Set User Permissions
---
<p>This page contains information  about setting access permissions for users within your account via the SOAP API.</p>

##Why Set User Permissions
<p>You can enable or disable access to features and information within your account via user permissions.</p>

##How to Set User Permissions
<p>Use the sample code below as a model for your own API call:</p>

###Sample Code - SOAP Envelope
```
<soap:Body>
    <UpdateRequest xmlns="http://exacttarget.com/wsdl/partnerAPI">
        <Objects xsi:type="AccountUser">
            <Client>
                <ID>12345</ID>
            </Client>
            <ID>12345</ID>
            <UserPermissions>
                <ID>25</ID>
            </UserPermissions>
        </Objects>
    </UpdateRequest>
</soap:Body>
```
###List of User Permissions
The following list defines permissions available to set via the SOAP API. Because not all accounts include all available features, you may not use some roles within your account. Please contact your Marketing Cloud for more information on the features included in your account.
<table class="table table-hover"><thead align="left"><tr><th>Role ID</th><th>Role Name</th><th>Description</th></tr></thead><tbody><tr><td>3</td><td>CLIENT_ADMIN</td><td>Can add users to an account</td></tr><tr><td>4</td><td>PRO_ADMIN</td><td>Can create and view accounts</td></tr><tr><td>5</td><td>VIEW_TRACKING</td><td>Can only view tracking information</td></tr><tr><td>6</td><td>CRT_LIST_VIEW</td><td>Can only view and modify published email messages</td></tr><tr><td>7</td><td>RM_TMPLT</td><td>Cannot access templates</td></tr><tr><td>8</td><td>SEND_EMAIL_OFF</td><td>Cannot send email messages</td></tr><tr><td>12</td><td>DELETE_LIST_OFF</td><td>Cannot delete lists</td></tr><tr><td>13</td><td>PROFILE_READONLY</td><td>Cannot modify profile attributes</td></tr><tr><td>14</td><td>SF_REPORTS</td><td>Can run Salesforce.com reports</td></tr><tr><td>15</td><td>SF_REPORTS_FULL</td><td>Can run Salesforce.com reports and retrieve all contacts</td></tr><tr><td>16</td><td>DENY_LIST_ACCESS</td><td>Cannot access lists</td></tr><tr><td>17</td><td>DELETE_EMAIL_OFF</td><td>Cannot delete email messages</td></tr><tr><td>18</td><td>CREATE_EMAIL_OFF</td><td>Cannot create email messages</td></tr><tr><td>19</td><td>EXT_SEND_INTGRN</td><td>Can link to an external website for email sends</td></tr><tr><td>23</td><td>WebServices</td><td>Can use the SOAP API</td></tr><tr><td>24</td><td>ATTRIBS_READONLY</td><td>Cannot modify profile attribute values</td></tr><tr><td>25</td><td>ADMIN_DATA_MAN</td><td>Can access administrative data management</td></tr><tr><td>26</td><td>TEST_SEND_ONLY</td><td>Can only conduct test sends</td></tr><tr><td>28</td><td>REMOVE_CRM</td><td>Cannot access Marketing Cloud from any external systems</td></tr><tr><td>29</td><td>REMOVE_INTERACT</td><td>Cannot access any interactions</td></tr><tr><td>30</td><td>REMOVE_360</td><td>Cannot access 3sixty</td></tr><tr><td>31</td><td>SYS_DEF_ADMIN</td><td>Enables user as system-defined admin</td></tr><tr><td>32</td><td>SYS_DEF_CONTENT</td><td>Enables user as system-defined content creator</td></tr><tr><td>33</td><td>SYS_DEF_DATA</td><td>Enables user as system-defined data manager</td></tr><tr><td>34</td><td>SYS_DEF_ANALYST</td><td>Enables user as system-defined analyst</td></tr><tr><td>35</td><td>MANAGE_DATA_EXT</td><td>Permits user to manage data extension data and retention policy</td></tr><tr><td>38</td><td>APPROVER</td><td>Allow user to approve email messages</td></tr><tr><td>39</td><td>SYS_DEF_DS_USER</td><td>Distributed Sending User</td></tr></tbody></table>
