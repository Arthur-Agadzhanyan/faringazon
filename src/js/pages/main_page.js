// INTRO
const vanilBtn = document.querySelector('#main_page-intro_slider-vanil_btn')
const raspberryBtn = document.querySelector('#main_page-intro_slider-raspberry_btn')

const mainPageIntroSlider = new Swiper('#main_page-intro_slider', {
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
    mainPageIntroSlider.slideTo(0)

    raspberryBtn.classList.remove('btns__item-raspberry-active')
    vanilBtn.classList.add('btns__item-vanil-active')
})

raspberryBtn.addEventListener('click',()=>{
    mainPageIntroSlider.slideTo(1)

    vanilBtn.classList.remove('btns__item-vanil-active')
    raspberryBtn.classList.add('btns__item-raspberry-active')
})

// WARNING
const mainPageFaringazonWarning = document.querySelector('#main_page-faringazon_warning')
const mainPageFaringazonWarningCloseBtn = mainPageFaringazonWarning.querySelector('.faringazon_warning__btn')

mainPageFaringazonWarningCloseBtn.addEventListener('click',()=>{
    mainPageFaringazonWarning.style = 'opacity: 0;'

    setTimeout(()=>{
        mainPageFaringazonWarning.style = 'display: none;'
    },1000)
})

// ARTICLES

const mainPageArticlesSlider = new Swiper('#main_page-articles_slider', {
    speed: 1500,
    slidesPerView: 3.5,
    spaceBetween: 24
});