---
data: <%= reference.datetime.functions.Now %>
---
###Usage
Review what Now() and GetSendTime() return in different situations.
<table class="table table-hover">
    <thead align="left">
        <tr>
            <th></th>
            <th>During a send</th>
            <th>After a list, DE, or manual send</th>
            <th>After a triggered or journey send</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>**Now()**</td>
            <td>Current system time</td>
            <td>Current system time</td>
            <td>Current system time</td>
        </tr>
        <tr>
            <td>**Now(1)**</td>
            <td>Current system time</td>
            <td>Job start time</td>
            <td>Job publish time</td>
        </tr>
        <tr>
            <td>**GetSendTime()**</td>
            <td>Current system time</td>
            <td>Individual subscriber send completed time</td>
            <td>Individual subscriber send completed time</td>
        </tr>
        <tr>
            <td>**GetSendTime(1)**</td>
            <td>Current system time</td>
            <td>Job start time</td>
            <td>Job publish time</td>
        </tr>
    </tbody>
</table>

Given the date and time 10 a.m., March 1, 2014.
```
Now()
```
System returns:
```
3/1/2014  10:00:00
```
