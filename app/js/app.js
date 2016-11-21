//function for drawing divs
function drawBox(type, typeValue){
  if(type == 'id'){
    var html = $('<div>', {id: typeValue});
    $('body').append(html);
  }else if(type == 'class'){
    var html = $('<div>').addClass(typeValue);
    $('body').append(html);
  }
}
//function for adding id's and shit like that.
function addTo(boxName, type, typeValue){
  if(type == 'id'){
    $("."+boxName).attr('id', typeValue);
  }else if(type == 'class'){
    $("#"+boxName).addClass(typeValue);
  }
}
//function for positioning elements it only takes Id
function position_by_id(boxName, selector1, value1, selector2, value2){
  $("#"+boxName).css('position', 'absolute');
  $("#"+boxName).css(selector1, value1);
  $("#"+boxName).css(selector2, value2);
}
