const projects = 
[
    {
    project: "Wayne Collier",
    title: "Cool Project", 
    screenshot: "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&h=350", 
    description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: true,
    url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
    githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
},
{
    project: "Just an extra for testing the true/false",
    story: "Cool Project", 
    site: "http://gotoflashgames.com/files/file/033.jpg", 
    about: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
    techToTake: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
    available: false,
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
        newString +=    `<img class="pic" src="${projects[i].screenshot}">`;
        newString +=    `<h3>${projects[i].description}</h3>`;
        newString +=    `<h3>${projects[i].technologiesUsed}</h3>`;
        newString +=    `<h3><a href="${projects[i].url}" style="text-decoration:none">URL GOES HERE</a></h3>`;
        newString +=    `<h3><a href="${projects[i].githubUrl}" style="text-decoration:none">GitHub Link HERE</a></h3>`;
        newString += `</div>`;
        }
    };
    printToDom(newString, 'projectsPage');
};

createProjectCards();





