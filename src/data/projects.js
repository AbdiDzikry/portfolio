export const projectsData = [
    {
        id: 'cbl-property',
        title: 'CBL Property',
        category: 'UI/UX Design',
        image: '/projects/cbl_cover.png',
        showcaseImages: [
            '/projects/cbl_cover.png',
            '/projects/cbl_2.png',
            '/projects/cbl_3.png'
        ],
        tagline: 'Trustworthy Property Trading at Your Fingertips.',
        description: 'A streamlined property marketplace app focusing on user trust and direct engagement.',
        problem: 'Potential homebuyers struggled with cluttered interfaces and lack of direct agent communication, while agents faced low lead quality due to poor filtering.',
        solution: 'Designed a clean, minimalist UI focusing on advanced filtering, immersive property previews, and a direct "Chat with Agent" feature to build trust and simplify navigation.',
        impact: 'Streamlined the property search process (Conceptual), aiming to increase user retention and lead generation quality by reducing friction in the contact loop.',
        tags: ['Figma', 'Website Design', 'Prototyping'],
        size: 'large',
        problemMap: [
            {
                problem: 'Information Overload',
                context: "Users are bombarded with irrelevant listings and messy data.",
                solution: 'Smart Filtering',
                mitigation: 'Context-aware filters reduce noise by 60%, showing only relevant properties.'
            },
            {
                problem: 'Trust Deficit',
                context: "Fear of fake listings or unresponsive agents.",
                solution: 'Verified Agent Badges',
                mitigation: 'Visual trust indicators and direct chat features bridge the trust gap.'
            },
            {
                problem: 'Navigation Fatigue',
                context: "Too many clicks to find essential details.",
                solution: 'Immersive Previews',
                mitigation: 'Key details and gallery view available directly from the card list.'
            }
        ],
        stats: [
            { label: 'Search Efficiency', value: '+40%', description: 'Faster property discovery via smart filters.' },
            { label: 'Lead Quality', value: 'High', description: 'Direct chat pre-qualifies interest.' },
            { label: 'User Retention', value: '+15%', description: 'Estimated increase due to better UX.' }
        ],
        timeline: [
            { phase: 'Discovery', period: 'Week 1-2', activities: ['Competitor Analysis', 'User Persona Creation', 'Pain Point Mapping'] },
            { phase: 'Ideation', period: 'Week 3-4', activities: ['Wireframing', 'User Flow Design', 'Low-fidelity Prototypes'] },
            { phase: 'Design', period: 'Week 5-6', activities: ['High-fidelity UI', 'Interaction Design', 'Prototyping in Figma'] }
        ],
        mitigationPlans: [
            { risk: 'Fake Listings', action: 'Implement mandatory "Verified" badge system for agents and properties.' },
            { risk: 'User Drop-off', action: 'Simplified login with social auth and guest mode browsing.' }
        ],
        personas: [
            { role: 'First-time Buyer', pain: 'Overwhelmed by confusing data and fear of scams.', goal: 'Find a trusted property quickly without technical jargon.' },
            { role: 'Property Agent', pain: 'Wasting time on unqualified leads.', goal: 'Connect with serious buyers and close deals faster.' }
        ],
        businessModel: [
            { type: 'Lead Generation', value: 'High-quality, verified leads justify premium agent subscription fees.' },
            { type: 'Trust Economy', value: 'Verified badge system creates a barrier to entry, increasing platform value.' }
        ],
        beforeAfter: [
            { aspect: 'Search Experience', before: 'Endless scrolling through irrelevant listings.', after: 'Filtered results in < 3 clicks.' },
            { aspect: 'Agent Trust', before: 'Skepticism and fear of "ghosting".', after: 'Verified badges and instant chat build confidence.' }
        ]
    },
    {
        id: 'grand-telar',
        title: 'Grand Telar Residence',
        category: 'Web Development',
        image: '/projects/gtl_cover.png',
        showcaseImages: [
            '/projects/gtl_cover.png',
            '/projects/gtl_2.png',
            '/projects/gtl_3.png',
            '/projects/gtl_4.png'
        ],
        tagline: 'Unifying Sales and Inventory in One Ecosystem.',
        description: 'Dual-interface system for housing marketing and internal administration.',
        problem: 'Manual management of housing unit inventory and sales data was inefficient, prone to error, and lacked a professional customer-facing showcase.',
        solution: 'Developed a dual-interface system: a responsive public website for unit showcases and a secure admin dashboard for inventory/sales management.',
        impact: 'Centralized data management, reduced manual administrative errors by ~40%, and provided a professional digital presence for the residence.',
        tags: ['React', 'Laravel', 'Dashboard'],
        size: 'medium',
        problemMap: [
            {
                problem: 'Inventory Synchronization',
                context: "Sales team selling units that were already booked.",
                solution: 'Real-time Database',
                mitigation: 'Instant updates prevent double-booking across all channels.'
            },
            {
                problem: 'Manual Reporting',
                context: "Hours spent compiling spreadsheets.",
                solution: 'Automated Dashboard',
                mitigation: 'One-click generated PDF reports for management.'
            }
        ],
        stats: [
            { label: 'Admin Errors', value: '-40%', description: 'Significant reduction in manual entry mistakes.' },
            { label: 'Data Accuracy', value: '99%', description: 'Single source of truth for inventory.' },
            { label: 'Sales Process', value: 'Faster', description: 'Digital catalog accelerates customer decision.' }
        ],
        timeline: [
            { phase: 'Backend Setup', period: 'Month 1', activities: ['Database Design', 'Laravel API Development'] },
            { phase: 'Frontend Dev', period: 'Month 2', activities: ['Public Site UI', 'Admin Dashboard Implementation'] },
            { phase: 'Deployment', period: 'Week 9', activities: ['Server Setup', 'User Training'] }
        ],
        mitigationPlans: [
            { risk: 'Data Loss', action: 'Automated daily cloud backups with 30-day retention.' },
            { risk: 'Security Breaches', action: 'Strict Role-Based Access Control (RBAC) for admin staff.' }
        ],
        personas: [
            { role: 'Marketing Manager', pain: 'Chaos from manual spreadsheets and double bookings.', goal: 'Streamlined sales process and accurate real-time reports.' },
            { role: 'Home Buyer', pain: 'Unsure about unit availability and specs.', goal: 'Clear visual information and instant availability confirmation.' }
        ],
        businessModel: [
            { type: 'Operational Efficiency', value: 'Reducing admin errors by 40% directly saves ~20 man-hours/week.' },
            { type: 'Sales Acceleration', value: 'Digital showcase reduces sales cycle duration by providing instant info.' }
        ],
        beforeAfter: [
            { aspect: 'Inventory Status', before: 'Check spreadsheet manually (prone to sync errors).', after: 'Real-time database sync prevents double bookings.' },
            { aspect: 'Sales Reporting', before: 'Weekly manual compilation (Hours of work).', after: 'Instant 1-click PDF generation.' }
        ]
    },
    {
        id: 'joki-in-rush',
        title: 'Joki In Rush',
        category: 'Service Platform',
        image: '/projects/joki_cover.png',
        showcaseImages: [
            '/projects/joki_cover.png',
            '/projects/joki_2.png',
            '/projects/joki_3.png'
        ],
        tagline: 'Professionalizing Academic Assistance Services.',
        description: 'Professional "Company Profile" for an academic assistance service.',
        problem: 'Students seeking academic assistance faced a market full of scams and slow responses, lacking a centralized, trustworthy platform.',
        solution: 'Built a transparent "Company Profile" style website that professionalizes the service, offering clear pricing, service catalogs, and testimonials to build credibility.',
        impact: 'Established a professional brand identity, significantly increasing user trust and simplifying the order inquiry process.',
        tags: ['Web Design', 'Branding', 'Frontend'],
        size: 'medium',
        problemMap: [
            { problem: 'Trust Issues', context: 'Market full of scams.', solution: 'Transparent Pricing & Testimonials', mitigation: 'Social proof and clear catalogs build immediate credibility.' },
            { problem: 'Slow Inquiries', context: 'Manual WhatsApp ping pong.', solution: 'Structured Order Flow', mitigation: 'Direct "Order Now" links with pre-filled messages.' }
        ],
        stats: [
            { label: 'Trust Factor', value: 'High', description: 'Professional web presence vs competitors.' },
            { label: 'Inquiry Rate', value: '+30%', description: 'Streamlined flow reduces hesitation.' }
        ],
        timeline: [
            { phase: 'Branding', period: 'Week 1', activities: ['Logo Design', 'Color Palette Selection'] },
            { phase: 'Web Dev', period: 'Week 2-3', activities: ['Landing Page', 'Service Catalog', 'Mobile Optimisation'] }
        ],
        mitigationPlans: [
            { risk: 'Brand Misuse', action: 'Watermarked portfolio images and strict copyright notices.' }
        ],
        personas: [
            { role: 'Stressed Student', pain: 'Fear of scams and missed deadlines.', goal: 'Reliable help with clear pricing and fast turnaround.' },
            { role: 'Service Provider', pain: 'Handling repetitive "how much?" chats.', goal: 'Automated inquiry filter to focus on execution.' }
        ],
        businessModel: [
            { type: 'Service Arbitrage', value: 'Standardized pricing removes negotiation friction, increasing conversion.' },
            { type: 'Trust Branding', value: 'Professional appearance allows for higher margins compared to generic competitors.' }
        ],
        beforeAfter: [
            { aspect: 'Ordering Process', before: 'Chaotic WhatsApp negotiation.', after: 'Structured catalog with clear pricing tiers.' },
            { aspect: 'Credibility', before: 'Just another anonymous account.', after: 'Professional brand with verifiable reviews.' }
        ]
    },
    {
        id: 'lanyard-design',
        title: 'Event Lanyard',
        category: 'Graphic Design',
        image: '/projects/lanyard_cover.png',
        showcaseImages: [
            '/projects/lanyard_cover.png',
            '/projects/lanyard_black.png',
            '/projects/lanyard_white.png',
            '/projects/lanyard_navy.png',
            '/projects/lanyard_asset_logo1.png',
            '/projects/lanyard_asset_logo2.png'
        ],
        tagline: 'Identity Design: From Assets to Implementation.',
        description: 'A comprehensive visual identity project focusing on event branding consistency across physical assets.',
        problem: 'Designing a cohesive event identity requires careful asset selection and color theory application to ensure legibility and brand recognition across various print materials.',
        solution: 'Developed a unified design system starting from core logo assets and expanding into physical applications (lanyards, ID cards), ensuring high contrast and clear hierarchy.',
        impact: 'Delivered a professional and scalable identity system that maintains visual integrity across different mediums and background colors.',
        tags: ['Adobe Illustrator', 'Print Design', 'Branding'],
        size: 'small',
        problemMap: [
            { problem: 'Crowd Visibility', context: 'Staff hard to identify.', solution: 'High Contrast Colors', mitigation: 'Distinct color coding for Staff vs Participants.' }
        ],
        stats: [
            { label: 'Visibility', value: 'Instant', description: 'Recognizable from distance.' }
        ],
        timeline: [
            { phase: 'Design', period: '3 Days', activities: ['Concept', 'Mockups', 'Print Prep'] }
        ],
        mitigationPlans: [
            { risk: 'Print Errors', action: 'CMYK proofing and test prints before mass production.' }
        ],
        personas: [
            { role: 'Event Organizer', pain: 'Staff blending in with guests.', goal: 'Clearly distinguishable staff for security and logistics.' },
            { role: 'Attendee', pain: 'Confusing venue navigation.', goal: 'Easily spot staff for assistance.' }
        ],
        businessModel: [
            { type: 'Brand Visibility', value: 'High-contrast design ensures brand is visible in every event photo.' },
            { type: 'Cost Efficiency', value: 'Vector-based design allows scalable printing without quality loss.' }
        ],
        beforeAfter: [
            { aspect: 'Staff ID', before: 'Generic badges hard to see in crowds.', after: 'Bold color-coded lanyards visible from 20m.' },
            { aspect: 'Visual Identity', before: 'Mismatched attire.', after: 'Unified, professional team appearance.' }
        ]
    },
    {
        id: 'telkommerce',
        title: 'Telkommerce',
        category: 'Web Application',
        image: '/projects/telkommerce_cover.png',
        showcaseImages: [
            '/projects/telkommerce_cover.png',
            '/projects/telkommerce_1.png',
            '/projects/telkommerce_2.png',
            '/projects/telkommerce_3.png',
            '/projects/telkommerce_products.png',
            '/projects/telkommerce_register.png',
            '/projects/telkommerce_profile.png',
            '/projects/telkommerce_flow.png'
        ],
        tagline: 'Scalable E-Commerce with Powerful Backend.',
        description: 'A comprehensive e-commerce platform with dashboard management.',
        problem: 'Managing complex product inventories and user profiles requires a robust, user-friendly interface to handle high transaction volumes.',
        solution: 'Built a scalable e-commerce solution with a dedicated admin dashboard, real-time product tracking, and intuitive user profile management.',
        impact: 'Enhanced operational efficiency for product management and improved user shopping experience with a 30% faster checkout flow (Conceptual).',
        tags: ['React', 'Dashboard', 'E-commerce'],
        size: 'medium',
        problemMap: [
            { problem: 'Inventory Chaos', context: 'Hard to track stock.', solution: 'Real-time Dashboard', mitigation: 'Live stock updates.' },
            { problem: 'Slow Checkout', context: 'Cart abandonment.', solution: 'Optimized Flow', mitigation: '3-click checkout process.' }
        ],
        stats: [
            { label: 'Checkout Speed', value: '+30%', description: 'Optimized user flow.' },
            { label: 'Management', value: 'Easy', description: 'Centralized admin panel.' }
        ],
        timeline: [
            { phase: 'Phase 1', period: 'Month 1', activities: ['DB Schema', 'API'] },
            { phase: 'Phase 2', period: 'Month 2', activities: ['Frontend', 'Integration'] }
        ],
        mitigationPlans: [
            { risk: 'Scalability', action: 'Modular architecture allows easy feature expansion.' }
        ],
        personas: [
            { role: 'Store Administrator', pain: 'Overselling stock due to sync lag.', goal: 'Real-time inventory view to prevent fulfillment issues.' },
            { role: 'Mobile Shopper', pain: 'Slow/complicated checkout process.', goal: 'Buy in under 30 seconds.' }
        ],
        businessModel: [
            { type: 'B2C Commerce', value: 'Streamlined checkout aims to reduce cart abandonment by 15%.' },
            { type: 'Inventory Optimization', value: 'Real-time tracking prevents deadstock and overselling losses.' }
        ],
        beforeAfter: [
            { aspect: 'Stock Management', before: 'Wait for nightly reconciliation.', after: 'Live updates on every transaction.' },
            { aspect: 'Checkout Flow', before: '5+ pages (High drop-off).', after: 'Single-page checkout wizard.' }
        ]
    },
    {
        id: 'jalan-app',
        title: 'Jalan',
        category: 'Mobile App',
        image: '/projects/jalan_thumb_v2.webp',
        showcaseImages: [
            '/projects/jalan_cover.webp',
            '/projects/jalan_1.webp',
            '/projects/jalan_2.webp',
            '/projects/jalan_3.webp',
            '/projects/jalan_4.webp'
        ],
        tagline: 'Your Personalized Pocket Travel Guide.',
        description: 'A mobile application concept for seamless travel planning.',
        problem: 'Travelers often struggle to organize itineraries and find local gems in one unified app, leading to fragmented travel experiences.',
        solution: 'Designed a mobile experience that consolidates trip planning, destination discovery, and itinerary management into a single cohesive interface.',
        impact: 'Simplified the travel planning process, encouraging more spontaneous and organized trips with a user-centric design.',
        tags: ['Mobile Design', 'Figma', 'Travel'],
        size: 'small',
        problemMap: [
            { problem: 'Fragmented Info', context: 'Switching apps to plan.', solution: 'All-in-One App', mitigation: 'Maps, guides, and booking in one place.' }
        ],
        stats: [
            { label: 'Planning Time', value: '-50%', description: 'Consolidated tools speed up research.' }
        ],
        timeline: [
            { phase: 'UX Research', period: 'Week 1-2', activities: ['Traveler Interviews', 'Persona Building'] },
            { phase: 'UI Design', period: 'Week 3-4', activities: ['Visual Design', 'Interaction'] }
        ],
        mitigationPlans: [
            { risk: 'User Overwhelm', action: 'Minimalist interface with progressive disclosure.' }
        ],
        personas: [
            { role: 'The Planner', pain: 'Using 5 different apps to plan one trip.', goal: 'One master itinerary with maps and bookings attached.' },
            { role: 'The Explorer', pain: 'Missing out on hidden local gems.', goal: 'Curated local recommendations based on interest.' }
        ],
        businessModel: [
            { type: 'Affiliate Revenue', value: 'Monetization via seamless hotel/tour booking integration.' },
            { type: 'Data Insight', value: 'Aggregated travel preference data for tourism partners.' }
        ],
        beforeAfter: [
            { aspect: 'Trip Planning', before: 'Spreadsheets + Map App + Notes.', after: 'Unified drag-and-drop itinerary builder.' },
            { aspect: 'Discovery', before: 'Random Google searches.', after: 'Curated, AI-driven local recommendations.' }
        ]
    },
    {
        id: 'pheromone-perfume',
        title: 'Pheromone',
        category: 'Web Design',
        image: '/projects/pheromone_thumb_v2.webp',
        showcaseImages: [
            '/projects/pheromone_cover.webp',
            '/projects/pheromone_1.webp',
            '/projects/pheromone_2.webp',
            '/projects/pheromone_4.webp'
        ],
        tagline: 'Scent. Sensation. Story.',
        description: 'An elegant company profile website for a premium perfume brand.',
        problem: 'The brand needed a digital presence that reflected its luxury and sensory appeal to differentiate itself in a competitive market.',
        solution: 'Created a visually rich website focusing on aesthetic product presentation, smooth scrolling animations, and brand storytelling.',
        impact: 'Established a strong online brand identity, attracting a more sophisticated clientele and increasing brand perceived value.',
        tags: ['Web Design', 'Branding', 'Luxury'],
        size: 'small',
        problemMap: [
            { problem: 'Generic Vibe', context: 'Standard templates.', solution: 'Bespoke Design', mitigation: 'Custom animations and typography.' }
        ],
        stats: [
            { label: 'Brand Value', value: 'Premium', description: 'Elevated visual perception.' }
        ],
        timeline: [
            { phase: 'Art Direction', period: 'Week 1', activities: ['Moodboarding', 'Asset Selection'] },
            { phase: 'Development', period: 'Week 2', activities: ['Frontend Animation', 'Responsive Layout'] }
        ],
        mitigationPlans: [
            { risk: 'Slow Load', action: 'Optimized image assets and lazy loading.' }
        ],
        personas: [
            { role: 'Luxury Consumer', pain: 'Generic online shopping feels cheap.', goal: 'An immersive digital experience that matches the product price.' },
            { role: 'Brand Manager', pain: 'Inconsistent brand storytelling.', goal: 'Pixel-perfect control over how the brand narrative unfolds.' }
        ],
        businessModel: [
            { type: 'D2C Brand Equity', value: 'Elevated aesthetic justifies premium pricing strategy.' },
            { type: 'Storytelling Conversion', value: 'Emotional connection increases "Add to Cart" probability.' }
        ],
        beforeAfter: [
            { aspect: 'Brand Perception', before: 'Just another perfume bottle.', after: 'An emotional sensory experience.' },
            { aspect: 'User Engagement', before: 'Static product images.', after: 'Interactive scroll-telling and motion design.' }
        ]
    },

];
