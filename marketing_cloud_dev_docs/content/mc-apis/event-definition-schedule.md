---
title: Event Definition Schedule
---

An automation that executes a fire event activity will automatically be created if a schedule is defined in the Event Definition. The sample json below should be inserted into the Event Definition request body.

##Sample JSON

```json
{
    "schedule": {
        "startDateTime": "02/12/2015T14:30",
        "endDateTime": "11/23/2029T19:45",
        "timezone": "EasternStandardTime",
        "occurrences": 52,
        "endType": "endTime",
        "frequency": "daily",
        "recurrencePattern": "interval",
        "interval": 1,
        "sunday": false,
        "monday": false,
        "tuesday": false,
        "wednesday": false,
        "thursday": false,
        "friday": false,
        "saturday": false,
        "scheduledDay": 17,
        "scheduledDayOfWeek": "Monday",
        "scheduledWeek": "Fourth",
        "scheduledMonth": "February"
    }
}
```

<table class="table table-hover">
<thead align="left">
<tr>
<th>Field</th>
<th>Required (* Read Only)</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td>StartDateTime</td>
<td>yes</td>
<td>The first time the scheduled automation should run.</td>
</tr>
<tr>
<td>EndDateTime</td>
<td>no*</td>
<td>The last time the scheduled automation should run. Required if EndType = EndDate</td>
</tr>
<tr>
<td>Occurrences</td>
<td>no*</td>
<td>Integer indicating how many times the scheduled automation should run. Required if EndType = Occurrences.</td>
</tr>
<tr>
<td>EndType</td>
<td>yes</td>
<td>EndDate or Occurrences, indicates if automation schedule should stop after a specified date or a specified number of runs.</td>
</tr>
<tr>
<td>Frequency</td>
<td>yes</td>
<td>Minutely, Hourly, Daily, Weekly, Monthly, Yearly</td>
</tr>
<tr>
<td>RecurrencePattern</td>
<td>yes</td>
<td>Interval - used by Minutely, Hourly, DailyEveryWeekDay - used by DailyByDay - used by Weekly, Monthly, YearlyByWeek - used by Monthly, Yearly</td>
</tr>
<tr>
<td>Interval</td>
<td>no*</td>
<td>Integer, used for Mintuely, Hourly, Daily, Weekly, and Monthly schedules (not used for Yearly). Required if RecurrencePattern = Interval.</td>
</tr>
<tr>
<td>Sunday</td>
<td>no</td>
<td>Boolean, may be null, only used for weekly schedules.</td>
</tr>
<tr>
<td>Monday</td>
<td>no</td>
<td>Boolean, may be null, only used for weekly schedules.</td>
</tr>
<tr>
<td>Tuesday</td>
<td>no</td>
<td>Boolean, may be null, only used for weekly schedules.</td>
</tr>
<tr>
<td>Wednesday</td>
<td>no</td>
<td>Boolean, may be null, only used for weekly schedules.</td>
</tr>
<tr>
<td>Thursday</td>
<td>no</td>
<td>Boolean, may be null, only used for weekly schedules.</td>
</tr>
<tr>
<td>Friday</td>
<td>no</td>
<td>Boolean, may be null, only used for weekly schedules.</td>
</tr>
<tr>
<td>Saturday</td>
<td>no</td>
<td>Boolean, may be null, only used for weekly schedules.</td>
</tr>
<tr>
<td>ScheduledDay</td>
<td>no</td>
<td>Day of month (1 to 31), used for Monthly and Yearly schedules.</td>
</tr>
<tr>
<td>ScheduledDayOfWeek</td>
<td>no</td>
<td>Name of day of week (Sunday), used for Monthly and Yearly schedules.</td>
</tr>
<tr>
<td>ScheduledWeek</td>
<td>no</td>
<td>First, Second, Third, Fourth, Last, used for Monthly and Yearly schedules.</td>
</tr>
</tbody>
</table>
