window.onscroll = function() {myFunction()};

let header = document.getElementById("scrool-fix");
let header2=document.getElementById("scrool-fix-2");
let sticky = header.offsetTop;
let sticky2 = header.offsetTop;

function myFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
    if (window.pageYOffset > sticky2) {
        header2.classList.add("sticky2");
    } else {
        header2.classList.remove("sticky2");
    }
}