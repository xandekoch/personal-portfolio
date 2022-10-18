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
