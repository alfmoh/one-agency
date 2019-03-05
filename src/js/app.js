var $ = require('jquery');
window.jQuery = window.$ = $;
require('velocity-animate');
require('velocity-ui-pack');

let lastDescElement;

// if (module.hot) {
//   module.hot.accept();
// }

onMouseOverAnimate(".nav-items__item-about", ".home-desc__about");
onMouseOutAnimate(".nav-items__item-about", ".home-desc__about");

onMouseOverAnimate(".nav-items__item-work", ".home-desc__work");
onMouseOutAnimate(".nav-items__item-work", ".home-desc__work");

onMouseOverAnimate(".nav-items__item-contact", ".home-desc__contact");
onMouseOutAnimate(".nav-items__item-contact", ".home-desc__contact");


function onMouseOverAnimate(ele, descItem) {
  $(ele).on("mouseover", () => {
    if (lastDescElement)
      $(lastDescElement).addClass("content--hidden");
    $(".home-desc").append($(descItem));

    $(descItem).removeClass("content--hidden");


    animateDesc(descItem);
  })
}

function onMouseOutAnimate(ele, descItem) {
  $(ele).on("mouseout", () => {
    lastDescElement = descItem;
  })
}

const navLogo = $(".nav-logo__logo");
const navDot = $(".nav-logo__dot");

var loadingSequence = [
  {
    e: navLogo,
    p: { translateX: "-15px" },
    o: {
      duration: 800
    }
  },
  {
    e: navDot,
    p: { translateY: "-25px" },
    o: { duration: 200 }
  },
  {
    e: navDot,
    p: { translateX: "-208px" },
    o: { duration: 200 }
  },
]

var unloadingSequence = [
  {
    e: navDot,
    p: { translateY: "0px" },
    o: { duration: 200 }
  },
  {
    e: navDot,
    p: { translateX: "0px" },
    o: { duration: 200 }
  },
  {
    e: navLogo,
    p: { translateX: "15px" },
    o: {
      duration: 800
    }
  }
]



$(navLogo).on("mouseover", () => {
  $.Velocity.RunSequence(loadingSequence);
})

$(navLogo).on("mouseout", () => {
  $.Velocity.RunSequence(unloadingSequence);
})

$(".home-desc__contact-btn").on("click",e=>{
  e.preventDefault();
})

function animateDesc(ele) {
  $(ele).velocity({
    opacity: 1,
  }, {
      duration: 1000,
    });
}

