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

//
// const navbarBtn = document.getElementById('navbar_btn')
// const navbarPoppup = document.getElementById('navbar_poppup')
//
// navbarBtn.addEventListener('click',(e)=>{
//     navbarPoppup.classList.toggle('navbar_poppup-closed')
// })