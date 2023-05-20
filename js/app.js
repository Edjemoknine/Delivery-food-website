let list = document.querySelector('#nav__menu');
let menu = document.querySelector('#nav__toogle');
let link = document.querySelector('.nav__link');
let header=document.querySelector('#header');

//========== Active and Show Menu ==============

menu.addEventListener('click',()=>{
    list.classList.toggle('show');
});

// link.addEventListener('click',()=>{
//     list.classList.remove('show');
// });


// =============== Active Shadow for Header=======

window.onscroll= () =>{
    list.classList.remove('show');
    
   if(window.scrollY>=80){ header.classList.add('sticky');
   }else{header.classList.remove('sticky')}

};

// ============= Show And ADD Scrollup btn=============

let scrollup=document.querySelector('.scrollup');
     window.addEventListener('scroll',()=>{
    if(this.scrollY>=560){
        scrollup.classList.add('show-scroll-btn');
    }else{
        scrollup.classList.remove('show-scroll-btn');
    }
});


// ============== Remove Active Link ===================
let alink=document.querySelectorAll('.nav__link');

function addlink(){

    alink.forEach(a => {
        a.classList.remove('active-link');
    });
    this.classList.add('active-link');
};

alink.forEach(a=>{
    a.addEventListener('click',addlink);
});

// ============Change Active link when scroll=======================================

// let sections=document.querySelectorAll('section[id]');

// function scrollActive(){
//     let scrollY = window.pageYOffset;

//     sections.forEach(current =>{
//         let sectionHeight=current.offsetHeight;
//         let sectionTop=current.offsetTop - 50;
//         let sectinId=current.getAttribute('id');

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectinId +']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectinId +']').classList.remove('active-link')
//         }
//     })
// }

// window.addEventListener('scroll',scrollActive);

// ==================== change theme =====================

let change=document.querySelector('#btn-theme');

change.addEventListener('click',()=>{
    change.classList.toggle('change-theme');
    document.body.classList.toggle('dark-theme');
});