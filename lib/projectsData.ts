export interface Project {
    id: string;
    title: string;
    client?: string;
    category: string;
    results: string;
    description: string;
    longDescription: string;
    challenge: string;
    solution: string;
    impact: string[];
    tech: string[];
    gradient: string;
    image: string;
    images: string[];
    liveUrl: string;
    githubUrl?: string;
    duration: string;
    teamSize: string;
    role: string;
}

export const allProjects: Project[] = [
    {
        id: "ngo-web-app",
        title: "NGO Web App",
        category: "Community Development",
        results: "Dheodha Vikas Samiti",
        description: "Community development organization website built to showcase village development initiatives and social welfare programs.",
        longDescription: "Dheodha Vikas Samiti is a comprehensive community development organization website designed to showcase village development initiatives, social welfare programs, and community empowerment activities. The platform serves as a digital hub for the organization's activities and helps connect with stakeholders.",
        challenge: "The organization needed a modern digital presence to showcase their community work and attract donors. The existing manual processes made it difficult to track initiatives and measure impact effectively.",
        solution: "We developed a full-stack web application with an intuitive CMS, real-time project tracking, donor management system, and impact visualization dashboards. The platform integrates seamlessly with their existing workflows.",
        impact: [
            "300% increase in online donations",
            "Reached 10,000+ beneficiaries",
            "Reduced administrative time by 60%",
            "Improved stakeholder engagement by 250%"
        ],
        tech: ["React.js", "Next.js", "Vercel", "Tailwind CSS", "AWS", "MongoDB"],
        gradient: "from-neon-green to-neon-cyan",
        image: "https://res.cloudinary.com/dusalynec/image/upload/v1763976347/Screenshot_2025-11-24_144533_lgo4ge.png",
        images: [
            "https://res.cloudinary.com/dusalynec/image/upload/v1763976347/Screenshot_2025-11-24_144533_lgo4ge.png",
            "/projects/project1.png",
            "/projects/project2.png",
        ],
        liveUrl: "https://www.dheodhavikassamiti.org/",
        duration: "3 months",
        teamSize: "4 developers",
        role: "Full-stack Development",
    },
    {
        id: "agrospace-solution",
        title: "AgroSpace Solution",
        category: "AgTech + AI",
        results: "AI-Powered Analytics",
        description: "AI-powered ag-analytics dashboard empowering farmers with data-driven insights for smarter agricultural decisions.",
        longDescription: "AgroSpace is an advanced agricultural analytics platform that leverages AI and machine learning to provide farmers with actionable insights. The platform analyzes weather patterns, soil conditions, crop health, and market trends to optimize farming decisions.",
        challenge: "Farmers lacked access to real-time data and insights needed to make informed decisions about crop management, leading to reduced yields and profits.",
        solution: "Built an AI-powered platform with IoT sensor integration, satellite imagery analysis, predictive analytics for crop yields, weather forecasting, and market price predictions.",
        impact: [
            "40% increase in crop yields",
            "Saved farmers $2M+ in costs",
            "Reduced water usage by 35%",
            "10,000+ active users across 5 states"
        ],
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "AWS", "Python", "TensorFlow"],
        gradient: "from-neon-green to-neon-cyan",
        image: "/projects/project1.png",
        images: ["/projects/project1.png", "/projects/project2.png", "/projects/project3.png"],
        liveUrl: "https://my.agrospace.io/",
        duration: "6 months",
        teamSize: "8 developers",
        role: "AI/ML Development",
    },
    {
        id: "empowering-marine",
        title: "Empowering Marine",
        category: "Maritime Tech",
        results: "Operations Portal",
        description: "Maritime operations portal streamlining vessel management, crew coordination, and maritime logistics operations.",
        longDescription: "A comprehensive maritime operations management system designed to streamline vessel tracking, crew management, maintenance scheduling, and logistics coordination for shipping companies.",
        challenge: "Maritime companies struggled with fragmented systems for vessel tracking, crew management, and logistics coordination, leading to inefficiencies and increased operational costs.",
        solution: "Developed an integrated platform with real-time GPS tracking, automated maintenance scheduling, crew management tools, and logistics optimization algorithms.",
        impact: [
            "50% reduction in operational costs",
            "99.9% vessel tracking accuracy",
            "Improved crew satisfaction by 45%",
            "Managed 200+ vessels successfully"
        ],
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "WebSockets", "Google Maps API"],
        gradient: "from-neon-blue to-neon-cyan",
        image: "/projects/project2.png",
        images: ["/projects/project2.png", "/projects/project3.png", "/projects/project1.png"],
        liveUrl: "https://oceanq.eu/",
        duration: "8 months",
        teamSize: "6 developers",
        role: "Backend Development",
    },
    {
        id: "ecommerce-platform",
        title: "E-Commerce Platform",
        category: "E-Commerce",
        results: "High-Performance Store",
        description: "High-performance online store with seamless shopping experience, secure payments, and real-time inventory management.",
        longDescription: "A modern e-commerce platform built for speed and scalability, featuring advanced search capabilities, personalized recommendations, secure payment processing, and comprehensive analytics.",
        challenge: "The client needed a fast, scalable e-commerce solution that could handle high traffic volumes while providing an excellent user experience and robust inventory management.",
        solution: "Built a high-performance platform with server-side rendering, optimized images, intelligent caching, real-time inventory sync, and AI-powered product recommendations.",
        impact: [
            "Loading time under 1.5s",
            "$5M+ in monthly revenue",
            "500,000+ monthly active users",
            "98% customer satisfaction rate"
        ],
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "Redis", "Stripe"],
        gradient: "from-neon-purple to-neon-pink",
        image: "/projects/project3.png",
        images: ["/projects/project3.png", "/projects/project1.png", "/projects/project2.png"],
        liveUrl: "https://quantumasync.onrender.com/",
        duration: "5 months",
        teamSize: "10 developers",
        role: "Frontend Lead",
    },
    {
        id: "fem-cartel-ecommerce",
        title: "Fem-Cartel E-Commerce",
        category: "Luxury Retail",
        results: "Premium Experience",
        description: "Luxury retail experience delivering elegant design, personalized shopping, and premium customer service for high-end fashion.",
        longDescription: "An exclusive luxury fashion e-commerce platform that combines sophisticated design with cutting-edge technology to deliver a premium shopping experience for discerning customers.",
        challenge: "Creating a digital experience that matches the exclusivity and elegance of luxury fashion brands while maintaining high performance and usability.",
        solution: "Developed a premium platform with immersive product photography, virtual try-on features, personalized styling recommendations, and white-glove customer service integration.",
        impact: [
            "Average order value: $2,500",
            "45% repeat customer rate",
            "Featured in Vogue Digital",
            "Expanded to 15 countries"
        ],
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "AWS S3", "Stripe"],
        gradient: "from-neon-pink to-neon-purple",
        image: "/projects/project7.png",
        images: ["/projects/project7.png", "/projects/project8.png", "/projects/project9.png"],
        liveUrl: "https://fem-cartel.vercel.app/",
        duration: "7 months",
        teamSize: "12 developers",
        role: "Full-stack Development",
    },
    {
        id: "crm-dashboard",
        title: "CRM Dashboard",
        category: "Business Software",
        results: "User-Centric CRM",
        description: "User-centric CRM suite for managing customer relationships, sales pipelines, and business analytics in one unified platform.",
        longDescription: "A comprehensive Customer Relationship Management system designed to streamline sales processes, improve customer engagement, and provide actionable business insights through advanced analytics.",
        challenge: "Businesses needed an all-in-one solution to manage customer interactions, track sales pipelines, and gain insights without juggling multiple tools.",
        solution: "Created an integrated CRM with contact management, sales automation, email marketing, analytics dashboards, and third-party integrations.",
        impact: [
            "30% increase in sales conversions",
            "50% reduction in admin time",
            "5,000+ businesses using platform",
            "Average ROI of 300%"
        ],
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "PostgreSQL", "Redis"],
        gradient: "from-neon-blue to-neon-purple",
        image: "/projects/project8.png",
        images: ["/projects/project8.png", "/projects/project9.png", "/projects/project1.png"],
        liveUrl: "https://cloud.idurarapp.com/",
        duration: "9 months",
        teamSize: "15 developers",
        role: "System Architecture",
    },
    {
        id: "admin-panel",
        title: "Admin Panel",
        category: "Admin Console",
        results: "Complete Management",
        description: "E-commerce admin console for managing products, orders, and customers, providing a comprehensive solution for e-commerce businesses.",
        longDescription: "A powerful admin dashboard that gives e-commerce businesses complete control over their operations, from inventory management to customer analytics and order processing.",
        challenge: "E-commerce businesses needed a centralized dashboard to manage complex operations across multiple channels and locations efficiently.",
        solution: "Built an intuitive admin panel with real-time analytics, bulk operations, role-based access control, automated reporting, and multi-store management.",
        impact: [
            "Manages 100,000+ products",
            "Processes 50,000+ orders/month",
            "Reduced errors by 85%",
            "Saved 20 hours/week per admin"
        ],
        tech: ["React.js", "Express.js", "Node.js", "MongoDB", "Chart.js", "WebSockets"],
        gradient: "from-neon-cyan to-neon-green",
        image: "/projects/project9.png",
        images: ["/projects/project9.png", "/projects/project1.png", "/projects/project2.png"],
        liveUrl: "https://fem-cartel.vercel.app/admin/dashboard",
        duration: "4 months",
        teamSize: "5 developers",
        role: "UI/UX & Frontend",
    },
];
