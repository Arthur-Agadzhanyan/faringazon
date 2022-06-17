@@include('webpTest.js');
@@include('swiper.js');

function createSlider(sliderSelector, userOptions={}) {
    const sliderOptions = {
        slidesPerView: 1,
        speed: 4000,
        loop: true
    }

    return new Swiper(sliderSelector, {...sliderOptions, ...userOptions});
}

@@include('pages/main_page.js');

AOS.init()

const navbarBtn = document.getElementById('navbar_btn')
const navbarPoppup = document.getElementById('navbar_poppup')
const navHeader = document.getElementById('nav_header')

navbarBtn.addEventListener('click',(e)=>{
    navbarPoppup.classList.toggle('mb_bar_closed')
    navHeader.classList.toggle('mb_header-active')
})