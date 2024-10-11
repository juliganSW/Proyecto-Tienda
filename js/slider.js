var slideImg = document.getElementById("slideImg");

var images = new Array(
    "images/img1.jpg",
    "images/img2.jpg",
    "images/img3.jpg"
);
var len = images.length;
var i = 0;

function slider(){
    if(i > len-1 ){
        i=0;
    }
    slideImg.src = images[i];
    i++;
    setTimeout('slider()', 3000);
}