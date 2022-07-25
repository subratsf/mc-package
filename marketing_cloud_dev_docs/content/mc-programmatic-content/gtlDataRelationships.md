---
title: Data Relationships
---

This example demonstrates how to display the order history of a subscriber, including any product reviews and the ratings for the purchased products.

## Create Your Data Extensions
Create these data extensions in your Marketing Cloud account:

1. MyContacts
  * SubscriberKey - primary key, text
  * EmailAddress - text
  * First_Name - text
  * Last_Name - text
  * Language - text
  * City - text
  * Category_Preference - number
1. Products
  * Product_Name - text
  * SKU - primary key, number
  * Thumbnail_URL - text
  * Product_Category - number
1. Product_Rating
  * Average_Rating - number
  * SKU - primary key, number
  * Number_of_Ratings - number
  * Last_Review_Text - text
1. Order_Details
  * SKU - primary key, number
  * OrderID - primary key, number
  * CustomerID - text

Follow these steps to create each of your data extensions:

1. Hover over Subscribers.
1. Click **Data Extensions**.
1. Click **Create**.
1. Choose **Standard Data Extension**.
1. Click **OK**.
1. Choose **Create From New** for Creation Method.
1. Enter the name of the data extension in the Name field.
1. Enter the value used to access the data extension via an API call in the External Key field.
1. Enter a description of the data extension in the Description field.
1. Choose the location for the new data extension in the Location field.
1. Click **Next** twice to skip the Data Retention Options.
1. Create the attributes for your data extension as shown in the previous list.
1. Click **Next**.
1. Click **Create**.

## Create Your Data Relationships

Follow the directions to create a data relationship using the data extensions listed in Step 1. These steps build these data relationships:

* Order_Details to MyContacts (linking CustomerID to SubscriberKey)
* Products to Order_Details (linking SKU to SKU)
* Product_Ratings to Products (linking SKU to SKU)

1. Hover over Subscribers.
1. Click **Data Relationships**.
1. Click **Create**.
1. Enter a name for the data relationship in the Name field.
Enter the value you wish to use to access the data relationship via an API call in the External Key field.
1. Enter a description of the data extension in the Description field as necessary.
1. Choose the Order_Details and MyContacts data extensions in the Select Object section drop-downs.
1. Choose the CustomerID field for the Order_Details data extension and the SubcriberKey field for the MyContacts data extension in the Select Field section.
1. Click **Save**.
Repeat steps 7 through 9,  substituting the supplied data, to establish the other necessary data relationships:
  * Products data extension (SKU field) to Order_Details data extension (SKU field)
  * Product_Ratings data extension (SKU field) to Products data extension (SKU field)

## Create a Subscriber

Follow the instructions to create a subscriber in the [Create a Subscriber](gtlBasicPersonalization.htm) section or use the same subscriber created earlier.

## Create an Email Message
Follow the instructions to create a message in the [Create an Email](gtlBasicPersonalization.htm) and use the following template for your content:

<gist data-gist="https://gist.github.com/ryanwilliamsET/2ddc3c61c450943e4eddaf8e2e464ea3.js"></gist>

Given this data content:

<gist data-gist="https://gist.github.com/ryanwilliamsET/3bbbf37d0ae91fb2b70fa35fd70118dd.js"></gist>

The email message renders as displayed:

<img src="images/gtlDataRelationships.png" alt="Screenshot of email created using Data Relationships" class="img-responsive" style="margin: 25px 0;" />
