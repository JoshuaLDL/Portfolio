"use strict";

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


// RADIAL MENU

// const drop = document.querySelector('#dropdown');
// drop.addEventListener('mouseenter', show);
// function show() {
//     const menu = document.querySelector('#dropdown-content');
//     menu.classList.remove('hidden')
// }
// drop.addEventListener('mouseleave', hide);
// function hide() {
//     const menu = document.querySelector('#dropdown-content');
//     const drop = document.querySelector('.dropdown');
//     menu.classList.add('hidden')
// }



// ANIMATING H1,H2,H3 (Version One)

// document.addEventListener("DOMContentLoaded", function() {  
//     const headings = document.querySelectorAll("h1, h2, h3");  // Select all h1 elements
//     const speed = 100;  // Typing speed in milliseconds

//     function typeEffect(element, text, index = 0) {
//         if (index < text.length) {
//             element.innerHTML += text.charAt(index);
//             setTimeout(() => typeEffect(element, text, index + 1), speed);
//         } else {
//             element.style.borderRight = "none"; // Remove cursor after typing
//         }
//     }

//     headings.forEach((heading) => {
//         const text = heading.textContent.trim();  // Store original text
//         heading.textContent = "";  // Clear the text before typing starts
//         heading.style.borderRight = "2px solid black";  // Simulated cursor
//         typeEffect(heading, text);
//     });
// });

// ANIMATING H1,H2,H3 (Version Two with Delay on Scroll)

document.addEventListener("DOMContentLoaded", function() {  
    const headings = document.querySelectorAll("h1, h2, h3");  // Select all h1 elements
    const speed = 100;  // Typing speed in milliseconds

    function typeEffect(element, text, index = 0) {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            setTimeout(() => typeEffect(element, text, index + 1), speed);
        } else {
            element.style.borderRight = "none"; // Remove cursor after typing
        }
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.typed) {  // Only trigger once
                const text = entry.target.textContent.trim();
                entry.target.textContent = "";
                entry.target.style.borderRight = "2px solid black";  // Simulated cursor
                typeEffect(entry.target, text);
                entry.target.dataset.typed = "true";  // Prevent re-triggering
            }
        });
    }

    // Set up Intersection Observer
    const observer = new IntersectionObserver(handleIntersection, {
        root: null,   // Observe relative to the viewport
        threshold: 1 // Trigger when 60% of the element is visible
    });

    // Observe each heading
    headings.forEach(h1 => observer.observe(h1));
});