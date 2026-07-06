/* ==========================================
        LOADING SCREEN
========================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loader").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loader").style.display = "none";

        },600);

    },2500);

});


/* ==========================================
        TYPING EFFECT
========================================== */

const text =

"Information Security Student | AI | ICPC";

const typing = document.getElementById("typing");

let index = 0;

let deleting = false;

function type(){

    if(!deleting){

        typing.innerHTML = text.substring(0,index);

        index++;

        if(index > text.length){

            deleting = true;

            setTimeout(type,1800);

            return;

        }

    }

    else{

        typing.innerHTML = text.substring(0,index);

        index--;

        if(index < 0){

            deleting = false;

            index = 0;

        }

    }

    setTimeout(type,70);

}

type();


/* ==========================================
        ZALO POPUP
========================================== */

const popup = document.getElementById("popup");

document.getElementById("zaloBtn").onclick = () =>{

    popup.style.display = "flex";

}

document.getElementById("close").onclick = () =>{

    popup.style.display = "none";

}

popup.onclick = (e)=>{

    if(e.target===popup){

        popup.style.display="none";

    }

}


/* ==========================================
        MOUSE LIGHT
========================================== */

const light = document.getElementById("mouse-light");

document.addEventListener("mousemove",(e)=>{

    light.style.left = e.clientX + "px";

    light.style.top = e.clientY + "px";

});


/* ==========================================
        RIPPLE EFFECT
========================================== */

const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

    card.addEventListener("click",(e)=>{

        let ripple = document.createElement("span");

        ripple.className="ripple";

        ripple.style.left = e.offsetX+"px";

        ripple.style.top = e.offsetY+"px";

        card.appendChild(ripple);

        setTimeout(()=>{

            ripple.remove();

        },700);

    });

});


/* ==========================================
        MATRIX EFFECT
========================================== */

const canvas = document.getElementById("matrix");

const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;

canvas.height = window.innerHeight;

const letters =

"01ABCDEFGHIJKLMNOPQRSTUVWXYZ";

const fontSize = 18;

const columns = canvas.width/fontSize;

const drops = [];

for(let i=0;i<columns;i++){

    drops[i]=1;

}

function draw(){

    ctx.fillStyle="rgba(5,8,22,.06)";

    ctx.fillRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="#00ffff";

    ctx.font=fontSize+"px monospace";

    for(let i=0;i<drops.length;i++){

        const text=

letters[Math.floor(Math.random()*letters.length)];

        ctx.fillText(text,i*fontSize,drops[i]*fontSize);

        if(

            drops[i]*fontSize>canvas.height

            &&

            Math.random()>0.975

        ){

            drops[i]=0;

        }

        drops[i]++;

    }

}

setInterval(draw,40);


/* ==========================================
        WINDOW RESIZE
========================================== */

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;

    canvas.height=window.innerHeight;

});


/* ==========================================
        SKILL HOVER GLOW
========================================== */

const skills=document.querySelectorAll(".skills div");

skills.forEach(skill=>{

    skill.addEventListener("mouseenter",()=>{

        skill.style.boxShadow="0 0 25px cyan";

    });

    skill.addEventListener("mouseleave",()=>{

        skill.style.boxShadow="none";

    });

});


/* ==========================================
        RANDOM QUOTE
========================================== */

const quotes=[

"Dream • Build • Secure",

"Never Stop Learning",

"Think Different",

"Code. Hack. Create.",

"Security Begins With Knowledge"

];

const quote=document.querySelector(".quote");

setInterval(()=>{

    let r=Math.floor(Math.random()*quotes.length);

    quote.innerHTML=quotes[r];

},4000);