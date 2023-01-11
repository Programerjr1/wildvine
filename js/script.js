const navToggle = document.querySelector('.nav-open-btn'),
      navClose = document.querySelector('.nav-close-btn'),
      navMenu = document.querySelector('.navbar');
    
 if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('active')
    })
 }     
 if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('active')
    })
 }     

 const header = document.querySelector('.header');

 window.addEventListener('scroll', function () {
    window.scrollY >= 50 ? header.classList.add('active')
                         : header.classList.remove('active');
 })