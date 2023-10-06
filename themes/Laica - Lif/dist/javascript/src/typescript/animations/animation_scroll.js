import { gsap } from "gsap";
var gsapInit = function () {
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
};
export default gsapInit;
