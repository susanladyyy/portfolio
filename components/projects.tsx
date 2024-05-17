import { projects } from '@/lib/data'
import React, { Fragment } from 'react'
import styles from '@/components/styles/Styles.module.css'
import ProjectCard from './project'

export default function Project() {
    return (
        <div id="projects"  className={`${styles.page_container} scroll-mt-[10rem]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Projects</span> 
            </div>
            <div className=''>
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
