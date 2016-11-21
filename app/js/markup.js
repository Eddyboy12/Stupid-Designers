//colour declarations
var baseColour = "#000";
var randomColour = "#2a3a6f";

//style page
drawBoxWith('class', 'tomato');
addToBox('tomato', 'id', 'chicken');
positionBox('tomato', 'top', '10%');
sizeBox('tomato', 20, 50);
boxColour('tomato', randomColour);

//create new elements

drawBoxWith('class', 'dongBong');
addToBox('dongBong', 'id', 'milk');
positionBox('milk', 'top', '50%', 'left', '10%');
sizeBox('milk', 20, 50);
boxColour('milk', baseColour);
createBoxInsideWith('milk', 'id', 'farci');
