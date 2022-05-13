function addInView() {
  const sections = document.querySelectorAll("section");
  for (let i = 0; i < sections.length; i++) {
    let topSide = sections[i].getBoundingClientRect().top;
    let viewportHeight = document.documentElement.clientHeight;
    if (topSide <= viewportHeight - viewportHeight / 5) {
      sections[i].setAttribute("id", "in-viewport");
    }
  }
}

window.addEventListener("scroll", addInView);

const profileImage = document.querySelector(".profile-image-container > img");
profileImage.addEventListener("mouseover", () => {
  const imageBackground = document.querySelector(".profile-image-background");
  imageBackground.setAttribute("id", "image-background-hovered");
});

profileImage.addEventListener("mouseout", () => {
  const imageBackground = document.querySelector(".profile-image-background");
  imageBackground.removeAttribute("id");
});

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

const changeSlide = () => {
  slideshowImages.forEach((slide, index) => {
    if (index < currentIndex || index > currentIndex) {
      slide.style.display = "none";
    } else {
      slide.style.display = "inline-block";
    }
  });
};

for (let i = 0; i < slideshowNavBarDots.length; i++) {
  slideshowNavBarDots[i].addEventListener("click", () => {
    if (prevIndex !== null) {
      slideshowNavBarDots[prevIndex].removeAttribute("id");
    }
    slideshowNavBarDots[i].setAttribute("id", "nav-dot-clicked");
    console.log(i);
    currentIndex = i;
    changeSlide();
    prevIndex = i;
  });
}

// slideshowNavBarDots.forEach((dot, index) => {
//   dot.addEventListener("click", () => {
//     if (dot[index - 1].id) {
//       dot[index - 1].removeAttribute("id");
//     } else if (dot[index + 1].id) {
//       dot[index + 1].removeAttribute("id");
//     }
//     dot.setAttribute("id", "nav-dot-clicked");
//     console.log(index);
//     currentIndex = index;
//     changeSlide();
//   });
// });

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
  });
}

const siteLinksSmallerWidths = document.querySelectorAll(
  "#site-links-smaller-widths"
);

//
//
//
let lastWindowWidth;
// let lastSlideShowContainerWidth;
let slideShowContainerRatio = 1.24;

const scaleSlideShowContainer = (width) => {
  if (width <= "935") {
    let slideShowContainer = document.querySelector(
      ".project-odd > .project-image-container"
    );
    let slideShowContainerHeight = slideShowContainer.offsetHeight;
    let slideShowContainerWidth = slideShowContainer.offsetWidth;
    console.log("slideShowContainerHeight");
    console.log(slideShowContainerHeight);
    console.log("slideShowContainerWidth");
    console.log(slideShowContainerWidth);
    let newHeight = slideShowContainerWidth / slideShowContainerRatio;
    console.log("newHeight");
    console.log(newHeight);
    slideShowContainer.style.height = `${newHeight}px`;
    lastWindowWidth = width;
    // console.log("lastWindowWidth last log");
    // console.log(lastWindowWidth);
  } else {
    lastWindowWidth = width;
    //!or standard ratio
    // lastSlideShowContainerWidth = slideShowContainer.offsetWidth;
  }
};

const scaleProjectImageContainer = (currentWidth) => {
  if (currentWidth >= 986 && currentWidth <= 1275) {
    const projectImageContainer = document.querySelector(
      ".project-odd > .project-image-container"
    );
    const body = document.querySelector("body");
    const projectImageContainerWidth = projectImageContainer.offsetWidth;
    const bodyWidth = body.offsetWidth;
    const projectImageDiff = bodyWidth - projectImageContainerWidth;
    console.log("projectImageDiff");
    console.log(projectImageDiff);
    const projectDescriptionDiff =
      bodyWidth -
      document.querySelector(".project-odd > .project-details").offsetWidth;
    console.log("projectDescriptionDiff");
    console.log(projectDescriptionDiff);
    projectImageContainer.style.marginLeft = `-${
      600 - (projectImageDiff - /*projectDescriptionDiff*/ 52)
    }px`;
  } else {
  }
  // if (currentWidth >= 1276) {
  //   const projectImageContainer = document.querySelector(
  //     ".project-odd > .project-image-container"
  //   );
  //   const body = document.querySelector("body");
  //   const projectImageContainerWidth = projectImageContainer.offsetWidth;
  //   const bodyWidth = body.offsetWidth;
  //   const projectImageDiff = bodyWidth - projectImageContainerWidth;
  //   console.log("projectImageDiff");
  //   console.log(projectImageDiff);
  //   const projectDescriptionDiff =
  //     bodyWidth -
  //     document.querySelector(".project-odd > .project-details").offsetWidth;
  //   console.log("projectDescriptionDiff");
  //   console.log(projectDescriptionDiff);
  //   projectImageContainer.style.marginLeft = `-${
  //     600 - (projectImageDiff - /*projectDescriptionDiff*/ 100)
  //   }px`;
  // }
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
  scaleProjectImageContainer(window.innerWidth);
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
let expandProjectButton = document.querySelector(".expand-project-button");
let secondProjectSentence = document.querySelector(".second-project-sentence");

expandProjectButton.addEventListener("click", () => {
  secondProjectSentence.style.display = "contents";
  expandProjectButton.style.display = "none";
});
