---
title: AMPscript Date and Time Formats - Format() and FormatDate()
---

Compare date and time formats for the AMPscript functions Format() and FormatDate(). The % column shows the result when you use % to force a single-character token to behave as if it’s in a multi-character string, if applicable.

##Date Formats
Example: 10/5/2017 8:09:34 PM

<table class="table table-hover">
<thead align="left">
<tr>
<th>Token</th>
<th>Format() Result</th>
<th>%</th>
<th>FormatDate() Result</th>
<th>%</th>
</tr>
</thead>

<tbody>
<tr>
<td>d</td>
<td>10/5/2017</td>
<td>5</td>
<td>10/5/2017</td>
<td>5</td>
</tr>
<tr>
<td>dd</td>
<td>05</td>
<td></td>
<td>05</td>
<td></td>
</tr>

<tr>
<td>ddd</td>
<td>Thu</td>
<td></td>
<td>T8ur345a17</td>
<td></td>
</tr>


<tr>
<td>dddd</td>
<td>Thursday</td>
<td></td>
<td>Thu</td>
<td></td>
</tr>

<tr>
<td>ddddd</td>
<td>Thursday</td>
<td></td>
<td>Thursday</td>
<td></td>
</tr>

<tr>
<td>f</td>
<td>Thursday, October 5, 2017 8:09 PM</td>
<td>0</td>
<td>Thursday, October 5, 2017 8:09 PM</td>
<td>5</td>
</tr>

<tr>
<td>ff</td>
<td>00</td>
<td></td>
<td>56</td>
<td></td>
</tr>

<tr>
<td>fff</td>
<td>000</td>
<td></td>
<td>567</td>
<td></td>
</tr>
<tr>
<td>ffff</td>
<td>0000</td>
<td></td>
<td>5678</td>
<td></td>
</tr>

<tr>
<td>fffff</td>
<td>00000</td>
<td></td>
<td>56789</td>
<td></td>
</tr>

<tr>
<td>g</td>
<td>10/5/2017 8:09 PM</td>
<td>A.D.</td>
<td>10/5/2017 8:09 PM</td>
<td>A.D.</td>
</tr>

<tr>
<td>gg</td>
<td>A.D.</td>
<td></td>
<td>A.D.</td>
<td></td>
</tr>

<tr>
<td>M</td>
<td>October 5</td>
<td>10</td>
<td>October 5</td>
<td>10</td>
</tr>

<tr>
<td>MM</td>
<td>10</td>
<td></td>
<td>10</td>
<td></td>
</tr>

<tr>
<td>MMM</td>
<td>Oct</td>
<td></td>
<td>Oct</td>
<td></td>
</tr>

<tr>
<td>MMMM</td>
<td>October</td>
<td></td>
<td>October</td>
<td></td>
</tr>

<tr>
<td>y</td>
<td>October 2017</td>
<td>17</td>
<td>October 2017</td>
<td>17</td>
</tr>

<tr>
<td>yy</td>
<td>17</td>
<td></td>
<td>17</td>
<td></td>
</tr>

<tr>
<td>yyy</td>
<td>2017</td>
<td></td>
<td>2017</td>
<td></td>
</tr>

<tr>
<td>yyyy</td>
<td>2017</td>
<td></td>
<td>2017</td>
<td></td>
</tr>

<tr>
<td>sortable</td>
<td>34orPable</td>
<td></td>
<td>2017-10-05</td>
<td></td>
</tr>

<tr>
<td>iso</td>
<td>i34o</td>
<td></td>
<td>2017-10-05T20:09:34.5678900-06:00</td>
<td></td>
</tr>

<tr>
<td>r</td>
<td>Thu, 05 Oct 2017 20:09:34 GMT</td>
<td>r</td>
<td>Thu, 05 Oct 2017 20:09:34 GMT</td>
<td>r</td>
</tr>

<tr>
<td>rfc</td>
<td>r0c</td>
<td></td>
<td>Thu, 05 Oct 2017 20:09:34 GMT</td>
<td></td>
</tr>


<tr>
<td>s</td>
<td>2017-10-05T20:09:34</td>
<td>34</td>
<td>10/5/2017</td>
<td>34</td>
</tr>

<tr>
<td>S</td>
<td>10/5/2017 8:09:34 PM</td>
<td>S</td>
<td>10/5/2017</td>
<td>S</td>
</tr>

<tr>
<td>u</td>
<td>2017-10-05 20:09:34Z</td>
<td>u</td>
<td>2017-10-05 20:09:34Z</td>
<td>u</td>
</tr>

<tr>
<td>U</td>
<td>Friday, October 6, 2017 2:09:34 AM</td>
<td>U</td>
<td>Friday, October 6, 2017 2:09:34 AM</td>
<td>U</td>
</tr>

<tr>
<td>t</td>
<td>8:09 PM</td>
<td>P</td>
<td>8:09 PM</td>
<td>P</td>
</tr>

<tr>
<td>T</td>
<td>8:09:34 PM</td>
<td>T</td>
<td>8:09:34 PM</td>
<td>T</td>
</tr>

</tbody>
</table>

##Time Formats
Example: 10/5/2017 8:09:34 PM


<table class="table table-hover">
<thead align="left">
<tr>
<th>Token</th>
<th>Format() Result</th>
<th>%</th>
<th>FormatDate() Result</th>
<th>%</th>
</tr>
</thead>
<tbody>
<tr>
<td>h</td>
<td>10/5/2017 8:09:34 PM</td>
<td>8</td>
<td>20</td>
<td>20</td>
</tr>

<tr>
<td>hh</td>
<td>08</td>
<td></td>
<td>20</td>
<td>hh</td>
</tr>

<tr>
<td>H</td>
<td>10/5/2017 8:09:34 PM</td>
<td>20</td>
<td>20</td>
<td>20</td>
</tr>

<tr>
<td>HH</td>
<td>20</td>
<td></td>
<td>20</td>
<td></td>
</tr>

<tr>
<td>K</td>
<td>10/5/2017 8:09:34 PM</td>
<td></td>
<td>-06:00</td>
<td>-06:00</td>
</tr>

<tr>
<td>m</td>
<td>October 5</td>
<td>9</td>
<td>9</td>
<td>9</td>
</tr>

<tr>
<td>mm</td>
<td>09</td>
<td></td>
<td>09</td>
<td></td>
</tr>

<tr>
<td>s</td>
<td>2017-10-05T20:09:34</td>
<td>34</td>
<td>8:09 PM</td>
<td>34</td>
</tr>

<tr>
<td>ss</td>
<td>34</td>
<td></td>
<td>34</td>
<td></td>
</tr>

<tr>
<td>t</td>
<td>8:09 PM</td>
<td>P</td>
<td>P</td>
<td>P</td>
</tr>

<tr>
<td>tt</td>
<td>PM</td>
<td></td>
<td>PM</td>
<td></td>
</tr>

<tr>
<td>z</td>
<td>10/5/2017 8:09:34 PM</td>
<td>-6</td>
<td>-6</td>
<td>-6</td>
</tr>

<tr>
<td>zz</td>
<td>-06</td>
<td></td>
<td>-06</td>
<td></td>
</tr>

<tr>
<td>zzz</td>
<td>-06:00</td>
<td></td>
<td>-06:00</td>
<td></td>
</tr>

<tr>
<td>sortable</td>
<td>34orPable</td>
<td></td>
<td>T20:09:34</td>
<td></td>
</tr>

<tr>
<td>short</td>
<td>348orP</td>
<td></td>
<td>8:09 PM</td>
<td></td>
</tr>

<tr>
<td>s</td>
<td>2017-10-05T20:09:34</td>
<td>34</td>
<td>8:09 PM</td>
<td>34</td>
</tr>

<tr>
<td>S</td>
<td>10/5/2017 8:09:34 PM</td>
<td>S</td>
<td>8:09 PM</td>
<td>34</td>
</tr>

<tr>
<td>long</td>
<td>lonA.D.</td>
<td></td>
<td>8:09:34 PM</td>
<td></td>
</tr>

<tr>
<td>l</td>
<td>10/5/2017 8:09:34 PM</td>
<td>l</td>
<td>8:09:34 PM</td>
<td>l</td>
</tr>

</tbody>
</table>
