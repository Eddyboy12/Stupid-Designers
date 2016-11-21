function drawBox(type, typeValue){
  if(type == 'id'){
    var html = $('<div>', {id: typeValue});
    $('body').append(html);
  }else if(type == 'class'){
    var html = $('<div>').addClass(typeValue);
    $('body').append(html);
  }
}

function add(boxName, type, typeValue){
  if(type == 'id'){
    $("."+boxName).attr('id', typeValue);
  }else if(type == 'class'){
    $("#"+boxName).addClass(typeValue);
  }
}
