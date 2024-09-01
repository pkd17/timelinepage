// main.js

// Timeline data
const timelineData = [
    {
        date: "April 2018",
        description: "We are one of India's leading drone firms in providing end-to-end Drone Solutions.",
        image: "drone1.jpg",
        icon: "uil uil-map-marker"
        
    },
    {
        date: "April 2019",
        description: "We expanded our operations to new regions and diversified our drone services.",
        image: "images(1).jpeg",
        icon: "uil uil-map-marker"
    },
    {
        date: "April 2020",
        description: "Introduced AI-based drone analytics to enhance data collection and processing.",
        image: "images(2).jpeg",
        icon: "uil uil-map-marker"
    },
    {
        date: "April 2021",
        description: "Launched new drone models with advanced capabilities for industrial applications.",
        image: "images(3).jpeg",
        icon: "uil uil-map-marker"
    },
    {
        date: "April 2022",
        description: "Partnered with global firms to expand our technology reach and innovations.",
        image: "images(4).jpeg",
        icon: "uil uil-map-marker"
    },
    {
        date: "April 2023",
        description: "Received recognition as one of the top drone solution providers worldwide.",
        image: "images(5).jpeg",
        icon: "uil uil-map-marker"
    },
    {
        date: "April 2024",
        description: "Plans to introduce a new range of autonomous drones with cutting-edge AI.",
        image: "images(6).jpeg",
        icon: "uil uil-map-marker"
    }
];

// DOM elements
const timelineSteps = document.getElementById('timeline-steps');
const droneImage = document.getElementById('drone-image');
const timelineDate = document.getElementById('timeline-date');
const timelineDescription = document.getElementById('timeline-description');

// Function to render timeline steps dynamically
function renderTimeline() {
    timelineData.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <i class="icon ${item.icon}"></i>
            <div class="progress ${getStepClass(index)}">
                <p>${index + 1}</p>
                <i class="uil uil-check-circle"></i>
            </div>
            <p class="text">${item.date}</p>
        `;
        li.addEventListener('click', () => updateTimelineContent(index));
        timelineSteps.appendChild(li);
    });
}

// Function to update the displayed content based on selected step
function updateTimelineContent(index) {
    const selectedItem = timelineData[index];
    droneImage.src = selectedItem.image;
    timelineDate.textContent = selectedItem.date;
    timelineDescription.textContent = selectedItem.description;

    document.querySelectorAll('#timeline-steps li .progress').forEach((progress, i) => {
        progress.classList.toggle('active', i === index);
    });
}

// Function to get the step class dynamically
function getStepClass(index) {
    const stepClasses = ["one", "two", "three", "four", "five", "six", "seven"];
    return stepClasses[index] || "";
}

// Initial render
renderTimeline();
updateTimelineContent(0); // Display the first step by default
