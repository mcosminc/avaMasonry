const btnHamburger = document.querySelector('#btnHamburger')
const header = document.querySelector('.header')


btnHamburger.addEventListener("click" , function() {
    if(btnHamburger.classList.contains("open")) {
        btnHamburger.classList.remove("open");
        header.classList.remove("open");
    }   else {
        btnHamburger.classList.add("open");
        header.classList.add("open");
    }

});