"use strict";

function showCopyright()
{
  var date = new Date();
  var year = date.getFullYear().toString();
    
  document.write("All photographs Copyright &copy; " + year + " Dan Stone ");
}   

 // YETTODO - combine these next two into 1
 function getResizeImg(img, widthAlreadyUsed, heightAlreadyUsed) 
{
    var maxWidth = 0;
    var maxHeight = 0;
    // get the dimensions (cross-browser issues)
    if (window.innerHeight) 
    {
       maxWidth = window.innerWidth;
       maxHeight = window.innerHeight;
    } 
    else if (document.documentElement && document.documentElement.clientHeight) 
    {
        maxWidth = document.documentElement.clientWidth;
        maxHeight = document.documentElement.clientHeight;
    } 
    else if (document.body) 
    {
        maxWidth = document.body.clientWidth;
        maxHeight = document.body.clientHeight;
    }
    // Take space needed by other elements into account
    maxHeight = Math.max(maxHeight - heightAlreadyUsed, 0);
    maxWidth = Math.max(maxWidth - widthAlreadyUsed, 0);
    
    // Keep max height no larger than width so horizontals and verticals will be same height
    //maxHeight = Math.min(maxWidth, maxHeight);
    
    // Limit max height to file height since that is constant and can't be exceeded
    maxHeight = Math.min(maxHeight, img.naturalHeight);
    
    var width = img.naturalWidth;
    var height = img.naturalHeight;
    var aspectW = width / maxWidth;
    var aspectH = height / maxHeight;

    var newWidth = 0;
    var newHeight = 0;
    if (aspectW > aspectH) 
    {
        newWidth = maxWidth;
        newHeight = height / aspectW;
    }
    else 
    {
        newHeight = maxHeight;
        newWidth = width / aspectH;
    }
    return [newWidth, newHeight];
}

  

function showFirstImage()
{
    var mainImage = new Image();
    var imageFile = getImageFullFilename(1);
    mainImage.src = imageFile;
    
    var newDimensions = getResizeImg(mainImage, 500, 200);

    document.write("<td><a href=\"thumb.html\"><img src=\"photos\\images\\treearchrindge.jpg\" alt=\"Bare Branches\" height = \"" + newDimensions[0] + "\" width = \"" + newDimensions[1] + "\" id=\"mainImage\" border=\"0\" align=\"left\"/></a></td>");
}
