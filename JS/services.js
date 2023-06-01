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

const servicesType1 = document.getElementById('SST1');
const servicesType2 = document.getElementById('SST2');
const serviceTyleTitleArr = ['Tire Shred with Embedded Steel - 50x100 mm','Tire Shred with Embedded Steel - 100x100 mm'];
const serviceTyleDescArr = ["Our company is actively seeking tire shred with embedded steel measuring 50 by 100 mm. This specific size allows for efficient steel extraction and optimal recycling of the rubber material. By selling us your tire shred of this size, you contribute to the sustainable management of rubber waste and the preservation of our environment. We ensure that the steel is carefully extracted and properly recycled, while the remaining rubber is processed into eco-friendly products.",
"We are interested in purchasing tire shred with embedded steel in the dimensions of 100 by 100 mm. This size provides an excellent opportunity for the recovery of valuable steel and the effective recycling of rubber. By choosing to sell your tire shred of this size to us, you play an integral role in promoting a greener future and reducing waste. Our advanced recycling technologies allow us to extract the steel and transform the rubber into various sustainable products."]
const serviceTypeTitle = document.getElementById('SSTTitle');
const serviceTypeDesc = document.getElementById('SSTDesc');

setServiceActive(servicesType1);
serviceTypeTitle.innerText = serviceTyleTitleArr[0];
serviceTypeDesc.innerHTML = serviceTyleDescArr[0];


servicesType1.addEventListener('click',(e) => {
  e.preventDefault();
  setServiceActive(servicesType1);
  setServiceNActive(servicesType2);
  serviceTypeTitle.innerText = serviceTyleTitleArr[0];
  serviceTypeDesc.innerHTML = serviceTyleDescArr[0];
})

servicesType2.addEventListener('click',(e) => {
  e.preventDefault();
  setServiceActive(servicesType2);
  setServiceNActive(servicesType1);
  serviceTypeTitle.innerText = serviceTyleTitleArr[1];
  serviceTypeDesc.innerHTML = serviceTyleDescArr[1];
})

function setServiceActive(act) {
  act.classList.replace('bg-white','bg-colorDark');
  act.classList.replace('text-black','text-white');
}

function setServiceNActive(act) {
  act.classList.replace('bg-colorDark','bg-white');
  act.classList.replace('text-white','text-black');
}

const servicesLayout1 = document.getElementById('SSLT1');
const servicesLayout2 = document.getElementById('SSLT2');
const servicesLayoutD1 = document.getElementById('SSDT1');
const servicesLayoutD2 = document.getElementById('SSDT2');

servicesLayoutD1.addEventListener('click',(e) => {
  e.preventDefault();

  servicesLayout1.classList.replace('hidden','flex');
  servicesLayout1.classList.remove('cursor-pointer');

  servicesLayout2.classList.replace('flex','hidden');
  servicesLayout2.classList.add('cursor-pointer');
})

servicesLayoutD2.addEventListener('click',(e) => {
  e.preventDefault();

  servicesLayout1.classList.replace('flex','hidden');
  servicesLayout1.classList.add('cursor-pointer');

  servicesLayout2.classList.replace('hidden','flex');
  servicesLayout2.classList.remove('cursor-pointer');

  
})