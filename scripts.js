function addInView() {
  const sections = document.querySelectorAll("section");
  for (let i = 0; i < sections.length; i++) {
    let topSide = sections[i].getBoundingClientRect().top;
    let viewportHeight = document.documentElement.clientHeight;
    if (topSide <= viewportHeight - viewportHeight / 5) {
      sections[i].setAttribute("class", "in-viewport");
    }
  }
}

window.addEventListener("scroll", addInView);

// const profileImage = document.querySelector(".profile-image-container > img");
// profileImage.addEventListener("mouseover", () => {
//   const imageBackground = document.querySelector(".profile-image-background");
//   imageBackground.setAttribute("id", "image-background-hovered");
// });

// profileImage.addEventListener("mouseout", () => {
//   const imageBackground = document.querySelector(".profile-image-background");
//   imageBackground.removeAttribute("id");
// });

const slideshowImages = document.querySelectorAll(".slideshow-image");
const slideshowNavBarDots = document.querySelectorAll(
  ".slideshow-nav-bar > div"
);

let currentIndex = 0;
let prevIndex = null;

slideshowImages.forEach((slide, index) => {
  if (index > currentIndex) {
    slide.style.display = "none";
  }
});

// const changeSlide = () => {
//   slideshowImages.forEach((slide, index) => {
//     if (index < currentIndex || index > currentIndex) {
//       slide.style.display = "none";
//     } else {
//       slide.style.display = "inline-block";
//     }
//   });
// };

// for (let i = 0; i < slideshowNavBarDots.length; i++) {
//   slideshowNavBarDots[i].addEventListener("click", () => {
//     if (prevIndex !== null) {
//       slideshowNavBarDots[prevIndex].removeAttribute("id");
//     }
//     slideshowNavBarDots[i].setAttribute("id", "nav-dot-clicked");
//     console.log(i);
//     currentIndex = i;
//     changeSlide();
//     prevIndex = i;
//   });
// }

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  speed: 400,
  centeredSlides: true,
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },

  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  // zoom: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// let hamburgerButton = document.querySelector(".hamburger > img");
let hamburgerButton = document.querySelector("#nav-icon3");
let navDropdown = document.querySelector(".nav-dropdown");
let introSection = document.querySelector(".intro");

let dropdownToggle = false;

hamburgerButton.addEventListener("click", () => {
  if (dropdownToggle === false) {
    navDropdown.style.display = "block";
    hamburgerButton.setAttribute("class", "open");
    introSection.style.marginTop = "2rem";
    dropdownToggle = true;
  } else {
    navDropdown.style.display = "none";
    hamburgerButton.removeAttribute("class", "open");
    introSection.style.marginTop = "16vh";
    dropdownToggle = false;
  }
});

// $(document).ready(function () {
//   $("#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4").click(function () {
//     $(this).toggleClass("open");
//   });
// });

const navDropdownItems = document.querySelectorAll(".nav-dropdown > ul li > a");

for (let i = 0; i < navDropdownItems.length; i++) {
  navDropdownItems[i].addEventListener("click", (e) => {
    console.log(e.target.textContent);
    dropdownToggle = false;
    navDropdown.style.display = "none";
    hamburgerButton.removeAttribute("class", "open");
    introSection.style.marginTop = "16vh";
  });
}

const siteLinksSmallerWidths = document.querySelectorAll(
  "#site-links-smaller-widths"
);

//
//
//

let lastWindowWidth;

//adjusts project image aspect ratio (becomes taller at smaller widths)
let slideShowContainerInitialRatio = 1.2029; //more narrow
let slideShowContainerSecondRatio = 1.19;
let slideShowContainerThirdRatio = 1.178;
let slideShowContainerFourthRatio = 1.162;
let slideShowContainerFifthRatio = 1.155;
let slideShowContainerSixthRatio = 1.145; //less narrow

const scaleSlideShowContainer = (width) => {
  let slideShowContainer = document.querySelector(
    ".project-odd > .project-image-container"
  );
  let slideShowContainerHeight = slideShowContainer.offsetHeight;
  let slideShowContainerWidth = slideShowContainer.offsetWidth;

  let allSlideShowContainers = document.querySelectorAll(
    ".project-odd > .project-image-container"
  );
  if (width > 860 && width <= 934) {
    let newHeight = slideShowContainerWidth / slideShowContainerInitialRatio;
    for (let i = 0; i < allSlideShowContainers.length; i++) {
      allSlideShowContainers[i].style.height = `${newHeight}px`;
      allSlideShowContainers[i].style.minHeight = `${newHeight}px`;
      allSlideShowContainers[i].style.maxHeight = `${newHeight}px`;
    }
    lastWindowWidth = width;
  } else if (width > 785 && width <= 860) {
    let newHeight = slideShowContainerWidth / slideShowContainerSecondRatio;
    for (let i = 0; i < allSlideShowContainers.length; i++) {
      allSlideShowContainers[i].style.height = `${newHeight}px`;
      allSlideShowContainers[i].style.minHeight = `${newHeight}px`;
      allSlideShowContainers[i].style.maxHeight = `${newHeight}px`;
    }
    lastWindowWidth = width;
  } else if (width > 700 && width <= 785) {
    let newHeight = slideShowContainerWidth / slideShowContainerThirdRatio;
    for (let i = 0; i < allSlideShowContainers.length; i++) {
      allSlideShowContainers[i].style.height = `${newHeight}px`;
      allSlideShowContainers[i].style.minHeight = `${newHeight}px`;
      allSlideShowContainers[i].style.maxHeight = `${newHeight}px`;
    }
    lastWindowWidth = width;
  } else if (width > 595 && width <= 700) {
    let newHeight = slideShowContainerWidth / slideShowContainerFourthRatio;
    for (let i = 0; i < allSlideShowContainers.length; i++) {
      allSlideShowContainers[i].style.height = `${newHeight}px`;
      allSlideShowContainers[i].style.minHeight = `${newHeight}px`;
      allSlideShowContainers[i].style.maxHeight = `${newHeight}px`;
    }
    lastWindowWidth = width;
  } else if (width > 530 && width <= 595) {
    let newHeight = slideShowContainerWidth / slideShowContainerFifthRatio;
    for (let i = 0; i < allSlideShowContainers.length; i++) {
      allSlideShowContainers[i].style.height = `${newHeight}px`;
      allSlideShowContainers[i].style.minHeight = `${newHeight}px`;
      allSlideShowContainers[i].style.maxHeight = `${newHeight}px`;
    }
    lastWindowWidth = width;
  } else if (width <= 530) {
    let newHeight = slideShowContainerWidth / slideShowContainerSixthRatio;
    for (let i = 0; i < allSlideShowContainers.length; i++) {
      allSlideShowContainers[i].style.height = `${newHeight}px`;
      allSlideShowContainers[i].style.minHeight = `${newHeight}px`;
      allSlideShowContainers[i].style.maxHeight = `${newHeight}px`;
    }
    lastWindowWidth = width;
  } else {
    lastWindowWidth = width;
  }
};

// keeps adjacent space identical for project description and project image containers
const scaleProjectImageContainer = (currentWidth) => {
  if (currentWidth >= 986 && currentWidth <= 1309) {
    const projectImageContainer = document.querySelector(
      ".project-odd > .project-image-container"
    );
    const body = document.querySelector("body");
    const projectImageContainerWidth = projectImageContainer.offsetWidth;
    const bodyWidth = body.offsetWidth;
    const projectImageSpaceToLeft = bodyWidth - projectImageContainerWidth;
    const projectImageContainerOverlap =
      projectImageContainerWidth - projectImageSpaceToLeft;
    const allProjectImageContainers = document.querySelectorAll(
      ".project-odd > .project-image-container"
    );
    for (let i = 0; i < allProjectImageContainers.length; i++) {
      allProjectImageContainers[
        i
      ].style.marginLeft = `-${projectImageContainerOverlap}px`;
    }
  } else {
  }
};

//sets page width to state!
function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this,
      args = arguments;
    var later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

var myEfficientFn = debounce(function () {
  console.log(
    // document.body.clientWidth +
    //   " wide by " +
    //   document.documentElement.clientHeight +
    //   " high"
    window.innerWidth
  );
  scaleSlideShowContainer(window.innerWidth);
  // scaleProjectImageContainer(window.innerWidth);
}, 1);

// window.addEventListener("resize", myEfficientFn);
window.addEventListener("resize", () => {
  scaleSlideShowContainer(window.innerWidth);
  scaleProjectImageContainer(window.innerWidth);
});

// set sizes on page load
scaleSlideShowContainer(window.innerWidth);
scaleProjectImageContainer(window.innerWidth);

//expand second sentence of project description on button click
let allExpandProjectButtons = document.querySelectorAll(
  ".expand-project-button"
);

let allSecondProjectSentences = document.querySelectorAll(
  ".second-project-sentence"
);

for (let i = 0; i < allExpandProjectButtons.length; i++) {
  allExpandProjectButtons[i].addEventListener("click", () => {
    allSecondProjectSentences[i].style.transition = "all 600ms ease-in-out";
    allSecondProjectSentences[i].setAttribute("id", "show-sentence");
    allExpandProjectButtons[i].style.display = "none";
  });
}

// sidebar icon event listeners
const buttonTopIconImages = document.querySelectorAll(".top img");
const buttonBottomIconImages = document.querySelectorAll(".bottom img");

for (let i = 0; i < buttonTopIconImages.length; i++) {
  buttonTopIconImages[i].addEventListener("mouseover", () => {
    buttonBottomIconImages[i].setAttribute("id", "show-bottom-icon");
  });
}

for (let i = 0; i < buttonTopIconImages.length; i++) {
  buttonTopIconImages[i].addEventListener("mouseleave", () => {
    buttonBottomIconImages[i].removeAttribute("id");
  });
}

// project description icon event listeners
const projectDescTopIconImages = document.querySelectorAll(
  ".project-description-link-top img"
);
const projectDescBottomIconImages = document.querySelectorAll(
  ".project-description-link-bottom img"
);

for (let i = 0; i < projectDescTopIconImages.length; i++) {
  projectDescTopIconImages[i].addEventListener("mouseover", () => {
    console.log("mouse over");
    projectDescBottomIconImages[i].setAttribute(
      "id",
      "show-project-description-link-bottom-icon"
    );
  });
}

for (let i = 0; i < projectDescTopIconImages.length; i++) {
  projectDescTopIconImages[i].addEventListener("mouseleave", () => {
    console.log("mouse leave");
    projectDescBottomIconImages[i].removeAttribute("id");
  });
}

// footer icon event listeners
const footerTopIconImages = document.querySelectorAll(".footer-link-top img");
const footerBottomIconImages = document.querySelectorAll(
  ".footer-link-bottom img"
);

for (let i = 0; i < footerTopIconImages.length; i++) {
  footerTopIconImages[i].addEventListener("mouseover", () => {
    console.log("mouse over");
    footerBottomIconImages[i].setAttribute(
      "id",
      "show-footer-link-bottom-icon"
    );
  });
}

for (let i = 0; i < footerTopIconImages.length; i++) {
  footerTopIconImages[i].addEventListener("mouseleave", () => {
    console.log("mouse leave");
    footerBottomIconImages[i].removeAttribute("id");
  });
}

// animate photo
const myPhotoContainer = document.querySelector(".my-photo-container");
const myPhoto = document.querySelector(".my-photo");
const myPhotoOverlay = document.querySelector(".my-photo-overlay");
const profileImageBackground = document.querySelector(
  ".profile-image-background"
);
myPhotoContainer.addEventListener("mouseover", () => {
  console.log("mouse entered");
  myPhotoOverlay.setAttribute("id", "photo-overlay-hovered");
  profileImageBackground.setAttribute("id", "profile-background-hovered");
});

myPhotoContainer.addEventListener("mouseout", () => {
  console.log("mouse left");
  myPhotoOverlay.removeAttribute("id");
  profileImageBackground.removeAttribute("id");
});
