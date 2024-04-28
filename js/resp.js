burger = document.querySelector('.burger');
hnavresp = document.querySelector('.h-nav-resp');
navList = document.querySelector('.nav-list');
joinus = document.querySelector('.join-us-button');

burger.addEventListener('click',()=>{
    navList.classList.toggle('v-class-resp');
    joinus.classList.toggle('v-class-resp');
    hnavresp.classList.toggle('h-nav-resp');
})