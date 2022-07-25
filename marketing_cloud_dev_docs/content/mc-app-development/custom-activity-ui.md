---
title: Custom Activity UI
---
{{md 'custom-jb-activities'}}

A custom activity is web applications that you build according to specifications that Journey Builder recognizes. Using these recommendations, you can implement your app's file structure according to your preferences and business needs.

##Recommended File Structure
* {endpoint-URL}/ This file is the endpoint URL of the activity as defined in the Journey Builder component of your installed package.
    - index.html (required) - This file does not have to be a sublevel of the endpoint. This file is the default assumption when not including an overridden path.
    - [config.json](custom-activity-config.htm) (required)
    - customActivity.js (required) - This file does not have to be a sublevel of the endpoint. This file is the default assumption when not including an overridden path. You can use any name for this value, and you can embed this value in script within the index.html file.
* {endpoint-URL}/js/ (required) Provide the jQuery separately when not using the FuelUX 2 Loader.
    - require.js - May load from CDN
    - jquery.min.js - May load from CDN
    - postmonger.js (required) - Available on GitHub
* {endpoint-URL}/images/ Refer to the icon specifications for your icon image.
    - icon.png
