// =============================================
// DATA LAYER — All content migrated from HTML
// =============================================

export interface NavLink {
  label: string;
  href: string;
}

export const navLinks: NavLink[] = [
  { label: 'Home', href: '#home' },
  { label: 'Research', href: '#research' },
  { label: 'Education', href: '#education' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string; // Font Awesome class
}

export const socialLinks: SocialLink[] = [
  { label: 'Email', href: 'mailto:saimharoon990@gmail.com', icon: 'fas fa-envelope' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/saimharoon', icon: 'fab fa-linkedin-in' },
  { label: 'GitHub', href: 'https://github.com/saimharoon990', icon: 'fab fa-github' },
  { label: 'Medium', href: 'https://medium.com/@saimharoon990', icon: 'fab fa-medium' },
];

export const heroData = {
  name: 'Saim Haroon',
  tagline: 'A-Levels Student, Computer Science',
  school: 'Roots Ivy International School',
  bio: `I am an A-Level student in Pakistan under the <a href="https://www.cambridgeinternational.org/" target="_blank" rel="noopener noreferrer">Cambridge International</a> curriculum, having successfully completed my IGCSEs through Cambridge. My primary subjects are Computer Science, Mathematics and Physics. I am interested in software architecture, robotics, climate resilience. I am dedicated in building applied technology systems, from mapping regional water scarcity to developing hardware for human aid—to solve urgent environmental and infrastructural challenges in developing communities.`,
  portrait: '/images/portrait.png',
};

export interface NewsItem {
  date: string;
  content: string;
}

export const newsItems: NewsItem[] = [
  {
    date: 'Sept 2025',
    content: 'Started my A-levels in <span class="news-highlight">Roots Ivy International School</span>',
  },
  {
    date: 'Aug 2025',
    content: 'Completed my IGCSEs in <a href="https://rootsivyintschools.edu.pk/index.html" target="_blank" rel="noopener noreferrer">Roots Ivy International Schools</a>.',
  },
];

export interface ResearchInterest {
  icon: string;
  title: string;
  description: string;
}

export const researchInterests: ResearchInterest[] = [
  {
    icon: 'fas fa-cloud-sun-rain',
    title: 'Applied Climate Technology',
    description:
      "Building scalable applications that address real-world environmental challenges. My current focus involves integrating global data APIs (like NASA's satellite data) to map critical resources, such as regional water scarcity, to empower local decision-making.",
  },
  {
    icon: 'fas fa-robot',
    title: 'Robotics for Human Aid',
    description:
      'Exploring the fundamentals of robotic systems, sensing, and control logic. I am interested in how hardware and automated systems can be deployed in daily life to assist human labor, improve sustainable agriculture, and fortify local infrastructure.',
  },
  {
    icon: 'fas fa-lightbulb',
    title: 'Impact-Driven Engineering Solutions',
    description:
      'Developing scalable, real-world interventions at the intersection of technology and civic need. My goal is to build sustainable, deployed solutions that create measurable improvements in resource management and community health.',
  },
];

export interface TimelineEntry {
  title: string;
  org: string;
  orgUrl: string;
  period: string;
}

export const educationEntries: TimelineEntry[] = [
  {
    title: 'A-Levels (Computer Science)',
    org: 'Roots Ivy International School',
    orgUrl: 'https://rootsivyintschools.edu.pk/index.html',
    period: '2025 – Present',
  },
  {
    title: 'IGCSE (Computer Science)',
    org: 'Roots Ivy International School',
    orgUrl: 'https://rootsivyintschools.edu.pk/index.html',
    period: '2023 – 2025',
  },
  {
    title: 'Full Stack Web-Development Course',
    org: 'Udemy',
    orgUrl: 'https://udemy.com',
    period: '2025 – 2026',
  },
];

export const experienceEntries: TimelineEntry[] = [
  {
    title: 'Full Stack Developer',
    org: 'Personal Projects',
    orgUrl: 'https://saimharoon.com',
    period: '2025 – Present',
  },
  {
    title: 'Lead Developer & System Architect',
    org: 'AquaWatch',
    orgUrl: 'https://www.aquawatch.pk',
    period: '2025 – Present',
  },
];

export interface ProjectGoal {
  icon: string;
  title: string;
  description: string;
}

export const aquawatchData = {
  title: 'AquaWatch',
  subtitle: 'Climate and Water Intelligence Platform',
  description: `AquaWatch Pakistan is a data-driven web platform focused on monitoring groundwater depletion and drought risk across Pakistan. The project integrates open satellite data from NASA GRACE with global water stress datasets to visualize invisible groundwater trends at the district level. Using interactive maps and dashboards, the platform translates complex scientific data into accessible insights for communities, researchers, and policymakers. The project also explores basic predictive modeling to estimate future water scarcity risks based on historical trends. AquaWatch Pakistan is designed as an open-source initiative to support data-driven decision making in water resource management and climate resilience.`,
  link: 'https://www.aquawatch.pk',
  goals: [
    {
      icon: 'fas fa-satellite',
      title: 'Democratizing Access',
      description: 'Unlocking NASA satellite data for public use.',
    },
    {
      icon: 'fas fa-water',
      title: 'Visualizing Depletion',
      description: 'Tracking invisible groundwater loss from space.',
    },
    {
      icon: 'fas fa-seedling',
      title: 'Protecting Agriculture',
      description: 'Early warnings to safeguard the economy.',
    },
    {
      icon: 'fas fa-chart-line',
      title: 'Driving Action',
      description: 'Enabling data-driven decisions for water policy.',
    },
  ] as ProjectGoal[],
};

export interface ProjectCard {
  id: string;
  title: string;
  description: string;
  topics: string[];
  link: string;
}

export const projects: ProjectCard[] = [
  {
    id: 'taleem-tracker',
    title: 'Taleem Tracker',
    description: 'Future Project — Educational access and literacy platform',
    topics: [
      'An interactive platform aimed at highlighting educational access gaps across Pakistan.',
      'Combines district-level education data from independent surveys and public datasets.',
      'Map-based visualizations for exploring literacy indicators.',
      'Envisions a secure, anonymous community reporting feature to flag non-functional schools.',
    ],
    link: '#',
  },
];

export const footerData = {
  email: 'saimharoon990@gmail.com',
  school: 'Roots Ivy International School',
  schoolUrl: 'https://rootsivyintschools.edu.pk/index.html',
  location: 'Rawalpindi, Pakistan',
};
