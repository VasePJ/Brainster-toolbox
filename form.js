function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    let backdrop = document.getElementById('backdrop');
    backdrop.setAttribute('style', 'z-index: 900;');
}
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    let backdrop = document.getElementById('backdrop');
    backdrop.removeAttribute('style', 'z-index: 900;');
}
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        let navRgba = document.getElementById("navRgba");
        if (navRgba !== null) {
            navRgba.classList.add("opaqueBackground");
        }
    } else {
        let navRgba = document.getElementById("navRgba");
        if (navRgba !== null) {
            navRgba.classList.remove("opaqueBackground");
        }
    }
}
