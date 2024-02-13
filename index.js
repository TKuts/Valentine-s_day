const wrapper = document.querySelector(".wrapper");
const lidOne = document.querySelector(".one");
const lidTwo = document.querySelector(".two");
const latter = document.querySelector(".letter");

function activePage() {
  wrapper.classList.add("show");
}

function openEnvalope() {
  lidOne.classList.toggle("active");
  lidTwo.classList.toggle("active");
  latter.classList.toggle("active");
}

window.setTimeout(activePage, 2000);
wrapper.addEventListener("click", openEnvalope);

function hearts() {
  const body = document.querySelector("body");

  console.log(body);

  const create = document.createElement("div");
  create.classList.add("hearts");
  create.innerHTML = "❤️";

  create.style.left = Math.random() * 100 + "vw";
  create.style.animationDuration = Math.random() * 2 + 3 + "s";
  body.appendChild(create);
  setTimeout(() => {
    create.remove();
  }, 3000);
}

setInterval(hearts, 100);
