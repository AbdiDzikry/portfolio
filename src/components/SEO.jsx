import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({
    title,
    description,
    keywords,
    ogImage = '/profile/abdi.jpg',
    ogType = 'website',
    twitterCard = 'summary_large_image'
}) => {
    const { language } = useLanguage();

    const defaultTitle = language === 'id'
        ? 'Sulthan Abdi Dzikry - UI/UX Designer & Business Analyst'
        : 'Sulthan Abdi Dzikry - UI/UX Designer & Business Analyst';

    const defaultDescription = language === 'id'
        ? 'Portfolio profesional Sulthan Abdi Dzikry - UI/UX Designer dan Business Analyst dengan pengalaman di berbagai industri. Lihat proyek dan case study saya.'
        : 'Professional portfolio of Sulthan Abdi Dzikry - UI/UX Designer and Business Analyst with experience across various industries. View my projects and case studies.';

    const defaultKeywords = 'Sulthan Abdi Dzikry, UI/UX Designer, Business Analyst, Product Designer, Portfolio, Web Development, Figma, React, Case Studies';

    const siteUrl = 'https://sulthanabdi.vercel.app';
    const fullTitle = title ? `${title} | Sulthan Abdi Dzikry` : defaultTitle;
    const metaDescription = description || defaultDescription;
    const metaKeywords = keywords || defaultKeywords;
    const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

    return (
        <Helmet>
            {/* Primary Meta Tags */}
            <title>{fullTitle}</title>
            <meta name="title" content={fullTitle} />
            <meta name="description" content={metaDescription} />
            <meta name="keywords" content={metaKeywords} />
            <meta name="author" content="Sulthan Abdi Dzikry" />
            <link rel="canonical" href={siteUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={ogType} />
            <meta property="og:url" content={siteUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={metaDescription} />
            <meta property="og:image" content={ogImageUrl} />
            <meta property="og:site_name" content="Sulthan Abdi Dzikry Portfolio" />
            <meta property="og:locale" content={language === 'id' ? 'id_ID' : 'en_US'} />

            {/* Twitter */}
            <meta property="twitter:card" content={twitterCard} />
            <meta property="twitter:url" content={siteUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={metaDescription} />
            <meta property="twitter:image" content={ogImageUrl} />

            {/* Additional SEO */}
            <meta name="robots" content="index, follow" />
            <meta name="language" content={language === 'id' ? 'Indonesian' : 'English'} />
            <meta name="revisit-after" content="7 days" />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            {/* Structured Data - JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Person",
                    "name": "Sulthan Abdi Dzikry",
                    "url": siteUrl,
                    "image": ogImageUrl,
                    "jobTitle": "UI/UX Designer & Business Analyst",
                    "worksFor": {
                        "@type": "Organization",
                        "name": "Freelance"
                    },
                    "alumniOf": {
                        "@type": "EducationalOrganization",
                        "name": "Telkom University"
                    },
                    "sameAs": [
                        "https://www.linkedin.com/in/sulthan-abdi-dzikry/",
                        "https://github.com/AbdiDzikry"
                    ]
                })}
            </script>
        </Helmet>
    );
};

export default SEO;
