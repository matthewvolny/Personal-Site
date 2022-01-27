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
