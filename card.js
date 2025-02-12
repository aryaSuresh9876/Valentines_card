const yes_button = document.querySelector(".yes");
const no_button = document.querySelector(".no");
const img = document.querySelector(".gif-container");
const text = document.querySelector(".card-text");
const body = document.body;
let is_gif_changed = false;

const noTexts = [
    "Please no cutie pieee 😢",
    "Pleaseee noo 🥺",
    "Think again...",
    "Are you sure? 🥺",
    "But why? 😭",
    "Give it a chance 💖",
];

const imgSrc = [
    "goku-crying.gif",
    "goku-crying-2.gif",
    "goku-crying-3.gif",
    "goku-crying-4.gif"
]

no_button.addEventListener("click", ()=>{

    //change gif
    random_gif_index = Math.floor(Math.random() * imgSrc.length);
    img.src = imgSrc[random_gif_index];   

    //increase yes button size
    let yes_current_size = parseFloat(window.getComputedStyle(yes_button).fontSize);
    yes_button.style.fontSize = (yes_current_size + 5) + "px"

    //decrease no button size
    let no_button_size = parseFloat(window.getComputedStyle(no_button).fontSize);
    no_button.style.fontSize = Math.max(no_button_size - 2, 1) + "px";
    no_button.style.padding = "12px 15px";
    let random_text_index = Math.floor(Math.random() * noTexts.length);
    no_button.innerText = noTexts[random_text_index]

});

yes_button.addEventListener("click", ()=>{
    img.src = "goku-happy.gif";
    text.innerText = "Thankyouuu my Cutieee Pieee! 💖💞"
    yes_button.style.display = "none";
    no_button.style.display = "none";
});
