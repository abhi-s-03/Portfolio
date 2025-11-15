import flask from "../assets/flask.jpg";
import jollyaudience from "../assets/jollyaudience.png";
import ipl from "../assets/ipl.png";
import lms from "../assets/lms.jpg";
import bpcg from "../assets/bpcg.jpg";
import spotify from "../assets/spotify.jpg";
import nextjs from "../assets/nextjs.png";
import express from "../assets/express.png";
import pdfpilot from "../assets/pdfpilot.png";
import aws from "../assets/aws-svgrepo-com.svg";
import cursor from "../assets/cursor.jpeg";
import windsurf from "../assets/windsurf.png";

export const Bio = {
    name: "Abhishek S",
    roles: ["Software Engineer", "AI Enthusiast"],
    description:
        "I am a software engineer with a passion for AI and machine learning. I am currently working as a software engineer at Cloudwick Technologies.",
    github: "https://github.com/abhi-s-03",
    resume: "https://drive.google.com/file/d/17_wYeOBsQawsN7e8qxVPh2T4tl5mPn4M/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/abhis03/",
    insta: "https://www.instagram.com/__abhisheks/",
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            {
                name: "HTML",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
            },
            {
                name: "CSS",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
            },
            {
                name: "JavaScript",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
            },
            {
                name: "React",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
            },
            {
                name: "Next.js",
                image: nextjs,
            }
        ],
    },
    {
        title: "Backend",
        skills: [
            {
                name: "Express.js",
                image: express,
            },
            {
                name: "Python",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            },
            {
                name: "Flask",
                image: flask,
            }
        ],
    },
    {
        title: "Programming Languages",
        skills: [
            {
                name: "Python",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
            },
            {
                name: "C++",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
            },
            {
                name: "C",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
            },
            {
                name: "Java",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
            },
        ],
    },
    {
        title: "Cloud & Databases",
        skills: [
            {
                name: "AWS",
                image: aws,
            },
            {
                name: "MongoDB",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
            },
            {
                name:"MySQL",
                image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
            },
            {
                name: "PostgreSQL",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
            }
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            {
                name: "Scikit-learn",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
            },
            {
                name: "Pandas",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
            },
            {
                name: "NumPy",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
            },
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            {
                name: "Git",
                image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
            },
            {
                name: "GitHub",
                image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
            },
            {
                name: "VS Code",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
            },
            {
                name: "Cursor",
                image: cursor,
            },
            {
                name: "Windsurf",
                image: windsurf,
            },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        role: "Software Engineer",
        company: "Cloudwick Technologies",
        date: "August 2025 - Present",
        desc: "",
        skills: ["AWS", "Python"],
    },
    {
        id: 1,
        role: "Web Developer",
        company: "EETI Foundation",
        date: "October 2023 - Present",
        desc: "Working on the frontend of the web application using ReactJS",
        skills: ["React", "HTML", "CSS", "JavaScript"],
    },
    {
        id: 2,
        role: "Web Developer",
        company: "Edtech Startup",
        date: "October 2023 - November 2023",
        desc: "Built the frontend of the web application using ReactJS",
        skills: ["React", "HTML", "CSS", "JavaScript"],
    },
];

export const education = [
    {
        id: 0,
        img: "https://www.cet.ac.in/wp-content/uploads/2018/09/cropped-CET-Emblom-transparent-2-e1536389478507.png",
        school: "College of Engineering Trivandrum",
        date: "November 2021 - Present",
        grade: "CGPA: 9.48/10",
        desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at College of Engineering Trivandrum. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks, Formal Languages and Automata Theory, Artificial Intelligence, Machine Learning among others.",
        degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSyonJ1FUrLV0ULVDNfA6Pu9ODfgBS8vTwQ&usqp=CAU",
        school: "St Thomas Central School, Trivandrum",
        date: "2021",
        desc: "Class 12th - CBSE Computer Science with Physics, Chemistry and Mathematics",
        grade: "Percentage: 98.8%",
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSyonJ1FUrLV0ULVDNfA6Pu9ODfgBS8vTwQ&usqp=CAU",
        school: "St Thomas Central School, Trivandrum",
        date: "2019",
        desc: "Class 10th - CBSE",
        grade: "Percentage: 98%",
    },
];

export const projects = [
    {
        id: 0,
        title: "Jolly Audience",
        description:
            "A tool that extracts happy and curious frames from videos, aiding professionals and media teams in creating posters and social media content.",
        image: jollyaudience,
        tags: ["React", "Flask", "OpenCV"],
        github: "https://github.com/abhi-s-03/Jolly-Audience",
    },
    {
        id: 1,
        title: "IPL Win Probability Predictor",
        description:
            "Predicts the win% of teams in the 2nd innings based on the first innings and current scorecard.",
        image: ipl,
        tags: ["React", "Flask", "Machine Learning", "Scikit Learn"],
        github: "https://github.com/abhi-s-03/ipl-win-predictor",
        demo: "https://ipl-win-predictor.vercel.app/",
    },
    {
        id: 2,
        title: "PDFPILOT-PRO",
        description:
            "Application that enables users to upload multiple PDFs and ask questions based on their content. Users also have the option to perform searches beyond the scope of the uploaded PDFs.",
        image: pdfpilot,
        tags: ["Streamlit", "Python", "Gemini API"],
        github: "https://github.com/abhi-s-03/PDFPilot-Pro",
        demo: "https://chatmultiplepdf.streamlit.app/",
    },
    {
        id: 3,
        title: "Library Management System",
        description:
            "A library management system with a database of books and users. Integrated features like dashboard, book issue and return, authentication and book management.",
        image: lms,
        tags: ["React", "Express.js", "PostgreSQL"],
        github: "https://github.com/abhi-s-03/Library-Management-System",
    },
    {
        id: 4,
        title: "Boilerplate Code Generator",
        description:
            "A tool that generates boilerplate code for components of websites, advanced code for machine learning algorithms through a convenient dropdown menu etc",
        image: bpcg,
        tags: ["React", "Flask", "OpenAI API"],
        github: "https://github.com/abhi-s-03/Boiler-Plate-Code-Generator",
    },
    {
        id: 5,
        title: "Spotify Clone",
        date: "Dec 2020 - Jan 2021",
        description:
            "A Spotify clone made with HTML, CSS and JavaScript. Playlist and music play functionality is implemented.",
        image: spotify,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/abhi-s-03/Spotify-Clone",
        demo: "https://abhi-s-03.github.io/Spotify-Clone/",
    }
];
