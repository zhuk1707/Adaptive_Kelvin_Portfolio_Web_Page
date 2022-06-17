const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img ');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "assets/images/icons/nav_close.svg"
    } else {
        navBtnImg.src = "assets/images/icons/nav_open.svg"
    }
}

/*Initialise Animate On Scroll Library*/
AOS.init({
    once: true
});