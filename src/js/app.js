var $ = require('jquery');
window.jQuery = window.$ = $;
require('velocity-animate');

import * as home from "./homepage-desc";

if (module.hot) {
  module.hot.accept();
}

onMouseOverAnimate(".nav-items__item-about", home.about);
onMouseOutAnimate(".nav-items__item-about");

onMouseOverAnimate(".nav-items__item-work", home.work);
onMouseOutAnimate(".nav-items__item-work");

onMouseOverAnimate(".nav-items__item-contact", home.contact);
onMouseOutAnimate(".nav-items__item-contact");


/* Helper functions */

function onMouseOverAnimate(ele, content) {
  $(ele).on("mouseover", () => {
    $(".home-desc").html(content)
    animateDesc(".home-desc");
  })
}

function onMouseOutAnimate(ele) {
  $(ele).on("mouseout", () => {
    deAnimateDesc(".home-desc");
  })
}

function deAnimateDesc(ele) {
  $(ele).removeClass("home-desc__visible")
}

function animateDesc(ele) {
  $(ele).velocity({
    opacity: 1,
  }, {
      duration: 500,
    });
  $(ele).addClass("home-desc__visible")
}

