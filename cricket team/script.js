const team = [
  {
    name: "Virat Kohli",
    score: 82,
    colors: { primary: "blue", secondary: "gold" }
  },
  {
    name: "Rohit Sharma",
    score: 65,
    colors: { primary: "navy", secondary: "orange" }
  },
  {
    name: "MS Dhoni",
    score: 45,
    colors: { primary: "blue", secondary: "green" }
  },
  {
    name: "KL Rahul",
    score: 54,
    colors: { primary: "darkblue", secondary: "red" }
  },
  {
    name: "Shubman Gill",
    score: 77,
    colors: { primary: "skyblue", secondary: "black" }
  },
  {
    name: "Hardik Pandya",
    score: 39,
    colors: { primary: "purple", secondary: "yellow" }
  },
  {
    name: "Ravindra Jadeja",
    score: 28,
    colors: { primary: "green", secondary: "white" }
  },
  {
    name: "Jasprit Bumrah",
    score: 12,
    colors: { primary: "blue", secondary: "gray" }
  },
  {
    name: "Mohammed Siraj",
    score: 9,
    colors: { primary: "teal", secondary: "black" }
  },
  {
    name: "Rishabh Pant",
    score: 41,
    colors: { primary: "cyan", secondary: "pink" }
  }
];




let box = document.querySelector(".box");
let body = document.querySelector("body");
let h1 = document.querySelector("h1");


box.addEventListener("click",()=>{
    let player = Math.floor(Math.random()*team.length)
    let allteam = team[player].name 
    let score = team[player].score
    let primary = team[player].colors.primary
    let secondary = team[player].colors.secondary
    h1.innerText =`${allteam} - ${score}`
    box.style.backgroundColor = secondary
    body.style.backgroundColor = primary
})