let navList = document.querySelector('#nav-list');
let menuOpen = document.querySelector('.menuopen');
let crossBtn = document.querySelector('.cross');

menuOpen.addEventListener("click", function(){
    navList.style.opacity = '100%'
    menuOpen.style.display = 'none'
});
crossBtn.addEventListener('click', ()=>{
    navList.style.opacity = '0'
    setTimeout(()=>{
        menuOpen.style.display = 'block'
    }, 400)
})