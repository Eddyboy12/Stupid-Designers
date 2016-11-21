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
        <meta name="viewport" content="device-width=width" initialscale="1.0">
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
    positionBox('tomato', 'top', '10%'); /**  Positions the box**/

```
