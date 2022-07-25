---
data: <%= reference.http.functions.RedirectTo %>
---
###Usage
Given the data extension Vacation_Deals:

<table class="table table-hover">
<thead align="left">
<tr>
<th>Customer_ID</th>
<th>Type</th>
<th>Link</th>
</tr>
</thead>
<tbody>
<tr>
<td>123</td>
<td>Flight</td>
<td>http://example.com/flights/</td>
</tr>
<tr>
<td>123</td>
<td>Car</td>
<td>http://example.com/cars/</td>
</tr>
<tr>
<td>456</td>
<td>Hotel</td>
<td>http://example.com/hotels/</td>
</tr>
</tbody>
</table>

```
%%[
Var @rows, @link, @cntr, @type
Set @rows=LookupRows('Vacation_Deals','CustomerID','123')
For @cntr=1 to Rowcount(@rows) do
set @type=Field(Row(@rows, @cntr),'type')
set @link=Field(Row(@rows, @cntr),'link')
]%%
<a href='%%=RedirectTo(@link)=%%'>%%=v(@type)=%%</a>
%%[
Next @cntr
]%%
```

System returns:
```
Flight Deals
Car Deals
```

Where Flight Deals links to http://example.com/flights/ and Car Deals links to http://example.com/cars/.
You can also use this function to include data extension values at the end of a hyperlink within an email message, as shown in the example below:
```
%%[Set @email = 'aruiz@example.com'
Set @firstName = 'Angel'
Set @url = Concat('http://www.example.com?email=',@email,'&name=',@firstName)]%%
<a href = '%%=RedirectTo(@url)=%%'>Click Here</a>
```

System returns:
```
http://www.example.com?email=aruiz@...com&amp;name=Angel
```
