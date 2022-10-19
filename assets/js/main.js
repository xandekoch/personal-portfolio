/*=============== TOGGLE TABS ===============*/
function activeProjects() {
    if ('projectsActive' !== alternateSections.classList[1]) {
        alternateSections.classList.add("projectsActive");
        alternateSections.classList.remove("skillsActive");
    }
}

function activeSkills() {
    if ('skillsActive' !== alternateSections.classList[1]) {
        alternateSections.classList.add("skillsActive");
        alternateSections.classList.remove("projectsActive");
    }
}

/*=============== DARK LIGHT THEME ===============*/
function changeTheme() {
    if ('dark' == theme.classList[0]) {
        theme.classList.remove("dark");
    }
    else {
        theme.classList.add("dark")
    }
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.border-pic')
sr.reveal('.name', {delay: 500})
sr.reveal('.profession', {delay: 600})
sr.reveal('.social-icons', {delay: 700})
sr.reveal('.profile-data', {interval:100, delay: 700})
sr.reveal('.profile-buttons', {delay: 800})
sr.reveal('.toggle-buttons', {delay: 900})
sr.reveal('.projects-skills', {delay: 1000})