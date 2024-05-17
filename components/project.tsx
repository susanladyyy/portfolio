"use client"
import { projects } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import styles from '@/components/styles/Styles.module.css'
import Image from 'next/image'

type ProjectProps = (typeof projects)[number]

export default function ProjectCard({
    id,
    title,
    brief,
    description,
    tags,
    image,
}: ProjectProps) {
    const ref = useRef<HTMLDivElement>(null)

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"] // starting point end point
    })
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]) // from start to end, the card is not starting from 0 scale
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.3, 1]) // from start to end, the card is not starting from 0 opacity

    return (
        <motion.div ref={ref} className={`${styles.project_card} group`}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <div className='w-1/2 group-even:ml-[12rem]'>
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
            <Image src={image} alt={title} quality={95} className={`${styles.project_image} group-hover:-translate-x-1 group-hover:translate-y-1 group-hover:-rotate-1 group-hover:scale-[1.05] group-even:-right-[initial] group-even:-left-52 group-even:group-hover:translate-x-1 group-even:group-hover:rotate-1 group-even:group-hover:translate-y-1`}/>
        </motion.div>
    )
}
