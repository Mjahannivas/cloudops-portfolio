'use client'

import { motion } from 'framer-motion'
import { FC, JSX } from 'react'
import Image from 'next/image'
import { Timeline as TimelineComponent } from '@/components/ui/timeline'
import { FaCode, FaLaptopCode } from 'react-icons/fa'

export interface TimelineItem {
  id: number
  type: 'work'
  title: string
  company: string
  location: string
  date: string
  imageURL?: string
  description: string
  achievements: string[]
  icon: JSX.Element
  companyIcon: JSX.Element
}

export const timelineData: TimelineItem[] = [
  {
    id: 1,
    type: 'work',
    title: 'Cloud-Ops Engineer',
    company: 'Ellucian',
    location: 'Remote',
    imageURL: '/ellucian.png',
    date: 'Jul 2022 – Present',
    description: 'Leading cloud infrastructure and DevOps initiatives for multi-tenant SaaS applications on AWS.',
    achievements: [
      'Designed and deployed scalable AWS infrastructure including production-grade EKS clusters for multi-tenant SaaS environments',
      'Implemented Kubernetes auto-scaling to optimize resource utilization during variable production traffic',
      'Automated infrastructure provisioning using Terraform and CI/CD pipelines, reducing manual effort by 70%',
      'Built Docker images and Kubernetes manifests enabling zero-downtime rolling deployments',
      'Resolved P1 production incidents within SLA, reducing MTTR by 40% and maintaining 99.9% client satisfaction',
      'Provisioned and configured 20+ AWS client environments, accelerating onboarding and improving reliability'
    ],
    icon: <FaCode className="w-6 h-6 text-violet-500" />,
    companyIcon: <FaLaptopCode className="w-8 h-8 text-blue-500" />,
  },
  {
    id: 2,
    type: 'work',
    title: 'DevOps Engineer',
    company: 'Aximsoft',
    location: 'Coimbatore',
    imageURL: '/aximsoft.png',
    date: 'Jan 2021 – Jul 2022',
    description: 'Managed cloud infrastructure and automated deployments across enterprise environments.',
    achievements: [
      'Improved infrastructure uptime by 15% through AWS and IBM Cloud management',
      'Automated deployment workflows across 50+ servers, reducing downtime by 80%',
      'Implemented Prometheus-based monitoring, decreasing incident resolution time by 25%',
      'Deployed containerized applications using Docker and Kubernetes to improve scalability and consistency'
    ],
    icon: <FaCode className="w-6 h-6 text-violet-500" />,
    companyIcon: <FaLaptopCode className="w-8 h-8 text-violet-500" />,
  }
]

export const TimelineElement: FC<{ item: TimelineItem }> = ({ item }) => (
  <div className="space-y-6">
    <div className="flex items-center gap-4">
      {item.imageURL && (
        <Image src={item.imageURL} alt={`${item.company} Logo`} width={48} height={48} className="rounded-md shadow bg-muted p-1" />
      )}
      <div>
        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
        <p className="text-sm text-muted-foreground">{item.company} • {item.location}</p>
        <p className="text-sm text-muted-foreground">{item.date}</p>
      </div>
    </div>
    <p className="text-sm text-muted-foreground">{item.description}</p>
    <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
      {item.achievements.map((ach, idx) => <li key={idx}>{ach}</li>)}
    </ul>
  </div>
)

const Timeline: FC = () => {
  const timelineContent = timelineData.map((item) => ({
    title: item.date,
    content: <TimelineElement key={item.id} item={item} />
  }))

  return (
    <section id="experience" className="relative py-20 text-foreground transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent mb-4">
            Professional Experience
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highlights of my Cloud & DevOps journey.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative w-full"
        >
          <TimelineComponent data={timelineContent} />
        </motion.div>
      </div>
    </section>
  )
}

export default Timeline