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
import bitbucket from "../assets/BitBucket.svg";

export const Bio = {
    name: "Abhishek S",
    roles: ["Software Engineer", "AI Engineer", "Cloud Developer"],
    description:
        "Software Engineer specializing in AI-driven backend systems and cloud-native architectures using AWS. I build scalable AI applications and agentic workflows. Passionate about GenAI, developer tooling, and automation.",
    github: "https://github.com/abhi-s-03",
    resume: "https://drive.google.com/file/d/17_wYeOBsQawsN7e8qxVPh2T4tl5mPn4M/view?usp=sharing",
    linkedin: "https://www.linkedin.com/in/abhis03/",
    insta: "https://www.instagram.com/__abhisheks/",
};

export const skills = [
    {
        title: "Frontend",
        skills: [
            { name: "HTML", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" },
            { name: "CSS", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" },
            { name: "JavaScript", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
            { name: "React", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" },
            { name: "Next.js", image: nextjs },
        ],
    },
    {
        title: "Backend",
        skills: [
            { name: "Express.js", image: express },
            { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
            { name: "Flask", image: flask },
        ],
    },
    {
        title: "Programming Languages",
        skills: [
            { name: "Python", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" },
            { name: "C++", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg" },
            { name: "C", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg" },
            { name: "Java", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
        ],
    },
    {
        title: "Cloud & Databases",
        skills: [
            { name: "AWS", image: aws },
            { name: "MongoDB", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg" },
            { name: "MySQL", image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg" },
            { name: "PostgreSQL", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg" }
        ],
    },
    {
        title: "Machine Learning",
        skills: [
            { name: "Scikit-learn", image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg" },
            { name: "Pandas", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg" },
            { name: "NumPy", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg" },
        ],
    },
    {
        title: "Tools & Platforms",
        skills: [
            { name: "Git", image: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" },
            { name: "GitHub", image: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" },
            { name: "BitBucket", image: bitbucket },
            { name: "VS Code", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png" },
            { name: "Cursor", image: cursor },
            { name: "Windsurf", image: windsurf },
        ],
    },
];

export const experiences = [
    {
        id: 0,
        role: "Software Engineer 1",
        company: "Cloudwick Technologies",
        date: "August 2025 - Present",
        desc: "Building cloud-native AI solutions using AWS, Bedrock, Lambda, and serverless architectures. Designed agentic workflows, automated orchestration pipelines, and GenAI-based internal tools. Focused on scalable, secure, cost-optimized backend systems with hands-on experience in DynamoDB, S3, Bedrock and many more services",
        skills: ["AWS", "Python", "AI", "Agents", "DynamoDB", "Bedrock"],
    },
    {
        id: 1,
        role: "Software Engineer Intern",
        company: "Cloudwick Technologies",
        date: "January 2025 - August 2025",
        desc: "Worked on next-gen AI solutions including an agentic newsletter generator and AI workbench platform. Contributed to backend development, prompt engineering, cloud automation, and AWS infrastructure. Implemented GenAI features, AI pipelines, while improving developer tooling and CI/CD workflows.",
        skills: ["AWS", "Python", "Linux", "Agentic AI", "GenAI", "CI/CD", "Prompt Engineering"],
    },
];

export const certifications = [
    {
        id: 0,
        title: "AWS Certified Solutions Architect - Professional",
        issuer: "Amazon Web Services (AWS)",
        date: "June 2025 - June 2028",
        credentialUrl: "https://www.credly.com/badges/fec46ad8-f5b8-4be8-9125-aba27e7fa472/public_url",
        skills: [
            "AWS Architecture", "Cloud Migration", "Cost Optimization", "Security Best Practices", "High Availability", "Scalability"
        ]
    },
    {
        id: 1,
        title: "AWS Certified Developer – Associate",
        issuer: "Amazon Web Services (AWS)",
        date: "July 2025 - July 2028",
        credentialUrl: "https://www.credly.com/badges/fa203b09-4e39-48c6-8296-4b849ef516e2/public_url",
        skills: [
            "AWS Services", "Serverless Architecture", "CI/CD",
        ]
    },
    {
        id: 2,
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services (AWS)",
        date: "August 2025 - August 2028",
        credentialUrl: "https://www.credly.com/badges/17f7b510-1fb3-4111-8ef9-d468afb0aa49/public_url",
        skills: [
            "Cloud Concepts", "AWS Core Services", "Security & Compliance", "Billing & Pricing", "Cloud Architecture"
        ]
    },
    {
        id: 3,
        title: "Machine Learning Specialization",
        issuer: "Coursera",
        date: "September 2023 - Present",
        credentialUrl: "https://coursera.org/verify/specialization/NPPMB5FHEQRR",
        skills: [
            "Machine Learning", "Neural Networks", "Deep Learning", "Model Evaluation"
        ]
    },
    {
        id: 4,
        title: "NPTEL Advanced Graph Theory",
        issuer: "IIT Madras (NPTEL)",
        date: "March 2023 - Present",
        credentialUrl: "https://drive.google.com/file/d/1YGbu2i3lbAOOq3eAwl_u3k5lrlbhQi9O/view?usp=sharing",
        skills: [
            "Graph Algorithms", "Graph Theory", "Algorithmic Analysis"
        ]
    }
].sort((a, b) => new Date(b.date.split(" - ")[0]) - new Date(a.date.split(" - ")[0]));

export const education = [
    {
        id: 0,
        img: "https://www.cet.ac.in/wp-content/uploads/2018/09/cropped-CET-Emblom-transparent-2-e1536389478507.png",
        school: "College of Engineering Trivandrum",
        date: "November 2021 - June 2025",
        grade: "CGPA: 9.47/10",
        desc: "Completed B.Tech in Computer Science and Engineering with a strong academic foundation in algorithms, systems, AI, and software engineering. Relevant coursework includes Data Structures & Algorithms, Operating Systems, Computer Networks, Database Systems, AI and ML",
        degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
    },
    {
        id: 1,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSyonJ1FUrLV0ULVDNfA6Pu9ODfgBS8vTwQ&usqp=CAU",
        school: "St Thomas Central School, Trivandrum",
        date: "2021",
        desc: "Class 12th – CBSE (Computer Science Stream with PCM)",
        grade: "Percentage: 98.8%",
    },
    {
        id: 2,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSyonJ1FUrLV0ULVDNfA6Pu9ODfgBS8vTwQ&usqp=CAU",
        school: "St Thomas Central School, Trivandrum",
        date: "2019",
        desc: "Class 10th – CBSE",
        grade: "Percentage: 98%",
    },
];

export const projects = [
    {
        id: 0,
        title: "Jolly Audience",
        description:
            "AI-powered tool that detects and extracts emotionally expressive frames from videos to improve marketing collateral, poster generation, and media engagement. Built using Python, CV, and ML with a React UI.",
        image: jollyaudience,
        tags: ["React", "Flask", "OpenCV"],
        github: "https://github.com/abhi-s-03/Jolly-Audience",
    },
    {
        id: 1,
        title: "IPL Win Probability Predictor",
        description:
            "Machine learning model and web app that predicts real-time match outcomes using historical statistics and live game state inputs. Features interactive UI and probabilistic prediction visualization.",
        image: ipl,
        tags: ["React", "Flask", "Machine Learning", "Scikit Learn"],
        github: "https://github.com/abhi-s-03/ipl-win-predictor",
        demo: "https://ipl-win-predictor.vercel.app/",
    },
    {
        id: 2,
        title: "PDFPILOT-PRO",
        description:
            "RAG-based AI application that allows users to upload multiple PDFs and ask natural language questions with contextual retrieval and hybrid search. Includes streaming responses and external search augmentation.",
        image: pdfpilot,
        tags: ["Streamlit", "Python", "Gemini API"],
        github: "https://github.com/abhi-s-03/PDFPilot-Pro",
        demo: "https://chatmultiplepdf.streamlit.app/",
    },
    {
        id: 3,
        title: "Library Management System",
        description:
            "Full-stack library system featuring authentication, role-based access, book issue/return logs, dashboards, and relational database backend. Built with modern React UI and PostgreSQL persistence.",
        image: lms,
        tags: ["React", "Express.js", "PostgreSQL"],
        github: "https://github.com/abhi-s-03/Library-Management-System",
    },
    {
        id: 4,
        title: "Boilerplate Code Generator",
        description:
            "Developer productivity tool that generates clean templates for ML models, UI components, and common boilerplate through an interactive UI with AI-assisted code suggestions. Built with Flask backend and OpenAI APIs.",
        image: bpcg,
        tags: ["React", "Flask", "OpenAI API"],
        github: "https://github.com/abhi-s-03/Boiler-Plate-Code-Generator",
    },
    {
        id: 5,
        title: "Spotify Clone",
        date: "Dec 2020 - Jan 2021",
        description:
            "A functional Spotify UI clone using pure HTML, CSS, and JS. Includes playlist browsing and audio playback without external frameworks. Built as an early exploration into web development.",
        image: spotify,
        tags: ["HTML", "CSS", "JavaScript"],
        github: "https://github.com/abhi-s-03/Spotify-Clone",
        demo: "https://abhi-s-03.github.io/Spotify-Clone/",
    }
];
