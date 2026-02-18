
let btn = document.querySelector("button")
let main = document.querySelector("main")

let arr = [
  "apple",
  "banana",
  "cherry",
  "date",
  "grape",
  "kiwi",
  "lemon",
  "mango",
  "orange",
  "papaya"
];


btn.addEventListener("click" ,()=>{
    let h1 = document.createElement("h1")

    let alluser = Math.floor(Math.random()*arr.length)
    
    h1.innerHTML = arr[alluser]

    let x = Math.floor(Math.random()*100)
    let y = Math.floor(Math.random()*100)

    let r = Math.random() * 360

    let s = Math.random()*3

    h1.style.left = x + "%";
    h1.style.top = y + "%";

    h1.style.rotate = r + "deg";

    h1.style.scale = s 

    main.appendChild(h1)
})