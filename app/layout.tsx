import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rutik Ugale — Full-Stack Developer',
  description:
    'Junior Full-Stack Developer who ships AI-powered SaaS, solo. Building production products with Next.js, Node.js, Laravel, and AI APIs.',
  keywords: ['Rutik Ugale', 'Full-Stack Developer', 'Next.js', 'React', 'Laravel', 'AI SaaS', 'Mumbai Developer'],
  authors: [{ name: 'Rutik Ugale' }],
  openGraph: {
    title: 'Rutik Ugale — Full-Stack Developer',
    description: 'I ship full-stack AI SaaS — solo, end to end.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=JetBrains+Mono:ital,wght@0,400;0,500;0,700;1,400&family=Major+Mono+Display&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
