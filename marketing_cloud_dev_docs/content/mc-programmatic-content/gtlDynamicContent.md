---
title: Dynamic Content Based on Attribute Values
---

Use subscriber attributes to determine which content the subscriber receives in the email. This example uses the email message from the example in Basic Personalization and adds additional information to assist in the personalization.

## Create a Subscriber

Follow the instructions to create a subscriber in the [Create a Subscriber](gtlBasicPersonalization.htm) section. Add an attribute for Language.

## Create an Email Message

Follow the instructions to create a message in the [Create an Email](gtlBasicPersonalization.htm) Message section and use this template for your content:

<gist data-gist="https://gist.github.com/ryanwilliamsET/a4a4396a65e484478cc99c4c4b1ffd04.js"></gist>

Given this data content:

<gist data-gist="https://gist.github.com/ryanwilliamsET/ae9d34be0b09c20ada96f1184c73c90a.js"></gist>

This example displays a default email message:

<img src="images/gtlDefault.png" alt="Screenshot of default email" class="img-responsive" style="margin: 25px 0;" />

This example displays an email message rendered in Spanish:

<img src="images/gtlSpanish.png" alt="Screenshot of Spanish email" class="img-responsive" style="margin: 25px 0;" />

This example displays a rendered email message with the No City option:

<img src="images/gtlNoCity.png" alt="Screenshot of default email with No City option" class="img-responsive" style="margin: 25px 0;" />
