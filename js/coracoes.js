
// coracoes.js
document.addEventListener("click", function (e) {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 3000);
});
