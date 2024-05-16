import { projects } from '@/lib/data'
import React, { Fragment } from 'react'
import styles from '@/components/styles/Styles.module.css'
import Image from 'next/image'
export default function Project() {
    return (
        <div id="projects"  className={`${styles.project_container} scroll-mt-2`}>
            {
                projects.map((project) => (
                    <Fragment key={project.id}>
                        <ProjectCard {...project}/>
                    </Fragment>
                ))
            }
        </div>
    )
}

type ProjectProps = (typeof projects)[number]

function ProjectCard({
    id,
    title,
    brief,
    description,
    tags,
    image,
}: ProjectProps) {
    return (
        <div className={`${styles.project_card} group`}>
            <div className='w-1/2 group-even:ml-[22rem]'>
                <p className={styles.project_title}>{title}</p>
                <p className={styles.project_description}>{brief}</p>
                <ul className={styles.project_tag_container}>
                    {
                        tags?.map((tag, index) => (
                            <li className={styles.project_tag} key={index}>{tag}</li>
                        ))
                    }
                </ul>
            </div>
            <Image src={image} alt={title} quality={95} className={`${styles.project_image} group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:-rotate-1 group-hover:scale-[1.05] group-even:-right-[initial] group-even:-left-96 group-even:group-hover:translate-x-1 group-even:group-hover:rotate-1 group-even:group-hover:translate-y-1`}/>
        </div>
    )
}
