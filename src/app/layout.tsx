import { Analytics } from '@vercel/analytics/next';
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Jahannivas - DevOps & Cloud Engineer Portfolio | AWS, Kubernetes, Docker',
  description:
    'Experienced DevOps and Cloud Engineer specializing in AWS, Kubernetes, Docker, and CI/CD. View my portfolio showcasing cloud infrastructure projects, automation solutions, and scalable deployments.',
  keywords: [
    'devops portfolio',
    'cloud engineer portfolio',
    'devops engineer',
    'cloud engineer',
    'Jahannivas',
    'Jahannivas portfolio',
    'portfolio website',
    'aws devops',
    'kubernetes engineer',
    'docker specialist',
    'ci cd pipeline',
    'infrastructure automation',
    'cloud architecture',
    'terraform',
    'ansible',
    'jenkins'
  ],
  authors: [{ name: 'Jahannivas' }],
  creator: 'Jahannivas',
  publisher: 'Jahannivas',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://Jahannivas.vercel.app',
    title: 'Jahannivas - DevOps & Cloud Engineer Portfolio',
    description: 'Experienced DevOps and Cloud Engineer specializing in AWS, Kubernetes, Docker, and CI/CD. View my portfolio showcasing cloud infrastructure projects.',
    siteName: 'Jahannivas Portfolio',
    images: [
      {
        url: '/profile-pic.png',
        width: 1200,
        height: 630,
        alt: 'Jahannivas - DevOps & Cloud Engineer',
      },
    ],
  },
  alternates: {
    canonical: 'https://Jahannivas.vercel.app',
  },
  verification: {
    google: 'wUvigUYIHyBvrQMmeBFTg5ixr4HDAdPcPPlyPJSzmc0',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jahannivas',
    jobTitle: 'DevOps & Cloud Engineer',
    description: 'Experienced DevOps and Cloud Engineer specializing in AWS, Kubernetes, Docker, and CI/CD automation',
    url: 'https://Jahannivas.vercel.app',
    image: 'https://Jahannivas.vercel.app/profile-pic.jpg',
    sameAs: [
      'https://github.com/Mjahannivas',
      'https://linkedin.com/in/nivas-m',
    ],
    knowsAbout: [
      'DevOps', 'Cloud Engineering', 'AWS', 'Kubernetes', 'Docker',
      'CI/CD', 'Infrastructure as Code', 'Terraform', 'Ansible',
      'Jenkins', 'Monitoring', 'Automation'
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Elevate Labs'
    }
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://Jahannivas.vercel.app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#7c3aed" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#4f46e5" media="(prefers-color-scheme: dark)" />
        <meta name="color-scheme" content="light dark" />

        {/* Global Aurora Keyframes */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes gAurora1 {
            0%   { transform: translate(0px, 0px) scale(1); }
            33%  { transform: translate(80px, -60px) scale(1.1); }
            66%  { transform: translate(-40px, 80px) scale(0.93); }
            100% { transform: translate(50px, 30px) scale(1.06); }
          }
          @keyframes gAurora2 {
            0%   { transform: translate(0px, 0px) scale(1); }
            33%  { transform: translate(-100px, 70px) scale(1.12); }
            66%  { transform: translate(60px, -50px) scale(0.9); }
            100% { transform: translate(-30px, 80px) scale(1.08); }
          }
          @keyframes gAurora3 {
            0%   { transform: translate(0px, 0px) scale(1); }
            50%  { transform: translate(90px, -80px) scale(1.15); }
            100% { transform: translate(-50px, 40px) scale(0.94); }
          }
          @keyframes gAurora4 {
            0%   { transform: translate(0px, 0px) scale(1); }
            40%  { transform: translate(-80px, -70px) scale(1.1); }
            100% { transform: translate(60px, 60px) scale(0.92); }
          }
          @keyframes gAurora5 {
            0%   { transform: translateX(-50%) rotate(0deg) scaleX(1); }
            50%  { transform: translateX(-50%) rotate(10deg) scaleX(1.25); }
            100% { transform: translateX(-50%) rotate(-6deg) scaleX(0.88); }
          }
        ` }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>

            {/* ── GLOBAL AURORA BACKGROUND ── covers the entire page with no patches ── */}
            <div
              className="fixed inset-0 -z-50 overflow-hidden pointer-events-none"
              aria-hidden="true"
            >
              {/* Base background */}
              <div className="absolute inset-0 bg-background" />

              {/* Orb 1 — violet, top-left, slow */}
              <div
                className="absolute -top-60 -left-60 w-[900px] h-[900px] rounded-full opacity-[0.18] blur-[140px]"
                style={{
                  background: 'radial-gradient(circle, #7c3aed 0%, #4f46e5 40%, transparent 70%)',
                  animation: 'gAurora1 18s ease-in-out infinite alternate',
                }}
              />

              {/* Orb 2 — blue, top-right, medium */}
              <div
                className="absolute -top-40 -right-60 w-[800px] h-[800px] rounded-full opacity-[0.15] blur-[130px]"
                style={{
                  background: 'radial-gradient(circle, #3b82f6 0%, #6366f1 50%, transparent 70%)',
                  animation: 'gAurora2 22s ease-in-out infinite alternate',
                }}
              />

              {/* Orb 3 — purple, mid-left */}
              <div
                className="absolute top-[40%] -left-40 w-[700px] h-[700px] rounded-full opacity-[0.12] blur-[120px]"
                style={{
                  background: 'radial-gradient(circle, #8b5cf6 0%, #3b82f6 50%, transparent 70%)',
                  animation: 'gAurora3 26s ease-in-out infinite alternate',
                }}
              />

              {/* Orb 4 — indigo, bottom-right */}
              <div
                className="absolute bottom-0 -right-40 w-[700px] h-[700px] rounded-full opacity-[0.13] blur-[120px]"
                style={{
                  background: 'radial-gradient(circle, #4f46e5 0%, #7c3aed 50%, transparent 70%)',
                  animation: 'gAurora4 30s ease-in-out infinite alternate',
                }}
              />

              {/* Orb 5 — center shimmer band */}
              <div
                className="absolute top-[55%] left-1/2 w-[1000px] h-[350px] rounded-full opacity-[0.07] blur-[100px]"
                style={{
                  background: 'linear-gradient(90deg, #7c3aed, #3b82f6, #8b5cf6)',
                  animation: 'gAurora5 14s ease-in-out infinite alternate',
                }}
              />

              {/* Global subtle grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>
            {/* ── END GLOBAL AURORA ── */}

            <Navbar />
            <main role="main">
              {children}
            </main>
            <Footer />

          </AnalyticsProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}