---
title: Concerts in your Area
---

This information demonstrates how to use AMPscript in conjunction with data extensions to send an email message to subscribers about concerts occurring in their area. The contents of the email depend on the subscriber's stated genre performances. [Download a file containing the sample code for this scenario](concertsinyourarea.zip).

##Data Extensions and Relationships

The marketer creates a data extension to contain information about upcoming concerts. Each concert includes an associated genre, range of ticket prices, date, artist, venue, and city. Later, the marketer will create AMPscript to include this information in an email based on the subscriber's city and genre preferences.

The marketer creates a webpage, such as a Web Collect or a Smart Capture form, where subscribers indicate their preferred music genres. The Customer_Genre_Preferences data extension contains the preferences information.

The Subscriber table contains the following data:
<table class="table table-hover">
<thead align="left">
<tr>
<th>Email Address</th>
<th>Customer ID</th>
<th>First Name</th>
<th>Last Name</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>ettest201@example.com</td>
<td>201</td>
<td>Angel</td>
<td>Ruiz</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>ettest202@example.com</td>
<td>202</td>
<td>John</td>
<td>Doe</td>
<td>Chicago</td>
</tr>
</tbody>
</table>

The Customer_Genre_Preferences data extension contains this data:

<table class="table table-hover">
<thead align="left">
<tr>
<th>Customer ID</th>
<th>Genre</th>
</tr>
</thead>
<tbody>
<tr>
<td>201</td>
<td>Rock</td>
</tr>
<tr>
<td>201</td>
<td>Alt Country</td>
</tr>
<tr>
<td>201</td>
<td>Indie</td>
</tr>
<tr>
<td>202</td>
<td>Pop</td>
</tr>
<tr>
<td>202</td>
<td>Folk</td>
</tr>
<tr>
<td>202</td>
<td>Rock</td>
</tr>
</tbody>
</table>

The Upcoming_Shows data extension contains this data:

<table class="table table-hover">
<thead align="left">
<tr>
<th>Concert ID</th>
<th>Genre</th>
<th>Low Price</th>
<th>High Price</th>
<th>Show Date</th>
<th>Artist</th>
<th>Venue</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>101</td>
<td>Rock</td>
<td>35</td>
<td>45</td>
<td>10/27/2007</td>
<td>Band A</td>
<td>Venue A</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>106</td>
<td>Indie</td>
<td>15</td>
<td>37.5</td>
<td>10/6/2007</td>
<td>Band B</td>
<td>Venue B</td>
<td>New York</td>
</tr>
<tr>
<td>107</td>
<td>Indie</td>
<td>25</td>
<td>40</td>
<td>11/15/2007</td>
<td>Band C</td>
<td>Venue C</td>
<td>Chicago</td>
</tr>
<tr>
<td>108</td>
<td>Alt-Country</td>
<td>25</td>
<td>47.5</td>
<td>10/27/2007</td>
<td>Band D</td>
<td>Venue D</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>109</td>
<td>Indie</td>
<td>35</td>
<td>50</td>
<td>10/30/2007</td>
<td>Band E</td>
<td>Venue E</td>
<td>New York</td>
</tr>
<tr>
<td>111</td>
<td>Alt-Country</td>
<td>15</td>
<td>30</td>
<td>10/19/2007</td>
<td>Band F</td>
<td>Venue F</td>
<td>Chicago</td>
</tr>
<tr>
<td>112</td>
<td>Indie</td>
<td>35</td>
<td>57.5</td>
<td>11/2/2007</td>
<td>Band G</td>
<td>Venue G</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>113</td>
<td>Folk</td>
<td>25</td>
<td>35</td>
<td>11/6/2007</td>
<td>Band H</td>
<td>Venue H</td>
<td>Chicago</td>
</tr>
<tr>
<td>114</td>
<td>Alt-Country</td>
<td>15</td>
<td>30</td>
<td>11/15/2007</td>
<td>Band I</td>
<td>Venue I</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>115</td>
<td>Indie</td>
<td>25</td>
<td>35</td>
<td>10/27/2007</td>
<td>Band J</td>
<td>Venue J</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>116</td>
<td>Alt-Country</td>
<td>15</td>
<td>30</td>
<td>10/30/2007</td>
<td>Band K</td>
<td>Venue K</td>
<td>New York</td>
</tr>
<tr>
<td>117</td>
<td>Rock</td>
<td>15</td>
<td>37.5</td>
<td>10/21/2007</td>
<td>Band L</td>
<td>Venue L</td>
<td>Chicago</td>
</tr>
<tr>
<td>118</td>
<td>Indie</td>
<td>15</td>
<td>30</td>
<td>10/19/2007</td>
<td>Band M</td>
<td>Venue M</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>119</td>
<td>Indie</td>
<td>25</td>
<td>40</td>
<td>11/2/2007</td>
<td>Band N</td>
<td>Venue N</td>
<td>New York</td>
</tr>
<tr>
<td>120</td>
<td>Alt-Country</td>
<td>25</td>
<td>40</td>
<td>11/6/2007</td>
<td>Band O</td>
<td>Venue O</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>121</td>
<td>Indie</td>
<td>35</td>
<td>57/5</td>
<td>11/15/2007</td>
<td>Band P</td>
<td>Venue P</td>
<td>Chicago</td>
</tr>
<tr>
<td>122</td>
<td>Indie</td>
<td>15</td>
<td>30</td>
<td>10/27/2007</td>
<td>Band Q</td>
<td>Venue Q</td>
<td>Chicago</td>
</tr>
<tr>
<td>123</td>
<td>Rock</td>
<td>25</td>
<td>35</td>
<td>10/30/2007</td>
<td>Band R</td>
<td>Venue R</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>124</td>
<td>Indie</td>
<td>35</td>
<td>57.5</td>
<td>10/21/2007</td>
<td>Band S</td>
<td>Venue S</td>
<td>Chicago</td>
</tr>
<tr>
<td>125</td>
<td>Alt-Country</td>
<td>25</td>
<td>47.5</td>
<td>10/19/2007</td>
<td>Band T</td>
<td>Venue T</td>
<td>Chicago</td>
</tr>
<tr>
<td>126</td>
<td>Alt-Country</td>
<td>35</td>
<td>57.5</td>
<td>11/2/2007</td>
<td>Band U</td>
<td>Venue U</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>127</td>
<td>Indie</td>
<td>25</td>
<td>35</td>
<td>11/6/2007</td>
<td>Band V</td>
<td>Venue V</td>
<td>Chicago</td>
</tr>
<tr>
<td>128</td>
<td>Indie</td>
<td>15</td>
<td>30</td>
<td>11/15/2007</td>
<td>Band W</td>
<td>Venue W</td>
<td>Chicago</td>
</tr>
<tr>
<td>129</td>
<td>Rock</td>
<td>35</td>
<td>57.5</td>
<td>10/27/2007</td>
<td>Band X</td>
<td>Venue X</td>
<td>New York</td>
</tr>
<tr>
<td>130</td>
<td>Rock</td>
<td>25</td>
<td>40</td>
<td>10/30/2007</td>
<td>Band Y</td>
<td>Venue Y</td>
<td>Chicago</td>
</tr>
<tr>
<td>131</td>
<td>Indie</td>
<td>25</td>
<td>47.5</td>
<td>10/21/2007</td>
<td>Band Z</td>
<td>Venue Z</td>
<td>New York</td>
</tr>
<tr>
<td>132</td>
<td>Pop</td>
<td>35</td>
<td>57.5</td>
<td>10/19/2007</td>
<td>Band 0</td>
<td>Venue 0</td>
<td>Chicago</td>
</tr>
<tr>
<td>133</td>
<td>Folk</td>
<td>25</td>
<td>35</td>
<td>11/2/2007</td>
<td>Band 1</td>
<td>Venue 1</td>
<td>New York</td>
</tr>
<tr>
<td>138</td>
<td>Indie</td>
<td>35</td>
<td>50</td>
<td>10/21/2007</td>
<td>Band 2</td>
<td>Venue 2</td>
<td>Chicago</td>
</tr>
<tr>
<td>139</td>
<td>Indie</td>
<td>15</td>
<td>37.5</td>
<td>10/29/2007</td>
<td>Band 3</td>
<td>Venue 3</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>140</td>
<td>Alt-Country</td>
<td>25</td>
<td>40</td>
<td>11/2/2007</td>
<td>Band 4</td>
<td>Venue 4</td>
<td>Chicago</td>
</tr>
<tr>
<td>141</td>
<td>Pop</td>
<td>25</td>
<td>35</td>
<td>11/6/2007</td>
<td>Band 5</td>
<td>Venue 5</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>142</td>
<td>Rock</td>
<td>25</td>
<td>40</td>
<td>11/15/2007</td>
<td>Band 6</td>
<td>Venue 6</td>
<td>New York</td>
</tr>
<tr>
<td>143</td>
<td>Rock</td>
<td>25</td>
<td>40</td>
<td>10/27/2007</td>
<td>Band 7</td>
<td>Venue 7</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>144</td>
<td>Rock</td>
<td>15</td>
<td>30</td>
<td>10/30/2007</td>
<td>Band 8</td>
<td>Venue 8</td>
<td>Chicago</td>
</tr>
<tr>
<td>145</td>
<td>Alt-Country</td>
<td>25</td>
<td>40</td>
<td>10/21/2007</td>
<td>Band 9</td>
<td>Venue 9</td>
<td>Chicago</td>
</tr>
<tr>
<td>146</td>
<td>Rock</td>
<td>35</td>
<td>50</td>
<td>10/19/2007</td>
<td>Band 10</td>
<td>Venue 10</td>
<td>Chicago</td>
</tr>
<tr>
<td>148</td>
<td>Rock</td>
<td>35</td>
<td>50</td>
<td>11/6/2007</td>
<td>Band 11</td>
<td>Venue 11</td>
<td>Indianapolis</td>
</tr>
</tbody>
</table>

##AMPscript

This AMPscript appears in the body of the email.

```
<html>
<body style="font-size: 12px;color: #000099; font-family: verdana;">

%%[ /* This is an AMPscript Comment */ ]%%

<p>Hi %%First Name%%,<br><br>
We want to tell you about upcoming shows in your area based on your favorite music genres.  We think you are as stoked as we are to see great live music and wanted to pass the word on.  Enjoy!<br><br>
</p>

<h3>Upcoming Shows in %%City%%</h3>
<br><br>

%%[
/* First we want to determine if the customer has any favorite genres stored. If not, we want to encourage them to create online */
/* Otherwise, we will loop through every genre we find */

var @rsgenre, @rowgenre, @rsshow, @rowshow, @countergenre, @countershow, @currentgenre

SET @rsgenre = LOOKUPROWS("Customer_Genre_Preferences", "Customer ID", [Customer ID])
]%%

%%[
if ROWCOUNT(@rsgenre) == 0 then
]%%

<h4>We see that you don't have any genres stored, please add them online to get the most relevant information sent to you next time!</h4>
<a href="http://music.example.com">Add My Genres</a>

%%[
else

/* Now we are going to loop through each customer's genre, and then use that and City to look up upcoming shows to display in a table */
/* if we find a genre, but no corresponding shows, we are not going to display anything for that genre */
]%%

  %%[
  for @countergenre = 1 to ROWCOUNT(@rsgenre) do

  SET @currentgenre = FIELD(ROW(@rsgenre, @countergenre), "Genre Preference")
  SET @rsshow = LOOKUPROWS("Upcoming_Shows", "City", City, "Genre", @currentgenre)

    if ROWCOUNT(@rsshow) != 0 then ]%%
      <h4>%%=CONCAT("Upcoming ", @currentgenre, " Shows")=%%</h4><br>
        <table width="700px" style="border: 1 solid black; font-size: 10px;color: #000099; font-family: verdana;" cellpadding="2" cellspacing="0">
          <tr style="font-size: 10px;color: #999999; font-family: verdana; font-weight: bold;">
            <td>Date</td>
            <td>Artist</td>
            <td>Venue</td>
            <td>Tickets</td>
            <td>City</td>
          </tr>
        %%[
        for @countershow = 1 to ROWCOUNT(@rsshow) do
          SET @rowshow = ROW(@rsshow, @countershow)

          /* Here we are setting alternating style for the row */

          if MOD(@countershow, 2)== 0 and @countershow != 1 then
        ]%%

          <tr style="background-color: #dcdcdc;">

        %%[else]%%

          <tr>

        %%[endif]%%

            <td>%%=FORMAT(FIELD(@rowshow, "Show Date"), "ddd, MMM d")=%%</td>
            <td>%%=FIELD(@rowshow, "Artist")=%%</td>
            <td>%%=FIELD(@rowshow, "Venue")=%%</td>
            <td><a href="http://music.com?ConcertID=%%=FIELD(@rowshow, 'Concert ID')=%%">%%=CONCAT("From", FORMAT(FIELD(@rowshow, "Low Price"), "C2")," to ", FORMAT(FIELD(@rowshow, "High Price"), "C2"))=%%</a></td>
            <td>%%=FIELD(@rowshow, "City")=%%</td>
          <tr>

        %%[
        next @countershow
        ]%%

        </table>
        <br><br>
    %%[
    endif
    ]%%

  %%[
  next @countergenre
  ]%%
%%[
endif
]%%

<custom name="opencounter" type="tracking"><table cellpadding="2" cellspacing="0" width="600" ID="Table5" Border=0><tr><td><font face="verdana" size="1" color="#444444">This email was sent to:  %%emailaddr%% <br><br><b>Email Sent By:</b> %%Member_Busname%%<br>%%Member_Addr%% %%Member_City%%, %%Member_State%%, %%Member_PostalCode%%, %%Member_Country%%<br><br></font></td></tr></table><a href="%%profile_center_url%%" alias="Update Profile">Update Profile</a>

</body>
</html>
```

##Output

When the marketer sends the email, the application processes the code:

For Angel Ruiz:

Hi Angel,

We want to tell you about upcoming shows in your area based on your favorite music genres. We think you are as stoked as we are to see great live music and wanted to pass the word on. Enjoy!

Upcoming Shows in Indianapolis

Upcoming Rock Shows

<table class="table table-hover">
<thead align="left">
<tr>
<th>Date</th>
<th>Artist</th>
<th>Venue</th>
<th>Tickets</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sat, Oct 27</td>
<td>Band A</td>
<td>Venue A</td>
<td>From $35.00 to $45.00</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Tue, Oct 30</td>
<td>Band R</td>
<td>Venue R</td>
<td>From $25.00 to $35.00</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Sat, Oct 27</td>
<td>Band 7</td>
<td>Venue 7</td>
<td>From $25.00 to $40.00</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Tue, Nov 6</td>
<td>Band 11</td>
<td>Venue 11</td>
<td>From $35.00 to $50.00</td>
<td>Indianapolis</td>
</tr>
</tbody>
</table>

Upcoming Alt-Country Shows

<table class="table table-hover">
<thead align="left">
<tr>
<th>Date</th>
<th>Artist</th>
<th>Venue</th>
<th>Tickets</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sat, Oct 27</td>
<td>Band D</td>
<td>Venue D</td>
<td>From $25 to $47.50</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Thu, Nov 15</td>
<td>Band I</td>
<td>Venue I</td>
<td>From $15.00 to $30.00</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Tue, Nov 6</td>
<td>Band O</td>
<td>Venue O</td>
<td>From $25.00 to $40.00</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Fri, Nov 2</td>
<td>Band U</td>
<td>Venue U</td>
<td>From $35.00 to $57.50</td>
<td>Indianapolis</td>
</tr>
</tbody>
</table>

Upcoming Indie Shows

<table class="table table-hover">
<thead align="left">
<tr>
<th>Date</th>
<th>Artist</th>
<th>Venue</th>
<th>Tickets</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fri, Nov 2</td>
<td>Band G</td>
<td>Venue G</td>
<td>From $35.00 to $57.50</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Sat, Oct 27</td>
<td>Band J</td>
<td>Venue J</td>
<td>From $25.00 to $35.00</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Fri, Oct 19</td>
<td>Band M</td>
<td>Venue M</td>
<td>From $15.00 to $30.00</td>
<td>Indianapolis</td>
</tr>
<tr>
<td>Mon, Oct 29</td>
<td>Band 3</td>
<td>Venue 3</td>
<td>From $15.00 to $37.50</td>
<td>Indianapolis</td>
</tr>
</tbody>
</table>

For John Doe:

Hi John,

We want to tell you about upcoming shows in your area based on your favorite music genres. We think you are as stoked as we are to see great live music and wanted to pass the word on. Enjoy!

Upcoming Shows in Chicago

<table class="table table-hover">
<thead align="left">
<tr>
<th>Date</th>
<th>Artist</th>
<th>Venue</th>
<th>Tickets</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fri, Oct 19</td>
<td>Band 0</td>
<td>Venue 0</td>
<td>From $35.00 to $57.50</td>
<td>Chicago</td>
</tr>
</tbody>
</table>

Upcoming Pop Shows

Date	Artist	Venue	Tickets	City
Fri, Oct 19	Band 0	Venue 0	From $35.00 to $57.50	Chicago
Upcoming Folk Shows

<table class="table table-hover">
<thead align="left">
<tr>
<th>Date</th>
<th>Artist</th>
<th>Venue</th>
<th>Tickets</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>Fri, Oct 19</td>
<td>Band 0</td>
<td>Venue 0</td>
<td>From $35.00 to $57.50</td>
<td>Chicago</td>
</tr>
</tbody>
</table>

Upcoming Rock Shows

<table class="table table-hover">
<thead align="left">
<tr>
<th>Date</th>
<th>Artist</th>
<th>Venue</th>
<th>Tickets</th>
<th>City</th>
</tr>
</thead>
<tbody>
<tr>
<td>Sat, Oct 27</td>
<td>Band L</td>
<td>Venue L</td>
<td>From $15.00 to $37.50</td>
<td>Chicago</td>
</tr>
<tr>
<td>Tue, Oct 30</td>
<td>Band R</td>
<td>Venue R</td>
<td>From $25.00 to $35.00</td>
<td>Chicago</td>
</tr>
<tr>
<td>Sat, Oct 27</td>
<td>Band 7</td>
<td>Venue 7</td>
<td>From $25.00 to $40.00</td>
<td>Chicago</td>
</tr>
<tr>
<td>Tue, Nov 6</td>
<td>Band 11</td>
<td>Venue 11</td>
<td>From $35.00 to $50.00</td>
<td>Chicago</td>
</tr>
</table>
