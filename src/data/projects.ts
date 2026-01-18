export type Project = {
    name: string;
    description: string;
    technologies: Tech[];
    links: ProjectLink[];
};

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

export const projects: Project[] = [
    {
        name: 'Anomaly Forex',
        description: 'A comprehensive Forex Prop Firm platform built with modern web technologies. Features include trading account management, challenge evaluation systems, real-time trading analytics, and seamless payment processing for prop trading challenges.',
        technologies: [nextjs, tailwindcss],
        links: [
            {
                name: 'web',
                url: 'https://anomalyforex.com',
            },
        ],
    },
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
    {
        name: 'Stykite',
        description: 'A full-stack AI billing platform built with Next.js, TailwindCSS, PostgreSQL and Express. Features include localized pricing, subscription management, secure authentication with OAuth and seamless payment gateway integrations. Leverages Shadcn UI, Zod for validation, React Hook Form, and Recharts for analytics dashboard. Designed to help AI companies scale globally with frictionless payment processing and instant onboarding capabilities.',
        technologies: [nextjs, tailwindcss, postgresql, express],
        links: [
            {
                name: 'web',
                url: 'https://stykite.com',
            },
        ],
    },
    {
        name: 'Department of Chemistry, University of Uyo',
        description: 'A modern academic website built with Next.js and TailwindCSS. Features include dynamic routing, lazy-loading for optimal performance, staff profiles, course information, research publications, and a content management system for easy updates.',
        technologies: [nextjs, tailwindcss],
        links: [
            {
                name: 'github',
                url: 'https://github.com/Nathaniyell/Chemistry-Uniuyo',
            },
            {
                name: 'web',
                url: 'https://chemistry.uniuyo.edu.ng',
            },
        ],
    },
    {
        name: 'Danrit Beauty Salon',
        description: 'A full-stack e-commerce platform built with React, Express, and MongoDB. Features include secure payment processing with Stripe, product management, shopping cart functionality, appointment booking, and a comprehensive admin dashboard for business operations.',
        technologies: [react, express, mongodb],
        links: [
            {
                name: 'github',
                url: 'https://github.com/Nathaniyell/danrit-beauty-salon',
            },
            {
                name: 'web',
                url: 'https://danritbeautysalon.com',
            },
        ],
    },
    {
        name: 'Africa International Conference on Clean Energy',
        description: 'Conference website developed with Next.js featuring registration system, abstract submission, and schedule management for an international energy conference.',
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
        description: 'Built with HTML, CSS, and JavaScript, styled using Bootstrap. Features a responsive design showcasing programs, events, and initiatives aimed at empowering women in technology. Includes blog integration and event registration functionality.',
        technologies: [react, bootstrap],
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
    {
        name: 'BaseLinks Academy',
        description: 'An interactive learning platform built with React and Node.js. Features include course management, student progress tracking, and integrated video lessons.',
        technologies: [react, nodejs, supabase],
        links: [
            {
                name: 'github',
                url: 'https://github.com/Nathaniyell/baselinks-academy',
            },
            {
                name: 'web',
                url: 'https://baselinks-academy.vercel.app/',
            },
        ],
    },
    {
        name: 'Prodlead Investments',
        description: 'A professional investment portfolio website built with Vue.js. Features investment tracking, portfolio management, and real-time market data integration.',
        technologies: [vuejs],
        links: [
            {
                name: 'github',
                url: 'https://github.com/nathaniyelll/prodlead',
            },
            {
                name: 'web',
                url: 'https://eyenubah.vercel.app/',
            },
        ],
    },
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
