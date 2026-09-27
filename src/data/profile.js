// All site content lives here so sections stay purely presentational.

export const profile = {
  name: "Noorah Almohaimeed",
  nameAr: "نورة المحيميد",
  roles: ["Mobile Applications Developer", "Full Stack Web Developer", "AI Engineer"],
  tagline:
    "I build mobile apps, full-stack platforms and AI-powered products — from government apps on the App Store and Google Play to AI tools for digital government and healthcare.",
  yearsExperience: 3,
  about:
    "Graduate of information technology interested in new technologies and projects that contribute to the development of the Kingdom of Saudi Arabia. I love programming and I am constantly keen to develop my skills through platforms such as Coderhub, GeeksforGeeks, and HackerRank.",
  email: "noorah.almohaimeed@outlook.com",
  linkedin:
    "https://www.linkedin.com/in/noorah-almohaimeed-نورة-المحيميد-37206a260",
  github: "https://github.com/noorah94",
};

export const stack = [
  { title: "AI & Automation", ar: "الذكاء الاصطناعي والأتمتة", items: ["Dify", "n8n", "RAG", "LLMs"] },
  {
    title: "Frontend & Mobile",
    ar: "الواجهات والجوال",
    items: ["React", "Next.js", "Flutter", "React Native", "Tailwind CSS"],
  },
  {
    title: "Backend & Infra",
    ar: "الخوادم والبنية التحتية",
    items: [".NET (C#)", "Express.js", "Microservices", "Coolify", "gRPC"],
  },
  { title: "Data & Cloud", ar: "البيانات والسحابة", items: ["SQL", "MongoDB", "Firebase"] },
  {
    title: "Languages",
    ar: "لغات البرمجة",
    items: ["Dart", "TypeScript", "JavaScript", "Python", "C#", "Java", "C++"],
  },
];

export const experience = [
  {
    role: "Mobile Applications Developer",
    company: "Qassim Municipality",
    period: "2023/09 — 2026/02",
    start: [2023, 9],
    end: [2026, 2],
    points: [
      "Developing applications with Flutter for Android & iPhone.",
      "Developing with Google Maps, REST APIs, local storage, state management, animation and more.",
      "Publishing applications to the App Store and Google Play.",
      "Creating solutions to counter cybersecurity attacks.",
    ],
    tags: ["Flutter", "Google Maps", "REST", "State management", "App Store", "Google Play"],
  },
  {
    role: "Mobile Applications Developer",
    company: "T2",
    period: "2023/03 — 2023/07",
    start: [2023, 3],
    end: [2023, 7],
    points: [
      "Developing applications with Flutter for Android & iPhone.",
      "Developing with Firebase, REST APIs, local storage and animation.",
    ],
    tags: ["Flutter", "Firebase", "REST", "Animation"],
  },
  {
    role: "Technical Support (Co-op Training)",
    company: "New Horizons Institute",
    period: "2016/07 — 2016/09",
    start: [2016, 7],
    end: [2016, 9],
    points: [
      "Eight-week cooperative training during my studies at Qassim University.",
      "Computer maintenance, installing required software and formatting machines.",
    ],
    tags: ["Hardware", "Support"],
  },
];

// category: "ai" | "mobile" | "web" | "fullstack"
// mockup (optional): "builder" | "triage" picks a custom browser illustration
export const projects = [
  {
    title: "Platforms Code Builder",
    subtitle: "صانع كود المنصات · DGA design system",
    category: "ai",
    featured: true,
    mockup: "builder",
    description:
      "A visual builder for government platform pages that follow the Digital Government Authority design system: assemble pages from official components and templates, edit with live preview and AI-powered Arabic prompts, then export production-ready React (TSX) code.",
    tools: ["Next.js", "React", "TypeScript", "AI"],
    links: { live: "https://n-builder.anbetra.com/" },
  },
  {
    title: "TriageTrack AI",
    subtitle: "AI-assisted emergency triage",
    category: "ai",
    featured: true,
    mockup: "triage",
    description:
      "An emergency department system for triage staff: patient queues, AI-assisted triage assessments, patient registration and shift tracking, in Arabic and English.",
    tools: ["Next.js", "AI", "Arabic / English"],
    links: { live: "https://triage-track-ai.arwan.org/" },
  },
  {
    title: "Qassim Municipality",
    subtitle: "Official citizen app",
    category: "mobile",
    featured: true,
    description:
      "The official Qassim Municipality application, built in Flutter and published on both the App Store and Google Play.",
    tools: ["Flutter", "Google Maps", "REST API"],
    links: {
      appStore:
        "https://apps.apple.com/us/app/%D8%A3%D9%85%D8%A7%D9%86%D8%A9-%D8%A7%D9%84%D9%82%D8%B5%D9%8A%D9%85/id997312328?ls=1",
      googlePlay: "https://play.google.com/store/apps/details?id=sa.gov.qassim",
    },
  },
  {
    title: "Khadamaty",
    subtitle: "Municipal e-services · iOS & Android",
    category: "mobile",
    featured: true,
    description:
      "Khadamaty (My Services) — a Flutter application for iOS and Android delivering Qassim Municipality e-services.",
    tools: ["Flutter", "REST API"],
    links: { live: "https://services.qassim.gov.sa/apps/" },
  },
  {
    title: "IT Asset Dashboard",
    subtitle: "Full-stack asset management",
    category: "fullstack",
    featured: true,
    description:
      "A dashboard for tracking IT assets — a React front end backed by a .NET Web API.",
    tools: ["React", ".NET API"],
    links: {
      live: "https://itassestdashboard.onrender.com",
      api: "https://itassestdashboardbackend.onrender.com/index.html",
    },
  },
  {
    title: "Weejhaty",
    category: "fullstack",
    description: "Full-stack website built on React, Express.js and MongoDB with a REST API.",
    tools: ["React", "Express.js", "MongoDB", "REST API"],
    links: {
      live: "https://weejhaty2.onrender.com/",
      github: "https://github.com/MP-Project-Noorah",
    },
  },
  {
    title: "T2 News",
    category: "mobile",
    description: "News application consuming a REST API with local storage.",
    tools: ["Flutter", "REST API", "Local storage"],
    links: { github: "https://github.com/noorah94/NewsApp" },
  },
  {
    title: "Flash Chat",
    category: "mobile",
    description: "Real-time chat application powered by Firebase, with animations.",
    tools: ["Flutter", "Firebase", "Animation"],
    links: { github: "https://github.com/noorah94/FlashChatApp" },
  },
  {
    title: "Game Website",
    category: "web",
    description: "Browser game built with React.",
    tools: ["React"],
    links: {
      live: "https://game-kvj5.onrender.com",
      github: "https://github.com/noorah15/Cap1",
    },
  },
  {
    title: "Historical Mosques",
    category: "web",
    description: "Website showcasing historical mosques, in plain HTML, CSS and JavaScript.",
    tools: ["HTML", "CSS", "JavaScript"],
    links: {
      live: "https://noorah94.github.io/mosques/index.html",
      github: "https://github.com/noorah15/U01P01",
    },
  },
  {
    title: "Weather",
    category: "mobile",
    description: "Weather application backed by a REST API.",
    tools: ["Flutter", "REST API"],
    links: { github: "https://github.com/noorah94/WeatherApp" },
  },
  {
    title: "Weight",
    category: "mobile",
    description: "Weight tracking application.",
    tools: ["Flutter"],
    links: { github: "https://github.com/noorah94/Weight" },
  },
  {
    title: "Todo · Provider",
    category: "mobile",
    description: "Todo application using the Provider state-management library.",
    tools: ["Flutter", "Provider"],
    links: { github: "https://github.com/noorah94/TodoWithProvider" },
  },
  {
    title: "Todo · Bloc",
    category: "mobile",
    description: "Todo application using the Bloc state-management library.",
    tools: ["Flutter", "Bloc"],
    links: { github: "https://github.com/noorah94/todoWithBloc" },
  },
  {
    title: "Simple Piano",
    category: "mobile",
    description: "Playable piano application.",
    tools: ["Flutter"],
    links: { github: "https://github.com/noorah94/simplePianoApp" },
  },
  {
    title: "Questions",
    category: "mobile",
    description: "Quiz application.",
    tools: ["Flutter"],
    links: { github: "https://github.com/noorah94/QuestionsApp" },
  },
];

export const achievements = [
  {
    rank: 1,
    title: "First place — Takaful Competition",
    project:
      "A Mobile Device Pattern Password for Elderly and Blind People Using Camouflage Patterns",
    place: "Qassim University · Graduation project",
    points: [
      "Built a new authentication system that resists shoulder-surfing attacks.",
      "Designed 9 Android versions to balance security and usability.",
      "Created enhanced versions for elderly and blind users and tested them across different segments of society.",
    ],
    link: "https://drive.google.com/drive/folders/138dbHiiainHHvy_OrpSAInSYPSWdjfA1?usp=sharing",
  },
];

export const education = [
  {
    degree: "Bachelor of Information Technology",
    school: "Qassim University",
    grade: "4.5 / 5",
    details: ["Second class honors", "Graduated 2018-05-17"],
  },
  {
    degree: "Master of Computer Science — one semester",
    school: "Qassim University",
    grade: "5 / 5",
    details: ["9 credit hours · 2020"],
    link: "https://drive.google.com/drive/folders/1P_ZNDS6grg_Xxsrt-jcAieFuEREdnMaE?sp=sharing",
  },
];
