export const profile = {
  name: 'Rutik Ugale',
  role: 'Junior Full-Stack Developer',
  tagline: 'Full-stack developer shipping production SaaS with AI, payments, admin tooling, and PDF workflows.',
  location: 'Sinnar, Nashik, MH',
  email: 'rutikugale25@gmail.com',
  phone: '+91 8530172521',
  linkedin: 'https://linkedin.com/in/rutik-ugale-388107232',
  github: 'https://github.com/rutiktechnicul-beep',
  available: true,
};

export const stats = [
  { value: 3, suffix: '', key: 'Apps in ResumeSprint' },
  { value: 2, suffix: '', key: 'Production products' },
  { value: 5, suffix: '', key: 'Years coding' },
  { value: 100, suffix: '%', key: 'Solo build rate' },
];

export const heroProof = [
  'Next.js + Node.js production apps',
  'AI resume scoring + JD matching',
  'Admin dashboards, RBAC, PDF export',
];

export const stackGroups = [
  {
    label: '// Languages',
    items: ['JavaScript', 'TypeScript', 'PHP', 'Java', 'C#', 'SQL'],
  },
  {
    label: '// Frontend',
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'Material UI', 'Bootstrap', 'HTML5 / CSS3'],
  },
  {
    label: '// Backend',
    items: ['Node.js', 'Laravel', 'REST APIs', 'RBAC', 'Authentication', 'Puppeteer'],
  },
  {
    label: '// Data + AI',
    items: ['MySQL', 'SQL Server', 'Prisma', 'Firebase', 'AI API Integration', 'Prompt Engineering', 'PDF Generation'],
  },
];

export const projects = [
  {
    num: '01',
    title: 'ResumeSprint',
    role: 'SOLO BUILD · AI SAAS PLATFORM',
    tagline: 'FLAGSHIP SOLO BUILD',
    impact: ['3-app system', 'AI JD matching', 'One-click PDF export'],
    desc: 'A production AI-powered resume SaaS, built end-to-end as a one-person team across three independent applications: Next.js user site, Node.js + MySQL REST API backend, and Next.js admin dashboard for subscription & data management. Features include JD matching, AI-driven improvement suggestions, and one-click PDF export.',
    stack: ['Next.js', 'Node.js', 'MySQL', 'AI API', 'Puppeteer'],
    url: 'https://resumesprint.technicul.com',
    features: ['AI Resume Builder', 'JD Matching', 'Admin Dashboard', 'PDF Export', 'Subscription Mgmt'],
  },
  {
    num: '02',
    title: 'Technicul Workspace',
    role: 'FRONTEND LEAD · 2-PERSON TEAM',
    tagline: 'FRONTEND LEAD',
    impact: ['CRM modules', '3 user roles', 'React frontend lead'],
    desc: 'Internal CRM used by Technicul Cloud LLP. I led the entire React.js frontend in a 2-person team — building modules for employee management, project tracking, tasks, addons, maintenance, fixed income, and promotions. Implemented role-based access control across 3 distinct user roles.',
    stack: ['React.js', 'Laravel', 'MySQL', 'REST APIs'],
    url: 'https://workspace.technicul.com',
    features: ['Employee Mgmt', 'Projects', 'Tasks', 'RBAC × 3', 'Dashboards'],
  },
  {
    num: '03',
    title: 'Mapshop',
    role: 'ANDROID · GEOSPATIAL SHOPPING APP',
    tagline: 'B.TECH FINAL YEAR',
    impact: ['GPS discovery', 'Firebase auth', 'Shop owner modules'],
    desc: 'B.Tech final-year Android application using geospatial technology to help users discover nearby shops, browse discounts, and navigate via GPS. Implemented customer registration, product search, and shop owner listing modules.',
    stack: ['Java', 'Android Studio', 'Firebase', 'GPS', 'REST APIs'],
    url: null,
    features: ['Android', 'GPS Navigation', 'Geospatial', 'Firebase'],
  },
];

export const timeline = [
  {
    when: 'SEP 2025 — PRESENT',
    title: 'Junior Full-Stack Developer',
    place: 'Technicul Cloud LLP · Mumbai, MH',
    what: 'Solo build of ResumeSprint (3-app AI SaaS). Led React.js frontend for Workspace CRM in 2-person team. Implemented RBAC, AI integrations, admin dashboards.',
  },
  {
    when: '2022 — 2025',
    title: 'B.Tech, Computer Science & Engineering',
    place: 'Sandip University, Nashik · GPA 7.29',
    what: 'Computer Science fundamentals + final-year project Mapshop (Android geospatial shopping app using Java, Firebase, and GPS).',
  },
  {
    when: 'JUN 2024 — AUG 2024',
    title: 'Web Development Intern',
    place: 'FAB Software Stock · Navi Mumbai (during B.Tech)',
    what: 'Built features for an internal Society Management System using C# .NET, SQL Server, and HTML.',
  },
  {
    when: 'JUN 2021 — DEC 2021',
    title: 'Web Development Intern · 6 months',
    place: 'Technicul Cloud LLP · Mumbai (gap year)',
    what: 'Foundation in HTML, CSS, JavaScript, PHP, Laravel, and REST APIs. Learned MVC architecture and database operations hands-on.',
  },
  {
    when: '2018 — 2021',
    title: 'Diploma in Computer Technology',
    place: 'Amrutvahini Polytechnic, Sangamner · 76.23%',
    what: 'Where it all started. First lines of code, first programs that ran, first taste of "I can build things."',
  },
];

export const codeSnippets = [
  "const ship = async () => {\n  const code = await me.build()\n  return deploy(code)\n}\n// always shipping",
  "function Resume() {\n  const ai = useAI()\n  return <Magic />\n}\n// solo built",
  "router.post('/scan',\n  auth, async (req,res)=>{\n  const r = await ai.scan()\n  res.json(r)\n})",
  "SELECT * FROM dreams\nWHERE shipped = true\nORDER BY impact DESC\nLIMIT 1;",
  "// Next.js + R3F\nimport { Canvas } from\n  '@react-three/fiber'\n// build the future",
];
