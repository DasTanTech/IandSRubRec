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


var navbar = document.getElementById("NavbarHome");
window.addEventListener("scroll", function() {

    var headerLogo = this.document.getElementById("HeaderLogo");
    var headerInfo = this.document.getElementById("HeaderInfo");
    var headerInfoSec = this.document.getElementById("HeaderInfoSec");
  
    if (window.pageYOffset > 0) {
        navbar.classList.add("md:shadow-lg");
        navbar.classList.add("md:fixed");
        navbar.classList.add("md:top-0");
        headerLogo.classList.replace("md:w-48","md:w-32");
        headerInfo.classList.replace("hidden","flex");
        headerInfoSec.classList.replace("w-48","w-96");
        

      } else {
        navbar.classList.remove("md:shadow-lg");
        navbar.classList.remove("md:fixed");
        navbar.classList.remove("md:top-0");
        headerLogo.classList.replace("md:w-32","md:w-48");
        headerInfo.classList.replace("flex","hidden");
        headerInfoSec.classList.replace("w-96","w-48");
        
      }
  });