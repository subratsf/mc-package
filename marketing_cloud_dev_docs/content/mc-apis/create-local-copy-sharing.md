---
title: Create Local Copy of a Shared Asset
---

To edit an existing asset locally, share the asset, then create a local copy. The original asset and local copy retain sharing properties that associate them with each other.


1. Share an asset to a set of MIDs. In this example, the asset is shared with business units 333 and 555.
```
{
    ...
    "sharingProperties" : {
        "sharedWith" : [ 333, 555 ],
        "sharingType" : "local"
    }
}
```
2. Retrieve the original asset using <samp class="codeph nolang">GET /asset/v1/content/assets/{id}</samp>.
3. Create a new asset with the original asset's payload plus the sharingProperties using <samp class="codeph nolang">POST /asset/v1/content/assets</samp>. 
	* <samp class="codeph nolang">sharedFrom</samp> is the asset ID of the original asset.
	* <samp class="codeph nolang">sharedFromMID</samp> is MID the asset came from.
```
{
    ...
    "sharingProperties" : {
        "sharedFrom" : 12345,
        "sharedFromMID" : 333
    }
}
```
4. If you retrieve the original asset again, notice that the <samp class="codeph nolang">sharingProperties</samp> are updated with the local edit created by business unit 333. The read-only <samp class="codeph nolang">localAssets</samp> property stores the MID and asset ID for the local edit in the recipient MID. 
```
{
    "sharingProperties" : {
        "sharedWith" : [ 333, 555 ],
        "sharingType" : "local",
        "localAssets" : {
            "333" : "98765"
        }
    }
}
```
##Related Items
[Sharing](sharing.htm)
