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
const typedInfo = 'a Frontend Developer';


let state = 0;
let miniState = 0;
let initial = 0;

const scrollAnime = () => {
    console.log(skills.offsetTop - window.innerHeight + skills.clientHeight/2);
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