import { Analytics } from '@vercel/analytics/next'
import Footer from '@/components/main/Footer'
import { Navbar } from '@/components/main/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { AnalyticsProvider } from '@/components/analytics/AnalyticsProvider'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.mjahannivas.xyz'),
  title: 'Jahannivas | Cloud-Ops Engineer | AWS • Kubernetes • DevOps',
  description:
    'Cloud-Ops Engineer at Ellucian specializing in AWS, Kubernetes, Terraform, CI/CD automation, and scalable SaaS infrastructure.',
  keywords: [
    'Jahannivas',
    'Cloud Ops Engineer',
    'DevOps Engineer',
    'AWS',
    'Kubernetes',
    'Terraform',
    'Docker',
    'CI/CD',
    'Infrastructure as Code',
    'Ellucian'
  ],
  authors: [{ name: 'Jahannivas' }],
  creator: 'Jahannivas',
  publisher: 'Jahannivas',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    url: 'https://portfolio.mjahannivas.xyz',
    title: 'Jahannivas | Cloud-Ops Engineer Portfolio',
    description:
      'Explore my DevOps and Cloud Engineering portfolio showcasing AWS, Kubernetes, Terraform, and production SaaS infrastructure.',
    siteName: 'Jahannivas Portfolio',
    images: [
      {
        url: '/profile-pic.jpg',
        width: 1200,
        height: 630,
        alt: 'Jahannivas - Cloud-Ops Engineer',
      },
    ],
  },
  alternates: {
    canonical: 'https://portfolio.mjahannivas.xyz',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Jahannivas',
    jobTitle: 'Cloud-Ops Engineer',
    description:
      'Cloud-Ops Engineer specializing in AWS, Kubernetes, Terraform, CI/CD automation and production-grade SaaS infrastructure.',
    url: 'https://portfolio.mjahannivas.xyz',
    image: 'https://portfolio.mjahannivas.xyz/profile-pic.jpg',
    sameAs: [
      'https://github.com/Mjahannivas',
      'https://www.linkedin.com/in/nivas-m/',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Ellucian',
    },
    knowsAbout: [
      'DevOps',
      'Cloud Engineering',
      'AWS',
      'Kubernetes',
      'Docker',
      'Terraform',
      'CI/CD',
      'Infrastructure Automation',
    ],
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnalyticsProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </AnalyticsProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}
