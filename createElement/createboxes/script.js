let btn = document.querySelector("button")
let main = document.querySelector("main")

btn.addEventListener("click",()=>{
   let div = document.createElement("div")
   let r = Math.floor(Math.random()*256)
   let g = Math.floor(Math.random()*256)
   let b = Math.floor(Math.random()*256)
   div.style.backgroundColor = `rgb(${r},${g},${b})`
   /* top , left Postion*/
   let topPos = Math.floor(Math.random()*100)
   let leftPos = Math.floor(Math.random()*100)
   div.style.top = topPos+'%'
   div.style.left = leftPos+'%'
   /*Rotate */
   let rotate = Math.floor(Math.random()*360)
   div.style.rotate = rotate + "deg"
   main.appendChild(div)
})