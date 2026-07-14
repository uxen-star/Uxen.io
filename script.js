// Loading Screen

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 1200);
});


// Typing Animation

const words = [
    "Cyber Security",
    "Flutter Developer",
    "Python Programmer",
    "Future Investor",
    "Tech Enthusiast"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect(){

    const current = words[wordIndex];

    if(!deleting){

        typing.innerHTML = current.substring(0,letterIndex++);

        if(letterIndex > current.length){
            deleting = true;
            setTimeout(typeEffect,1200);
            return;
        }

    }else{

        typing.innerHTML = current.substring(0,letterIndex--);

        if(letterIndex < 0){
            deleting = false;
            wordIndex = (wordIndex+1)%words.length;
            letterIndex = 0;
        }

    }

    setTimeout(typeEffect,deleting?50:120);

}

typeEffect();


// Scroll Reveal

const reveal = document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    reveal.forEach(sec=>{

        const top = sec.getBoundingClientRect().top;

        if(top < window.innerHeight-120){

            sec.style.opacity="1";
            sec.style.transform="translateY(0)";

        }

    });

});

reveal.forEach(sec=>{

    sec.style.opacity="0";
    sec.style.transform="translateY(60px)";
    sec.style.transition="1s";

});


// Navbar Background

window.addEventListener("scroll",()=>{

    const nav=document.querySelector("nav");

    if(window.scrollY>100){

        nav.style.background="rgba(0,0,0,.8)";

    }else{

        nav.style.background="rgba(0,0,0,.4)";

    }

});


// Back To Top Button

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.right="20px";
topBtn.style.bottom="20px";
topBtn.style.display="none";
topBtn.style.borderRadius="50%";
topBtn.style.width="55px";
topBtn.style.height="55px";
topBtn.style.fontSize="22px";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=()=>{

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

};
