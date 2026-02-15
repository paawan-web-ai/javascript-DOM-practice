let button = document.querySelector("button");
let box = document.querySelector(".box");

button.addEventListener("click",()=>{
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    box.style.backgroundColor=`rgb(${r},${g},${b})`;
})