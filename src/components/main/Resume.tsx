'use client'

import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const ResumeSection = () => {
  return (
    <section
      id="resume"
      className="bg-background text-foreground px-6 py-24 flex flex-col items-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-blue-500 bg-clip-text text-transparent tracking-tight mb-4">
          My Resume
        </h2>

        <p className="text-lg text-muted-foreground max-w-2xl">
          View my professional qualifications and experience as a DevOps and Cloud Engineer.
        </p>
      </motion.div>

      <motion.a
        href="/resume.pdf"
        target="_blank"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex items-center gap-3 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-medium shadow-lg hover:shadow-xl transition-all text-lg"
      >
        <FaDownload />
        Download Resume
      </motion.a>
    </section>
  )
}

export default ResumeSection
