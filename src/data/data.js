export const Bio = {
  name: "Abhishek S",
  roles: ["Front-end Developer", "ML Enthusiast", "Programmer"],
  description:
    "I'm a passionate Computer Science student with a diverse skillset in frontend, backend, and ML. I thrive in collaborative environments and am eager to contribute to impactful projects.",
  github: "https://github.com/abhi-s-03",
  resume:
    "https://drive.google.com/file/d/1jKycceGmhfWG-uoX1WjkshNqjVC_sYj2/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/abhis03/",
  insta: "https://www.instagram.com/__abhisheks/",
};

export const skills = [
  {
    title: "Frontend",
    skills: [
      {
        name: "HTML",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      },
      {
        name: "CSS",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      },
      {
        name: "JavaScript",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "React Js",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      },
    ],
  },
  {
    title: "Backend",
    skills: [
      {
        name: "Flask",
        image:
          "https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg",
      },
      {
        name: "Firebase",
        image: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      {
        name: "C",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
      },
      {
        name: "C++",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "Python",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      {
        name: "Java",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
      },
    ],
  },
  {
    title: "Machine Learning",
    skills: [
      {
        name: "Scikit Learn",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "Pandas",
        image:
          "https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/pandas/pandas-original.svg",
      },
    ],
  },
  {
    title: "Others",
    skills: [
      {
        name: "Git",
        image: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      },
      {
        name: "GitHub",
        image:
          "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
      },
      {
        name: "VS Code",
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png?20210804221519",
      },
      {
        name: "Netlify",
        image:
          "https://seeklogo.com/images/N/netlify-logo-BD8F8A77E2-seeklogo.com.png",
      },
      {
        name: "Vercel",
        image:
          "https://camo.githubusercontent.com/93b32389bf746009ca2370de7fe06c3b5146f4c99d99df65994f9ced0ba41685/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f676574706f73746d616e2f676574706f73746d616e2d69636f6e2e737667",
      },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    role: "Web Developer",
    company: "CS Association, CET Trivandrum",
    date: "January 2024 - Present",
    desc: "Developed and maintained association's website using ReactJS and Firebase.",
    skills: ["ReactJS"],
  },
  {
    id: 1,
    role: "Web Developer",
    company: "EETI Foundation",
    date: "October 2023 - Present",
    desc: "Working on the frontend of the web application using ReactJS",
    skills: ["ReactJS", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    role: "Web Developer",
    company: "Edtech Startup",
    date: "October 2023 - November 2023",
    desc: "Built the frontend of the web application using ReactJS",
    skills: ["ReactJS", "HTML", "CSS", "JavaScript"],
  },
];

export const education = [
  {
    id: 0,
    img: "https://www.cet.ac.in/wp-content/uploads/2018/09/cropped-CET-Emblom-transparent-2-e1536389478507.png",
    school: "College of Engineering Trivandrum",
    date: "November 2021 - Present",
    grade: "9.54/10",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at College of Engineering Trivandrum. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSyonJ1FUrLV0ULVDNfA6Pu9ODfgBS8vTwQ&usqp=CAU",
    school: "St Thomas Central School, Trivandrum",
    date: "2021",
    desc: "Class 12th - CBSE Computer Science with Physics, Chemistry and Mathematics",
    grade: "98.8%",
  },
  {
    id: 2,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFSyonJ1FUrLV0ULVDNfA6Pu9ODfgBS8vTwQ&usqp=CAU",
    school: "St Thomas Central School, Trivandrum",
    date: "2019",
    desc: "Class 10th - CBSE",
    grade: "98%",
  },
];

export const projects = [
  {
    id: 0,
    title: "Jolly Audience",
    description:
      "A tool that extracts happy and curious frames from videos, aiding professionals and media teams in creating posters and social media content.",
    image: "",
    tags: ["React Js", "Flask", "OpenCV"],
    github: "https://github.com/abhi-s-03/Jolly-Audience",
  },
  {
    id: 1,
    title: "IPL Win Probability Predictor",
    description:
      "Predicts the win% of teams in the 2nd innings based on the first innings and current scorecard.",
    image: "",
    tags: ["React Js", "Flask", "Scikit Learn"],
    github: "https://github.com/abhi-s-03/ipl-win-predictor",
    demo: "https://ipl-win-predictor.vercel.app/",
  },
  {
    id: 2,
    title: "ArtMart",
    description:
      "An e-commerce website for buying and selling art. Users can upload their art and sell it to other users.",
    image: "",
    tags: ["React Js", "Firebase"],
    github: "https://github.com/abhi-s-03/E-Commerce-website",
    demo: "https://artmart-omega.vercel.app/",
  },
  {
    id: 3,
    title: "Library Management System",
    description:
      "A library management system with a database of books and users. Users can borrow and return books.•	Successfully integrated key features like dashboard, book issue and return, authentication and book management.",
    image: "",
    tags: ["React Js", "Node Js", "PostgreSQL"],
    github: "https://github.com/abhi-s-03/Library-Management-System",
  },
  {
    id: 4,
    title: "Boilerplate Code Generator",
    description:
      "A tool that generates boilerplate code for components of websites, advanced code for machine learning algorithms through a convenient dropdown menu etc",
    image: "",
    tags: ["React Js", "Flask", "OpenAI API"],
    github: "https://github.com/abhi-s-03/Boiler-Plate-Code-Generator",
  },
  {
    id: 5,
    title: "TO-DO App",
    description:
      "A simple to-do app with a calendar and search bar. Users can add, delete and edit tasks. Tasks are stored in firebase database.",
    image: "",
    tags: ["React Js", "Firebase"],
    github: "https://github.com/abhi-s-03/ToDo",
    demo: "https://abhi-todo-app.netlify.app/",
  },
  {
    id: 6,
    title: "Wizlet",
    description:
      "A personal finance management app. Users can create an account to store their income and expenditure to get financial analytics. They can also set goals regarding thir expenditure. They can store their card and wallet details. Also goal can be set to limit their expense and increase the savings.",
    image: "",
    tags: ["ElectronJS", "HTML", "CSS", "JavaScript", "Firebase"],
    github: "https://github.com/abhi-s-03/Wizlet",
  },
  {
    id: 7,
    title: "Notifier",
    description:
      "A web app to send personal development and motivational notifications",
    image: "",
    tags: ["React Js", "Flask"],
    github: "https://github.com/abhi-s-03/Notifier",
  },
  {
    id: 8,
    title: "Spotify Clone",
    date: "Dec 2020 - Jan 2021",
    description:
      "A Spotify clone made with HTML, CSS and JavaScript. Playlist and music play functionality is implemented.",
    image: "",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/abhi-s-03/Music-Player-Spotify-Clone",
    webapp: "https://abhi-s-03.github.io/Music-Player-Spotify-Clone/",
  },
];
