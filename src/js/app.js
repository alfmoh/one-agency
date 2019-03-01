var $ = require('jquery');
window.jQuery = window.$ = $;
require('velocity-animate');

let lastDescElement;

if (module.hot) {
  module.hot.accept();
}

onMouseOverAnimate(".nav-items__item-about", ".home-desc__about");
onMouseOutAnimate(".nav-items__item-about",".home-desc__about");

onMouseOverAnimate(".nav-items__item-work", ".home-desc__work");
onMouseOutAnimate(".nav-items__item-work",".home-desc__work");

onMouseOverAnimate(".nav-items__item-contact", ".home-desc__contact");
onMouseOutAnimate(".nav-items__item-contact",".home-desc__contact");


function onMouseOverAnimate(ele, descItem) {
  $(ele).on("mouseover", () => {
    if(lastDescElement)
      $(lastDescElement).addClass("content--hidden");
    $(".home-desc").append($(descItem))
    $(descItem).removeClass("content--hidden")

    animateDesc(".home-desc");
  })
}

function onMouseOutAnimate(ele,descItem) {
  $(ele).on("mouseout", () => {
    lastDescElement = descItem;
  })
}


function animateDesc(ele) {
  $(ele).velocity({
    opacity: 1,
  }, {
      duration: 1000,
    });
}

