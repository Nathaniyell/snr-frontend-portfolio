export type Project = {
    name: string;
    description: string;
    category: ProjectCategory;
    technologies: Tech[];
    links: ProjectLink[];
};

export type ProjectCategory =
    | 'SaaS'
    | 'Enterprise'
    | 'Web3'
    | 'Marketing'
    | 'Animation'
    | 'Education'
    | 'E-commerce'
    | 'Community';

type Tech = {
    name: string;
    badgeColor: string;
}

type ProjectLink = {
    name: 'github' | 'web' | 'iOS' | 'android';
    url: string;
};

const react: Tech = {name: 'React', badgeColor: '#0a0a0a'};
const nextjs: Tech = {name: 'Nextjs', badgeColor: '#0a0a0a'};
const nodejs: Tech = {name: 'Nodejs', badgeColor: '#84BA64'};
const vuejs: Tech = {name: 'Vue.js', badgeColor: '#4FC08D'};
const tailwindcss: Tech = {name: 'TailwindCSS', badgeColor: '#06B6D4'};
const mongodb: Tech = {name: 'MongoDB', badgeColor: '#47A248'};
const postgresql: Tech = {name: 'PostgreSQL', badgeColor: '#336791'};
const express: Tech = {name: 'Express', badgeColor: '#000000'};
const bootstrap: Tech = {name: 'Bootstrap', badgeColor: '#7952B3'};
const supabase: Tech = {name: 'Supabase', badgeColor: '#000000'};
const redux: Tech = {name: 'Redux', badgeColor: '#764ABC'};
const web3js: Tech = {name: 'Web3.js', badgeColor: '#F16822'};
const gsap: Tech = {name: 'GSAP', badgeColor: '#88CE02'};
const threejs: Tech = {name: 'Three.js', badgeColor: '#000000'};
const clerk: Tech = {name: 'Clerk', badgeColor: '#6C47FF'};
const reactrouter: Tech = {name: 'React Router', badgeColor: '#CA4245'};
const framermotion: Tech = {name: 'Framer Motion', badgeColor: '#0055FF'};

export const projects: Project[] = [
  
   
    {
        name: 'Rylio',
        description: 'A sustainability reporting platform that simplifies data collection, report generation, and progress tracking for organizations. Designed to make sustainability reporting quick, transparent, and accessible for businesses of all sizes.',
        category: 'SaaS',
        technologies: [nextjs, tailwindcss, postgresql],
        links: [
            {
                name: 'web',
                url: 'https://www.rylio.io/',
            },
        ],
    },
    {
        name: 'Scoutify',
        description: 'A job intelligence platform that monitors 8,800+ company career pages and sends push notifications when matching roles go live. The product also enables users to apply quickly through direct application links inside the app.',
        category: 'SaaS',
        technologies: [react, nodejs, postgresql],
        links: [
            {
                name: 'web',
                url: 'https://scoutify.ai/',
            },
        ],
    },
    {
        name: 'Rank Africa Partner Dashboard',
        description: 'An enterprise operations dashboard for HR, payroll, and finance teams to manage onboarding, payroll integrations, deductions, repayments, approvals, compliance, and reporting. Built to automate contribution and repayment flows, reduce default risk, and support multi-company administration at scale.',
        category: 'Enterprise',
        technologies: [react, nodejs, postgresql],
        links: [
            {
                name: 'web',
                url: 'https://customer.rank.africa/',
            },
        ],
    },
    {
        name: 'CodeGuide',
        description: 'A spec-driven AI development platform that transforms plain-English product ideas into project-ready documentation including PRDs, technical specs, wireframes, architecture, and task breakdowns. Includes authentication flows powered by Clerk.',
        category: 'SaaS',
        technologies: [nextjs, tailwindcss, nodejs, postgresql, clerk],
        links: [
            {
                name: 'web',
                url: 'https://www.codeguide.dev/',
            },
        ],
    },
    {
        name: 'Singularity Finance',
        description: 'A decentralized finance platform enabling secure wallet connection, token swaps, cross-chain migration, project listings, and staking workflows. Engineered to provide safe transactions and seamless token management across blockchain networks.',
        category: 'Web3',
        technologies: [react, nextjs, nodejs, web3js],
        links: [
            {
                name: 'web',
                url: 'https://singularityfinance.ai/',
            },
        ],
    },
    {
        name: 'CoinCrowd',
        description: 'An AI-powered social investing platform that helps investors make better decisions with intelligent tools, analytics, and real-time market insight. Delivered wallet connectivity, token swap flows, and high-performance responsive interfaces for Web3 users.',
        category: 'Web3',
        technologies: [react, nextjs, redux, web3js],
        links: [
            {
                name: 'web',
                url: 'https://coincrowd.com/',
            },
        ],
    },

    {
        name: 'Lightweight',
        description: 'A high-fidelity, animation-heavy brand experience for Lightweight, crafted to showcase precision engineering and product storytelling. Implemented immersive interactions and smooth motion using GSAP, Lenis, and Three.js for a premium web experience.',
        category: 'Animation',
        technologies: [nextjs, tailwindcss, gsap, threejs],
        links: [
            {
                name: 'web',
                url: 'https://lightweight.info/en',
            },
        ],
    },
    {
        name: 'Quanmed AI',
        description: 'A healthcare innovation platform presenting a decentralized framework that combines quantum mechanics, AI, and blockchain for medical research and clinical transformation. Built to communicate a complex vision through a clear, engaging product experience.',
        category: 'Web3',
        technologies: [nextjs, react, nodejs, web3js],
        links: [
            {
                name: 'web',
                url: 'https://www.quanmed.ai/',
            },
        ],
    },
    {
        name: 'Kavora Systems',
        description: 'A corporate portfolio website introducing Kavora Systems and their work across engineering, cloud, DevOps, security, and technology strategy. Built to clearly communicate service offerings and help businesses make informed technology decisions.',
        category: 'Marketing',
        technologies: [nextjs, tailwindcss],
        links: [
            {
                name: 'web',
                url: 'https://www.kavora.systems',
            },
        ],
    },
    // {
    //     name: 'Anomaly Forex',
    //     description: 'A comprehensive Forex Prop Firm platform built with modern web technologies. Features include trading account management, challenge evaluation systems, real-time trading analytics, and seamless payment processing for prop trading challenges.',
    //     technologies: [nextjs, tailwindcss],
    //     links: [
    //         {
    //             name: 'web',
    //             url: 'https://anomalyforex.com',
    //         },
    //     ],
    // },
    // {
    //     name: 'PlotWeaver',
    //     description: 'An AI-powered Movie Production Platform designed to streamline the creative process for filmmakers. Features include AI-assisted script generation, story development tools, production planning, and collaborative workspace for creative teams.',
    //     technologies: [nextjs, tailwindcss],
    //     links: [
    //         {
    //             name: 'web',
    //             url: 'https://www.plotweaver.app',
    //         },
    //     ],
    // },
    // {
    //     name: 'Stykite',
    //     description: 'A full-stack AI billing platform built with Next.js, TailwindCSS, PostgreSQL and Express. Features include localized pricing, subscription management, secure authentication with OAuth and seamless payment gateway integrations. Leverages Shadcn UI, Zod for validation, React Hook Form, and Recharts for analytics dashboard. Designed to help AI companies scale globally with frictionless payment processing and instant onboarding capabilities.',
    //     category: 'SaaS',
    //     technologies: [nextjs, tailwindcss, postgresql, express],
    //     links: [
    //         {
    //             name: 'web',
    //             url: 'https://stykite.com',
    //         },
    //     ],
    // },
    {
        name: 'Department of Chemistry, University of Uyo',
        description: 'A modern academic website built with Next.js and TailwindCSS. Features include dynamic routing, lazy-loading for optimal performance, staff profiles, course information, research publications, and a content management system for easy updates.',
        category: 'Education',
        technologies: [nextjs, tailwindcss],
        links: [
            // {
            //     name: 'github',
            //     url: 'https://github.com/Nathaniyell/Chemistry-Uniuyo',
            // },
            {
                name: 'web',
                url: 'https://chemistry.uniuyo.edu.ng',
            },
        ],
    },
    {
        name: 'Danrit Beauty Salon',
        description: 'A full-stack e-commerce platform built with React, Express, and MongoDB. Features include secure payment processing with Stripe, product management, shopping cart functionality, appointment booking, and a comprehensive admin dashboard for business operations.',
        category: 'E-commerce',
        technologies: [react, express, mongodb],
        links: [
            // {
            //     name: 'github',
            //     url: 'https://github.com/Nathaniyell/danrit-beauty-salon',
            // },
            {
                name: 'web',
                url: 'https://danritbeautysalon.com',
            },
        ],
    },
    {
        name: 'Africa International Conference on Clean Energy',
        description: 'Conference website developed with Next.js featuring registration system, abstract submission, and schedule management for an international energy conference.',
        category: 'Marketing',
        technologies: [nextjs, tailwindcss],
        links: [
            {
                name: 'web',
                url: 'https://aiccees.com',
            },
        ],
    },
    {
        name: 'Girls In Tech Nigeria',
        description: 'A platform built to showcase programs, events, and initiatives that empower women in technology. It includes blog integration, event registration forms, smooth page transitions, interactive motion, and responsive layouts to improve engagement across devices.',
        category: 'Community',
        technologies: [react, reactrouter, framermotion, tailwindcss],
        links: [
            {
                name: 'github',
                url: 'https://github.com/Nathaniyell/Girls-In-Tech',
            },
            {
                name: 'web',
                url: 'https://girlsintechnigeria.org/',
            },
        ],
    },
    // {
    //     name: 'BaseLinks Academy',
    //     description: 'An interactive learning platform built with React and Node.js. Features include course management, student progress tracking, and integrated video lessons.',
    //     category: 'Education',
    //     technologies: [react, nodejs, supabase],
    //     links: [
    //         {
    //             name: 'github',
    //             url: 'https://github.com/Nathaniyell/baselinks-academy',
    //         },
    //         {
    //             name: 'web',
    //             url: 'https://baselinks-academy.vercel.app/',
    //         },
    //     ],
    // },
    // {
    //     name: 'Prodlead Investments',
    //     description: 'A professional investment portfolio website built with Vue.js. Features investment tracking, portfolio management, and real-time market data integration.',
    //     category: 'Marketing',
    //     technologies: [vuejs],
    //     links: [
    //         {
    //             name: 'github',
    //             url: 'https://github.com/nathaniyelll/prodlead',
    //         },
    //         {
    //             name: 'web',
    //             url: 'https://eyenubah.vercel.app/',
    //         },
    //     ],
    // },
    // {
    //     name: 'Journey to Wealth',
    //     description: 'Built with Next.js and TailwindCSS, this platform offers financial education resources, investment tracking tools, and wealth management guidance.',
    //     technologies: [nextjs, tailwindcss],
    //     links: [
    //         {
    //             name: 'github',
    //             url: 'https://github.com/nathaniyelll/jtw',
    //         },
    //         {
    //             name: 'web',
    //             url: 'https://journeytowealth.vercel.app/',
    //         },
    //     ],
    // },
];
