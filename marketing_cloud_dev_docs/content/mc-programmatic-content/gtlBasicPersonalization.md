---
title: Basic Personalization
---

This example demonstrates how to insert the first name, last name, and city name into an email message.

## Create a Subscriber

First, create a subscriber in your Marketing Cloud account.

1. Click the Email app in the app switcher.
1. Click **Email**.
1. Click **Subscribers** in the top menu of the Email app.
1. Click **All Subscribers**.
1. Click **Create**.
1. Click **Next**.
1. Enter a subscriber key value for the subscriber in the Subscriber Key field.
1. Enter the email address for the subscriber in the Email Address field.
1. Click **First Name** and enter a value for the first name of the subscriber.
1. Click **Last Name** and enter a value for the last name of the subscriber.
1. Click **City** and enter a value for the city of the subscriber.
1. Select the list you wish to place the subscriber on.
1. Click **Finish**.

## Create an Email Message

1. Click **Content**.
1. Click **Emails**.
1. Click **Create**.
1. Select **HTML Paste**.
1. Enter a name for your email message in the Email Name field.
1. Enter a subject for your email message in the Email Subject field.
1. Add any preheader information you wish in the Preheader field.
1. Select the location for your email message by clicking **Select** and choosing the location.
1. Click **OK**.
1. Click **Save**.

Paste the template below into the content section of your email message:

<gist data-gist="https://gist.github.com/ryanwilliamsET/ebafdba45fa8d9b6f8f6af986410d2a7.js"></gist>

Given this data context:

<gist data-gist="https://gist.github.com/ryanwilliamsET/6b864cfa2e368c846b11e8b1fb477c5f.js"></gist>

The message renders as displayed:

<img src="images/gtlBasicPersonalizationResults.png" alt="Screenshot of Send Preview Screen" class="img-responsive" style="margin: 25px 0;" />
