//function for drawing divs
function drawBoxWith(type, typeValue){
  if(type == 'id'){
    var html = $('<div>', {id: typeValue});
    $('body').append(html);
  }else if(type == 'class'){
    var html = $('<div>').addClass(typeValue);
    $('body').append(html);
  }
}
//function for adding id's and shit like that.
function addToBox(boxName, type, typeValue){
  if(type == 'id'){
    $("."+boxName).attr('id', typeValue);
  }else if(type == 'class'){
    $("#"+boxName).addClass(typeValue);
  }
}
//function for positioning elements it only takes Id
function positionBox(boxName, selector1, value1, selector2, value2){
  if($('#'+boxName).length > 0){
    $("#"+boxName).css('position', 'absolute');
    $("#"+boxName).css(selector1, value1);
      if(selector2 && value2 === undefined){
        console.log("Undefined parram 2 at position_by_id function. Please ignore.")
      }else if(selector2 && value2 != undefined)
        $("#"+boxName).css(selector2, value2);
      }else if($('#'+boxName).length === 0){
         if($('.'+boxName).length > 0){
           $("."+boxName).css('position', 'absolute');
           $("."+boxName).css(selector1, value1);
             if(selector2 && value2 === undefined){
               console.log("Undefined parram 2 at position_by_id function. Please ignore.")
             }else if(selector2 && value2 != undefined)
               $("."+boxName).css(selector2, value2);
         }else{
           alert("Looks like a box you were referencing doesn't exist");
         }
      }
}
//function for really stupid Stupid-Designers
function helpME(){
  window.location = "https://github.com/Varun-Sethu/Stupid-Designers";
}
//change colour function
function boxColour(target, colour){
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
function destroyBox(target){
  if ($('#'+target).length > 0) {
    $('#'+target).remove();
  }else if($('#'+target).length === 0){
       if($('.'+target).length > 0){
          $('.'+target).remove();
       }else{
         alert("Looks like a box you were referencing doesn't exist");
       }
  }
}
//pause and run function function
function pauseAndRun(time, functionName, functionParramater){
  setTimeout(function(){
      functionName(functionParramater);
  },time);
}
//function for sizing boxes
function sizeBox(boxName, param1, param2){
  if($('#'+boxName).length > 0){
      if(param1 == 0){
        //do nothing
      }else{
        param1txt = param1+'%';
        $("#"+boxName).css('height', param1txt);
      }
        if(param2 === undefined){
          console.log("tomYum soup spilled over my keyboard");
        }else{
          param2txt = param2+'%';
          $("#"+boxName).css('width', param2txt);
        }
  }else if($('#'+boxName).length === 0){
    if($('.'+boxName).length > 0){
      if(param1 == 0){
        //do nothing
      }else{
        param1txt = param1+'%';
        $("."+boxName).css('height', param1txt);
      }
        if(param2 === undefined){
          console.log("tomYum soup spilled over my keyboard");
        }else{
          param2txt = param2+'%';
          $("."+boxName).css('width', param2txt);
        }
    }else{
      alert("Looks like a box you were referencing doesn't exist");
    }
  }
}
//function to nest two divs.
function createBoxInsideWith(boxName, propertyType, propertyValue){
  if($('#'+boxName).length > 0){
    if(propertyType == 'id'){
    var html = $('<div>', {id: propertyValue});
    $('#'+boxName).append(html);
  }else if(propertyType == 'class'){
    var html = $('<div>').addClass(propertyValue);
    $('#'+boxName).append(html);
  }
  }else if($('#'+boxName).length === 0){
        if($('.'+boxName).length > 0){

        }else{
          alert("Looks like a box you were referencing doesn't exist");
        }
  }
}
