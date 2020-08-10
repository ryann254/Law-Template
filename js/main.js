let navigationLinks = document.querySelectorAll(".nav-item");
const homeSection = document.getElementById("home-section");
const aboutSection = document.getElementById("about-section");
const practiceSection = document.getElementById("practice-section");
const publicationSection = document.getElementById("publications-section");
const contactSection = document.getElementById("contact-section");

function scroll(offsetTop) {
  window.scrollTo({
    top: offsetTop - 150,
    behavior: "smooth",
  });
}

$(document).ready(function () {
  $(".nav-item").click(function (event) {
    event.preventDefault();
    if (event.target.id === "home") {
      let offsetTop = homeSection.offsetTop;
      scroll(offsetTop);
    } else if (event.target.id === "about") {
      let offsetTop = aboutSection.offsetTop;
      scroll(offsetTop);
    } else if (event.target.id === "practice") {
      let offsetTop = practiceSection.offsetTop;
      scroll(offsetTop);
    } else if (event.target.id === "publications") {
      let offsetTop = publicationSection.offsetTop;
      scroll(offsetTop);
    } else {
      let offsetTop = contactSection.offsetTop;
      scroll(offsetTop);
    }
  });
});
