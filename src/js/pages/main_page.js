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

    spaceBetween: 24,
    breakpoints:{
        320:{
            slidesPerView: 1.2,
        },
        600:{
            slidesPerView: 1.4,
        },
        700:{
            slidesPerView: 1.8,
        },
        1000:{
            slidesPerView: 2.4,
        },
        1200:{
            slidesPerView: 2.8,
        },
        1500:{
            slidesPerView: 3.5,
        }
    }
});

// USAGE
function usageScript(){
    const usageAdultBtn = document.querySelector('#usage_btn_adult')
    const usageKidsBtn = document.querySelector('#usage_btn_kids')

    const usageAdultList = document.querySelector('#usage_adult_list')
    const usageKidsList = document.querySelector('#usage_kids_list')

    usageAdultBtn.addEventListener('click',(e)=>{
        e.target.classList.add('button-mans-active')
        usageKidsBtn.classList.remove('button-kids-active')

        usageAdultList.classList.remove('dn')
        usageKidsList.classList.add('dn')
    })

    usageKidsBtn.addEventListener('click',(e)=>{
        e.target.classList.add('button-kids-active')
        usageAdultBtn.classList.remove('button-mans-active')

        usageAdultList.classList.add('dn')
        usageKidsList.classList.remove('dn')
    })
}
usageScript()