---
title: Create Unique Journey Results using Transaction Keys
---

Transaction keys allow your journeys to produce unique results for all entry and multi-criteria decision filters. The transaction key value is combined with the contact key to create a unique identifier that is automatically applied to the entry filter and multi-criteria decision filters used throughout a journey.

1. Add a transaction key to the custom event’s config.json under <samp class="codeph nolang">metaData</samp>.
2. Map the transaction key value to a contact attribute using the <samp class="codeph nolang">from</samp> and <samp class="codeph nolang">to</samp> properties.
3. Enter the from event property, which comes from the event schema and is case sensitive. Only provide the property that you want to match, not the fully qualified string. For example, if <samp class="codeph nolang">FirstName</samp> is a valid event property, use <samp class="codeph nolang">FirstName</samp> for the from property, not <samp class="codeph nolang">Event.EventID.FirstName</samp>.
4. Enter valid data extension values from the same MID in order to enable the Next button when defining the entry filter criteria in Journey Builder.

```
{
	"metaData": {
		"transactionKeys": {
			"0": {
				"from": "Event Property",
				"to": "DE_Name.DE_Property"
			}
		}
	}
}
```

## Related Items
[Journey Transaction Key Setting](http://help.marketingcloud.com/en/documentation/journey_builder/interaction_settings/)
