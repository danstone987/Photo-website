"use strict";


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