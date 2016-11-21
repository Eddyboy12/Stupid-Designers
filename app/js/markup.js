//colour declarations
var baseColour = "#000";

//style page
drawBoxWith('class', 'tomato');
addToBox('tomato', 'id', 'chicken');
positionBox('tomato', 'top', '10%');
boxColour('tomato', baseColour);
pauseAndRun(5000, destroyBox, 'tomato');
//create new elements
drawBoxWith('class', 'dongBong');
addToBox('dongBong', 'id', 'milk');
positionBox('milk', 'top', '50%', 'left', '10%');
sizeBox('milk', 20, 50);
boxColour('milk', baseColour);
