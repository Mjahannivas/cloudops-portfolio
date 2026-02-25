'use client'

import { motion } from 'framer-motion'
import { FaDownload } from 'react-icons/fa'

const ResumeSection = () => {
  return (
    <section id="resume" className="relative py-24 px-6 flex flex-col items-center text-foreground">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent tracking-tight mb-4">
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
        className="relative z-10 inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white font-semibold shadow-lg hover:shadow-violet-500/25 hover:shadow-xl transition-all text-lg"
      >
        <FaDownload />
        Download Resume
      </motion.a>
    </section>
  )
}

export default ResumeSection