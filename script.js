/* ==========================
   PIN SYSTEM
========================== */

function checkPin(){

const pin =
document.getElementById("pinInput").value;

if(pin === "1807"){

document.getElementById("pinScreen")
.style.display = "none";

document.getElementById("websiteContent")
.style.display = "block";

document.getElementById("music").play();

}else{

alert("Wrong PIN 🤍");

}

}

/* ==========================
   OPEN LETTER BUTTON
========================== */

function startJourney(){

document.getElementById("introSection")
.scrollIntoView({
behavior:"smooth"
});

}

/* ==========================
   FLOATING HEARTS
========================== */

function createHeart(){

const heart =
document.createElement("div");

heart.innerHTML = "🤍";

heart.style.position = "absolute";

heart.style.left =
Math.random() * 100 + "vw";

heart.style.top = "-30px";

heart.style.fontSize =
(Math.random() * 20 + 15) + "px";

heart.style.opacity =
Math.random();

heart.style.animation =
`fall ${Math.random()*4+6}s linear`;

document
.getElementById("hearts")
.appendChild(heart);

setTimeout(()=>{

heart.remove();

},10000);

}

setInterval(createHeart,400);

/* ==========================
   HEART ANIMATION
========================== */

const style =
document.createElement("style");

style.innerHTML = `

@keyframes fall{

0%{
transform:translateY(0);
opacity:1;
}

100%{
transform:translateY(110vh);
opacity:0;
}

}

`;

document.head.appendChild(style);

/* ==========================
   SCROLL FADE-IN
========================== */

const observer =
new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},{
threshold:0.15
});

document.querySelectorAll(
".section,.memory-card,.reason-card,.final-section,.ending"
).forEach(el=>{

el.classList.add("fade-in");

observer.observe(el);

});

/* ==========================
   MEMORY WALL EFFECT
========================== */

const memories =
document.querySelectorAll(".memory-card");

memories.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "";

});

});

/* ==========================
   REASON CARD EFFECT
========================== */

const reasons =
document.querySelectorAll(".reason-card");

reasons.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform =
"translateY(-10px)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform = "";

});

});

/* ==========================
   FLOATING QUOTES
========================== */

const quotes = [

"Happy Birthday, My Favorite Person 🤍",

"You Make Ordinary Days Feel Special ✨",

"Thank You For Existing 🤍",

"You Are Loved More Than You Know",

"May Happiness Always Find You 🌙",

"I'll Always Be Here For You 🤍",

"Until I Found You 🎵"

];

const quoteElement =
document.createElement("div");

quoteElement.className =
"floating-quote";

quoteElement.innerText =
quotes[0];

document.body.appendChild(
quoteElement
);

let currentQuote = 0;

setInterval(()=>{

currentQuote++;

if(currentQuote >= quotes.length){
currentQuote = 0;
}

quoteElement.style.opacity = 0;

setTimeout(()=>{

quoteElement.innerText =
quotes[currentQuote];

quoteElement.style.opacity = 1;

},500);

},5000);

/* ==========================
   QUOTE STYLE
========================== */

const quoteStyle =
document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote{

position:fixed;

bottom:20px;

left:50%;

transform:translateX(-50%);

background:
rgba(255,255,255,.08);

backdrop-filter:blur(10px);

padding:12px 22px;

border-radius:50px;

font-size:14px;

color:white;

z-index:999;

transition:.5s;

border:1px solid
rgba(255,255,255,.08);

}

`;

document.head.appendChild(
quoteStyle
);

/* ==========================
   HERO PARALLAX
========================== */

window.addEventListener("scroll",()=>{

const scroll =
window.pageYOffset;

const hero =
document.querySelector(".hero");

hero.style.backgroundPositionY =
scroll * 0.4 + "px";

});

/* ==========================
   AUTO REVEAL ENDING
========================== */

window.addEventListener("load",()=>{

setTimeout(()=>{

document.body.style.opacity = "1";

},300);

});
