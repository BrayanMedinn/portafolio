const nav = document.querySelector("header");

const scrollFunction = () => {
    if(document.body.scrollTop > 20 
     || document.documentElement.scrollTop > 20){ nav.style.top = "-90px";}
    else { nav.style.top = "0px"; }
}

window.onscroll = () => {scrollFunction()};
