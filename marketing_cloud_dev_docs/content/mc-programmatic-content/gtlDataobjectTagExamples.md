---
title: Dataobject Tag Examples
---

## Dataobject AMPscript Example

This example loads information from an AMPscript variable using a single Dataobject tag referenced by a section tag:

<gist data-gist="https://gist.github.com/ryanwilliamsET/ce6db97d79cb818bb80dcae7963b7c24.js"></gist>

This example produces this information:

```
Email Address: sam@example.com <mailto:sam@example.com>
Region: East
State: North Carolina
City: Charlotte
```

## JSON Data Filter and Order example

This example loads JSON data from a data extension using a Dataobject tag, then filters and orders that data:

<gist data-gist="https://gist.github.com/ryanwilliamsET/7176e798bf350588509993101bf243c7.js"></gist>

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
```
Email Address: sam@example.com
Region: East
State: North Carolina
City: Charlotte
```
