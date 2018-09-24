const projects = 
[
    {
    project: "Language Christmas Card Translator",
    title: "Translator", 
    screenshot: "/images/download.png ", 
    description: "Type in a phrase of predetermind english words and click what language you would like to hear it translated into.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, JS, Github",
    available: true,
    url: "https://github.com/ke4tri/translator", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/ke4tri/translator"
},
{
    project: "Random Harry Potter House Sort Tool",
    title: "Sort!", 
    screenshot: "/images/images.png", 
    description: "For sorting new students into an appropriate house for school.", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true, //did have this as false. false will keep it from running 
    url: "https://github.com/ke4tri/sorting_hat", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/ke4tri/sorting_hat"
},
{
    project: "Project 3",
    title: "Tamohawk Take Down", 
    screenshot: "/images/logo.png", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false, //did have this as false. false will keep it from running 
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
        newString +=    `<h3 class="flex" style="margin-top:50px;">${projects[i].title}</h3>`;
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

// push branch once set event listeners on all the buttons
// Connect bio button to run this function
function showForm(pageID, hide1,hide2) {
    document.getElementById(pageID).style.display= "block";
    document.getElementById(hide1).style.display= "none";
    document.getElementById(hide2).style.display= "none";
};


document.getElementById("navToBio").addEventListener("click", function(){
    showForm('bioPage','technologiesPage','projectsPage');
});

document.getElementById("navToTechnologies").addEventListener("click", function(){
    showForm('technologiesPage','bioPage','projectsPage');
});

document.getElementById("navToProjects").addEventListener("click", function(){
    showForm('projectsPage','bioPage', 'technologiesPage');
});


  
