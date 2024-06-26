import coffee_1 from '@/public/assets/coffeeshop/1.jpg'
import coffee_2 from '@/public/assets/coffeeshop/2.jpg'
import coffee_3 from '@/public/assets/coffeeshop/3.jpg'
import coffee_4 from '@/public/assets/coffeeshop/4.jpg'
import coffee_5 from '@/public/assets/coffeeshop/5.jpg'

import nirbana_1 from '@/public/assets/nirbana/1.jpg'
import nirbana_2 from '@/public/assets/nirbana/2.jpg'
import nirbana_3 from '@/public/assets/nirbana/3.jpg'
import nirbana_4 from '@/public/assets/nirbana/4.jpg'
import nirbana_5 from '@/public/assets/nirbana/5.jpg'

import icei_1 from '@/public/assets/icei/1.jpg'
import icei_2 from '@/public/assets/icei/2.jpg'
import icei_3 from '@/public/assets/icei/3.jpg'
import icei_4 from '@/public/assets/icei/4.jpg'
import icei_5 from '@/public/assets/icei/5.jpg'

import React from 'react';
import { CgWebsite } from 'react-icons/cg';
import { FaChalkboardTeacher } from 'react-icons/fa';
import { FaGraduationCap } from 'react-icons/fa6';
import { IoIosGitNetwork, IoMdMusicalNotes } from 'react-icons/io';

// export const about = "My name is Susan Lady Rumokoy, and I am a freshgraduate majoring in Computer Science. Currently I am working full-time as a Laboratory Assistant and Operations and System Development Staff.";
export const about =  "During my initial semester, I applied for a part-time position as a computer laboratory assistant. Despite initial setbacks, I persevered and secured the position during a subsequent hiring period. Serving as a part-time assistant, I gained invaluable experience and was eventually promoted to a full-time role. In my capacity as a full-time assistant, I have been exposed to a diverse range of coding technologies and have contributed to various projects including game development, desktop applications, web development, mobile applications, and network projects. Concurrently, I continued to instruct and mentor students in various subjects. Presently, I am completing an internship at BINUS University as an application developer. Additionally, I have been entrusted with the responsibility of an Operation and Systems Development Staff, wherein I oversee the management of software and hardware utilized for laboratory practicum classes."

export const menus = [
    {
        id: "#about",
        name: "About",
    },
    {
        id: "#projects",
        name: "Projects",
    },
    {
        id: "#experience",
        name: "Experience",
    },
    {
        id: "#skills",
        name: "Skills",
    },
    {
        id: "#education",
        name: "Education",
    },
    {
        id: "#contact",
        name: "Contact",
    },
]

export const projects = [
    { 
        id: "1", 
        title: 'Nirbana', 
        brief: "Nirbana is a web application that connects user with interior designer.", 
        description: 'A website connecting users with interior designers, where users can design their dream rooms/ interiors from the website and choose the designer to be responsible for the renovation.', 
        tags: ["NextJS", "Tailwind"], 
        image: [nirbana_1, nirbana_2, nirbana_3, nirbana_4, nirbana_5]
    },
    { 
        id: "2", 
        title: 'Enrichment Dashboard', 
        brief: "Enrichment dashboard is a web application designed to show the enrichment activities and the students involved in the course.", 
        description: 'Enrichment dashboard is a web application designed to show the enrichment activities and the students involved in real time. This application basically shows graphical charts of the enrichment activities and the list of students taking the activities. The technology that I used to build this web application is nextJS.', 
        tags: ["NextJS", "Tailwind", "Prisma", "SQLite"], 
        image: [] 
    },
    { 
        id: "3", 
        title: 'Face In Face Out', 
        brief: "Face In Face Out is an attendance system that uses face recognition", 
        description: 'A website for enrichment students to take attendance on their internship daily, which facilitates the students with a simpler way to take attendance and create a report system for the supervisors.', 
        tags: ["NextJS", "Tailwind", "Prisma", "SQLite"], 
        image: [] 
    },
    { 
        id: "4", 
        title: 'Pricing Calculator', 
        brief: "Pricing calculator is a web application designed to help universities to calculate and estimate the price for academic subjects/ courses.", 
        description: 'Pricing calculator is a web application designed to help universities to calculate and estimate the price for academic subjects/ courses. This application allows user to calculate the prices step-by-step (as provided in the application), and at the end the user will be given the result of the calculation. If the user is not yet satisfied with the result, the user can set the desired price and let the application re-estimate the price using goal-seek method. This application has beed hosted is developed with laravel and python.', 
        tags: ["Laravel", "Python", "Tailwind", "MySQL", "XAMPP"], 
        image: [icei_1, icei_2, icei_3, icei_4, icei_5]
    },
    { 
        id: "5", 
        title: 'Movie List', 
        brief: "Movie List is a web application project that I did for the final project of Web Application Development practicum course.", 
        description: 'Movie List is a web application project that I did for the final project of Web Application Development practicum course. This web is basically an imitation of Netflix. The application shows the movie list, user profiles, also the movie recommendation based on the genres of the movies the users saved in their profile. This project is developed with laravel.', 
        tags: ["Laravel", "Bootstrap", "MySQL", "XAMPP"], 
        image: []},
    { 
        id: "6", 
        title: 'Sentiment Analysis NLP',
        brief: "Big data final project", 
        description: 'My team and I made a sentiment analysis simple using Natural Language Processing (NLP) that includes dataset of labeled (positive/ negative) users\' comments to train the data and later on will the application will be able to receive a sentence input and analyze the sentiment of the sentence.',
        tags: ["Python"],
        image: [],
    },
    {
        id: "7", 
        title: 'FiveBR', 
        brief: "FiveBR is a web application project that I did for the final project of Web Application Development theory course.", 
        description: 'FiveBR is a web application project that I did for the final project of Web Application Development theory course. This web is basically an imitation of Fiverr. The application shows the gig list, user profiles, liked gigs, etc. In this application user can search for a gig, buy a gig, or create a gig themselves. This project is developed with laravel.', 
        tags: ["Laravel", "Bootstrap", "MySQL", "XAMPP"], 
        image: [] 
    },
    { 
        id: "8", 
        title: 'Coffee Shop',
        brief: "Coffee Shop is a fronted-only web application that I did for the final project of Human and Computer Interaction practicum course.", 
        description: 'Coffee Shop is a fronted-only web application that I did for the final project of Human and Computer Interaction practicum course. This web is basically an online coffee shop where user can see the coffee menu, add food/ beverages into the cart, and purchasing the items. This is one of the first frontend projects I\'ve done on my second semester of university. This web application is developed using HTML, CSS, and JavaScript.',
        tags: ["HTML", "CSS", "JS"], 
        image: [coffee_1, coffee_2, coffee_3, coffee_4, coffee_5] 
    },
] as const;

export const skills = ["C/C++", "HTML", "CSS", "SCSS", "JavaScript", "ReactJS", "NextJS", "Python", "PHP", "Java", "OOP", "Flutter", "Firebase", "PostgreSQL", "Laravel", "Tailwind", "Bootstrap"];

export const experiences = [
    {
        title: "Operations and System Development Officer",
        company: "BINUS University",
        position: "Full-time",
        date: "Jan 2023 - Present",
        description: [
            'Calibrated the laboratory hardware assets (monitors, pcs, mice) daily to make sure all hardware is working properly, leading to a well conducted lecture classes/ laboratory practicum.',
            'Maintained both frontend and backend of laboratory websites, keeping laboratory transactions and assets borrowings structured and reported.',
            'Taught university students in the laboratory practicum classes and new part time assistant candidate in the training selection process.',
            'Corrected university students’ assignments.'
        ],
        icon: React.createElement(IoIosGitNetwork),
    },
    {
        title: "Application Developer",
        company: "BINUS University",
        position: "Internship",
        date: "Feb 2023 - Feb 2024",
        description: [
            "Maintained websites related to the Enrichment Program in Binus University, keeping the data of the students taking the programs updated.",
            "Developed a face-recognition attendance system and enrichment dashboard, sustaining the workflow of the enrichment program."
        ],
        icon: React.createElement(CgWebsite),
    },
    {
        title: "Junior Laboratory Assistant",
        company: "BINUS University",
        position: "Full-time",
        date: "Feb 2022 - Jan 2023",
        description: [
            "Worked on a project each month to test the progress as an assistant (includes game, desktop, web, mobile apps, and network architecture).",
            "Taught university students in the laboratory practicum classes and new part time assistant candidate in the training selection process.",
            "Corrected university students’ assignments and composed quizzes/ exams for the university students to take.",
            "Participated in training to be prepared for each semester’s teaching."
        ],
        icon: React.createElement(FaChalkboardTeacher),
    },
    {
        title: "Part Time Laboratory Assistant",
        company: "BINUS University",
        position: "Part-time",
        date: "Aug 2021 - Feb 2022",
        description: [
            "Taught university students in the laboratory practicum classes and new part time assistant candidate in the training selection process.",
            "Corrected university students’ assignments and composed quizzes/ exams for the university students to take.",
            "Participated in training to be prepared for each semester’s teaching."
        ],
        icon: React.createElement(FaChalkboardTeacher),
    },
];

export const educations = [
    {
        title: "Secondary School",
        logo: React.createElement(FaGraduationCap),
        school: "BINUS School Serpong",
        year: "2014 - 2017",
        major: "IT and Sociology"
    },
    {
        title: "High School",
        logo: React.createElement(FaGraduationCap),
        school: "EFATA School",
        year: "2017 - 2020",
        major: "Science"
    },
    {
        title: "University",
        logo: React.createElement(FaGraduationCap),
        school: "BINUS University (Bachelor of Computer Science)",
        gpa: 3.85,
        year: "2020 - 2024",
        major: "Computer Science"
    },
];