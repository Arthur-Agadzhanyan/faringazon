if(document.querySelector('.news_page')){
    const singleNewsSlider = createSlider('#single_news_page-slider',{
        spaceBetween:18,
        speed: 1500,
        loop: true,
        navigation:{
            nextEl: '#single_news_page-slider_next',
            prevEl: '#single_news_page-slider_prev'
        },
        breakpoints:{
            320:{
                slidesPerView: 1.1,
            },
            350:{
                slidesPerView: 1.2,
            },
            500:{
                slidesPerView: 1.4,
            },
            800:{
                slidesPerView: 1,
            },
        }
    })
}