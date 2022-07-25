---
title: Suggested Car Listings
---

In this example, a car broker wants to send a subscriber an email that includes a list of makes and models of cars that the subscriber might like based on the subscriber's stated preference.

The car broker creates an attribute for the subscriber to contain the subscriber's preference in car type. The broker populates the attribute with a survey.

##Data Extensions and Relationships

The car broker also creates a data extension that contains multiple makes and models of cars for each of the short list of types that the subscribers could choose in the survey. The car broker creates a data relationship to associate the car_preference attribute on the subscriber to the type column in the data extension.

The subscriber table contains this data:

<table class="table table-hover">
<thead align="left">
<tr>
<th>email_address</th>
<th>first_name</th>
<th>last_name</th>
<th>region</th>
<th>car_preference</th>
</tr>
</thead>
<tbody>
<tr>
<td>aruiz@example.com</td>
<td>Angel</td>
<td>Ruiz</td>
<td>north</td>
<td>sedan</td>
</tr>
<tr>
<td>johndoe@example.com</td>
<td>John</td>
<td>Doe</td>
<td>south</td>
<td>convertible</td>
</tr>
<tr>
<td>janedoe@example.com</td>
<td>Jane</td>
<td>Doe</td>
<td>north</td>
<td>SUV</td>
</tr>
</tbody>
</table>

The cars data extension contains this data:

<table class="table table-hover">
<thead align="left">
<tr>
<th>type</th>
<th>make</th>
<th>model</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sedan</td>
<td>Company A</td>
<td>Sedan A</td>
</tr>
<tr>
<td>Sedan</td>
<td>Company B</td>
<td>Sedan B</td>
</tr>
<tr>
<td>Sedan</td>
<td>Company C</td>
<td>Sedan C</td>
</tr>
<tr>
<td>Convertible</td>
<td>Company D</td>
<td>Convertible A</td>
</tr>
<tr>
<td>Convertible</td>
<td>Company E</td>
<td>Convertible B</td>
</tr>
<tr>
<td>SUV</td>
<td>Company F</td>
<td>SUV A</td>
</tr>
<tr>
<td>SUV</td>
<td>Company D</td>
<td>SUV B</td>
</tr>
<tr>
<td>SUV</td>
<td>Company G</td>
<td>SUV C</td>
</tr>
<tr>
<td>SUV</td>
<td>Company H</td>
<td>SUV D</td>
</tr>
</tbody>
</table>

##AMPscript

The car broker includes this AMPscript block in the body of the email:

```
<html>
...
<table style= "border: 1px solid black">
%%[   /* Starting AMPscript */

/* Declaring variables */

var @rs, @row, @cntr

/* Looking up related cars by subscriber */
/* Using lookup rows function to return a rowset of related cars to use */

SET @rs = LookupRows("Cars", "Type", car_preference)

/* Looping through each record in the recordset */

for @cntr = 1 to RowCount(@rs) do

    /* If there is a value in the row, output to HTML */
SET @row = Row(@rs, @cntr)
  /*Ending script block here */ ]%%

        %%=Field(@row, "Make")=%%  &nbsp; &nbsp; &nbsp; %%=Field(@row, "Model")=%%


    %%[  /* resuming script block here */
next @cntr
  /*Ending script block */]%%
    </table>

</html>
```

##Output

When the car broker sends the email, the application processes the code:

###For Angel Ruiz

<table class="table table-hover">
<thead align="left">
<tr>
<th>Company</th>
<th>Model</th>
</tr>
</thead>
<tbody>
<tr>
<td>Company A</td>
<td>Sedan A</td>
</tr>
<tr>
<td>Company B</td>
<td>Sedan B</td>
</tr>
<tr>
<td>Company C</td>
<td>Sedan C</td>
</tr>
</tbody>
</table>

###For John Doe

<table class="table table-hover">
<thead align="left">
<tr>
<th>Company</th>
<th>Model</th>
</tr>
</thead>
<tbody>
<tr>
<td>Company D</td>
<td>Convertible A</td>
</tr>
<tr>
<td>Company E</td>
<td>Convertible B</td>
</tr>
</tbody>
</table>

###For Jane Doe

<table class="table table-hover">
<thead align="left">
<tr>
<th>Company</th>
<th>Model</th>
</tr>
</thead>
<tbody>
<tr>
<td>Company F</td>
<td>SUV A</td>
</tr>
<tr>
<td>Company D</td>
<td>SUV B</td>
</tr>
<tr>
<td>Company G</td>
<td>SUV C</td>
</tr>
<tr>
<td>Company H</td>
<td>SUV D</td>
</tr>
</tbody>
</table>
