"use client"
import { projects } from '@/lib/data'
import React, { Fragment } from 'react'
import styles from '@/components/styles/Styles.module.css'
import ProjectCard from './project'
import { useMenuInView } from '@/lib/hooks'

export default function Project() {
    const { ref } = useMenuInView("Projects")

    return (
        <div ref={ref} id="projects"  className={`${styles.page_container} scroll-mt-[7rem] min-h-[100vh]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Projects</span> 
            </div>
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
