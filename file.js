let searchform = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchform.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
}

window.onscroll = () =>{
    searchform.classList.remove('active');
    navbar.classList.remove('active');

    if(window.scrollY > 30){
        document.querySelector('header').classList.add('header-active');
    }
    else{
        document.querySelector('header').classList.remove('header-active');
    }
}