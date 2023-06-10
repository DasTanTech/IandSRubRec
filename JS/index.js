const mobNavBtn = document.getElementById('MobileNavMenuBtn');
const mobNavCloseBtn = document.getElementById('MobileNavCloseBtn');
const mobNavSection = document.getElementById('MobileNavSection');

mobNavBtn.addEventListener('click',(e) => {
  e.preventDefault;

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollToTop();
    setTimeout(enableMobNav, 1000);
  } else {
    enableMobNav();
  }
})

function enableMobNav() {
mobNavSection.classList.replace('hidden','flex');
document.body.classList.replace('overflow-auto','overflow-hidden');
}

mobNavCloseBtn.addEventListener('click', (e) => {
    e.preventDefault;
    mobNavSection.classList.remove('flex');
    mobNavSection.classList.add('hidden');
    document.body.classList.replace('overflow-hidden','overflow-auto');
})


var navbar = document.getElementById("NavbarHome");
window.addEventListener("scroll", function() {

    var headerLogo = this.document.getElementById("HeaderLogo");
    var headerInfo = this.document.getElementById("HeaderInfo");
    var headerInfoSec = this.document.getElementById("HeaderInfoSec");
  
    if (window.pageYOffset > 0) {
        if(window.screen.width > 425)
        {
          headerLogo.src = '/ASSETS/LOGO-HORI.png';
        }
        console.log(window.screen.width);
        navbar.classList.add("shadow-lg");
        navbar.classList.add("fixed");
        navbar.classList.add("top-0");
        headerLogo.classList.replace("md:w-48","md:w-96");
        headerInfo.classList.replace("hidden","flex");
        headerInfoSec.classList.replace("w-48","w-96");
      } else {
        if(window.screen.width > 425)
        {
          headerLogo.src = '/ASSETS/HEADER-LOGO.png';
        }
        navbar.classList.remove("shadow-lg");
        navbar.classList.remove("fixed");
        navbar.classList.remove("top-0");
        headerLogo.classList.replace("md:w-96","md:w-48");
        headerInfo.classList.replace("flex","hidden");
        headerInfoSec.classList.replace("w-96","w-48");
      }
});



window.onscroll = function() {
    scrollFunction();
};
  
function scrollFunction() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollToTopButton.classList.replace('hidden','flex');
    } else {
      scrollToTopButton.classList.replace('flex','hidden');
    }
}
  
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
  
  