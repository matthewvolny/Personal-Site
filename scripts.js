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
