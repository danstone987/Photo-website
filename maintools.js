"use strict";

var imageIndex = 1;

function setSize()
{
    var mainImage = document.getElementById("mainImage");
    resizeImg(mainImage, 500, 200);
}

// now call it when the window is resized.
window.onresize = function () 
{
    setSize();
};

function preloadNextImage()
{
    if (imageIndex < getNumberOfPhotos())
    {
        var nextImage = new Image();
        var imageFile = getImageFullFilename(imageIndex+1);
        nextImage.src = imageFile;
    }
}

window.onload = function() 
{
    // prep anything we need to
    setSize();

    preloadNextImage();
};

function changeMainImage()
{
    imageIndex++;
    if (imageIndex > getNumberOfPhotos())
    {
        imageIndex = 1;
    }
    var imageFile = getImageFullFilename(imageIndex);
    var mainImage = document.getElementById("mainImage");
    resizeImg(mainImage, 500, 200);
    mainImage.setAttribute("src", imageFile);
    mainImage.setAttribute("alt", getTitle(imageIndex));
    
    preloadNextImage();
}

setInterval(changeMainImage, 5000); 

// Disable right click to prevent saving image
document.oncontextmenu = function(e)
{
    var target = (typeof e !="undefined")? e.target: event.srcElement;
    if (target.tagName == "IMG" || (target.tagName == 'A' && target.firstChild.tagName == 'IMG'))
    {
        return false;
    }
};