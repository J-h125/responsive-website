const headerEl = document.querySelector('header')
const scrollToTop = document.querySelector('.scrollToTop')

window.addEventListener('scroll',()=>{
    let height = headerEl.getBoundingClientRect().height;
    if((window.pageYOffset - height) > 800){
        if(!headerEl.classList.contains("sticky")){
            headerEl.classList.add("sticky")
        }
    }else {
        headerEl.classList.remove("sticky")
    }

    if(window.pageYOffset > 2000){
        scrollToTop.style.display = "block"
    }else {
        scrollToTop.style.display = "none"
    }
})

const glide = new Glide('.glide')
const captionEl = document.querySelectorAll('.slide-caption')
glide.on(["mount.after","run.after"],()=>{
    const caption = captionEl[glide.index];
    anime({
        targets:caption.children,
        opacity:[0,1],
        duration:400,
        easing:"linear",
        delay:anime.stagger(400,{start:300}),
        translateY:[anime.stagger([40,10]),0]
    })
})

glide.on("run.before",()=>{
    document.querySelectorAll(".slide-caption > *").forEach(el =>{
        el.style.opacity = 0;
    })
})

glide.mount();

const isotope = new Isotope(".cases",{
    itemSelector: ".case-item",
    layoutMode: "fitRows"
})

const filterBtns = document.querySelector(".filter-btns");

filterBtns.addEventListener('click',(e)=>{
    // const {target} = e;
    const filterOption = e.target.getAttribute('data-filter')
    // console.log(filterOption)
    if(filterOption){
        document.querySelectorAll(".filter-btn.active").forEach(btn=>btn.classList.remove('active'));
        e.target.classList.add('active')
        isotope.arrange({filter:filterOption})
    }
})

const staggeringOption = {
    delay:300,
    distance:"50px",
    duration:500,
    easing:"ease-in-out",
    origin:"bottom"
}
ScrollReveal().reveal(".feature",{...staggeringOption,interval:350}); 
ScrollReveal().reveal(".service-item",{...staggeringOption,interval:350}); 

const dataSectionEl = document.querySelector(".data-section")

ScrollReveal().reveal(".data-section",{
    beforeReveal: () => {
        anime({
            targets:".data-piece .num",
            innerHTML:el => {
                return [0,el.innerHTML]
            },
            duration:2000,
            round:1,
            easing:"easeInExpo"
        })
        dataSectionEl.style.backgroundPosition =`center calc(50% - ${dataSectionEl.getBoundingClientRect().bottom / 5}px)`
    }
})


window.addEventListener("scroll",()=>{
    const bottom = dataSectionEl.getBoundingClientRect().bottom;
    const top = dataSectionEl.getBoundingClientRect().top;

    if(bottom >= 0 && top <= window.innerHTML){
        dataSectionEl.style.backgroundPosition =`center calc(50% - ${bottom / 5}px)`
    }
})

const scroll = new SmoothScroll('nav a[href*="#"], .scrollToTop a[href*="#"]',{
    header:"header",
    offset:80
})
//?????? ????????????
document.addEventListener('scrollStart',()=>{
    if(headerEl.classList.contains('open')){
        headerEl.classList.remove("open")
    }
})

const exploreBtns = document.querySelectorAll('.explore-btn')
exploreBtns.forEach(exploreBtn => {
    exploreBtn.addEventListener('click',()=>{
        scroll.animateScroll(document.querySelector('#about-us'))
    })
})

//???????????? 
const burger = document.querySelector(".burger")

burger.addEventListener('click',()=>{
    const header = document.querySelector('header')
    header.classList.toggle('open')
})   


