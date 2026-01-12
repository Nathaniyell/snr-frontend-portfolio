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

const title = 'Front End Developer';

const intro = "Senior Frontend Developer with 5 years of experience building scalable, high-impact web applications across fintech, SaaS, AI-enabled products, and compliance-driven systems. Specialized in Next.js, React, and TypeScript, with proven leadership in owning frontend architecture, real-time collaboration features, and AI-assisted workflows. Adept at translating complex business and regulatory requirements into intuitive, high-performance user experiences.";

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
        company: 'Rank (YC 22)',
        companyUrl: 'https://userank.com/',
        role: 'Frontend Engineer',
        startDate: 'JUNE 2025',
        endDate: "PRESENT",
        achievements: [
            "Led the end-to-end redevelopment of Rank's web application, delivering a scalable and maintainable frontend architecture that boosted developer velocity and product stability.",
            "Created a unified design system and component library, improving UI consistency across the platform and reducing implementation time for new features by 30%.",
            "Developed a dynamic, backend-driven onboarding and KYC flow using React and TypeScript, increasing verification success rates and accelerating user onboarding.",
            "Enhanced core savings functionality with optimized frontend components and state management, leading to a measurable uptick in active usage and retention.",
            "Increased frontend test coverage to 50% using Jest and React Testing Library, reducing regression bugs and supporting a faster, more reliable release cycle.",
            "Improved web application performance through strategic code splitting, lazy loading, and optimized API calls, resulting in faster page load times and better user experience.",
            "Authored technical documentation and frontend onboarding guides, reducing ramp-up time for new developers by 50%."
        ],
    },
    {
        company: 'Rylio',
        role: 'Lead Software Engineer',
        startDate: 'MAR 2025',
        endDate: 'OCT 2025',
        achievements: [
            "Led the end-to-end development of an ESG reporting platform, overseeing frontend architecture, backend integration, and AI-assisted features to support enterprise sustainability reporting workflows.",
            "Designed and implemented ESG data entry interfaces using Next.js and Tailwind CSS, enabling structured, user-friendly capture of complex environmental, social, and governance datasets.",
            "Developed industry-specific ESG templates (Technology & Manufacturing), reducing setup time and improving reporting consistency across organizations.",
            "Implemented a lightweight AI recommendation engine using Python-based NLP models, providing contextual ESG content suggestions and improving report quality and completeness.",
            "Engineered AI-powered text assistance for ESG narratives, helping users generate compliant, well-structured sustainability disclosures.",
            "Enabled real-time collaboration using Liveblocks, supporting section-based assignments, in-app notifications, activity tracking, and multi-user editing workflows.",
            "Built role-based access control (Admin & Contributor) using JWT authentication, ensuring secure and structured collaboration across teams."
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
        role: 'Frontend Developer (Freelance)',
        startDate: 'DEC 2021',
        endDate: 'PRESENT',
        achievements: [
            "Spearheaded the development of pixel-perfect UI designs for a diverse clientele, including danritbeautysalon, JourneytoWealth, HirschKeshav, SoftwareEngineerPortfolio, BriansPortfolio, Prodlead. Utilized HTML, CSS, React, Next.js, Vue, Nuxtjs, JavaScript, Bootstrap, and Tailwind CSS to establish a strong professional online presence and deliver exceptional user experiences.",
            "Architected and optimized a high-performing e-commerce platform using ReactJS and Next.js, achieving a 30% increase in sales and a 25% boost in user retention through the implementation of dynamic product pages, efficient payment gateways, and a seamless user experience.",
            "Integrated third-party services and APIs to enhance platform capabilities, including real-time updates, payment processing, and social media sharing features.",
            "Optimized front-end performance by implementing efficient coding practices, lazy loading, and caching techniques to enhance website speed and responsiveness.",
            "Ensured cross-browser compatibility and responsiveness across various devices and screen sizes, providing a seamless experience for all users.",
            "Implemented and maintained UI component libraries to standardize design elements and promote consistency across multiple projects, facilitating scalability and efficiency in development processes."
        ],
    },
];

const skills: Skill[] = [
    {
        title: 'Front-end Development',
        body: ['HTML5', 'CSS', 'Javascript (ES5 & ES6)', 'TypeScript', 'jQuery', 'SCSS'],
    },
    {
        title: 'Frameworks and Libraries',
        body: ['React.js', 'Vue.js', 'Nuxtjs', 'Next.js', 'TailwindCSS', 'Material UI', 'Bootstrap', 'Shadcn UI', 'Styled-Components', 'CSS Modules', 'React-Hook-Form', 'React-Query'],
    },
    {
        title: 'Version Control',
        body: ['Git', 'Github', 'Bitbucket'],
    },
    {
        title: 'State Management',
        body: ['Redux Toolkit', 'Zustand'],
    },
    {
        title: 'Testing',
        body: ['Jest', 'Cypress', 'TDD (Test-Driven-Development)'],
    },
    {
        title: 'Others',
        body: ['MongoDB', 'Firebase', 'Supabase', 'GraphQL', 'Postgres', 'Prisma', 'Axios', 'REST API', 'CI/CD', 'Docker'],
    },
];

const educations: Education[] = [
    {
        title: 'Bachelor of Science (Hons.) Chemistry at University of Uyo',
        startDate: 'OCT 2018',
        endDate: 'MAY 2024',
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
        name: 'Spanish',
        level: 'LEARNING :)',
    },
];

const hobbies = ['Music', 'Gaming'];

const recommendations: Recommendation[] = [
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
