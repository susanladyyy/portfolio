"use client"
import { projects } from '@/lib/data'
import React, { Fragment } from 'react'
import styles from '../styles/Styles.module.css'
import ProjectCard from './project'
import { useMenuInView } from '@/lib/hooks'
import { motion } from 'framer-motion'

export default function Project() {
    const { ref } = useMenuInView("Projects")

    return (
        <div ref={ref} id="projects"  className={`${styles.page_container} scroll-mt-[7rem] min-h-[100vh]`}>
            <motion.div className={styles.title_container}
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ type: 'tween', duration: 0.3}}>
                <span className={`${styles.title} dark:bg-black/[0.5]`}>Projects</span> 
            </motion.div>
            <div className='flex flex-wrap'>
                {
                    projects.map((project) => (
                        <Fragment key={project.id}>
                            <ProjectCard {...project}/>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}
