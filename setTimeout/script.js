let h3 = document.querySelector("h3")
let btn = document.querySelector("button")
let grow = 0
let inner = document.querySelector(".inner")


btn.addEventListener("click",()=>{

    btn.style.pointerEvents="none"

    let num = 50 + Math.floor(Math.random() * 50)

    let int = setInterval(() => {
        grow++;
        h3.innerHTML = grow + "%"
        inner.style.width = grow + "%"
        btn.innerHTML="Downloading.."
    }, num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML="Downloaded"
        btn.style.opacity=0.5
        console.log(`Downloaded in ${num/10} sec`)
    }, num * 100);
})