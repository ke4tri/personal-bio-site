const projects = 
[
    {
    project: "Wayne Collier",
    title: "Auto Ice Maker", 
    screenshot: "/images/app_icon.png ", 
    description: "Tired of making ice? Let us do it all for you! With the Auto Ice Maker we can tak you into the future. ", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, JS, Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    project: "Project 2",
    title: "Eye Magic Miker", 
    screenshot: "/images/app-xnsoft-512.png", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true, //did have this as false. false will keep it from running 
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    project: "Project 3",
    title: "Tamohawk Take Down", 
    screenshot: "/images/logo.png", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true, //did have this as false. false will keep it from running 
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
        newString += `<div class="projectCard${[i]}">`;
        newString +=    `<h3 class="flex">${projects[i].title}</h3>`;
        newString +=    `<img class="flex" id="pic1" src="${projects[i].screenshot}">`;
        newString +=    `<h3 class="flex">${projects[i].description}</h3>`;
        newString +=    `<h3 class="flex">${projects[i].technologiesUsed}</h3>`;
        newString +=    `<h3 class="flex"><a href="${projects[i].url}" style="text-decoration:none">URL GOES HERE</a></h3>`;
        newString +=    `<h3 class="flex"><a href="${projects[i].githubUrl}" style="text-decoration:none">GitHub Link HERE</a></h3>`;
        newString += `</div>`;
        }
    };
    printToDom(newString, 'projectsPage');
};
createProjectCards();





