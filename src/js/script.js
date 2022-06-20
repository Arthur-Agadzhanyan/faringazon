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
const navbarPoppupLinks = document.querySelectorAll('.navbar_poppup_link')

navbarPoppupLinks.forEach(link=>{
    link.addEventListener('click',()=>{
        navbarPoppup.classList.add('mb_bar_closed')
        navHeader.classList.remove('mb_header-active')
    })
})

navbarBtn.addEventListener('click',(e)=>{
    navbarPoppup.classList.toggle('mb_bar_closed')
    navHeader.classList.toggle('mb_header-active')
})

// MODAL
const questionBtns = document.querySelectorAll('.show_question_modal_btn')
const questionModal = document.getElementById("questionModal")

if(questionBtns.length && questionModal){
    const modalDiv = questionModal.querySelectorAll('.form__div')

    modalDiv.forEach(block=>{
        let blockInput = block.querySelector('.form__input')
        let blockLabel = block.querySelector('.form__label')

        blockInput.addEventListener('focus',(e)=>{
            blockInput.classList.add('focusedInput')
            blockLabel.classList.add('focusedLabel')
        })

        blockInput.addEventListener('blur',()=>{
            if(blockInput.value.length < 1){
                blockInput.classList.remove('focusedInput')
                blockLabel.classList.remove('focusedLabel')
            }
        })
    })

    questionBtns.forEach((btn)=>{
        btn.addEventListener('click',(e)=>{
            questionModal.style.display = "flex"
            setTimeout(()=>questionModal.style.opacity = "1",50)

            return
        })
    })
}

// CLOSE MODALS
const closeModal = document.querySelectorAll(".close_modal")

if(closeModal){
    closeModal.forEach(el=>{
        el.addEventListener("click",()=>{
            if(questionModal){
                questionModal.style.opacity = "0"
                document.body.style.overflow = "auto"
                setTimeout(()=>questionModal.style.display = "none",300)
            }
        })
    })
}