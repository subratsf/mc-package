---
title: Schedule a User-Initiated Email Message Send
---
<p>This page contains information  regarding scheduling a user-initiated email send via the SOAP API.</p>

##Why Schedule a User-Initiated Email Message Send
<p>You can schedule a user-initiated email message send to go to the customer at a specified point in the future. You can use this to delay subscriber notification until an appropriate time or time an email send to coincide with a larger event.</p>

##How To Schedule a User-Initiated Email Message Send
<p>Use the sample code below as a model to construct your own API calls to schedule an email send.</p>
<div class="alert">When scheduling an email send, you cannot specify a time for the send that occurs before the current time. All email sends must be scheduled for a time after the current time.</div>
###Sample .NET Code
```
string sStatus = String.Empty;
string sMessage = String.Empty;
string sRequestID = String.Empty;
//Create a Schedule Definition to send tomorrow (same time) and end three days from now
ScheduleDefinition sd = new ScheduleDefinition();
sd.StartDateTime = DateTime.Now.AddDays(1);
sd.StartDateTimeSpecified = true;
sd.EndDateTime = DateTime.Now.AddDays(3);
sd.EndDateTimeSpecified = true;
sd.Occurrences = 3;
sd.OccurrencesSpecified = true;
sd.RecurrenceType = RecurrenceTypeEnum.Daily;
sd.RecurrenceTypeSpecified = true;
sd.RecurrenceRangeType = RecurrenceRangeTypeEnum.EndOn;
sd.RecurrenceRangeTypeSpecified = true;
//Create a Daily Recurrence to do recurrence daily
DailyRecurrence dr = new DailyRecurrence();
dr.DailyRecurrencePatternType = DailyRecurrencePatternTypeEnum.Interval;
dr.DailyRecurrencePatternTypeSpecified = true;
dr.DayInterval = 1;
dr.DayIntervalSpecified = true;
sd.Recurrence = dr;
ScheduleResult[] sResults = client.Schedule(new ScheduleOptions(), "start", sd, new APIObject[] { esd }, out sStatus, out sMessage, out sRequestID);
```

##Related Items
[Schedule Method](schedule.htm)