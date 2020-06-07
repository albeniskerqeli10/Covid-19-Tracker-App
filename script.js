var navbar = document.querySelector(".navbar");
window.onscroll = function () { 
    "use strict";
     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 )
 {
        navbar.classList.add("blue");
        navbar.classList.remove("bg-transparent");
        navbar.style.transition = "linear 0.3s";
        navbar.style.color = "white";

let b = document.querySelectorAll("#tab");
b.style.color = "white";
    } 

    else {
              navbar.classList.add("bg-transparent");

        navbar.classList.remove("yellow");
    }
};


let dark = document.querySelector(".appoint");

dark.addEventListener("click" , function() {
  let b  =document.querySelector("body");
  b.classList.add("dbb");
})