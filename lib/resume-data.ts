/** One-line tech stack for the hero strip (reference-style). */
export const techStrip = [
  "Python",
  "TypeScript",
  "JavaScript",
  "Node.js",
  "React",
  "Next.js",
  "Angular",
  "AWS",
  "GCP",
  "Docker",
  "Kubernetes",
  "Redis",
  "TensorFlow",
  "PyTorch",
  "LLMs",
  "Git",
] as const;

export const services = [
  {
    title: "AI & LLM systems",
    description: "LLM document extraction, RAG, candidate scoring, and MLOps on GCP.",
    icon: "fa-solid fa-brain",
  },
  {
    title: "Cloud & microservices",
    description: "Multi-service architectures, ATS integrations, GCP/AWS, Redis, Pub/Sub.",
    icon: "fa-solid fa-cloud",
  },
  {
    title: "Full-stack product delivery",
    description: "Architecture through deployment & monetization — Angular, React, Next.js, Node.",
    icon: "fa-solid fa-code",
  },
] as const;

export const headlineStats = [
  { value: "10+", label: "Years of experience" },
  { value: "20+", label: "ATS integrations shipped" },
  { value: "50%", label: "LLM token cost reduction" },
] as const;

export const resume = {
  name: "Syed Nazar Abbas Kazmi",
  shortBrand: "Syed Kazmi",
  heroFirstName: "Syed",
  title: "Technical Lead — AI & Full-Stack Engineering | Building & Scaling AI SaaS Products",
  location: "Noida, India",
  phone: "+91-8433233486",
  phoneHref: "tel:+918433233486",
  email: "syed.nazar2909@gmail.com",
  emailHref: "mailto:syed.nazar2909@gmail.com",
  linkedIn: { label: "LinkedIn — https://www.linkedin.com/in/syed-nazar-abbas-kazmi-8a52b171/", href: "https://www.linkedin.com/in/syed-nazar-abbas-kazmi-8a52b171/" },
  portfolio: { label: "Portfolio — add your URL", href: "#" },
  summary:
    "Hands-on Technical Lead and full-stack + AI engineer with 10+ years of experience — someone who personally builds across the stack and the ML layer, not just directs it. Currently leads JobMojo.ai, an AI-driven ATS processing thousands of resumes/day, re-architected into a multi-service platform with 20+ ATS integrations and an ML engine that scores candidates on relevance, willingness, and selection cost. Brings a rare applied-ML research background (genomics on HPC clusters) and a track record of cutting cost — including a 50% reduction in LLM token spend. Leads an engineering team of up to 12 and owns delivery end to end, from cloud architecture (GCP/AWS) to product monetization and client strategy.",
  achievements: [
    { icon: "fa-solid fa-layer-group", text: "Built & scaled JobMojo.ai into a multi-service AI ATS processing thousands of resumes/day" },
    { icon: "fa-solid fa-brain", text: "Designed an AI candidate-scoring engine (relevance, willingness, selection cost) with TensorFlow & NLP" },
    { icon: "fa-solid fa-plug", text: "Integrated 20+ public ATS providers, including Greenhouse, Lever, Workday, and SAP SuccessFactors" },
    { icon: "fa-solid fa-file-invoice", text: "Built an LLM document-extraction system (Gemini, GPT) and cut token spend by 50%" },
    { icon: "fa-solid fa-people-group", text: "Led an engineering team of up to 12, sustaining full delivery velocity with a leaner team of 5" },
    { icon: "fa-solid fa-chart-line", text: "Owned product monetization and client-facing strategy end to end" },
  ] as const,
  experience: [
    {
      role: "Tech Lead / Project Manager (AI & Full Stack)",
      company: "Innova AM Tech",
      period: "Oct 2021 – Present",
      bullets: [
        "Led an engineering team of up to 12 developers, and drove adoption of AI-assisted development that sustained full delivery velocity with a leaner team of 5.",
        "Drove product monetization and go-to-market — presented products to clients, led commercial discussions, and planned future growth strategy and roadmap direction.",
        "Led end-to-end development of JobMojo.ai (thousands of resumes/day) and re-architected it into a multi-service platform — an employer application, an AI jobseeker service, a unified public front (www.jobmojo.ai), and native Android and iOS apps.",
        "Built the employer application (employer.jobmojo.ai) on Angular + Node.js + MySQL, delivering continuous feature enhancements and bug fixes across multiple Angular versions.",
        "Designed and built the AI \"Jobseeker\" service in Python — performing internal and external resume-field extraction and computing multiple candidate scores (relevance, willingness, probability of selection, and cost of selection) using TensorFlow, NLP, NumPy, and pandas, with MySQL connectivity.",
        "Integrated the job-aggregation platform with 20+ public ATS providers, including Greenhouse, Lever, Ashby, Workday, Oracle Recruiting Cloud, SAP SuccessFactors, iCIMS, Jobvite, Workable, BambooHR, Eightfold, Avature, and Phenom.",
        "Automated recruitment workflows using Python RPA (UI-path based) via GCP Pub/Sub, and built WhatsApp (WATI) communication flows, initially powered by Dialogflow.",
        "Managed complete GCP hosting and infrastructure with ngrok secure tunneling; optimized MySQL queries with backend code, then led the migration from MySQL to MongoDB.",
        "Built a document-extraction system using Google Gemini and GPT to parse invoices and purchase orders (TotalRecall) and resumes (JobMojo).",
        "Advanced the in-house extractor to power duplicate detection and data enrichment (auto-filling blank fields from matched records), and deployed documatic.jobmojo.ai — a Gradio-based extractor backed by MongoDB.",
        "Reduced the LLM token bill by 50% by eliminating redundant token use, minimizing tokens per task, and monitoring daily usage to diagnose cost spikes — now embedded in the standard workflow.",
        "Uses modern LLMs (Claude Opus, Sonnet, Haiku, and others) to accelerate the development lifecycle.",
        "Built Workspaces by Innova in Next.js, later migrating it to WordPress to cut hosting cost for a static site; managed TotalRecall (totalrecall.ai) AWS hosting and enhancement planning for ~8 months; led digitalization of HeadsetsIndia (legacy PHP).",
        "Managed SEO and analytics (Search Console, Google Analytics, Meta); used Bitbucket, GitHub, and Jira for version control and delivery.",
      ],
    },
    {
      role: "Bioinformatics Software & Data Science Specialist",
      company: "Aligarh Muslim University (AMU)",
      period: "2018 – 2021",
      bullets: [
        "Built and trained ML pipelines on millions of genomic sequences and records (DNA-Seq, RNA-Seq) using TensorFlow and PyTorch, applying statistical modeling to high-dimensional biological data.",
        "Designed and shipped three publicly hosted scientific databases used by external research groups — ACD (thousands of antimicrobial compounds/peptides), EPDRD (verified drug-resistant genes and mutations), and BLAD (Interdisciplinary Bioinformatics Unit) — supporting antimicrobial and drug-resistance research.",
        "Developed scientific-computing and data-analysis tools in Python and R, and built automated preprocessing pipelines ensuring reproducibility across large-scale datasets.",
        "Deployed and ran a range of bioinformatics applications (e.g., PlasFlow) on high-performance computing (HPC) / supercomputing clusters, enabling researchers to run simulations in-house — replacing a previously outsourced process and cutting external dependency and cost.",
        "Partnered with researchers to translate complex biological problems into scalable computational solutions, supporting algorithm development and validation for peer-reviewed research.",
      ],
    },
    {
      role: "Software Engineer II",
      company: "Adeptus Virtuoso",
      period: "2016 – 2018",
      bullets: [
        "Built responsive front-end pages from HTML/CSS and PSD-to-HTML conversions, progressively adopting JavaScript, jQuery, and Bootstrap to develop interfaces faster.",
        "Developed interactive UIs with AngularJS and PHP, building reusable UI components and optimizing performance via lazy loading and state management.",
      ],
    },
    {
      role: "Technical Associate",
      company: "Wipro",
      period: "2012 – 2013",
      bullets: ["Provided technical support and troubleshooting for enterprise clients, maintaining high SLA adherence."],
    },
  ],
  projects: [
    { icon: "fa-solid fa-briefcase", name: "JobMojo.ai", desc: "Multi-service AI ATS with native Android & iOS apps.", href: "https://www.jobmojo.ai", logoDomain: "jobmojo.ai" },
    { icon: "fa-solid fa-file-lines", name: "documatic.jobmojo.ai", desc: "Gradio-based AI document extractor backed by MongoDB.", href: "https://documatic.jobmojo.ai", logoDomain: "documatic.jobmojo.ai" },
    { icon: "fa-solid fa-file-invoice-dollar", name: "TotalRecall.ai", desc: "AI document extraction platform hosted on AWS.", href: "https://totalrecall.ai", logoDomain: "totalrecall.ai" },
    { icon: "fa-solid fa-building", name: "Workspaces by Innova", desc: "Coworking site built in Next.js, migrated to WordPress.", href: "https://workspacesbyinnova.com", logoDomain: "workspacesbyinnova.com" },
    { icon: "fa-solid fa-car", name: "Roadster Relics", desc: "Vintage automobile marketplace in React, with native Android & iOS apps.", href: "https://roadsterrelics.com", logoDomain: "roadsterrelics.com" },
    { icon: "fa-solid fa-gem", name: "Craft Marble", desc: "E-commerce platform with cart, payment integration, and real-time inventory.", href: "https://craftmarble.com", logoDomain: "craftmarble.com" },
    { icon: "fa-solid fa-hospital", name: "Zyvraa", desc: "Hospital Management System (HMIS) in React + Node.js, entering production.", href: "https://zyvraa.com", logoDomain: "zyvraa.com" },
  ] as const,
  skillGroups: [
    {
      title: "AI / Machine Learning",
      tags: ["TensorFlow", "PyTorch", "scikit-learn", "NLP", "NumPy", "pandas", "LLMs (Gemini, GPT, Claude)", "RAG", "MLOps", "Vertex AI", "BigQuery", "Gradio", "Dialogflow"],
    },
    {
      title: "Languages & Frameworks",
      tags: ["Python", "R", "JavaScript", "TypeScript", "Node.js", "Angular", "React", "Next.js", "PHP", "WordPress", "native Android & iOS"],
    },
    {
      title: "Cloud & Infrastructure",
      tags: ["GCP (Cloud Run, GKE, Pub/Sub)", "AWS (hosting, load balancing)", "HPC / supercomputing", "Docker", "Kubernetes", "Redis", "ngrok", "Nginx"],
    },
    {
      title: "Automation & DevOps",
      tags: ["Python RPA (UI-path)", "CI/CD", "API integrations", "ATS integrations (20+)", "WhatsApp/WATI", "SSL/TLS", "Bitbucket", "GitHub", "Jira", "Linux"],
    },
    { title: "Databases", tags: ["MySQL (optimization)", "MongoDB", "SQL", "MySQL → MongoDB migration"] },
    {
      title: "Marketing & Analytics",
      tags: ["SEO (on/off-page, technical)", "Google Search Console", "Google Analytics", "Meta"],
    },
  ],
  education: [
    { degree: "MCA (Master of Computer Applications)", school: "Arunachal University of Studies", period: "2013 – 2016" },
    { degree: "BCA (Bachelor of Computer Applications)", school: "Sikkim Manipal University", period: "2007 – 2010" },
  ],
  footer:
    "Tech highlights: AI / ML · LLM document extraction · ATS integrations · Cloud-native microservices · GCP & AWS · High-throughput async pipelines",
} as const;
