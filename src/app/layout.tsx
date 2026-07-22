import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Outfit, Lora } from 'next/font/google';
import './globals.css';

// ─── Fonts (zero FOUT, subsetting only Latin characters) ─────────────────────
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
  weight: ['400', '600', '700', '800'],
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
  style: ['normal', 'italic'],
});

// ─── Site constants ───────────────────────────────────────────────────────────
const SITE_URL = 'https://thewebagency.io';
const SITE_NAME = 'ThewebAgency';
const SITE_DESCRIPTION =
  "Sri Lanka's leading digital agency — building world-class websites, mobile apps, and digital experiences for startups, enterprises, and international brands.";
const OG_IMAGE = `${SITE_URL}/Frame 5.webp`;

// ─── Metadata (SEO + Open Graph + Twitter + GEO) ─────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Building Digital Experiences That Matter`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'web agency Sri Lanka',
    'digital agency Colombo',
    'website design Sri Lanka',
    'web development agency',
    'mobile app development',
    'UI UX design agency',
    'Next.js agency',
    'React development',
    'ThewebAgency',
    'digital transformation',
    'startup website design',
    'enterprise web development',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,

  // Canonical & alternates (hreflang for international reach)
  alternates: {
    canonical: SITE_URL,
    languages: {
      'en': SITE_URL,
      'en-US': SITE_URL,
      'en-GB': SITE_URL,
      'en-AE': SITE_URL,
      'en-LK': SITE_URL,
    },
  },

  // Open Graph
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['en_GB', 'en_AE', 'en_LK'],
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Building Digital Experiences That Matter`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Digital Agency`,
      },
    ],
  },

  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Building Digital Experiences That Matter`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
    creator: '@thewebagency',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Favicon / Icons
  icons: {
    icon: [
      { url: '/Frame 5.webp', type: 'image/webp' },
    ],
    apple: '/Frame 5.webp',
    shortcut: '/Frame 5.webp',
  },

  // Web App Manifest
  manifest: '/manifest.webmanifest',

  // Verification placeholders (add real tokens when deploying)
  verification: {
    google: '',
  },

  // App info
  applicationName: SITE_NAME,
  category: 'technology',
};

// ─── Viewport ─────────────────────────────────────────────────────────────────
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#00b1f8',
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    // LocalBusiness — helps Google surface the agency for local queries
    {
      '@type': 'LocalBusiness',
      '@id': `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/Nav Logo.webp`,
      image: OG_IMAGE,
      description: SITE_DESCRIPTION,
      telephone: '',
      email: 'hello@thewebagency.io',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Colombo',
        addressRegion: 'Western Province',
        addressCountry: 'LK',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 6.9271,
        longitude: 79.8612,
      },
      areaServed: [
        { '@type': 'Country', name: 'Sri Lanka' },
        { '@type': 'Country', name: 'United States' },
        { '@type': 'Country', name: 'United Kingdom' },
        { '@type': 'Country', name: 'United Arab Emirates' },
        { '@type': 'Country', name: 'Sweden' },
      ],
      priceRange: '$$',
      openingHours: 'Mo-Fr 09:00-18:00',
      sameAs: [
        'https://www.linkedin.com/company/thewebagency',
        'https://www.instagram.com/thewebagency',
      ],
    },
    // WebSite — enables sitelinks searchbox in Google
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { '@id': `${SITE_URL}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${SITE_URL}/?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    },
    // ProfessionalService — signals service-type business category
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#service`,
      name: SITE_NAME,
      serviceType: [
        'Web Design',
        'Web Development',
        'Mobile App Development',
        'UI/UX Design',
        'Digital Marketing',
        'SEO Services',
      ],
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'Worldwide',
    },
  ],
};

// ─── Root Layout ─────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} ${outfit.variable} ${lora.variable}`}
    >
      <head>
        {/* GEO meta tags for local SEO */}
        <meta name="geo.region" content="LK-11" />
        <meta name="geo.placename" content="Colombo, Sri Lanka" />
        <meta name="geo.position" content="6.9271;79.8612" />
        <meta name="ICBM" content="6.9271, 79.8612" />

        {/* Language & content signals */}
        <meta httpEquiv="content-language" content="en" />
        <meta name="language" content="English" />
        <meta name="rating" content="general" />

        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//dl.dropboxusercontent.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
