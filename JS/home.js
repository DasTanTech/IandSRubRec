var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    
    var sImages = document.getElementsByClassName("HCICont");

    for (i = 0; i < sImages.length; i++) {
        sImages[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > sImages.length) {slidePosition = 1}
    sImages[slidePosition-1].style.display = "block";
    setTimeout(SlideShow, 2000);   
}