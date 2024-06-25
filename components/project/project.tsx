"use client"
import { projects } from '@/lib/data'
import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef } from 'react'
import styles from '../styles/Styles.module.css'
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
        <motion.div ref={ref} className={`${styles.project_card} group dark:bg-black/[0.5] dark:hover:bg-black/[0.7] cursor-pointer`}
            style={{
                scale: scaleProgress,
                opacity: opacityProgress,
            }}
        >
            <div className='flex justify-between items-center'>
                <div className='w-[70%]'>
                    <p className={`${styles.project_title} dark:text-white`}>{title}</p>
                    <p className={`${styles.project_description} dark:text-white/[0.8]`}>{brief}</p>
                </div>
                <div className='w-[20%]'>
                    <p className='font-bold'>Technology:</p>
                    <ul className={styles.project_tag_container}>
                        {
                            tags?.map((tag, index) => (
                                <li className={`${styles.project_tag} dark:bg-[#433c8f]`} key={index}>{tag}</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}
