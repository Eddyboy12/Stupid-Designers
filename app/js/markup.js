//colour declarations
var baseColour = "#000";

//style page
drawBoxWith('class', 'tomato');
addToBox('tomato', 'id', 'chicken');
positionBox('tomato', 'top', '10%');
boxColour('tomato', baseColour);
pauseAndRun(5000, destroyBox, 'tomato');
