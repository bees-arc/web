import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'ThewebAgency — Building Digital Experiences That Matter',
    short_name: 'ThewebAgency',
    description:
      "Sri Lanka's leading digital agency building world-class websites and apps.",
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#00b1f8',
    orientation: 'portrait-primary',
    icons: [
      {
        src: '/Frame 5.webp',
        sizes: 'any',
        type: 'image/webp',
        purpose: 'any maskable',
      },
    ],
    categories: ['business', 'productivity', 'utilities'],
  };
}
