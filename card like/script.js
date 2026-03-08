let img = document.querySelector("img");
let btn = document.querySelector("button");
let i = document.querySelector("i");

btn.addEventListener("click", () => {
  if (btn.innerHTML === "Follow") {
    btn.innerHTML = "Unfollow";

    img.addEventListener("dblclick", () => {
      i.style.opacity = "1";
      i.style.transform = "translate(-50%, -50%) scale(1) rotate(0deg)";

      setTimeout(() => {
        i.style.opacity = "0";
      }, 1200);
      setTimeout(() => {
        i.style.transform = "translate(-50%, -300%) scale(1) rotate(60deg)";
      }, 900);
      setTimeout(() => {
        i.style.transform = "translate(-50%, -50%) scale(0) rotate(-60deg)";
      }, 1600);
    });
  } else {
    btn.innerHTML = "Follow";
  }
});
