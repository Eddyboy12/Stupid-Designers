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
  if(selector2 && value2 === undefined){
      console.log("Undefined parram 2 at position_by_id function. Please ignore.")
  }else if(selector2 && value2 != undefined)
  $("#"+boxName).css(selector2, value2);
}
//function for really stupid Stupid-Designers
function helpME(){
  window.location = "https://github.com/Varun-Sethu/Stupid-Designers";
}
//change colour function
function colour(target, colour){
  if ($('#'+target).length > 0) {
    $("#"+target).css('background-color', colour);
  }else if ($('#'+target).length === 0){
     if($('.'+target).length > 0){
       $("."+target).css('background-color', colour);
     }else if  ($('.'+target).length === 0){
       alert("Looks like a box you were referencing doesn't exist");
     }
  }
}
