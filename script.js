/*jslint browser: true */
var whamSpeed = 2;

var minSize = 25;
var maxSize = 40;
var whamSize = minSize;
var direction = 1;
function whamIter() {
    whamSize += direction*whamSpeed;
    if(whamSize > maxSize) {
        whamSize = maxSize;
        direction = -1;
    }
    else if(whamSize < minSize){
        whamSize = minSize;
        direction = 1;
    }
    document.getElementById("whamText").style.fontSize = whamSize + "px";
}

var whamInterval = setInterval(whamIter, 1000/10);