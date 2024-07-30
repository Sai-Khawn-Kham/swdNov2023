const myTitle = document.querySelector("#myTitle");
const numInput = document.querySelector("#numInput");
const mySong = document.querySelector("#mySong");
const playMusicBtn = document.querySelector("#playMusicBtn");
const stopBtn = document.querySelector("#stopBtn");
const cover = document.querySelector(".cover");

playMusicBtn.addEventListener("click", () => {
   mySong.play();
   // cover.click();
   // numInput.focus();
   cover.classList.add("rotating");
});

cover.addEventListener("load",() => {
   console.log("image loaded"); 
});

stopBtn.addEventListener("click", () => {
   mySong.pause();
   cover.classList.remove("rotating");
});

mySong.addEventListener("play", () => {
   console.log("play song");
   cover.classList.add("rotating");
   document.body.style.backgroundColor = "#3dd";
});

mySong.addEventListener("pause", () => {
   console.log("song pause");
   console.log(mySong.currentTime);
   cover.classList.remove("rotating");
   document.body.style.backgroundColor = "white";
});

mySong.addEventListener("ended", () => {
   console.log("song end");
   cover.classList.remove("rotating");
});

cover.addEventListener("click",() => {
   console.log("u click image"); 
});

cover.addEventListener("drag",() => {
   console.log("u drag"); 
});

const addListBtn = document.querySelector("#addListBtn");
const listGroup = document.querySelector("#listGroup")
const listTemplate = document.querySelector("#listTemplate");
addListBtn.addEventListener("click", () => {
   const list = listTemplate.content.cloneNode(true);
   listGroup.append(list);
});
