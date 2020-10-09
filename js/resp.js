burger =document.querySelector('.burger');
nav =document.querySelector('.navbar');
navList = document.querySelector('.nav-list');
rightNav =document.querySelector('.rightnav');

burger.addEventListener('click',()=>{

    rightNav.classList.toggle('v-nav');
    navList.classList.toggle('v-nav');
    nav.classList.toggle('h-nav-resp');

})