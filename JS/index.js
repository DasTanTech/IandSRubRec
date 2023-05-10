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