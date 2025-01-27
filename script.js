


fetch('./projects.json')
    .then((response) => response.json())
    .then(data => {
        data.projects.forEach((project) => {
            // make some HTML for the project
            projecthtml.innerHTML += `<img src=${project.image}>`
            // put it into your html somewhere
        })    
    });