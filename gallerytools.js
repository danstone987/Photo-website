"use strict";

var imageTag = "image=";
var categoryTag = "category=";
var autoTag = "auto=";

function getVariable(defaultVal, tagStr)
{
  var searchStr = window.location.search;
  var index = searchStr.indexOf(tagStr);
  if (index >= 0)
  {
    return searchStr.substring(index+tagStr.length);
  }
  else return(defaultVal);
}

function getImageNumber(defaultVal)
{
  return(parseInt(getVariable(defaultVal, imageTag)));
}

function getCategoryNumber(defaultVal)
{
  return(parseInt(getVariable(defaultVal, categoryTag)));
}

function getAutoNumber(defaultVal)
{
  return(parseInt(getVariable(defaultVal, autoTag)));
}

function buildURL(href, imageNumber, categoryNumber)
{
  var URL;
  
  URL = href + "?" + imageTag + imageNumber;
  if (categoryNumber > 0)
    URL = URL + "&" + categoryTag + categoryNumber;
  var autoTime = getAutoNumber(0);
  if (autoTime > 0)
    URL = URL +  "&" + autoTag + autoTime;
  return(URL);
}

function setImageVisible(visible) {
    var img = document.getElementById("slideImage");
    img.style.visibility = (visible ? 'visible' : 'hidden');
}
    
function getNextUrl()
{
  var newURL = "";
  var categoryNumber = getCategoryNumber(0);
  var imageNumber = getImageNumber(0);
  
  imageNumber = getNextImageNumber(categoryNumber, imageNumber);
  if (imageNumber > 0)
    newURL = buildURL("slide.html", imageNumber, categoryNumber);
  return(newURL);
}

function doArrow(arrowImageNumber, arrowCategoryNumber, arrow)
{
  if (arrowImageNumber > 0)
  {
    document.write("<td><a href=");
    document.write(buildURL("slide.html", arrowImageNumber, arrowCategoryNumber));
    document.write(">");
    document.write("<img width=31 height=31 src = '" + arrow + "'</a></TD>");
  }
  else 
    document.write("<TD WIDTH=36></TD>");
}
    
function showThumbnail(thumbnailFilename, categoryNumber, categoryName, numberPhotos)
{
  document.write("<td>");
  document.write("<table border=0 cellpadding=4 cellspacing=1>");
  document.write("<tr>");
  document.write("<td align=center><a href = slide.html?" + categoryTag + categoryNumber + " class=\"tooltip\"");
  document.write("><img src='photos\\thumbnails\\" + thumbnailFilename + ".jpg' border=0><span>Currently " + numberPhotos + "&nbsp;images" + "</span></td>");
  document.write("</tr>");
  document.write("<tr>");
  document.write("<td align=center><a href = slide.html?" + categoryTag + categoryNumber + " class=\"tooltip\"");
  document.write(">" + categoryName + "<span>Currently " + numberPhotos + "&nbsp;images" + "</span></a></td>");
  document.write("</tr>");
  document.write("</table>");
  document.write("</td>");
}

function showFooter(url, urlDescription)
{
  document.write("<footer>");
  document.write("<hr><br>");

  document.write("<td>");
  document.write("<center>");
  document.write("<table>");
  document.write("<td align=center width=400>");
  document.write("<a href=" + url + "><B>" + urlDescription + "</b></a>");
  document.write("</td>");
  document.write("<td align=center width=400>");
  showCopyright();
  document.write("</td>");
  document.write("<td align=center width=400>");
  document.write("<a href = mailto:photo@dan-stone.com>email</a>");
  document.write("</td>");
  document.write("</table>");
  document.write("</center>");
  document.write("</td>");

  document.write("<br><hr>");
  document.write("</footer>");
  }
  

function resizeImg(img, widthAlreadyUsed, heightAlreadyUsed) 
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

    if (aspectW > aspectH) 
    {
        img.width = maxWidth;
        img.height = height / aspectW;
    }
    else 
    {
        img.height = maxHeight;
        img.width = width / aspectH;
    }
}
