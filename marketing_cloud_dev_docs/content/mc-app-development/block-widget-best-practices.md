---
title: Custom Block Widget Best Practices
---

When developing custom blocks, adhere to these best practices.

##Use the Lightning Design System
<a href="https://www.lightningdesignsystem.com/" target="_blank">https://www.lightningdesignsystem.com/</a>

##Remember User Choices
When the user makes choices in the block widget and saves the block, they expect those choices to be remembered when they open that same block again. To save configuration separately from the block content itself, you can use <samp class="codeph nolang">getData</samp>.

##Update the Canvas in Real Time
Most of the editor’s system blocks update the canvas in real time, so your custom block widget should create the same experience for your users. If the user types or selects an option in the block, update those activities in real time rather than waiting for the user to exit or manually save. Use <samp class="codeph nolang">setContent</samp> or <samp class="codeph nolang">setSuperContent</samp> on changes.
