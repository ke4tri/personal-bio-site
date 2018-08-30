const projects = 
[
    {
    title: "Cool Project", 
    screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
}
];

const printToDom = (stringToPrint, divId) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML += stringToPrint;
};

const createProjectCards = () => {
    let newString = '';
    for(i=0;i<projects.length;i++){
        if(projects[i].available === true) {
        newString += `<div class="projectCard">`;
        newString +=    `<h3>${projects[i].title}</h3>`;
        newString +=    `<img src="${projects[i].screenshot}">`;
        newString +=    `<h3>${projects[i].description}</h3>`;
        newString +=    `<h3>${projects[i].technologiesUsed}</h3>`;
        newString +=    `<h3><a href="${projects[i].url}">URL GOES HERE</a></h3>`;
        newString +=    `<h3><a href="${projects[i].githubUrl}">GitHub Link HERE</a></h3>`;
        newString += `</div>`;
        }
    };
    printToDom(newString, 'projectsPage');
};

createProjectCards();





