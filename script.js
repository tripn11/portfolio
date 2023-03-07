//the projects gallery

const greaterThan = document.getElementById('greater-than');
const lessThan = document.getElementById('less-than');
const projectsContainer = document.getElementById('projects-container');
const projects = document.querySelectorAll('.project');
const indicatorElement = document.getElementById('indicator');
const childIndicator = document.querySelectorAll('#indicator div');
const slideImagesContainer = document.querySelectorAll('.project-slide');
const typed = document.querySelector('#header-content span');
const skills = document.querySelector('#my-skills-container ul')
const skillsList = document.querySelectorAll('#my-skills-container ul li')
const typedInfo = 'a Frontend Developer';


let state = 0;
let miniState = 0;
let initial = 0;

const scrollAnime = () => {
    skillsList.forEach((skill) => {
        let skillsTarget =skill.offsetTop - window.innerHeight + skill.clientHeight/2;
        let skillsEndTarget = skills.offsetTop + skills.clientHeight;
        if (window.scrollY > skillsTarget && window.scrollY < skillsEndTarget) {
            skill.style.opacity=1;
            skill.style.transform='translateY(-5vh)';
        }else {
            skill.style.opacity=0;
            skill.style.transform='translateY(0)';
        }
    })
}

const typer = () => {
        typed.innerHTML += typedInfo.charAt(initial);
        initial++;
}

const continuousSlide = () => {
    slideImagesContainer.forEach((each)=>{
        each.scrollTo(miniState * each.clientWidth,0)
    })
}

const miniUpdater = () => {
    if(miniState < 3) {
        miniState++;
    }else {
        miniState = 0
    }
}

const indicator = () =>{
    childIndicator.forEach((indicator) => {
        indicator.removeAttribute('id');
    })
    childIndicator[state].setAttribute('id','active');
}

const slide = () => {
    lessThan.style.visibility = state > 0 ? 'visible' : 'hidden';
    greaterThan.style.visibility = state === projects.length - 2 ? 'hidden' : 'visible';
    projectsContainer.scrollTo(state * projects[0].clientWidth * 1.5, 0); //simply the width of each project plus half its width multiplied by the current state
}

const updater = (action) => {
    if(action === 'right') {
        if(state < projects.length - 2) {
            state++;
        }else {
            state = projects.length - 2;
        }
    }
    else if (action === 'left') {
        if(state > -1) {
            state--;
        } else {
            state = 0;
        }
    }
    else {
        state = action;
    }
}

const slider = (action) => {
    if(action || action === 0){
        updater(action);
        slide();
        indicator();
    }else {
        continuousSlide();
    }
}

const controller = () => {
    greaterThan.addEventListener('click', () => {slider("right")});
    lessThan.addEventListener('click',() => {slider("left")});
    childIndicator.forEach((each, index) => {
        each.addEventListener('click', () => {slider(index)})
    })
    setInterval(miniUpdater, 5000);
    setInterval(slider, 5000);
    if(initial < typedInfo.length){
        setInterval(typer, 100);
    }
    window.addEventListener('scroll', scrollAnime)
}

controller();