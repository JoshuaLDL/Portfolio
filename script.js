

// document.querySelector("form").addEventListener("submit", function (event) {
//     // Prevent form submission
//     event.preventDefault();

//     // Get form values
//     const name = document.getElementById("name").value.trim();
//     const email = document.getElementById("email").value.trim();
//     const message = document.getElementById("message").value.trim();

//     // Simple validation
//     if (!name || !email || !message) {
//       alert("All fields are required.");
//       return;
//     }

//     // Email format check (basic)
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     // Success (Can submit the form here or send data via AJAX)
//     alert("Form submitted successfully!");
//     this.submit(); // Uncomment if not using AJAX
//   });





// fetch('./projects.json')
//     .then((response) => response.json())
//     .then(data => {
//         data.projects.forEach((project) => {
//             // make some HTML for the project
//             portfoliohtml.innerHTML += 
//             portfoliohtml.innerHTML += `<img src=${project.image}>`
//             // put it into your html somewhere
//         })    
//     });


    // {
    //     "title": "Project One",
    //     "description": "It's so good",
    //     "image": "images/project_1.png",
    //     "alt": "some alt text",
    //     "Link": "#"
    //     },


    // Select the element where the portfolio content will go

const projecthtml = document.getElementById("portfolio-container");

// Fetch JSON data
fetch('./projects.json')
  .then((response) => response.json())
  .then(data => {
    // Iterate through each project
    data.projects.forEach((project) => {
      // Append the HTML for each project
      projecthtml.innerHTML += `
        <div class="project-card">
          <img src="${project.image}" alt="${project.name}">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <button onclick="viewProject('${project.link}')">View Project</button>
        </div>
      `;
    });
  })
  .catch(error => console.error('Error fetching projects:', error));



// Function for the button
function viewProject(link) {
  window.open(link, '_blank'); // Open the project link in a new tab
}
