---
title: "Datasource Tag Examples"
---

## Datasource AMPscript Examples

This example loads information from an AMPscript variable with collection of objects read by a Datasource tag:

<gist data-gist="https://gist.github.com/ryanwilliamsET/ac9973608aabe3eeb6815a1ae6b06d34.js"></gist>

This example produces this information:

```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
```
```
Email Address: john@example.com
Region: West
State: California
City: San Francisco
```

## Datasource Server-Side JavaScript Example

This example loads JSON data from a server-side JavaScript variable using a Datasource tag:

<gist data-gist="https://gist.github.com/ryanwilliamsET/ac88c45819677de0ce5eaefe3712d191.js"></gist>

The example produces this information:

```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
```

## JSON Data Filter and Order Example

This example loads JSON data from a data extension using a Datasource tag, then filters and orders that data:

<gist data-gist="https://gist.github.com/ryanwilliamsET/aeb76dff7fe72e1c2b5ad6e9af35293f.js"></gist>

This example produces this information:

```
Email Address: john@example.com
Region: West
State: California
City: San Francisco
```
```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
```

## Nested Datasource Example

This example takes information from a nested JSON using the Datasource tag:

<gist data-gist="https://gist.github.com/ryanwilliamsET/f5148ced2f8f556dcbeebdce39e0bcd0.js"></gist>

The example produces this information:

```
Email Address: john@example.com
Region: West
State: California
City: San Francisco
   Home: 555-555-1111
   Cell: 555-555-2222
```
```
Email Address: carla@example.com
Region: Central
State: Indiana
City: Indianapolis
   Home: 555-555-4444
   Cell: 555-555-5555
```
