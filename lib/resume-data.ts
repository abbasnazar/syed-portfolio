export const resume = {
  name: "Syed Nazar Abbas Kazmi",
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
      period: "2021–Present",
      bullets: [
        "Scaled JobMojo.ai to process 8,000+ resumes/day using high-throughput async workflows & microservices.",
        "Built NLP pipelines for resume parsing and candidate matching.",
        "Implemented Redis caching and cloud architecture on AWS & GCP.",
        "Led cross-functional teams and technical decision making; improved productivity with AI-assisted tools.",
      ],
    },
    {
      role: "Bioinformatics Software & Data Science Specialist",
      company: "Aligarh Muslim University (AMU)",
      period: "2018–2021",
      bullets: [
        "Built ML pipelines for genomic data (DNAseq, RNAseq) using TensorFlow and PyTorch.",
        "Developed scientific computing tools in Python and R for research collaboration.",
        "Co-authored publications in peer-reviewed journals.",
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
