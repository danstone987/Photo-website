"use strict";

function detectswipe(el,func) {
  swipe_det = new Object();
  swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  var min_x = 30;  //min x swipe for horizontal swipe
  var max_x = 30;  //max x difference for vertical swipe
  var min_y = 50;  //min y swipe for vertical swipe
  var max_y = 60;  //max y difference for horizontal swipe
  var direc = "";
  ele = document.getElementById(el);
  ele.addEventListener('touchstart',function(e){
    var t = e.touches[0];
    swipe_det.sX = t.screenX; 
    swipe_det.sY = t.screenY;
  },false);
  ele.addEventListener('touchmove',function(e){
    e.preventDefault();
    var t = e.touches[0];
    swipe_det.eX = t.screenX; 
    swipe_det.eY = t.screenY;    
  },false);
  ele.addEventListener('touchend',function(e){
    //horizontal detection
    if ((((swipe_det.eX - min_x > swipe_det.sX) || (swipe_det.eX + min_x < swipe_det.sX)) && ((swipe_det.eY < swipe_det.sY + max_y) && (swipe_det.sY > swipe_det.eY - max_y) && (swipe_det.eX > 0)))) {
      if(swipe_det.eX > swipe_det.sX) 
	  {
        imageNumber = getNextImageNumber(categoryNumber, imageNumber);
        window.location.href = buildURL("slide.html", imageNumber, categoryNumber);
	  }
      else {
        imageNumber = getPreviousImageNumber(categoryNumber, imageNumber);
        window.location.href = buildURL("slide.html", imageNumber, categoryNumber);
	  }
    }
    //vertical detection
    else if ((((swipe_det.eY - min_y > swipe_det.sY) || (swipe_det.eY + min_y < swipe_det.sY)) && ((swipe_det.eX < swipe_det.sX + max_x) && (swipe_det.sX > swipe_det.eX - max_x) && (swipe_det.eY > 0)))) {
      if(swipe_det.eY > swipe_det.sY) 
	  {
	    // down
	  }
      else 
	  {
	    // up
	  }
    }
    swipe_det.sX = 0; swipe_det.sY = 0; swipe_det.eX = 0; swipe_det.eY = 0;
  },false);  
}

document.addEventListener('keydown', function(event) 
{
    var imageNumber = getImageNumber(0);
    var categoryNumber = getCategoryNumber(0);    
    if(event.keyCode == 37) 
    {
        // left was pressed
        imageNumber = getPreviousImageNumber(categoryNumber, imageNumber);
        window.location.href = buildURL("slide.html", imageNumber, categoryNumber);
    }
    else if(event.keyCode == 39) 
    {
        // right was pressed
        imageNumber = getNextImageNumber(categoryNumber, imageNumber);
        window.location.href = buildURL("slide.html", imageNumber, categoryNumber);
    }
});

function setSize()
{
    var slideImage = document.getElementById("slideImage");
    resizeImg(slideImage, 50, 250);
}

window.onresize = function () 
{
    setSize();
};

window.onload = function() 
{
    // prep anything we need to
    setSize();
};

// Disable right click to prevent saving image
document.oncontextmenu = function(e)
{
    var target = (typeof e !="undefined")? e.target: event.srcElement;
    if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
    {
        return false;
    }
};