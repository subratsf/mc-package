---
title: Load a Custom UI for Your Activity
---

Custom hover UIs are used to display information. While a journey is in running mode, you can configure a custom hover UI to load for an activity. This hover UI is optional and appears only if there’s a <samp class="codeph nolang">userInterfaces.runningHover</samp> object in the config.json. The hover UI contains an iframe that loads the URL that the <samp class="codeph nolang">runningHover</samp> object specifies.

<img src="images/jb-custom-running-hover.gif" style="max-width: 100%; max-height: auto; border: 1px solid #ccc;" />

To define default outcomes, define <samp class="codeph nolang">runningHover</samp> and <samp class="codeph nolang">runningModal</samp> in the activity's config.json under the <samp class="codeph nolang">userInterfaces</samp> object.

## Sample
<gist data-gist="https://gist.github.com/mc-doc/827a27c9565f11d8eb5685120878580f.js"></gist>

##More Details Button

The hover UI contains a button labeled More Details, which closes the hover and opens a larger modal element. This modal contains an iframe that loads the URL specified in the <samp class="codeph nolang">runningModal</samp> object. The iframe supports Postmonger's <samp class="codeph nolang">destroy</samp> event. Users click the **X** that is shown by default to exit. If you provide a button, such as a Cancel button, along with the modal's default close method, Postmonger's <samp class="codeph nolang">destroy</samp> event closes the iframe when the user clicks **Cancel** or **X**.

You cannot hide the More Details button, but you can customize the text by setting a <samp class="codeph nolang">runningHoverButtonLabel</samp> in the config.json's <samp class="codeph nolang">lang</samp> object.

##Dynamic URLs for the Hover and Modal

Both the <samp class="codeph nolang">runningHover</samp> and <samp class="codeph nolang">runningModal</samp> URLs load inside an iframe, so any JavaScript you run within the iframe works. You can make dynamic decisions about what to show or hide either from the server hosting the URL, or by using JavaScript in the browser. While the URLs are static, you can make them dynamic by pointing them at a server resource that redirects the iframe.

##Interacting with the Hover and Modal via Postmonger

Interacting with a hover UI and modal using Postmonger events works just as it does for activities, but with limited interactivity. For example, you can't use the <samp class="codeph nolang">updateActivity</samp> method or its equivalent.

Hover UIs and modals are initialized by calling their respective context-dependent initialization Postmonger events.

##Hover and Modal Iframe Dimensions
* The running hover's iframe is 200 px x 243 px.
* The running modal's iframe is 420 px x 560 px.
>iframe dimensions cannot be resized.

##Related Items
[Postmonger Events Reference](using-postmonger.htm)
