/** One-line tech stack for the hero strip (reference-style). */
export const techStrip = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React",
  "Next.js",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Redis",
  "TensorFlow",
  "PyTorch",
  "Git",
  "GitHub",
] as const;

export const services = [
  {
    title: "AI & NLP platforms",
    description: "LLMs, RAG, resume parsing, ranking, and MLOps on GCP.",
    icon: "fa-solid fa-brain",
  },
  {
    title: "Cloud & microservices",
    description: "High-throughput async workflows, AWS & GCP, Redis, distributed systems.",
    icon: "fa-solid fa-cloud",
  },
  {
    title: "Full-stack product delivery",
    description: "Architecture through deployment — Angular, React, Next.js, Node.",
    icon: "fa-solid fa-code",
  },
] as const;

export const headlineStats = [
  { value: "10+", label: "Years of experience" },
  { value: "8K+", label: "Resumes processed / day" },
  { value: "~30%", label: "Engineering productivity lift" },
] as const;

export const resume = {
  name: "Syed Nazar Abbas Kazmi",
  shortBrand: "Syed Kazmi",
  heroFirstName: "Syed",
  title: "TECH LEAD | AI PRODUCT ENGINEER | SCALABLE SYSTEMS ARCHITECT",
  location: "Noida, India",
  phone: "+91-8433233486",
  phoneHref: "tel:+918433233486",
  email: "syed.nazar9966@gmail.com",
  emailHref: "mailto:syed.nazar9966@gmail.com",
  linkedIn: { label: "LinkedIn — add your URL", href: "#" },
  portfolio: { label: "Portfolio — add your URL", href: "#" },
  summary:
    "Tech Lead / AI Engineer with 10+ years of experience building scalable, cloud-native platforms across AI, distributed systems, and full-stack development. Currently leading JobMojo.ai, an AI-powered recruitment platform processing 8,000+ resumes/day. Expert in system design, microservices architecture, NLP pipelines, and cloud infrastructure.",
  achievements: [
    { icon: "fa-solid fa-chart-line", text: "Built & scaled AI recruitment platform handling 8,000+ resumes/day" },
    { icon: "fa-solid fa-robot", text: "Improved engineering productivity by ~30% using AI-assisted workflows" },
    { icon: "fa-solid fa-cloud", text: "Designed scalable microservices architecture on AWS & GCP" },
    { icon: "fa-solid fa-brain", text: "Developed end-to-end NLP pipeline for resume parsing & ranking" },
    { icon: "fa-solid fa-people-group", text: "Led full product lifecycle from architecture to deployment & growth" },
  ] as const,
  experience: [
    {
      role: "Tech Lead / Project Manager (AI & Full Stack)",
      company: "Innova AM Tech",
      period: "2021 – Present",
      bullets: [
        "Led end-to-end architecture and scaling of JobMojo.ai, processing 8,000+ resumes/day with high availability & performance.",
        "Designed cloud-native microservices architecture with asynchronous workflows for large-scale document processing & NLP workloads.",
        "Built and optimized NLP pipelines for resume parsing, skill extraction, and candidate-job matching, improving accuracy & throughput.",
        "Implemented Redis-based caching strategies to reduce latency and optimize performance across high-traffic services.",
        "Architected multi-cloud infrastructure on AWS & GCP, ensuring scalability, fault tolerance, and cost efficiency.",
        "Led system design reviews and key technical decisions across AI, backend, and full-stack domains.",
        "Mentored cross-functional teams (AI, backend, frontend), improving delivery speed and code quality.",
        "Introduced AI-assisted development workflows (Copilot, custom LLM tools), boosting developer productivity and feature delivery.",
        "Collaborated with product and business stakeholders to align technical solutions with platform growth strategy.",
      ],
    },
    {
      role: "Bioinformatics Software & Data Science Specialist",
      company: "Aligarh Muslim University (AMU)",
      period: "2018 – 2021",
      bullets: [
        "Built ML pipelines for large-scale genomic data (DNA-Seq, RNA-Seq) using TensorFlow & PyTorch.",
        "Developed scientific computing and data analysis tools in Python & R for collaborative biological research.",
        "Applied statistical modeling and data science techniques to analyze high-dimensional biological datasets.",
        "Designed workflow automation and data preprocessing pipelines ensuring reproducibility and performance.",
        "Collaborated with researchers to translate complex biological problems into scalable computational solutions.",
        "Contributed to peer-reviewed publications, supporting algorithm development and experimental validation.",
        "Built strong foundations in data engineering, ML experimentation, and applied research for large-scale AI systems.",
      ],
    },
    {
      role: "Software Engineer II",
      company: "Adeptus Virtuoso",
      period: "2016–2018",
      bullets: [
        "Developed frontend applications using AngularJS and Node.js.",
        "Built reusable UI components and optimized performance.",
      ],
    },
    {
      role: "Technical Associate",
      company: "Wipro",
      period: "2012–2013",
      bullets: ["Provided technical support and troubleshooting for enterprise clients."],
    },
  ],
  projects: [
    { icon: "fa-solid fa-briefcase", name: "JobMojo.ai", desc: "AI recruitment platform processing 8,000+ resumes/day." },
    { icon: "fa-solid fa-car", name: "Roadster Relics", desc: "Vintage automobile marketplace." },
    { icon: "fa-solid fa-gem", name: "Craft Marbles", desc: "E-commerce platform for marble products." },
  ] as const,
  skillGroups: [
    {
      title: "AI / ML",
      tags: ["TensorFlow", "PyTorch", "scikit-learn", "NLP pipelines", "LLMs (RAG)", "MLOps", "GCP (Vertex AI, BigQuery)"],
    },
    {
      title: "Cloud & Infrastructure",
      tags: ["AWS", "GCP (Cloud Run, GKE)", "microservices", "Docker", "Kubernetes", "Redis", "distributed systems"],
    },
    {
      title: "DevOps & Networking",
      tags: ["CI/CD", "container orchestration", "API integrations", "secure tunneling (ngrok)", "SSL/TLS", "reverse proxy (Nginx)"],
    },
    {
      title: "Languages & Frameworks",
      tags: ["Python", "R", "JavaScript", "TypeScript", "Angular", "AngularJS", "ReactJS", "NextJS", "Node.js", "PHP"],
    },
    { title: "Databases", tags: ["MySQL", "SQL", "MongoDB"] },
    {
      title: "Marketing & Analytics",
      tags: ["Google Analytics", "Google Search Console", "SEO (on-page, off-page, technical SEO)"],
    },
    { title: "Tools", tags: ["Git", "Jira", "CI/CD", "Linux"] },
  ],
  education: [
    { degree: "MCA", school: "Arunachal University of Studies" },
    { degree: "BCA", school: "Vans Infotech (Aptech)" },
  ],
  footer:
    "Tech highlights: AI / ML · Cloud-native microservices · NLP & LLM systems · AWS & GCP · High-throughput async pipelines",
} as const;
