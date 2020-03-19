//hamburger effect
const hamburger = document.querySelector(".hamburger");
const menuMain = document.querySelector(".menu__main");

const handleClick = () => {
  hamburger.classList.toggle("hamburger--active");
  menuMain.classList.toggle("menu__main--active");
};

hamburger.addEventListener("click", handleClick);

//dropdown effect
const dropdown = document.getElementsByClassName("dropdown");

let i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("dropdown--active");
    let dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}
