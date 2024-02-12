const wrapper = document.querySelector(".wrapper");
const lidOne = document.querySelector(".one");
const lidTwo = document.querySelector(".two");
const latter = document.querySelector(".letter");

function activePage() {
  wrapper.classList.add("hidden");
}

function openEnvalope() {
  lidOne.classList.toggle("active");
  lidTwo.classList.toggle("active");
  latter.classList.toggle("active");
}

window.setTimeout(activePage, 2000);
wrapper.addEventListener("click", openEnvalope);
