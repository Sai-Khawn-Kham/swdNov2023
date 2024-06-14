const controlNav = document.querySelector('#controlNav');
const sideBar = document.querySelector('#sideBar');
const lists = document.querySelectorAll('.list');
const skillCount = document.querySelector('#skillCount')
const googleLink = document.querySelector('#googleLink')
const youtubeLink = document.querySelector('#youtubeLink')
const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const img3 = document.querySelector('#img3');
const images = document.querySelectorAll('.img');


// show and hide side bar
controlNav.onclick = () => {
    sideBar.classList.toggle("translate-x-full")
};


// change li bg and count selected skills
lists.forEach((list) => {
    list.onclick = () => {
        list.classList.toggle("bg-sky-300");
        const countSelected = document.querySelectorAll('.list.bg-sky-300')
        skillCount.innerText = countSelected.length;
    };
});


// get attr
// console.log(googleLink.href)
// console.log(googleLink.target);
// console.log(img1.src);
// console.log(img1.getAttribute('src'));

// set attr
// googleLink.href="https://mmsit.com";
// googleLink.removeAttribute('target');
// img1.src = "./assets/images/pattern.png";
// img1.setAttribute('src','./assets/images/pattern.png');

images.forEach((i) => {
    i.src = "./assets/images/poe-mamhe-thar-7.jpg";
})
