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

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// let hamburgerButton = document.querySelector(".hamburger > img");
let hamburgerButton = document.querySelector("#nav-icon3");

let navDropdown = document.querySelector(".nav-dropdown");

let dropdownToggle = false;

hamburgerButton.addEventListener("click", () => {
  if (dropdownToggle === false) {
    navDropdown.style.display = "block";
    hamburgerButton.setAttribute("class", "open");
    dropdownToggle = true;
  } else {
    navDropdown.style.display = "none";
    hamburgerButton.removeAttribute("class", "open");
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
