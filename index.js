// script for several stuffs part
const notebookPart = document.getElementById("notebookshow");
const desktopPart = document.getElementById("desktopshow");
const notebookSection = document.getElementById("notebook");
const desktopSection = document.getElementById("desktop");


desktopPart.addEventListener("click", () => {
    desktopPart.classList.add("activehr")
    notebookPart.classList.remove("activehr")
    desktopSection.classList.add("show");
    desktopSection.classList.remove("hide");
    notebookSection.classList.remove("show");
})
notebookPart.addEventListener("click", () => {
    desktopPart.classList.remove("activehr")
    notebookPart.classList.add("activehr")
    desktopSection.classList.remove("show");
    notebookSection.classList.add("show");
})

// script for builtinapps
const btn = document.querySelectorAll(".img");
const slide = document.querySelectorAll(".slide")
const fullbtn = document.getElementsByClassName("btn")
let ind = 0;
let bool = true;

btn.forEach((val, ind) => {
    val.addEventListener("click", (e) => {
        const index = e.target.parentNode.attributes[0].value
        // console.log(index);
        // val.style.backgroundColor = "#86868b"

        animDiv(index)
    })
})

setInterval(() => {

    ind++;
    ind === 7 && (ind = 0);
    animDiv(ind);
    fullbtn.forEach((val, ind) => {
        val.style.borderBottom = "1px solid black";
    })
    console.log(ind);
}, 10000);

function animDiv(index) {
    slide.forEach(val => {
        val.style.opacity = "0"
    })

    slide[index].style.opacity = "1"
}

// pro apps
// const btns = document.querySelectorAll(".imgs");
// const slides = document.querySelectorAll(".slides")
// let indp = 0;
// let bool = true;

// btns.forEach((val, indp) => {
//     val.addEventListener("click", (e) => {
//         const indexp = e.target.parentNode.attributes[0].value
//         // console.log(index);
//         // val.style.backgroundColor = "#86868b"

//         animeDiv(indexp)
//     })
// })

// setInterval(() => {

//     indp++;
//     indp === 5 && (indp = 0);
//     animeDiv(indp);

//     console.log(ind);
// }, 1000);

// function animeDiv(indexp) {
//     slides.forEach(val => {
//         val.style.opacity = "0"
//     })

//     slides[indexp].style.opacity = "1"
// }