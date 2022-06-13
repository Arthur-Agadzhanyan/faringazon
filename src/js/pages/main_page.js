const vanilBtn = document.querySelector('#main_page-intro_slider-vanil_btn')
const raspberryBtn = document.querySelector('#main_page-intro_slider-raspberry_btn')

const mainPagePartnersSlider = new Swiper('#main_page-intro_slider', {
    speed: 1500,
    autoplay: {
        delay: 3000
    },
    on: {
        slideChange: function (swiper) {
            let activeIndex = swiper.realIndex;
            if(activeIndex){
                vanilBtn.classList.remove('btns__item-vanil-active')
                raspberryBtn.classList.add('btns__item-raspberry-active')
            }else{
                raspberryBtn.classList.remove('btns__item-raspberry-active')
                vanilBtn.classList.add('btns__item-vanil-active')
            }
        }
    }
});

vanilBtn.addEventListener('click',()=>{
    mainPagePartnersSlider.slideTo(0)

    raspberryBtn.classList.remove('btns__item-raspberry-active')
    vanilBtn.classList.add('btns__item-vanil-active')
})

raspberryBtn.addEventListener('click',()=>{
    mainPagePartnersSlider.slideTo(1)

    vanilBtn.classList.remove('btns__item-vanil-active')
    raspberryBtn.classList.add('btns__item-raspberry-active')
})