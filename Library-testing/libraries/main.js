import Typed from "typed.js";
import "./index.css"
import Glide from '@glidejs/glide'
import Aos from "aos";

import "./node_modules/wow.js/dist/wow"

const glideOption = {
    type:"carousel",
    PerView:3,
    gap:0,
    autoplay:2000
}

new Glide(".glide",glideOption).mount();

const typed = new Typed("#element",{
    strings :["My name is <u>zar ni naing</u>", "I'm web development"],
    typedSpeed: 50,
    startDelay:1000,
    backSpeed:100,
});

Aos.init();

import WOW from "wow.js"

new WOW({
    boxClass :"wow",
    animateClass: "animate__animated"
}).init()

