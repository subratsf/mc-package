---
data: <%= reference.api.functions.RaiseError %>
---
###Usage
```
RaiseError('An Error Occurred')
```

System returns the error message 'An Error Occurred' and stops the job.

```
RaiseError('Do not send to subscriber', true)
```

<p>System returns the error message 'Do not send to subscriber' and stops the send to that subscriber only.</p>

<p>RaiseError should not be used to exclude subscribers from a journey, because it will only remove a subscriber from a specific send. A journey decision split testing the raiseerror can be used to bypass the send.</p>
<!-- New note starts here -->
<p><b>NOTE:</b> Because the system pre-processes and builds these emails, tracking and reporting numbers include these emails despite the errors and may cause inaccuracies. Use this function to handle the errors of a small number of subscribers, rather than as a method to segment out large numbers of subscribers. Instead, use query activities and exclusion lists to handle your segmentation needs.</p>
