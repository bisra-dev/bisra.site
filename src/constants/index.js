import { html5, css, tailwindcss, javascript, react_light, nextjs_icon_dark, python, django, typescript, postgresql, git, figma } from "../assets";  

import { Globe, Code, Zap, AppWindow } from 'lucide-react';

import React from 'react';

import { p1, p2, p3, p4, p5, p6 } from "../assets";

const iconComponents = [
    {
        title: "Website Development",
        icon: React.createElement(Globe),
        description: "I build custom, responsive websites that combine modern design, smooth performance, and excellent user experience.",
        features: [
        "Custom website development",
        "UI/UX design",
        "E-commerce solutions",
        "Headless CMS integration",
        ]
    },
    {
        title: "Frontend Development",
        icon: React.createElement(Code),
        description:
            "I build fast, responsive, and pixel-perfect interfaces with React, Next.js, and Tailwind CSS—turning designs into smooth, engaging digital experiences.",
        features: [
            "Responsive web design",
            "Tailwind CSS",
            "Figma-to-code implementation",
        ],
    },
    {
        title: "Performance & SEO",
        icon: React.createElement(Zap),
        description:
            "I optimize websites for speed, search visibility, and a better user experience—helping your business load faster, rank higher, and convert more visitors.",
        features: [
            "Core Web Vitals optimization",
            "Technical SEO",
            "Image optimization",
        ],
    },
    {
        title: "Custom Web Applications",
        icon: React.createElement(AppWindow),
        description:
            "I build fast, user-friendly web applications designed to meet your business needs and grow with you. Every solution is built with modern technology.",
        features: [
            "Custom web applications",
            "API integration",
            "Headless CMS solutions",
            "Scalable frontend architecture",
        ],
    }
];




const tech1 = [
    {
        title: "HTML5",
        icon: html5
    },
    {
        title: "CSS3",
        icon: css
    },
    {
        title: "JavaScript",
        icon: javascript
    },
    {
        title: "Tailwind CSS",
        icon: tailwindcss
    },
    {
        title: "TypeScript",
        icon: typescript
    },
    {
        title: "React",
        icon: react_light
    },
    {
        title: "Next.js",
        icon: nextjs_icon_dark
    },
    {
        title: "Python",
        icon: python
    },
    {
        title: "Django",
        icon: django
    },
    {
        title: "PostgreSQL",
        icon: postgresql
    },
    {
        title: "Git",
        icon: git
    },
    {
        title: "Figma",
        icon: figma
    }
];

const project1 = [
    {
        title: "E-Commerce Platform",
        image: p1,
        description: "A modern online store with a smooth checkout process, advanced product filtering, and real-time inventory management.",
        tool: [
            { tool2: "Tailwindcss" },
            { tool2: "Typescript" },
            { tool2: "next.js" }
        ]
    },
    {
        title: "SaaS Dashboard",
        image: p2,
        description: "A powerful analytics dashboard with interactive charts, user management, and real-time data to help teams make informed decisions.",
        tool: [
            { tool2: "Next.js" },
            { tool2: "Typescript" },
            { tool2: "Tailwindcss" },
            { tool2: "React" }
        ]
    },
    {
        title: "Design Portfolio",
        image: p3,
        description: "A premium agency website featuring smooth animations, a custom cursor, and a flexible headless CMS for easy content management.",
        tool: [
            { tool2: "React" },
            { tool2: "Tailwindcss" },
            { tool2: "Next.js" },
            { tool2: "Headless CMS" }
        ]
    },
    {
        title: "Restaurant Website",
        image: p4,
        description: "Elegant restaurant site with online booking, menu management, and multi-location support via custom plugin.",
        tool: [
            { tool2: "Javascript" },
            { tool2: "Tailwindcss" },
            { tool2: "Three.js" },
            { tool2: "React" }
        ]
    },
    {
        title: "Tech Blog Platform",
        image: p5,
        description: "A high-performance blog platform with MDX content, advanced search, and a custom newsletter subscription system.",
        tool: [
            { tool2: "React" },
            { tool2: "Tailwindcss" },
            { tool2: "Typescript" },
            { tool2: "Vercel" }
        ]
    },
    {
        title: "Real Estate Portal",
        image: p6,
        description: "A modern property listing platform with interactive maps, advanced search filters, and tools to help agents manage their listings.",
        tool: [
            { tool2: "Next.js" },
            { tool2: "Tailwindcss" },
            { tool2: "Typescript" },
            { tool2: "Googlemaps" }
        ]
    }
];

const experiences = [
    {
        role: "Frontend Developer",
        company: "Freelance",
        date: "2026 – Present",
        location: "Remote",
        active: true,
        points: [
            "Build modern, responsive websites and web applications for clients worldwide",
            "Develop React and Next.js interfaces with consistently high Lighthouse scores",
            "Create pixel-perfect, accessible, and user-friendly experiences from Figma designs",
            "Deliver clean, scalable solutions with clear communication and reliable deadlines",
        ],
    },
    {
        role: "Junior Frontend Developer",
        company: "Digital Agency Co.",
        date: "2025 – 2026",
        location: "Kigali, Rwanda",
        active: false,
        points: [
            "Developed responsive landing pages and marketing websites using HTML, CSS, and JavaScript",
            "Built and improved frontend interfaces for multiple agency clients",
            "Created pixel-perfect Figma implementations in close collaboration with designers",
        ],
    },
    {
        role: "Web Development Intern",
        company: "Startup Studio",
        date: "2024 – 2025",
        location: "Kigali, Rwanda",
        active: false,
        points: [
            "Built responsive product interfaces using React and Tailwind CSS",
            "Optimized website performance, improving load times by 40%",
            "Created reusable components to improve development speed and consistency",
            "Collaborated with designers and developers to deliver polished user experiences",
        ],
    },
];

export { tech1, iconComponents, project1, experiences };