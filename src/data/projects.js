export const projectsData = [
    {
        id: 'cbl-property',
        title: 'CBL Property',
        category: 'UI/UX Design',
        image: '/projects/cbl_new_thumb_v2.png',
        showcaseImages: [
            '/projects/cbl_new_thumb_v2.png',
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
        ],
        // New PRD Specific Fields
        vision: 'To become the most trusted property marketplace in Indonesia by bridging the gap between digital convenience and human reliability.',
        status: 'ON TRACK',
        team: 'Sulthan Abdi Dzikry (Product Designer)',
        background: 'The Indonesian property market is fragmented. Existing platforms focus on quantity of listings over quality of interactions, leading to low trust and high frustration for both buyers and serious agents.',
        strategicAlignment: 'Aligns with the portfolio goal of demonstrating ability to solve "Trust" and "Communication" problems in high-stake markets.',
        investmentRequired: '2 Months Design & Development / 1 Product Designer',
        assumptions: '1. Users prefer in-app chat over direct phone calls for initial inquiries.\n2. Agents will undergo verification if it guarantees higher quality leads.',
        productArchitecture: 'React Native (Mobile App), Firebase (Real-time Chat & Auth), Node.js (Backend API)',
        coreFeatures: [
            { name: 'Verified Agent System', desc: 'Badge system based on license verification.' },
            { name: 'Direct In-App Chat', desc: 'Real-time messaging with "Offer" and "Share" capability.' },
            { name: 'Smart Filters', desc: 'Filter by "Non-flood zone", "Wide road access", etc.' }
        ],
        // New Product Designer Specific Fields
        designSystem: 'Atomic Design methodology with 8pt Grid System. Primary color #10B981 (Trust/Green) used for CTA to induce calm and safety.',
        designTools: ['Figma (UI/Prototyping)', 'Maze (Usability Testing)', 'Adobe Illustrator (Icons)'],
        researchMethods: ['User Interviews (5 Buyers, 3 Agents)', 'Competitor Benchmarking (Rumah123, Traveloka)', 'Usability Testing (Moderated)'],
        uxOverview: 'Clean, minimalist mobile-first interface with bottom navigation. "Dark Mode" support for night-time browsing.',
        translations: {
            id: {
                tagline: 'Perdagangan Properti Terpercaya dalam Genggaman.',
                description: 'Aplikasi pasar properti yang ramping, berfokus pada kepercayaan pengguna dan keterlibatan langsung.',
                problem: 'Calon pembeli rumah kesulitan dengan antarmuka yang berantakan dan kurangnya komunikasi langsung dengan agen, sementara agen menghadapi kualitas prospek (lead) yang rendah karena penyaringan yang buruk.',
                solution: 'Merancang UI yang bersih dan minimalis yang berfokus pada penyaringan canggih, pratinjau properti yang imersif, dan fitur "Chat dengan Agen" langsung untuk membangun kepercayaan dan menyederhanakan navigasi.',
                impact: 'Menyederhanakan proses pencarian properti (Konseptual), bertujuan untuk meningkatkan retensi pengguna dan kualitas prospek dengan mengurangi hambatan dalam siklus kontak.',
                problemMap: [
                    {
                        problem: 'Kelebihan Informasi',
                        context: "Pengguna dibombardir dengan daftar yang tidak relevan dan data yang berantakan.",
                        solution: 'Filter Cerdas',
                        mitigation: 'Filter sadar-konteks mengurangi gangguan sebesar 60%, hanya menampilkan properti yang relevan.'
                    },
                    {
                        problem: 'Defisit Kepercayaan',
                        context: "Ketakutan akan daftar palsu atau agen yang tidak responsif.",
                        solution: 'Lencana Agen Terverifikasi',
                        mitigation: 'Indikator kepercayaan visual dan fitur obrolan langsung menjembatani kesenjangan kepercayaan.'
                    },
                    {
                        problem: 'Kelelahan Navigasi',
                        context: "Terlalu banyak klik untuk menemukan detail penting.",
                        solution: 'Pratinjau Imersif',
                        mitigation: 'Detail utama dan tampilan galeri tersedia langsung dari daftar kartu.'
                    }
                ],
                stats: [
                    { label: 'Efisiensi Pencarian', value: '+40%', description: 'Penemuan properti lebih cepat via filter cerdas.' },
                    { label: 'Kualitas Prospek', value: 'Tinggi', description: 'Chat langsung mem-prakualifikasi minat.' },
                    { label: 'Retensi Pengguna', value: '+15%', description: 'Estimasi peningkatan karena UX yang lebih baik.' }
                ],
                timeline: [
                    { phase: 'Penemuan', period: 'Minggu 1-2', activities: ['Analisis Kompetitor', 'Pembuatan Persona User', 'Pemetaan Masalah'] },
                    { phase: 'Ideasi', period: 'Minggu 3-4', activities: ['Wireframing', 'Desain Alur Pengguna', 'Prototipe Low-fi'] },
                    { phase: 'Desain', period: 'Minggu 5-6', activities: ['UI High-fidelity', 'Desain Interaksi', 'Prototyping di Figma'] }
                ],
                mitigationPlans: [
                    { risk: 'Daftar Palsu', action: 'Terapkan sistem lencana "Terverifikasi" wajib bagi agen dan properti.' },
                    { risk: 'Pengguna Keluar', action: 'Login yang disederhanakan dengan autentikasi sosial dan mode tamu.' }
                ],
                personas: [
                    { role: 'Pembeli Pertama', pain: 'Bingung dengan data yang membingungkan & takut penipuan.', goal: 'Cari properti terpercaya tanpa istilah teknis.' },
                    { role: 'Agen Properti', pain: 'Membuang waktu pada prospek yang tidak berkualitas.', goal: 'Terhubung dengan pembeli serius & tutup kesepakatan lebih cepat.' }
                ],
                businessModel: [
                    { type: 'Lead Generation', value: 'Prospek terverifikasi berkualitas tinggi membenarkan biaya langganan agen premium.' },
                    { type: 'Ekonomi Kepercayaan', value: 'Sistem lencana terverifikasi menciptakan hambatan masuk, meningkatkan nilai platform.' }
                ],
                beforeAfter: [
                    { aspect: 'Pengalaman Pencarian', before: 'Scroll tanpa henti daftar tidak relevan.', after: 'Hasil terfilter dalam < 3 klik.' },
                    { aspect: 'Kepercayaan Agen', before: 'Skeptis dan takut di-"ghosting".', after: 'Lencana terverifikasi & chat instan membangun keyakinan.' }
                ],
                vision: 'Menjadi pasar properti paling terpercaya di Indonesia dengan menjembatani kesenjangan antara kenyamanan digital dan keandalan manusia.',
                background: 'Pasar properti Indonesia terfragmentasi. Platform yang ada berfokus pada kuantitas daftar daripada kualitas interaksi, menyebabkan kepercayaan rendah dan frustrasi tinggi bagi pembeli dan agen serius.',
                strategicAlignment: 'Selaras dengan tujuan portofolio untuk menunjukkan kemampuan memecahkan masalah "Kepercayaan" dan "Komunikasi" di pasar berisiko tinggi.',
                investmentRequired: '2 Bulan Desain & Pengembangan / 1 Product Designer',
                assumptions: '1. Pengguna lebih suka in-app chat daripada panggilan telepon langsung untuk pertanyaan awal.\n2. Agen bersedia diverifikasi jika itu menjamin kualitas prospek yang lebih tinggi.',
                productArchitecture: 'React Native (Aplikasi Mobile), Firebase (Real-time Chat & Auth), Node.js (Backend API)',
                coreFeatures: [
                    { name: 'Sistem Agen Terverifikasi', desc: 'Sistem lencana berbasis verifikasi lisensi.' },
                    { name: 'Chat In-App Langsung', desc: 'Pesan real-time dengan kemampuan "Tawar" dan "Bagikan".' },
                    { name: 'Filter Cerdas', desc: 'Filter berdasarkan "Bebas banjir", "Akses jalan lebar", dll.' }
                ],
                uxOverview: 'Antarmuka mobile-first yang bersih dan minimalis dengan navigasi bawah. Dukungan "Dark Mode" untuk penjelajahan malam hari.',
                designSystem: 'Metodologi Atomic Design dengan Sistem Grid 8pt. Warna primer #10B981 (Trust/Green) digunakan untuk CTA guna menimbulkan rasa tenang dan aman.',
                designTools: ['Figma (UI/Prototyping)', 'Maze (Usability Testing)', 'Adobe Illustrator (Icons)'],
                researchMethods: ['Wawancara User (5 Pembeli, 3 Agen)', 'Benchmarking Kompetitor (Rumah123, Traveloka)', 'Usability Testing (Moderated)']
            }
        }
    },
    {
        id: 'grand-telar',
        title: 'Grand Telar Residence',
        category: 'Web Development',
        image: '/projects/gtr_new_thumb_v2.png',
        showcaseImages: [
            '/projects/gtr_new_thumb_v2.png',
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
        ],
        // New PRD Fields
        vision: 'To create a seamless property management ecosystem that bridges digital marketing with operational efficiency.',
        status: 'COMPLETED',
        team: 'Sulthan Abdi Dzikry (Full Stack Developer)',
        background: 'Marketing housing units involves complex data synchronization. Manual methods led to double bookings and slow reporting, necessitating a digital transformation.',
        strategicAlignment: 'Demonstrates Full Stack capabilities (Laravel + React) and ability to build complex internal tools.',
        investmentRequired: '2 Months / 1 Full Stack Developer',
        assumptions: '1. Admin staff have basic computer literacy.\n2. Real-time availability is the primary conversion driver for buyers.',
        productArchitecture: 'Laravel (Backend API), React (Frontend), MySQL (Database), JWT (Auth)',
        coreFeatures: [
            { name: 'Unified Inventory', desc: 'Single database source for both public site and admin dashboard.' },
            { name: 'Automated Reporting', desc: 'One-click PDF generation for weekly sales reports.' },
            { name: 'Role-Based Access', desc: 'Secure login for Admin, Sales, and Manager roles.' }
        ],
        designSystem: 'Corporate Clean style. Dashboard uses a dense data-grid layout for efficiency. Public site uses large imagery for emotional appeal.',
        designTools: ['Figma (UI)', 'Postman (API Testing)', 'VS Code'],
        researchMethods: ['Internal Stakeholder Interviews', 'Workflow Analysis'],
        uxOverview: 'Dual-persona UX: "Efficiency First" for Admins (Dashboard) vs "Visual First" for Buyers (Public Site).',
        translations: {
            id: {
                tagline: 'Menyatukan Penjualan dan Inventaris dalam Satu Ekosistem.',
                description: 'Sistem antarmuka ganda untuk pemasaran perumahan dan administrasi internal.',
                problem: 'Pengelolaan manual inventaris unit rumah dan data penjualan tidak efisien, rentan kesalahan, dan kurang tampilan profesional untuk pelanggan.',
                solution: 'Mengembangkan sistem antarmuka ganda: situs web publik responsif untuk pameran unit dan dasbor admin aman untuk pengelolaan inventaris/penjualan.',
                impact: 'Memusatkan pengelolaan data, mengurangi kesalahan administrasi manual hingga ~40%, dan memberikan kehadiran digital profesional untuk residensi.',
                problemMap: [
                    {
                        problem: 'Sinkronisasi Inventaris',
                        context: "Tim penjualan menjual unit yang sudah dipesan.",
                        solution: 'Database Real-time',
                        mitigation: 'Pembaruan instan mencegah pemesanan ganda di semua saluran.'
                    },
                    {
                        problem: 'Pelaporan Manual',
                        context: "Berjam-jam dihabiskan menyusun spreadsheet.",
                        solution: 'Dasbor Otomatis',
                        mitigation: 'Laporan PDF satu klik untuk manajemen.'
                    }
                ],
                stats: [
                    { label: 'Kesalahan Admin', value: '-40%', description: 'Pengurangan signifikan kesalahan entri manual.' },
                    { label: 'Akurasi Data', value: '99%', description: 'Satu sumber kebenaran untuk inventaris.' },
                    { label: 'Proses Penjualan', value: 'Lebih Cepat', description: 'Katalog digital mempercepat keputusan pelanggan.' }
                ],
                timeline: [
                    { phase: 'Setup Backend', period: 'Bulan 1', activities: ['Desain Database', 'Pengembangan API Laravel'] },
                    { phase: 'Dev Frontend', period: 'Bulan 2', activities: ['UI Situs Publik', 'Implementasi Dasbor Admin'] },
                    { phase: 'Deployment', period: 'Minggu 9', activities: ['Setup Server', 'Pelatihan Pengguna'] }
                ],
                mitigationPlans: [
                    { risk: 'Kehilangan Data', action: 'Backup cloud harian otomatis dengan retensi 30 hari.' },
                    { risk: 'Pelanggaran Keamanan', action: 'Kontrol Akses Berbasis Peran (RBAC) ketat untuk staf admin.' }
                ],
                personas: [
                    { role: 'Manajer Pemasaran', pain: 'Kekacauan dari spreadsheet manual dan pemesanan ganda.', goal: 'Proses penjualan ramping dan laporan real-time akurat.' },
                    { role: 'Pembeli Rumah', pain: 'Tidak yakin tentang ketersediaan dan spesifikasi unit.', goal: 'Informasi visual jelas dan konfirmasi ketersediaan instan.' }
                ],
                businessModel: [
                    { type: 'Efisiensi Operasional', value: 'Mengurangi kesalahan admin 40% menghemat ~20 jam kerja/minggu.' },
                    { type: 'Akselerasi Penjualan', value: 'Pameran digital mengurangi durasi siklus penjualan dengan info instan.' }
                ],
                beforeAfter: [
                    { aspect: 'Status Inventaris', before: 'Cek spreadsheet manual (rentan error).', after: 'Sync database real-time cegah double booking.' },
                    { aspect: 'Laporan Penjualan', before: 'Kompilasi manual mingguan (Berjam-jam).', after: 'Generasi PDF instan 1-klik.' }
                ],
                // PRD ID
                vision: 'Menciptakan ekosistem manajemen properti yang mulus menjembatani pemasaran digital dengan efisiensi operasional.',
                status: 'SELESAI',
                team: 'Sulthan Abdi Dzikry (Full Stack Developer)',
                background: 'Pemasaran unit perumahan melibatkan sinkronisasi data kompleks. Metode manual menyebabkan pemesanan ganda dan pelaporan lambat.',
                strategicAlignment: 'Menunjukkan kemampuan Full Stack (Laravel + React) dan kemampuan membangun alat internal kompleks.',
                investmentRequired: '2 Bulan / 1 Full Stack Developer',
                assumptions: '1. Staf admin memiliki literasi komputer dasar.\n2. Ketersediaan real-time adalah pendorong konversi utama bagi pembeli.',
                productArchitecture: 'Laravel (Backend API), React (Frontend), MySQL (Database), JWT (Auth)',
                coreFeatures: [
                    { name: 'Inventaris Terpadu', desc: 'Sumber database tunggal untuk situs publik dan dasbor admin.' },
                    { name: 'Pelaporan Otomatis', desc: 'Generasi PDF satu klik untuk laporan penjualan mingguan.' },
                    { name: 'Akses Berbasis Peran', desc: 'Login aman untuk peran Admin, Sales, dan Manajer.' }
                ],
                designSystem: 'Gaya Corporate Clean. Dasbor menggunakan tata letak data-grid padat untuk efisiensi. Situs publik menggunakan citra besar untuk daya tarik emosional.',
                designTools: ['Figma (UI)', 'Postman (API Testing)', 'VS Code'],
                researchMethods: ['Wawancara Stakeholder Internal', 'Analisis Alur Kerja'],
                uxOverview: 'UX Dua Persona: "Efisiensi Dulu" untuk Admin (Dasbor) vs "Visual Dulu" untuk Pembeli (Situs Publik).'
            }
        }
    },
    {
        id: 'joki-in-rush',
        title: 'Joki In Rush',
        category: 'Service Platform',
        image: '/projects/jir_new_thumb_v2.png',
        showcaseImages: [
            '/projects/jir_new_thumb_v2.png',
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
        ],
        // New PRD Fields
        vision: 'To professionalize the academic assistance market by creating a transparent, trustworthy, and efficient service platform.',
        status: 'LIVE',
        team: 'Sulthan Abdi Dzikry (Frontend Developer & Designer)',
        background: 'The academic service market is informal and prone to scams. Students lack a safe way to transact, and legitimate providers struggle to stand out from fraudsters.',
        strategicAlignment: 'Showcases the power of "Design for Trust" - using professional branding to solve market hesitation.',
        investmentRequired: '3 Weeks / 1 Designer-Developer',
        assumptions: '1. Students are willing to pay a premium for guaranteed safety.\n2. Visual professionalism is the strongest signal of legitimacy in this market.',
        productArchitecture: 'Single Page Application (SPA), React, TailwindCSS, WhatsApp API Integration',
        coreFeatures: [
            { name: 'Service Catalog', desc: 'Transparent pricing tiers to eliminate negotiation fatigue.' },
            { name: 'Direct Order Link', desc: 'WhatsApp API integration with pre-filled order templates.' },
            { name: 'Social Proof Section', desc: 'Curated testimonials to build immediate trust.' }
        ],
        designSystem: 'Youthful & Energetic. Vibrant color palette (Orange/Blue) to appeal to students, but with a structured grid to maintain professionalism.',
        designTools: ['Figma (Brand Identity)', 'Canva (Social Media Assets)', 'VS Code'],
        researchMethods: ['Social Media Sentiment Analysis', 'Competitor Observation (Instagram/Twitter)'],
        uxOverview: 'Conversion-focused landing page. Minimal clicks to "Order", with credibility signals (Reviews, Pricing) placed strategically along the scroll path.',
        translations: {
            id: {
                tagline: 'Profesionalisasi Layanan Bantuan Akademik.',
                description: 'Profil Perusahaan Profesional untuk layanan bantuan akademik.',
                problem: 'Mahasiswa yang mencari bantuan akademik menghadapi pasar yang penuh penipuan dan respons lambat, karena kurangnya platform terpusat yang terpercaya.',
                solution: 'Membangun situs web gaya "Profil Perusahaan" transparan yang memprofesionalkan layanan, menawarkan harga jelas, katalog layanan, dan testimoni untuk membangun kredibilitas.',
                impact: 'Membangun identitas merek profesional, secara signifikan meningkatkan kepercayaan pengguna dan menyederhanakan proses pertanyaan pesanan.',
                problemMap: [
                    { problem: 'Masalah Kepercayaan', context: 'Pasar penuh penipuan.', solution: 'Harga Transparan & Testimoni', mitigation: 'Bukti sosial dan katalog jelas membangun kredibilitas instan.' },
                    { problem: 'Pertanyaan Lambat', context: 'Ping pong WhatsApp manual.', solution: 'Alur Pesanan Terstruktur', mitigation: 'Tautan "Pesan Sekarang" langsung dengan pesan yang sudah diisi sebelumnya.' }
                ],
                stats: [
                    { label: 'Faktor Kepercayaan', value: 'Tinggi', description: 'Kehadiran web profesional vs kompetitor.' },
                    { label: 'Tingkat Pertanyaan', value: '+30%', description: 'Alur yang disederhanakan mengurangi keraguan.' }
                ],
                timeline: [
                    { phase: 'Branding', period: 'Minggu 1', activities: ['Desain Logo', 'Pemilihan Palet Warna'] },
                    { phase: 'Web Dev', period: 'Minggu 2-3', activities: ['Landing Page', 'Katalog Layanan', 'Optimasi Mobile'] }
                ],
                mitigationPlans: [
                    { risk: 'Penyalahgunaan Merek', action: 'Gambar portofolio diberi watermark dan pemberitahuan hak cipta ketat.' }
                ],
                personas: [
                    { role: 'Mahasiswa Stress', pain: 'Takut penipuan dan tenggat waktu terlewat.', goal: 'Bantuan andal dengan harga jelas dan penyelesaian cepat.' },
                    { role: 'Penyedia Layanan', pain: 'Menangani chat "berapa harganya?" yang berulang.', goal: 'Filter pertanyaan otomatis untuk fokus pada eksekusi.' }
                ],
                businessModel: [
                    { type: 'Arbitrase Layanan', value: 'Harga standar menghilangkan gesekan negosiasi, meningkatkan konversi.' },
                    { type: 'Branding Kepercayaan', value: 'Tampilan profesional memungkinkan margin lebih tinggi dibanding kompetitor umum.' }
                ],
                beforeAfter: [
                    { aspect: 'Proses Pesanan', before: 'Negosiasi WhatsApp yang kacau.', after: 'Katalog terstruktur dengan tingkatan harga jelas.' },
                    { aspect: 'Kredibilitas', before: 'Hanya akun anonim lain.', after: 'Merek profesional dengan ulasan yang dapat diverifikasi.' }
                ],
                // PRD ID
                vision: 'Memprofesionalkan pasar bantuan akademik dengan menciptakan platform layanan yang transparan, terpercaya, dan efisien.',
                status: 'LIVE',
                team: 'Sulthan Abdi Dzikry (Frontend Developer & Designer)',
                background: 'Pasar layanan akademik bersifat informal dan rentan penipuan. Mahasiswa tidak memiliki cara aman untuk bertransaksi.',
                strategicAlignment: 'Menunjukkan kekuatan "Design for Trust" - menggunakan branding profesional untuk mengatasi keraguan pasar.',
                investmentRequired: '3 Minggu / 1 Desainer-Developer',
                assumptions: '1. Mahasiswa bersedia membayar premium untuk jaminan keamanan.\n2. Profesionalisme visual adalah sinyal legitimasi terkuat di pasar ini.',
                productArchitecture: 'Single Page Application (SPA), React, TailwindCSS, Integrasi WhatsApp API',
                coreFeatures: [
                    { name: 'Katalog Layanan', desc: 'Tingkatan harga transparan untuk menghilangkan kelelahan negosiasi.' },
                    { name: 'Tautan Pesan Langsung', desc: 'Integrasi WhatsApp API dengan template pesanan pre-filled.' },
                    { name: 'Bagian Bukti Sosial', desc: 'Testimoni terkurasi untuk membangun kepercayaan instan.' }
                ],
                designSystem: 'Muda & Energik. Palet warna cerah (Oranye/Biru) untuk menarik mahasiswa, namun dengan grid terstruktur untuk menjaga profesionalisme.',
                designTools: ['Figma (Brand Identity)', 'Canva (Aset Sosmed)', 'VS Code'],
                researchMethods: ['Analisis Sentimen Media Sosial', 'Observasi Kompetitor (Instagram/Twitter)'],
                uxOverview: 'Landing page fokus konversi. Klik minimal untuk "Pesan", dengan sinyal kredibilitas ditempatkan strategis sepanjang alur scroll.'
            }
        }
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
        ],
        // New PRD Fields
        vision: 'To create a functional visual identification system that enhances event security and brand visibility in crowded spaces.',
        status: 'COMPLETED',
        team: 'Sulthan Abdi Dzikry (Graphic Designer)',
        background: 'At large events, staff members often blend in with attendees, causing confusion for guests seeking help and security risks. A clear visual distinction was needed.',
        strategicAlignment: 'Demonstrates understanding of "Functional Design" - prioritizing legibility and utility in physical product design.',
        investmentRequired: '3 Days / 1 Graphic Designer',
        assumptions: '1. Color coding is recognized faster than reading text labels in a crowd.\n2. Lanyards are the primary ID method visible at eye/chest level.',
        productArchitecture: 'Vector Graphics (CMYK Color Space), Dye-Sublimation Printing Specs',
        coreFeatures: [
            { name: 'Color Coding System', desc: 'Distinct colors for Staff, Partners, and Attendees.' },
            { name: 'Legible Typography', desc: 'Sans-serif fonts readable from 2 meters away.' },
            { name: 'Brand Pattern', desc: 'Repeatable pattern ensuring brand visibility even when lanyard twists.' }
        ],
        designSystem: 'High Contrast & Swiss Style. Prioritizing bold typography and distinct color blocks (Navy/White/Red) for instant recognition.',
        designTools: ['Adobe Illustrator (Vector Design)', 'Adobe Photoshop (Mockups)'],
        researchMethods: ['Visual Ergonomics Study (Reading distance in crowds)', 'Material Sampling'],
        uxOverview: 'Physical UX focus: ensuring the text remains visible regardless of how the lanyard hangs or twists.',
        translations: {
            id: {
                tagline: 'Desain Identitas: Dari Aset hingga Implementasi.',
                description: 'Proyek identitas visual komprehensif yang berfokus pada konsistensi branding acara di seluruh aset fisik.',
                problem: 'Merancang identitas acara yang kohesif memerlukan pemilihan aset dan teori warna yang cermat untuk memastikan keterbacaan dan pengenalan merek di berbagai materi cetak.',
                solution: 'Mengembangkan sistem desain terpadu mulai dari aset logo inti hingga aplikasi fisik (lanyard, kartu ID), memastikan kontras tinggi dan hierarki jelas.',
                impact: 'Menghadirkan sistem identitas profesional dan terukur yang menjaga integritas visual di berbagai media dan warna latar belakang.',
                problemMap: [
                    { problem: 'Visibilitas Kampus', context: 'Staf sulit dikenali.', solution: 'Warna Kontras Tinggi', mitigation: 'Kode warna berbeda untuk Staf vs Peserta.' }
                ],
                stats: [
                    { label: 'Visibilitas', value: 'Instan', description: 'Dapat dikenali dari jarak jauh.' }
                ],
                timeline: [
                    { phase: 'Desain', period: '3 Hari', activities: ['Konsep', 'Mockup', 'Persiapan Cetak'] }
                ],
                mitigationPlans: [
                    { risk: 'Kesalahan Cetak', action: 'Proofing CMYK dan cetak uji sebelum produksi massal.' }
                ],
                personas: [
                    { role: 'Penyelenggara Acara', pain: 'Staf berbaur dengan tamu.', goal: 'Staf yang jelas dapat dibedakan untuk keamanan dan logistik.' },
                    { role: 'Peserta', pain: 'Navigasi tempat yang membingungkan.', goal: 'Mudah melihat staf untuk bantuan.' }
                ],
                businessModel: [
                    { type: 'Visibilitas Merek', value: 'Desain kontras tinggi memastikan merek terlihat di setiap foto acara.' },
                    { type: 'Efisiensi Biaya', value: 'Desain berbasis vektor memungkinkan pencetakan skala besar tanpa kehilangan kualitas.' }
                ],
                beforeAfter: [
                    { aspect: 'ID Staf', before: 'Tanda pengenal generik sulit dilihat di keramaian.', after: 'Lanyard berkode warna tebal terlihat dari 20m.' },
                    { aspect: 'Identitas Visual', before: 'Pakaian tidak serasi.', after: 'Tampilan tim yang seragam dan profesional.' }
                ],
                // PRD ID
                vision: 'Menciptakan sistem identifikasi visual fungsional yang meningkatkan keamanan acara dan visibilitas merek di ruang ramai.',
                status: 'SELESAI',
                team: 'Sulthan Abdi Dzikry (Graphic Designer)',
                background: 'Di acara besar, anggota staf sering berbaur dengan peserta, menyebabkan kebingungan bagi tamu yang mencari bantuan dan risiko keamanan. Diperlukan perbedaan visual yang jelas.',
                strategicAlignment: 'Menunjukkan pemahaman tentang "Desain Fungsional" - memprioritaskan keterbacaan dan kegunaan dalam desain produk fisik.',
                investmentRequired: '3 Hari / 1 Desainer Grafis',
                assumptions: '1. Kode warna dikenali lebih cepat daripada membaca label teks di keramaian.\n2. Lanyard adalah metode ID utama yang terlihat setinggi mata/dada.',
                productArchitecture: 'Grafis Vektor (Ruang Warna CMYK), Spesifikasi Pencetakan Dye-Sublimation',
                coreFeatures: [
                    { name: 'Sistem Kode Warna', desc: 'Warna berbeda untuk Staf, Mitra, dan Peserta.' },
                    { name: 'Tipografi Terbaca', desc: 'Font sans-serif terbaca dari jarak 2 meter.' },
                    { name: 'Pola Merek', desc: 'Pola berulang memastikan visibilitas merek bahkan saat lanyard terpelintir.' }
                ],
                designSystem: 'Kontras Tinggi & Gaya Swiss. Memprioritaskan tipografi tebal dan blok warna berbeda (Navy/Putih/Merah) untuk pengenalan instan.',
                designTools: ['Adobe Illustrator (Desain Vektor)', 'Adobe Photoshop (Mockup)'],
                researchMethods: ['Studi Ergonomi Visual (Jarak baca di keramaian)', 'Sampling Material'],
                uxOverview: 'Fokus UX Fisik: memastikan teks tetap terlihat terlepas dari bagaimana lanyard menggantung atau terpelintir.'
            }
        }
    },
    {
        id: 'telkommerce',
        title: 'Telkommerce',
        category: 'Web Application',
        image: '/projects/telkommerce_new_thumb_v2.png',
        showcaseImages: [
            '/projects/telkommerce_new_thumb_v2.png',
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
        ],
        // New PRD Fields
        vision: 'To provide a robust, scalable e-commerce infrastructure that empowers data-driven retail management.',
        status: 'PROTOTYPE',
        team: 'Sulthan Abdi Dzikry (Frontend Developer)',
        background: 'Retailers often need custom solutions that blend public-facing storefronts with powerful back-end inventory management. Off-the-shelf tools can be too rigid.',
        strategicAlignment: 'Demonstrates capability in building "System-Heavy" applications with complex logic (Redux state management, Auth, CRUD).',
        investmentRequired: '2 Months / 1 Frontend Developer',
        assumptions: '1. Improving checkout speed directly correlates to higher conversion rates.\n2. Admins prefer desktop dashboards for bulk management tasks.',
        productArchitecture: 'React.js, Redux (Global State), Node.js (Mock API), JWT Authentication',
        coreFeatures: [
            { name: 'Redux State Management', desc: 'Seamless cart updates and persistent user sessions.' },
            { name: 'Admin Dashboard', desc: 'CRUD operations for Products and Users with visual charts.' },
            { name: 'Optimized Checkout', desc: '3-Step Wizard: Address -> Payment -> Confirm.' }
        ],
        designSystem: 'Clean & Informative. White-dominated UI for product clarity, with distinct sidebar navigation for the Admin panel.',
        designTools: ['Figma (Wireframe)', 'React Developer Tools'],
        researchMethods: ['Analysis of Top E-commerce Flows (Tokopedia/Shopee)', 'Performance Profiling'],
        uxOverview: 'Focus on "Frictionless Purchase" for users and "Data at a Glance" for admins.',
        translations: {
            id: {
                tagline: 'E-Commerce Skalabel dengan Backend Tangguh.',
                description: 'Platform e-commerce komprehensif dengan manajemen dasbor.',
                problem: 'Mengelola inventaris produk yang kompleks dan profil pengguna memerlukan antarmuka yang tangguh dan ramah pengguna untuk menangani volume transaksi tinggi.',
                solution: 'Membangun solusi e-commerce yang dapat diskalakan dengan dasbor admin khusus, pelacakan produk real-time, dan manajemen profil pengguna yang intuitif.',
                impact: 'Meningkatkan efisiensi operasional untuk manajemen produk dan meningkatkan pengalaman belanja pengguna dengan alur checkout 30% lebih cepat (Konseptual).',
                problemMap: [
                    { problem: 'Kekacauan Inventaris', context: 'Sulit melacak stok.', solution: 'Dasbor Real-time', mitigation: 'Pembaruan stok langsung.' },
                    { problem: 'Checkout Lambat', context: 'Keranjang ditinggalkan.', solution: 'Alur Teroptimasi', mitigation: 'Proses checkout 3-klik.' }
                ],
                stats: [
                    { label: 'Kecepatan Checkout', value: '+30%', description: 'Alur pengguna yang dioptimalkan.' },
                    { label: 'Manajemen', value: 'Mudah', description: 'Panel admin terpusat.' }
                ],
                timeline: [
                    { phase: 'Fase 1', period: 'Bulan 1', activities: ['Skema DB', 'API'] },
                    { phase: 'Fase 2', period: 'Bulan 2', activities: ['Frontend', 'Integrasi'] }
                ],
                mitigationPlans: [
                    { risk: 'Skalabilitas', action: 'Arsitektur modular memungkinkan perluasan fitur dengan mudah.' }
                ],
                personas: [
                    { role: 'Administrator Toko', pain: 'Menjual stok berlebih karena keterlambatan sinkronisasi.', goal: 'Tampilan inventaris real-time untuk mencegah masalah pemenuhan.' },
                    { role: 'Pembeli Mobile', pain: 'Proses checkout lambat/rumit.', goal: 'Beli dalam waktu kurang dari 30 detik.' }
                ],
                businessModel: [
                    { type: 'Perdagangan B2C', value: 'Checkout yang ramping bertujuan mengurangi pengabaian keranjang sebesar 15%.' },
                    { type: 'Optimasi Inventaris', value: 'Pelacakan real-time mencegah kerugian stok mati dan penjualan berlebih.' }
                ],
                beforeAfter: [
                    { aspect: 'Manajemen Stok', before: 'Tunggu rekonsiliasi malam hari.', after: 'Pembaruan langsung pada setiap transaksi.' },
                    { aspect: 'Alur Checkout', before: '5+ halaman (Drop-off tinggi).', after: 'Wizard checkout satu halaman.' }
                ],
                // PRD ID
                vision: 'Menyediakan infrastruktur e-commerce yang tangguh dan dapat diskalakan yang memberdayakan manajemen ritel berbasis data.',
                status: 'PROTOTIPE',
                team: 'Sulthan Abdi Dzikry (Frontend Developer)',
                background: 'Pengecer sering membutuhkan solusi khusus yang menggabungkan etalase publik dengan manajemen inventaris backend yang kuat. Alat siap pakai bisa terlalu kaku.',
                strategicAlignment: 'Menunjukkan kemampuan membangun aplikasi "Berat Sistem" dengan logika kompleks (Manajemen state Redux, Auth, CRUD).',
                investmentRequired: '2 Bulan / 1 Frontend Developer',
                assumptions: '1. Meningkatkan kecepatan checkout berkorelasi langsung dengan tingkat konversi yang lebih tinggi.\n2. Admin lebih menyukai dasbor desktop untuk tugas manajemen massal.',
                productArchitecture: 'React.js, Redux (Global State), Node.js (Mock API), Otentikasi JWT',
                coreFeatures: [
                    { name: 'Manajemen State Redux', desc: 'Pembaruan keranjang mulus dan sesi pengguna persisten.' },
                    { name: 'Dasbor Admin', desc: 'Operasi CRUD untuk Produk dan Pengguna dengan grafik visual.' },
                    { name: 'Checkout Teroptimasi', desc: 'Wizard 3-Langkah: Alamat -> Pembayaran -> Konfirmasi.' }
                ],
                designSystem: 'Bersih & Informatif. UI dominan putih untuk kejelasan produk, dengan navigasi sidebar yang jelas untuk panel Admin.',
                designTools: ['Figma (Wireframe)', 'React Developer Tools'],
                researchMethods: ['Analisis Alur E-commerce Teratas (Tokopedia/Shopee)', 'Profiling Performa'],
                uxOverview: 'Fokus pada "Pembelian Tanpa Hambatan" untuk pengguna dan "Data Sekilas Pandang" untuk admin.'
            }
        }
    },
    {
        id: 'jalan-app',
        title: 'Jalan',
        category: 'Mobile App',
        image: '/projects/jalan_new_thumb_v2.png',
        showcaseImages: [
            '/projects/jalan_new_thumb_v2.png',
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
        ],
        // New PRD Fields
        vision: 'To become the ultimate pocket companion that empowers travelers to explore with confidence and ease.',
        status: 'CONCEPT',
        team: 'Sulthan Abdi Dzikry (UI/UX Designer)',
        background: 'Travel planning is fragmented. Users juggle Google Maps, Notes, Booking sites, and Blogs. This app solves the "App Switching Fatigue" by unifying them.',
        strategicAlignment: 'Showcases Mobile-First Design Thinking and ability to create "Lifestyle" products.',
        investmentRequired: '2 Months / 1 Designer',
        assumptions: '1. Travelers prefer a visual itinerary over a text list.\n2. Offline access is a critical feature for travelers.',
        productArchitecture: 'Mobile App (Flutter/React Native Concept), Google Maps API',
        coreFeatures: [
            { name: 'Unified ItineraryBuilder', desc: 'Drag-and-drop interface to organize days.' },
            { name: 'Smart Map Exploration', desc: 'Discover nearby gems based on interests.' },
            { name: 'Social Travel', desc: 'Share itineraries with friends.' }
        ],
        designSystem: 'Adventure & Clarity. High-quality imagery for inspiration, paired with clean sans-serif typography for legibility on the go.',
        designTools: ['Figma (UI/UX)', 'Adobe Photoshop (Image Editing)'],
        researchMethods: ['Traveler Interviews (Backpackers vs Luxury)', 'User Journey Mapping'],
        uxOverview: 'Gesture-driven interface. Swipe to delete, Drag to reorder. Focus on one-handed use for travelers on the move.',
        translations: {
            id: {
                tagline: 'Panduan Perjalanan Saku Pribadi Anda.',
                description: 'Konsep aplikasi seluler untuk perencanaan perjalanan yang mulus.',
                problem: 'Wisatawan sering kesulitan mengatur jadwal perjalanan dan menemukan permata lokal dalam satu aplikasi terpadu, menyebabkan pengalaman perjalanan yang terfragmentasi.',
                solution: 'Merancang pengalaman seluler yang menggabungkan perencanaan perjalanan, penemuan destinasi, dan manajemen rencana perjalanan menjadi satu antarmuka yang kohesif.',
                impact: 'Menyederhanakan proses perencanaan perjalanan, mendorong perjalanan yang lebih spontan dan terorganisir dengan desain yang berpusat pada pengguna.',
                problemMap: [
                    { problem: 'Info Terfragmentasi', context: 'Ganti-ganti aplikasi untuk merencana.', solution: 'Aplikasi All-in-One', mitigation: 'Peta, panduan, dan pemesanan di satu tempat.' }
                ],
                stats: [
                    { label: 'Waktu Perencanaan', value: '-50%', description: 'Alat terpadu mempercepat riset.' }
                ],
                timeline: [
                    { phase: 'Riset UX', period: 'Minggu 1-2', activities: ['Wawancara Wisatawan', 'Pembuatan Persona'] },
                    { phase: 'Desain UI', period: 'Minggu 3-4', activities: ['Desain Visual', 'Interaksi'] }
                ],
                mitigationPlans: [
                    { risk: 'Pengguna Kewalahan', action: 'Antarmuka minimalis dengan pengungkapan bertahap.' }
                ],
                personas: [
                    { role: 'Si Perencana', pain: 'Menggunakan 5 aplikasi berbeda untuk satu perjalanan.', goal: 'Satu jadwal induk dengan peta dan pemesanan terlampir.' },
                    { role: 'Si Penjelajah', pain: 'Melewatkan permata lokal tersembunyi.', goal: 'Rekomendasi lokal terkurasi berdasarkan minat.' }
                ],
                businessModel: [
                    { type: 'Pendapatan Afiliasi', value: 'Monetisasi melalui integrasi pemesanan hotel/tur yang mulus.' },
                    { type: 'Wawasan Data', value: 'Data preferensi perjalanan agregat untuk mitra pariwisata.' }
                ],
                beforeAfter: [
                    { aspect: 'Perencanaan', before: 'Spreadsheet + Maps + Catatan.', after: 'Pembuat jadwal drag-and-drop terpadu.' },
                    { aspect: 'Penemuan', before: 'Pencarian Google acak.', after: 'Rekomendasi lokal terkurasi berbasis AI.' }
                ],
                // PRD ID
                vision: 'Menjadi teman saku utama yang memberdayakan wisatawan untuk menjelajah dengan percaya diri dan mudah.',
                status: 'KONSEP',
                team: 'Sulthan Abdi Dzikry (UI/UX Designer)',
                background: 'Perencanaan perjalanan terfragmentasi. Pengguna menyulap Google Maps, Catatan, Situs Booking, dan Blog. Aplikasi ini memecahkan "Kelelahan Ganti Aplikasi".',
                strategicAlignment: 'Menunjukkan Design Thinking Mobile-First dan kemampuan membuat produk "Gaya Hidup".',
                investmentRequired: '2 Bulan / 1 Desainer',
                assumptions: '1. Wisatawan lebih suka jadwal visual daripada daftar teks.\n2. Akses offline adalah fitur kritis bagi pelancong.',
                productArchitecture: 'Aplikasi Mobile (Konsep Flutter/React Native), Google Maps API',
                coreFeatures: [
                    { name: 'Pembuat Jadwal Terpadu', desc: 'Antarmuka drag-and-drop untuk mengatur hari.' },
                    { name: 'Eksplorasi Peta Cerdas', desc: 'Temukan permata terdekat berdasarkan minat.' },
                    { name: 'Travel Sosial', desc: 'Bagikan rencana perjalanan dengan teman.' }
                ],
                designSystem: 'Petualangan & Kejelasan. Citra berkualitas tinggi untuk inspirasi, dipadukan dengan tipografi sans-serif bersih untuk keterbacaan saat bepergian.',
                designTools: ['Figma (UI/UX)', 'Adobe Photoshop (Edit Gambar)'],
                researchMethods: ['Wawancara Wisatawan (Backpacker vs Mewah)', 'Pemetaan Perjalanan Pengguna'],
                uxOverview: 'Antarmuka berbasis gestur. Geser untuk hapus, Tarik untuk atur ulang. Fokus pada penggunaan satu tangan.'
            }
        }
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
        ],
        // New PRD Fields
        vision: 'To translate the olfactory experience of luxury perfume into an immersive digital sensory journey.',
        status: 'COMPLETED',
        team: 'Sulthan Abdi Dzikry (Web Designer)',
        background: 'Selling specialized fragrances online is challenging due to the inability to smell. The digital experience must compensate by evoking the mood and scent notes visually.',
        strategicAlignment: 'Demonstrates "Emotional Design" capabilities - using motion and aesthetics to convey intangible product qualities.',
        investmentRequired: '2 Weeks / 1 Web Designer',
        assumptions: '1. Visual storytelling can effectively substitute the lack of physical scent testing.\n2. Luxury consumers expect smooth, "heavy" feeling animations.',
        productArchitecture: 'Frontend Website (React), Framer Motion (Animations), WebGL Effects',
        coreFeatures: [
            { name: 'Parallax Storytelling', desc: 'Scroll-triggered animations that reveal scent notes.' },
            { name: 'Interactive Notes', desc: 'Hover effects explaining ingredients (Top, Middle, Base notes).' },
            { name: 'Mood Matching', desc: 'Visual "Personality" quiz to recommend perfumes.' }
        ],
        designSystem: 'Elegant & Minimalist. Serif typography (Playfair Display) for headlines, generous whitespace, and pastel/gold color accents.',
        designTools: ['Figma (UI Desgin)', 'After Effects (Motion Prototyping)'],
        researchMethods: ['Luxury Brand Benchmarking (Dior, Chanel)', 'Moodboarding'],
        uxOverview: 'Slow, deliberate scrolling experience. Unlike e-commerce which rushes checkout, this site encourages lingering and exploration.',
        translations: {
            id: {
                tagline: 'Aroma. Sensasi. Cerita.',
                description: 'Situs web profil perusahaan yang elegan untuk merek parfum premium.',
                problem: 'Merek membutuhkan kehadiran digital yang menonjolkan kemewahan dan daya tarik sensorik untuk membedakan diri di pasar yang kompetitif.',
                solution: 'Membuat situs web yang kaya secara visual, berfokus pada presentasi produk estetis, animasi gulir halus, dan penceritaan merek.',
                impact: 'Membangun identitas merek online yang kuat, menarik klien yang lebih canggih dan meningkatkan nilai persepsi merek.',
                problemMap: [
                    { problem: 'Kesan Umum', context: 'Template standar.', solution: 'Desain Khusus', mitigation: 'Animasi dan tipografi kustom.' }
                ],
                stats: [
                    { label: 'Nilai Merek', value: 'Premium', description: 'Persepsi visual yang ditingkatkan.' }
                ],
                timeline: [
                    { phase: 'Art Direction', period: 'Minggu 1', activities: ['Moodboarding', 'Pemilihan Aset'] },
                    { phase: 'Development', period: 'Minggu 2', activities: ['Animasi Frontend', 'Tata Letak Responsif'] }
                ],
                mitigationPlans: [
                    { risk: 'Loading Lambat', action: 'Aset gambar dioptimalkan dan lazy loading.' }
                ],
                personas: [
                    { role: 'Konsumen Mewah', pain: 'Belanja online generik terasa murah.', goal: 'Pengalaman digital imersif yang sesuai dengan harga produk.' },
                    { role: 'Manajer Merek', pain: 'Penceritaan merek tidak konsisten.', goal: 'Kontrol pixel-perfect atas bagaimana narasi merek terungkap.' }
                ],
                businessModel: [
                    { type: 'Ekuitas Merek D2C', value: 'Estetika yang ditingkatkan membenarkan strategi harga premium.' },
                    { type: 'Konversi Storytelling', value: 'Koneksi emosional meningkatkan probabilitas "Tambah ke Keranjang".' }
                ],
                beforeAfter: [
                    { aspect: 'Persepsi Merek', before: 'Hanya botol parfum lain.', after: 'Pengalaman sensorik emosional.' },
                    { aspect: 'Keterlibatan Pengguna', before: 'Gambar produk statis.', after: 'Scroll-telling interaktif dan desain gerak.' }
                ],
                // PRD ID
                vision: 'Menerjemahkan pengalaman penciuman parfum mewah menjadi perjalanan sensorik digital yang imersif.',
                status: 'SELESAI',
                team: 'Sulthan Abdi Dzikry (Web Designer)',
                background: 'Menjual wewangian khusus secara online menantang karena ketidakmampuan untuk mencium. Pengalaman digital harus mengimbanginya dengan membangkitkan suasana hati dan catatan aroma secara visual.',
                strategicAlignment: 'Menunjukkan kemampuan "Desain Emosional" - menggunakan gerakan dan estetika untuk menyampaikan kualitas produk yang tidak berwujud.',
                investmentRequired: '2 Minggu / 1 Desainer Web',
                assumptions: '1. Penceritaan visual dapat secara efektif menggantikan kurangnya pengujian aroma fisik.\n2. Konsumen mewah mengharapkan animasi yang halus dan terasa "berat".',
                productArchitecture: 'Frontend Website (React), Framer Motion (Animasi), Efek WebGL',
                coreFeatures: [
                    { name: 'Storytelling Parallax', desc: 'Animasi yang dipicu scroll yang mengungkapkan catatan aroma.' },
                    { name: 'Catatan Interaktif', desc: 'Efek hover yang menjelaskan bahan (Top, Middle, Base notes).' },
                    { name: 'Pencocokan Suasana', desc: 'Kuis "Kepribadian" visual untuk merekomendasikan parfum.' }
                ],
                designSystem: 'Elegan & Minimalis. Tipografi Serif (Playfair Display) untuk judul, ruang putih yang luas, dan aksen warna pastel/emas.',
                designTools: ['Figma (Desain UI)', 'After Effects (Prototyping Gerakan)'],
                researchMethods: ['Benchmarking Merek Mewah (Dior, Chanel)', 'Moodboarding'],
                uxOverview: 'Pengalaman menggulir yang lambat dan disengaja. Berbeda dengan e-commerce yang memburu checkout, situs ini mendorong untuk berlama-lama dan eksplorasi.'
            }
        }
    },

];
