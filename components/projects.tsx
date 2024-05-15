import { projects } from '@/lib/data'
import React, { Fragment } from 'react'
import styles from '@/components/styles/Styles.module.css'
import Image from 'next/image'
export default function Project() {
    return (
        <div className={styles.project_container}>
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
        <div className={styles.project_card}>
            <div className='w-1/2'>
                <p className={styles.project_title}>{title}</p>
                <p className={styles.project_description}>{description}</p>
                <ul className={styles.project_tag_container}>
                    {
                        tags?.map((tag, index) => (
                            <li className={styles.project_tag} key={index}>{tag}</li>
                        ))
                    }
                </ul>
            </div>
            <Image src={image} alt={title} quality={95} className={styles.project_image}/>
        </div>
    )
}
