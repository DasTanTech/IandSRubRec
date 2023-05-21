const mobNavBtn = document.getElementById('MobileNavMenuBtn');
const mobNavCloseBtn = document.getElementById('MobileNavCloseBtn');
const mobNavSection = document.getElementById('MobileNavSection');

mobNavBtn.addEventListener('click',(e) => {
    e.preventDefault;
    mobNavSection.classList.replace('hidden','flex');
    document.body.classList.replace('overflow-auto','overflow-hidden');
})

mobNavCloseBtn.addEventListener('click', (e) => {
    e.preventDefault;
    mobNavSection.classList.remove('flex');
    mobNavSection.classList.add('hidden');
    document.body.classList.replace('overflow-hidden','overflow-auto');
})


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

window.addEventListener("scroll", function() {
    var navbar = document.getElementById("NavbarHome");
    var mainSection = document.getElementById("BodyHome");
  
    if (window.pageYOffset > 0) {
        navbar.classList.add("shadow-lg");
        navbar.classList.remove("navbar-hidden");
        mainSection.classList.remove("mt-16");
      } else {
        navbar.classList.remove("shadow-lg");
        navbar.classList.add("navbar-hidden");
        mainSection.classList.add("mt-16");
      }
  });