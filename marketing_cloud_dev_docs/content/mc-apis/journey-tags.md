---
title: Tag your Journeys
---

You can add tags to journeys to help identify and categorize them. A journey can have multiple tags, and a tag can be associated with multiple journeys. To add tags to journeys via the API, you need the object ID, or original definition ID, for each journey, and the unique tag names.
<ol>
<li>[Relate tags to journeys](createTags.htm).
<p>The Create Tags resource creates an association for each tag/object pair. For example, if the payload includes 10 tags and 20 journeys, the API call creates 200 associations.</p></li>
<li>[Filter journeys by tag](getInteractionCollection.htm).
<p>When retrieving journeys, specify a single tag to filter results to only include journeys associated with that tag.</p></li>
<li>[Delete tag associations](deleteTags.htm).
<p>Delete one or more tags associated with a journey at the same time.</p></li>
</ol>

##Related Items
[Journey Tags](https://help.salesforce.com/articleView?id=mc_jb_journey_tags.htm&type=5)
