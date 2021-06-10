
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
    console.log('111')
    const {target} = e;
    const filterOption = target.getAttribute('data-filter')
    if(filterOption){
        document.querySelectorAll(".filter-btn.active").forEach(btn=>btn.classList.remove('active'));
        target.classList.add('active')
        isotope.arrange({filter:filterOption})
    }
})
