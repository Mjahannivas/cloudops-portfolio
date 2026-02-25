'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Award } from 'lucide-react'
import { useState, useMemo } from 'react'

const certificationsData = [
  {
    Image: "/ovi_test_certif.png",
    title: "AWS Solutions Architect Associate",
    description: "Validates ability to design and deploy scalable systems on AWS",
    issued: "2023",
    links: [
      { link_name: "Certificate", url: "https://www.credly.com/badges/example-aws" },
      { link_name: "Verify", url: "https://aws.amazon.com/verification" }
    ]
  },
  {
    Image: "/ovi_test_certif_2.png",
    title: "Certified Kubernetes Administrator (CKA)",
    description: "Demonstrates competency in Kubernetes administration, troubleshooting, and cluster operations",
    issued: "2023",
    links: [{ link_name: "Certificate", url: "https://www.credly.com/badges/example-cka" }]
  },
  {
    Image: "/ovi_test_certif_2.png",
    title: "Certified Kubernetes Administrator (CKA)",
    description: "Demonstrates competency in Kubernetes administration, troubleshooting, and cluster operations",
    issued: "2023",
    links: [{ link_name: "Certificate", url: "https://www.credly.com/badges/example-cka" }]
  },
  {
    Image: "/ovi_test_certif_2.png",
    title: "Certified Kubernetes Administrator (CKA)",
    description: "Demonstrates competency in Kubernetes administration, troubleshooting, and cluster operations",
    issued: "2023",
    links: [{ link_name: "Certificate", url: "https://www.credly.com/badges/example-cka" }]
  },
  {
    Image: "/ovi_test_certif_2.png",
    title: "Certified Kubernetes Administrator (CKA)",
    description: "Demonstrates competency in Kubernetes administration, troubleshooting, and cluster operations",
    issued: "2023",
    links: [{ link_name: "Certificate", url: "https://www.credly.com/badges/example-cka" }]
  }
]

interface Certification {
  Image: string
  title: string
  description: string
  issued: string
  links: { link_name: string; url: string }[]
}

const CertificationTile = ({ certification }: { certification: Certification }) => {
  return (
    <motion.div
      className="group relative bg-card border border-violet-500/20 rounded-lg overflow-hidden hover:shadow-xl hover:shadow-violet-500/10 transition-all duration-300 hover:-translate-y-2 h-full max-w-[200px] mx-auto"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div
        className="relative h-48 min-[650px]:h-40 md:h-38 bg-gray-50 group/image"
        style={{
          backgroundImage: certification.Image ? `url(${certification.Image})` : 'none',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {!certification.Image && (
          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-blue-500/10 flex items-center justify-center">
            <Award className="w-16 h-16 text-violet-500" />
          </div>
        )}
      </div>

      <div className="p-4 min-[650px]:p-3 md:p-3">
        <h3 className="text-lg min-[650px]:text-base md:text-base font-bold text-foreground mb-4 min-[650px]:mb-3 md:mb-3 line-clamp-2">
          {certification.title}
        </h3>
        <div className="flex flex-wrap gap-2 min-[650px]:gap-1 md:gap-1">
          {certification.links.map((link, index) => (
            <Badge
              key={index}
              asChild
              variant="default"
              className="gap-1 rounded-md cursor-pointer transition-all hover:scale-105 bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600"
            >
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-xs"
                onMouseEnter={(e) => e.currentTarget.closest('.group')?.classList.add('links-hovered')}
                onMouseLeave={(e) => e.currentTarget.closest('.group')?.classList.remove('links-hovered')}
              >
                <ExternalLink className="w-3 h-3" />
                {link.link_name}
              </a>
            </Badge>
          ))}
        </div>
      </div>

      <div className="absolute inset-0 bg-black/80 text-white p-6 flex items-center justify-center opacity-0 group-hover:opacity-100 group-[.links-hovered]:opacity-0 transition-opacity duration-300 rounded-lg pointer-events-none">
        <div className="text-center">
          <h4 className="font-semibold mb-2">{certification.title}</h4>
          <p className="text-sm text-gray-200">{certification.description}</p>
          {certification.issued && (
            <p className="text-xs text-gray-300 mt-2">Issued: {certification.issued}</p>
          )}
        </div>
      </div>

      <div className="absolute inset-0 border-2 border-violet-500/0 group-hover:border-violet-500/30 rounded-lg transition-all duration-300 pointer-events-none" />
    </motion.div>
  )
}

export function CertificationsSection() {
  const [showAll, setShowAll] = useState(false)
  const certificationsToDisplay = useMemo(() => certificationsData, [])
  const toggleShowAll = () => setShowAll(!showAll)

  return (
    <section id="certifications" className="relative w-full py-20 bg-background overflow-hidden">
      {/* Aurora Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
        <div
          className="absolute -top-20 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, #4f46e5 50%, transparent 70%)', animation: 'aurora2 15s ease-in-out infinite alternate' }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full opacity-12 blur-[90px]"
          style={{ background: 'radial-gradient(circle, #3b82f6 0%, #6366f1 50%, transparent 70%)', animation: 'aurora1 18s ease-in-out infinite alternate' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <style>{`
        @keyframes aurora1 {
          0% { transform: translate(0px,0px) scale(1); }
          50% { transform: translate(50px,-30px) scale(1.08); }
          100% { transform: translate(-30px,40px) scale(0.95); }
        }
        @keyframes aurora2 {
          0% { transform: translate(0px,0px) scale(1); }
          50% { transform: translate(-60px,40px) scale(1.1); }
          100% { transform: translate(30px,-20px) scale(0.92); }
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-4 mb-4">
              <Award className="h-8 w-8 text-violet-500" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent">
                Certifications
              </h1>
            </div>
            <p className="text-muted-foreground mt-2 max-w-3xl mx-auto text-base font-semibold md:text-lg italic">
              Industry-recognized credentials validating my expertise in cloud technologies and DevOps practices.
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 min-[425px]:grid-cols-2 min-[650px]:grid-cols-3 lg:grid-cols-4 gap-4">
            {certificationsToDisplay.map((certification, index) => {
              const isSecondCard = index === 1
              const isHiddenCard = index >= 2

              if (!showAll && isHiddenCard) {
                return (
                  <motion.div
                    key={certification.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="h-full max-[649px]:hidden"
                  >
                    <CertificationTile certification={certification} />
                  </motion.div>
                )
              }

              return (
                <div key={certification.title} className="relative h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`h-full ${!showAll && isSecondCard ? 'max-[649px]:blur-[3px] max-[649px]:pointer-events-none' : ''}`}
                  >
                    <CertificationTile certification={certification} />
                  </motion.div>
                  {!showAll && isSecondCard && (
                    <div className="absolute inset-0 max-[649px]:flex items-center justify-center z-10 min-[650px]:hidden">
                      <button
                        onClick={toggleShowAll}
                        className="px-4 py-2 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-full font-medium hover:from-violet-600 hover:to-blue-600 transition-all shadow-lg text-sm"
                      >
                        Show All ({certificationsData.length - 1})
                      </button>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {showAll && certificationsData.length > 2 && (
            <div className="max-[649px]:flex justify-center mt-8 min-[650px]:hidden">
              <button
                onClick={toggleShowAll}
                className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:from-violet-600 hover:to-blue-600 transition-all"
              >
                Show Less
              </button>
            </div>
          )}

          {certificationsData.length === 0 && (
            <motion.div className="text-center py-12" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
              <Award className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground text-lg">No certifications to display yet. Check back soon!</p>
            </motion.div>
          )}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-sm text-muted-foreground">
            Continuously learning and expanding my skill set with new certifications and technologies.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default CertificationsSection