'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Skill, skills } from '@/constants'
import SkillDataProvider from '../sub/SkillDataProvider'

const uniqueSkills: Skill[] = Array.from(
  skills
    .reduce((map, skill) => {
      if (!map.has(skill.skill_name)) {
        map.set(skill.skill_name, { ...skill, width: 40, height: 40 })
      }
      return map
    }, new Map<string, Skill>())
    .values(),
)

const Skills = () => {
  const [showAll, setShowAll] = useState(false)
  const [maxItemsToShow, setMaxItemsToShow] = useState(12)

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth > 768) setMaxItemsToShow(12)
        else if (window.innerWidth <= 768 && window.innerWidth > 425) setMaxItemsToShow(8)
        else setMaxItemsToShow(6)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const skillsToShow = showAll ? uniqueSkills : uniqueSkills.slice(0, maxItemsToShow)

  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-12 py-20 px-4 sm:px-8 min-h-[600px]"
      aria-labelledby="skills-heading"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl relative z-10"
      >
        <h2
          id="skills-heading"
          title="Technical Skills"
          className="text-4xl sm:text-5xl font-bold tracking-tight bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 bg-clip-text text-transparent mb-4"
        >
          Technical Skills
        </h2>
        <p className="text-lg text-muted-foreground font-medium">
          A curated selection of my expertise in DevOps and Cloud Computing
        </p>
      </motion.div>

      <div className="w-full max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
        >
          {skillsToShow.map((skill, index) => (
            <motion.div
              key={skill.skill_name}
              title={skill.skill_name}
              className="group relative flex flex-col items-center p-4 rounded-xl bg-card/60 backdrop-blur-sm border border-violet-500/20 hover:border-violet-500/50 hover:bg-card/80 transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-violet-500/20 hover:shadow-xl"
              role="listitem"
              aria-label={skill.skill_name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-violet-500/10 via-blue-500/5 to-transparent blur-sm" />
              <div className="relative flex flex-col items-center gap-3 z-10">
                <SkillDataProvider
                  src={skill.Image}
                  width={32}
                  height={32}
                  index={index}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span className="text-xs font-medium text-foreground text-center leading-tight line-clamp-2">
                  {skill.skill_name}
                </span>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-violet-500/0 group-hover:border-violet-500/30 transition-all duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {uniqueSkills.length > maxItemsToShow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <button
              title={showAll ? 'Show Less Skills' : `Show All Skills`}
              onClick={() => setShowAll(!showAll)}
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-violet-500/25 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="relative z-10">
                {showAll ? 'Show Less' : `Show All (${uniqueSkills.length})`}
              </div>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </button>
          </motion.div>
        )}

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center text-base text-muted-foreground"
        >
          …and plenty more technologies I'm exploring & mastering every day.
        </motion.p>
      </div>
    </section>
  )
}

export default Skills