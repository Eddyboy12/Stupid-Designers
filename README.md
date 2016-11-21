# Stupid-Designers
An easy to use jQuery plugin for "Stupid Designers".

## Installation
```html
  <!-- Stupid-Designers is a jQuery plugin so you will need jQuery installed on your server
        That can be achieved like this... -->
<script type="text/javascript" src="link_to_jquery_file"></script>
<!--- You will also need to link to the actual application library -->
<script type="text/javascript" src="link_to_library"></script>
<!-- And finally a link to your markup js file where you will be writing your code. -->
<script type="text/javascript" src="link_to_library"></script>
```
After you are complete your HTML page should look a bit like this.
```html
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>Site Name</title>
    </head>
    <body class="clearfix">
          <script type="text/javascript" src="js/jquery.js"></script>
        <script type="text/javascript" src="js/app.js"></script>
        <script type="text/javascript" src="js/markup.js"></script>
    </body>
</html>
```
##Basic usage
A sample project file has been included under markup.js...
```javascript

    drawBoxWith('class', 'tomato');  /** Creates box or div with class tomato **/
    addToBox('tomato', 'id', 'chicken'); /** Adds to div with class tomato id chicken**/
    positionBox('tomato', 'top', '10%'); /**  Positions the box with either id or class tomato**/
    sizeBox('tomato', 20, 50); /** Resizes the box with either id or class tomato**/
    var randomColour = "#2a3a6f"; /**   You know what that is**/
    boxColour('tomato', randomColour); /**  Colours box with variable "randomColour" **/
    createBoxInsideWith('milk', 'class', 'fdsadsa'); /**  Creates div which is nested in div with class milk **/
    pauseAndRun(5000, destroyBox, "tomato"); /**  waits 5 seconds then destroys box "tomato" **/
    destroyBox("milk") /**  destroys box "milk" **/
```
We hope you have fun with this library :).
