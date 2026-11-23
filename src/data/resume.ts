export type WorkExperience = {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    achievements: string[];
    companyUrl?: string;
    jobDescription?: string;
};

export type Skill = {
    title: string;
    body: string[];
};

export type Education = {
    title: string;
    startDate: string;
    endDate: string;
    // relevant: string[];
};

export type Language = {
    name: string;
    level: string;
};

export type Recommendation = {
    user: Recommender;
    feedback: string;
};

type Recommender = {
    name: string;
    role: string;
    linkedInUrl: string;
}

type Tagline = {
    icon: string;
    title: string;
    text: string;
}


export interface Resume {
    name: string;
    title: string;
    intro: string;
    taglines?: Tagline[];
    workExperiences: WorkExperience[];
    skills: Skill[];
    educations: Education[];
    languages: Language[];
    hobbies: string[];
    recommendations?: Recommendation[];
}

const name = 'Nathaniel Essien';

const title = 'Software Engineer';

const intro = "Software Engineer with 5+ years of experience designing and building scalable web applications across fintech, iGaming, SaaS, AI-enabled products, and compliance-driven platforms. Proficient in React, Next.js, TypeScript, Node.js, PostgreSQL, and REST API development, with experience delivering secure, high-performance applications from frontend interfaces to backend services. Skilled in system design, authentication, payments and wallet systems, database integration, and performance optimization, with production experience building serverless, edge-first applications on Cloudflare Workers.";

const taglines: Tagline[] = [
    {
        icon: 'fa-rocket',
        title: 'Value-Focused & Results-Oriented',
        text: 'I focus on creating solutions that deliver measurable value and impact for both users and businesses.',
    },
    {
        icon: 'fa-check',
        title: 'Reliable & Execution-Focused',
        text: 'I excel at delivering exceptional results under pressure, consistently meeting deadlines without compromising quality.',
    },
    {
        icon: 'fa-users',
        title: 'Collaborative & Relationship-Builder',
        text: 'I work seamlessly with cross-functional teams, fostering collaboration and building strong relationships with all stakeholders.',
    }
]

const workExperiences: WorkExperience[] = [
    {
        company: 'Sportsdey',
        companyUrl: 'https://sportsdey.com/',
        role: 'Full Stack Engineer',
        startDate: 'JULY 2026',
        endDate: 'PRESENT',
        achievements: [
            "Worked across the stack in a team of ~10 engineers on Sportsdey, a Nigerian sportsbook, casino, and sports media platform, spanning a React 19/TanStack Start SSR web app and a Hono + Zod/OpenAPI API in a Turborepo monorepo, running serverless on Cloudflare Workers with D1 (Drizzle ORM), KV, and R2.",
            "Led the rewards and engagement system — bonuses, bonus codes, missions, loyalty tiers, tournaments with entry fees, and jackpots — integrating an external Bonus Engine with RSA-SHA256 signed requests and callbacks, an outbox that retries event reports up to 12 times, and a shared stake gate across 11+ provider bet paths that blocks bets breaking active bonus terms.",
            "Redesigned the wallet ledger so bonus funds sit locked in the main wallet: real cash is staked first, winnings are locked in proportion to bonus money used, and credits are idempotent. Also worked on the kobo-denominated ledger's integrations with Paystack, Kuda, OPay, PalmPay, Monnify, and Quidax, including P2P transfers, withdrawal PINs, automated withdrawal rules, fraud flagging, and reconciliation.",
            "Integrated the Kiron casino provider end to end, including an exact port of its PHP-style MD5 request hash, and contributed to seamless-wallet integrations with 8+ game providers (Scorpio, Slotegrator, Spribe, Swipe Games, and others) using signature- and IP-verified callbacks and idempotent transaction IDs so retried callbacks can never move money twice.",
            "Contributed to the Data.Bet sportsbook's bet lifecycle — stake freezing and settlement, cash-out, accumulator boosts, and free bets — along with settlement-audit and repair tooling.",
            "Built the Affnook affiliate integration (customer sync, activity reporting, hourly retry jobs, and admin reconciliation) and integrated WebEngage for analytics events, user profiles, and SMS with delivery receipts.",
            "Worked on identity, compliance, and back-office features: better-auth sign-in (email, Google/Facebook OAuth, phone OTP via Africa's Talking), KYC document review, self-exclusion, role-based admin access, and admin APIs with Excel, PDF, and Word exports.",
            "Contributed to a suite of 70+ unit, smoke, and end-to-end tests on the Node.js test runner with an in-memory D1 database, covering wallet atomicity, provider signing, settlement, idempotency, and withdrawals; second-highest contributor on the team with 780+ commits in 5 months."
        ],
    },
    {
        company: 'Rank (YC 22)',
        companyUrl: 'https://userank.com/',
        role: 'Lead Frontend Engineer',
        startDate: 'JUNE 2025',
        endDate: 'PRESENT',
        achievements: [
            "Led the end-to-end redevelopment of Rank's consumer-facing web application — a fast-growing Nigerian fintech platform serving savings, fixed deposits, and community investment products — delivering a scalable frontend architecture that significantly improved product stability.",
            "Built and maintained a unified design system and component library that enforced UI consistency across Rank Reserve, Rank Flex, and Fixed Deposit product surfaces, cutting implementation time for new features by 30%.",
            "Engineered a dynamic, backend-driven KYC and face verification flow using Next.js and TypeScript, integrating both internal backend APIs and third-party verification services end-to-end and improving verification success rates while accelerating user onboarding.",
            "Drove frontend test coverage to 80% with Jest and React Testing Library, reducing regression incidents and enabling a faster, more reliable release cadence for a financial product where reliability is critical.",
            "Improved web application performance through code splitting, lazy loading, and API call optimization — delivering faster load times across a user base spanning Nigerian urban and semi-urban markets.",
            "Collaborated closely with backend engineers to design API contracts, improve request performance, and ensure reliable communication between frontend and backend systems."
        ],
    },
    {
        company: 'Rylio',
        companyUrl: 'https://www.rylio.io/',
        role: 'Lead Software Engineer',
        startDate: 'MAR 2025',
        endDate: 'JAN 2026',
        achievements: [
            "Led full-stack development of an ESG reporting platform, owning React/Next.js frontend architecture, Node.js backend services, PostgreSQL data modelling, and AI-assisted reporting features.",
            "Designed and implemented ESG data entry interfaces using Next.js and Tailwind CSS, enabling structured, user-friendly capture of complex environmental, social, and governance datasets.",
            "Developed and maintained backend services using Node.js, designing RESTful APIs to handle ESG data processing, user management, and report generation, with efficient data modelling and structured storage for complex, nested ESG datasets.",
            "Implemented a lightweight AI recommendation engine using Python-based NLP models, providing contextual ESG content suggestions, and engineered AI-powered text assistance helping users generate compliant, well-structured sustainability disclosures.",
            "Enabled real-time collaboration using Liveblocks, supporting section-based assignments, in-app notifications, activity tracking, and multi-user editing workflows.",
            "Built role-based access control (Admin & Contributor) using JWT authentication and an admin dashboard for managing teams, users, roles, and permissions across organizations.",
            "Designed and implemented backend logic for authentication, authorization, and user lifecycle management, including onboarding flows, invitations, and access control enforcement.",
            "Optimized performance across frontend and backend by improving API response times, reducing unnecessary network requests, and implementing efficient data fetching and caching strategies."
        ],
    },
    {
        company: 'Stykite',
        role: 'Front-end Developer',
        startDate: 'JULY 2024',
        endDate: 'FEB 2025',
        achievements: [
            "Collaborated with design team to implement dynamic user interfaces using NextJs and Typescript, ensuring an intuitive user experience and alignment with industry best practices. Achieved a consistent 98% satisfaction rate in user feedback surveys.",
            "Integrated payment gateways, financial APIs, and real-time data processing features to support core fintech functionalities, improving transaction processing times by 40%.",
            "Collaborated with product managers and analysts to translate complex financial workflows into intuitive UI/UX designs, resulting in a 35% increase in user adoption rates.",
            "Implemented advanced data visualization techniques using NextJs to deliver insightful dashboards, empowering users with actionable financial insights and driving a 25% boost in platform engagement.",
            "Strengthened platform security by collaborating with backend teams to embed secure authentication flows and safeguard sensitive financial data, earning a 100% compliance rating during audits.",
            "Optimized application performance by employing caching strategies, reducing API call frequency, and implementing lazy loading, which led to a 50% improvement in page load speeds for high-traffic scenarios."
        ],
    },
    {
        company: 'Caliber6',
        role: 'Front-end Developer',
        startDate: 'APR 2024',
        endDate: 'JUNE 2024',
        achievements: [
            "Spearheaded the creation of reusable and pixel-perfect components using ReactJS and Next.js, which improved code modularity and maintainability. This approach facilitated the seamless integration of new features and reduced development time by 25%.",
            "Worked closely with design teams and stakeholders to transform concepts into captivating web experiences. Facilitated the seamless integration of backend APIs to align with design objectives, surpassing client expectations.",
            "Employed advanced optimization techniques such as code splitting and lazy loading to enhance website performance and user experience, leading to decreased bounce rates and 70% conversion rates.",
            "Developed and maintained a comprehensive testing suite using Jest for unit and integration tests, ensuring robust code quality and early detection of bugs. This enhanced the reliability of the application, leading to a more stable and maintainable codebase.",
            "Implemented end-to-end tests with Cypress to verify the complete functionality of the application from the user's perspective, providing a smooth and error-free user experience. This contributed to 60% reduction in post-deployment issues and increased overall user satisfaction."
        ],
    },
    {
        company: 'Upwork',
        role: 'Software Engineer (Freelance)',
        startDate: 'DEC 2021',
        endDate: 'PRESENT',
        achievements: [
            "Delivered full-stack web applications for a diverse clientele, including Rylio, Scoutify, CodeGuide, Singularity Finance and Lightweight, building scalable React, Next.js, Vue, and Nuxt.js applications while integrating backend services, RESTful APIs, authentication workflows, databases, and third-party platforms.",
            "Designed and implemented scalable frontend architectures, translating business requirements into intuitive, high-performance user experiences using TypeScript, JavaScript, Tailwind CSS, and modern component-based development practices.",
            "Developed and integrated RESTful APIs, authentication workflows (JWT/OAuth), payment gateways, analytics platforms, and real-time features to deliver secure, end-to-end functionality across multiple client projects.",
            "Collaborated with clients to design data models, define API requirements, and implement backend functionality using Node.js, PostgreSQL, MongoDB, Prisma, Firebase, and Supabase where required.",
            "Ensured cross-browser compatibility and responsiveness across various devices and screen sizes, providing a seamless experience for all users.",
            "Maintained reusable component libraries and collaborated through Git-based workflows to ensure consistency, scalability, and efficient delivery across multiple concurrent projects."
        ],
    },
];

const skills: Skill[] = [
    {
        title: 'Languages',
        body: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3'],
    },
    {
        title: 'Frontend',
        body: ['React.js', 'Vue.js', 'Nuxt.js', 'Next.js', 'TanStack Start', 'TailwindCSS', 'Material UI', 'Bootstrap', 'Shadcn UI', 'Radix UI', 'Styled-Components', 'CSS Modules'],
    },
    {
        title: 'Backend',
        body: ['Node.js', 'Express.js', 'Hono', 'REST APIs', 'GraphQL', 'Zod/OpenAPI'],
    },
    {
        title: 'Databases',
        body: ['PostgreSQL', 'MongoDB', 'Prisma', 'Drizzle ORM', 'Cloudflare D1', 'Firebase', 'Supabase'],
    },
    {
        title: 'State Management',
        body: ['Redux Toolkit', 'Zustand', 'TanStack Query (React Query)'],
    },
    {
        title: 'Testing',
        body: ['Jest', 'React Testing Library', 'Cypress', 'Node.js Test Runner', 'TDD (Test-Driven Development)'],
    },
    {
        title: 'Tools & Platforms',
        body: ['Git', 'GitHub', 'Bitbucket', 'Docker', 'CI/CD', 'Cloudflare (Workers, KV, R2)', 'Turborepo', 'pnpm', 'Sanity CMS'],
    },
    {
        title: 'Authentication',
        body: ['JWT', 'OAuth', 'better-auth', 'Phone OTP'],
    },
];

const educations: Education[] = [
    {
        title: 'Bachelor of Science (Hons.) Chemistry at University of Uyo',
        startDate: 'OCT 2018',
        endDate: 'AUG 2023',
        // relevant: [
        //     'Programming with Javascript (Meta) - September 2023',
        //     'Responsive Web Design (freeCodeCamp) - May 2022',
        //     'Foundations of User Experience Design (Google) - March 2022',
        //     'React.js (Hackerrank) - February 2023',
        //     'Javascript (Hackerrank) - February 2023',
        // ],
    },
];

const languages: Language[] = [
    {
        name: 'English',
        level: 'PROFICIENT',
    },
    {
        name: 'French',
        level: 'LEARNING :)',
    },
];

const hobbies = ['Academic Research', 'Reading', 'Writing', 'Listening to Music', 'Watching Movies'];

const recommendations: Recommendation[] = [
    {
        user: {
            name: 'Steph Drennon',
            role: 'Founder and CEO at ARK',
            linkedInUrl: 'https://www.linkedin.com/in/vancouverbeliever/'
        },
        feedback: 'Nathaniel is a solid gentlemen and competent developer. His commitment has been a blessing to ARK and we appreciate his leadership and look forward to continuing our relationship with him as a developer and a friend. '
    },
    {
        user: {
            name: 'Damon Guzman',
            role: 'Founder and CEO at Fastyr AI',
            linkedInUrl: 'https://www.linkedin.com/in/damon-guzman-40aa5b198'
        },
        feedback: 'Working with Nath, was a great experience. He was responsive, eager to help and went above and beyond what we needed. I\'m super impressed with him!'
    },
    {
        user: {
            name: 'Jennifer Bland',
            role: 'Sr. Software Engineer and Google Developers Expert',
            linkedInUrl: 'https://www.linkedin.com/in/ratracegrad/'
        },
        feedback: "Nathaniel is a great developer and a great person. He joined us midway, took ownership of an existing Nuxt.js codebase with multiple bugs, and successfully fixed critical issues while improving performance and code quality. He also refactored the codebase, built new components and suggested meaningful optimizations that helped us ship the product. He demonstrated strong experience with various tools in the Vue.js ecosystem, including NuxtHub, Vuex, and Pinia."
    },
    {
        user: {
            name: 'Vibhanshu Karn',
            role: 'CEO at Stykite',
            linkedInUrl: 'https://in.linkedin.com/in/vibhanshukarn'
        },
        feedback: 'Nathaniel was instrumental in building Stykite\'s frontend infrastructure from the ground up. His ability to translate complex fintech requirements into intuitive user experiences directly contributed to our 35% increase in user adoption. Beyond technical excellence, Nathaniel demonstrated exceptional ownership, proactively identifying optimization opportunities and delivering solutions that exceeded our expectations. His collaborative approach with our design and product teams made him an invaluable asset to our organization.'
    },
    {
        user: {
            name: 'Onkar Kore',
            role: 'CTO at Stykite',            
            linkedInUrl: 'https://in.linkedin.com/in/onkarkore'
        },
        feedback: 'Nathaniel\'s technical expertise in Next.js and TypeScript is outstanding. He architected scalable frontend solutions that seamlessly integrated with our backend systems, resulting in a 50% improvement in page load speeds. What sets him apart is his deep understanding of performance optimization, security best practices, and his ability to write maintainable, production-ready code. He consistently delivered high-quality work on time and was always willing to mentor other team members. A true technical leader.'
    },
    {
        user: {
            name: 'Professor Edu Inam',
            role: 'Head of Department, Department of Chemistry, University of Uyo, Nigeria.',
            linkedInUrl: 'https://ng.linkedin.com/in/edu-inam-bb15b68b'
        },
        feedback: 'Nathaniel transformed our department\'s digital presence with the Chemistry website project. His attention to detail, understanding of academic requirements, and ability to create a user-friendly platform for students, staff, and researchers was remarkable. He worked closely with our team to ensure the website met all our needs while maintaining modern design standards. The project was delivered on time, and Nathaniel\'s professionalism throughout the process was exemplary. We couldn\'t be happier with the result.'
    },
    {
        user: {
            name: 'Dr. Veronica Akpasoh',
            role: 'CEO at Tovero & AICCEES',
            linkedInUrl: 'https://ng.linkedin.com/in/veronica-akpasoh-phd-165717a6'
        },
        feedback: 'Nathaniel delivered an exceptional conference website for AICCEES that handled complex registration workflows and abstract submissions. His ability to understand our unique requirements and translate them into a seamless user experience was impressive. He maintained clear communication throughout the project, was responsive to feedback, and delivered a solution that exceeded our expectations. The website successfully managed hundreds of international participants, and Nathaniel\'s technical expertise and dedication were key to our event\'s success.'
    },
];

export const resume: Resume = {
    name,
    title,
    intro,
    taglines,
    workExperiences,
    skills,
    educations,
    languages,
    hobbies,
    recommendations
};
