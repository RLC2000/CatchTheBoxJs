import "./styles.css";
var ele = document.querySelector("#app");
ele.addEventListener("mouseover", hlpr);
var width = window.innerWidth;
var height = window.innerHeight;

function hlpr() {
  let curposX = ele.getBoundingClientRect().top;
  let curposY = ele.getBoundingClientRect().X;
  let randx = curposX;
  while (randx == curposX) randx = Math.random() * (width - 100);
  let randy = curposY;
  while (randy == curposY) randy = Math.random() * (height - 100);
  ele.style.transform = "translate(" + randx + "px," + randy + "px)";
}
