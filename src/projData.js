import { CreditsTracker, TheHive, RobotsVsAliens } from './images';

let featProjs = [
    {
        projName: "Robots Vs Aliens",
        projType: "Coursework",
        projDesc: "Senior Design project at CCNY. A 2D game built on Unity, based on Plants vs Zombies. The objective is defend the homebase for a certain duration and/or collect enough material to rebuild the shield.",
        projImg: RobotsVsAliens,
        projSoftware: ['Unity', 'C++', "Pixel Art"],
        url: {
            github: 'https://github.com/alexxg98/SD_FinalProject',
            site: 'https://alexxg98.github.io/Robots-vs-Aliens/',
        }
    },
    {
        projName: "Credits Tracking App",
        projType: "Coursework",
        projDesc: "Final project for Software Design course at CCNY. An Android app for CCNY Computer Science students. The app records the courses the student has taken, are in the process of taking, and have not taken yet.",
        projImg: CreditsTracker,
        projSoftware: ["Android Studio", 'Java'],
        url: {
            github: 'https://github.com/alexxg98/Credits_Tracker',
            site: '',
        }
    },
    {
        projName: "Project Management System",
        projType: "Coursework",
        projDesc: "Final project for Software Engineering course at CCNY. This system will facilitate active teaming of people with similar interest and skill-set to forge groups for a certain do-good project.",
        projImg: TheHive,
        projSoftware: ['MySQL', 'Python'],
        url: {
            github: 'https://github.com/alexxg98/The-Hive',
            site: '',
        }
    },
]

let otherProjs = [
    {
        projName: "Women in CS, Timeline",
        projType: "Coursework",
        projDesc: "An interactive timeline depicting some women in computer science.",
        url: {
            github: 'https://github.com/alexxg98/Timeline_WomenInCS',
            site: 'https://alexxg98.github.io/Timeline_WomenInCS/'
        }
    },
    {
        projName: "Statistics Project",
        projType: "Coursework",
        projDesc: "By analyzing two data sets, this project attempts to answer the question: Does a higher number of food recalls lead to a lower number of food-related outbreaks?",
        url: {
            github: 'https://github.com/alexxg98/csc217_statisticsProject',
            site: ''
        }
    },
    {
        projName: "Dead Zone Demo",
        projType: "CUNYTechWorks",
        projDesc: "A simple informative website dead zones. The goal of this project is to utilize all the CSS techniques we had learned, such as transitions and hover.",
        url: {
            github: 'https://github.com/alexxg98/Dead_Zones',
            site: 'https://alexxg98.github.io/Dead_Zones/'
        }
    },
    {
        projName: "Hotel Availability Demo",
        projType: "CUNYTechWorks",
        projDesc: "A simple website that simulates a reservation system. The program consists of 10 (ten) users that randomly selects 1 (one) of the available hotels, and updates each hotels' rooms availablity.",
        url: {
            github: 'https://github.com/alexxg98/Hotel_Reservation',
            site: 'https://alexxg98.github.io/Hotel_Reservation/'
        }
    },
    {
        projName: "Learning JQuery Demo",
        projType: "CUNYTechWorks",
        projDesc: "A simple website that demonstrates the jQuery learned during the program. Comprising of five mini-projects, each one shows the use of different methods after being clicked on.",
        url: {
            github: 'https://github.com/alexxg98/Learning-jQuery',
            site: 'https://alexxg98.github.io/Learning-jQuery/'
        }
    },
]

export { featProjs, otherProjs };