//make an array that holds 16 diffrent projects, use projects.html to display each value at an index

let projects = [
    {
        name: "Calculator",
        description: "A fully functional calculator that performs basic arithmetic operations.",
        link: "https://rylanprzystup.github.io/Calculator-App/"
    },
    {
        
        name: "Unit Conversion App",
        description: "An app that converts between various units of measurement such as length, weight, and temperature.",
        link: "https://rylanprzystup.github.io/Unit-Conversion-app/"
    },
    {
        name: "Number Guess Game",
        description: "A game where the user tries to guess a randomly generated number within a set number of attempts.",
        link: "https://rylanprzystup.github.io/Guess-that-number/"
    },
    {
        name: "Monthly Budget Planner",
        description: "A planner that helps users track their monthly income and expenses to manage their budget.",
        link: "https://rylanprzystup.github.io/Monthly-budget-planner/"
    },
    {
        name: "Voting App",
        description: "An app that allows users to cast votes on topics and view live results.",
        link: "https://rylanprzystup.github.io/Voting-App/"
    },
    {
        name: "Task Manager App",
        description: "An app for creating, organizing, and tracking tasks to boost productivity.",
        link: "https://rylanprzystup.github.io/Task-manager-app/"
    },
    {
        name: "Age Calculator App",
        description: "An app that calculates a user's exact age in years, months, and days from their birthdate.",
        link: "https://rylanprzystup.github.io/Age-tracking-app/"
    },
    {
        name: "Event Speaker Webpage",
        description: "A webpage that showcases event speakers with their bios and session details.",
        link: "https://rylanprzystup.github.io/Event-Speakers-Page/"
    },
    {
        name: "Employee Management System",
        description: "A system for adding, viewing, and managing employee records within an organization.",
        link: "https://rylanprzystup.github.io/Employee-Sorting/"
    },
    {
        name: "Text Formatter App",
        description: "An app that applies formatting options like bold, uppercase, and spacing to user-inputted text.",
        link: "https://rylanprzystup.github.io/text-formatter/"
    },
    {
        name: "Book Manager App",
        description: "An app for cataloging books with details like title, author, and read status.",
        link: "https://rylanprzystup.github.io/Liabrary-Tracker/"
    },
    {
        name: "Expense Tracker App",
        description: "An app that logs and categorizes expenses to help users monitor their spending habits.",
        link: "https://rylanprzystup.github.io/Expense-Page/"
    },
    {
        name: "Collage App - 2D",
        description: "A creative app that lets users arrange and layer images to build a 2D photo collage.",
        link: "https://rylanprzystup.github.io/2d-Collage/"
    },
    {
        name: "Memory Game",
        description: "A memory card game where players flip and match pairs of emoji tiles.",
        link: "https://rylanprzystup.github.io/Dinosaur-Matching-Game/"
    },
    {
        name: "Classroom Seating App",
        description: "An app that allows teachers to create and manage classroom seating arrangements.",
        link: "https://rylanprzystup.github.io/Classroom-Seating-Chart/"
    },
    {
        name: "Tech E-Commerce Webpage",
        description: "An e-commerce webpage for browsing and searching tech products with a built-in search feature.",
        link: "https://rylanprzystup.github.io/Ecommerce-Products-Page/"
    },
    {
        name:"Flash Card App",
        description: "Create and Study using your own flash cards",
        link: "https://rylanprzystup.github.io/Flash-Cards/"

    }
];


//function to display onto projects.html
function displayProjects() {
    let display = document.getElementById("display");

    display.style.display = "grid";
    display.style.gridTemplateColumns = "repeat(4, 1fr)";
    display.style.gap = "1.2em";
    display.style.padding = "1.5em"; 
    display.style.width = "80%";

    let html = "";

    for (let i = 0; i < projects.length; i++) {

        html+=`
        <div class='project-card'>
        <h2>${projects[i].name}</h2>
        <p>${projects[i].description}</p>
        <iframe src="${projects[i].link}" width='100%' height='200px'></iframe>
        <br><a href="${projects[i].link}">View Project</a>
        </div>
        `
    }

    display.innerHTML = html;
}

displayProjects();