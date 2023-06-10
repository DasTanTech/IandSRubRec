const servicesHeroImg = document.getElementById('servicesHero');

if(window.screen.width > 425)
{
  servicesHeroImg.src = '/ASSETS/SERVICES-S1-W.jpg';
}
else
{
  servicesHeroImg.src = '/ASSETS/SERVICES-S1-M.jpg';
}






var slidePosition = 0;
SlideShow();

function SlideShow() {
    var i;
    
    var sSlides = document.getElementsByClassName("SSCont");
    var sSContents = document.getElementsByClassName("SSCont2");

    for (i = 0; i < sSlides.length; i++) {
      sSlides[i].style.display = "none";
      sSContents[i].style.display = "none";
    }
    slidePosition++;
    if (slidePosition > sSlides.length) {slidePosition = 1}
    sSlides[slidePosition-1].style.display = "flex";
    sSContents[slidePosition-1].style.display = "flex";
    setTimeout(SlideShow, 4000);   
}

