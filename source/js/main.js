import { ieFix } from "./utils/ie-fix";
import { iosVhFix } from "./utils/ios-vh-fix";

import { initModals } from "./modules/init-modals";
import { swiper, newsSlider } from "./modules/init-slider";
import { mask } from "./modules/init-imask";
import { move } from "./modules/init-moveto";
import { menu } from "./modules/init-menu";
// Utils
// ---------------------------------

ieFix();
iosVhFix();

// Modules
// ---------------------------------

initModals();
move();
menu();
// swiper();
