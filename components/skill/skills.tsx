"use client"
import React from 'react'
import styles from '@/components/styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import { skills } from '@/lib/data'
import { motion } from 'framer-motion' 

const fadeInAnimationVariants = {
    initial: {
        opacity: 0,
        y: 100
    },
    animate: (index: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.05 * index
        }
    })
}

export default function Skills() {
    const { ref } = useMenuInView("Skills")

    return (
        <div className={styles.container}>
            <div ref={ref} id="skills" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem]`}>
                <motion.div className={styles.title_container}
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ type: 'tween', duration: 0.3}}>
                    <span className={`${styles.title} dark:bg-black/[0.5]`}>Skills</span> 
                </motion.div>
                <div className={styles.skills}>
                    <ul className='flex flex-wrap justify-center gap-3 text-lg text-gray-800 dark:text-white'>
                        {
                            skills.map((skill, index) => (
                                <motion.li 
                                variants={ fadeInAnimationVariants }
                                initial="initial"
                                whileInView="animate"
                                viewport={{
                                    once: true
                                }}
                                custom={index}
                                className='bg-gray-50/[0.5] border border-white py-2 px-3 rounded-lg dark:bg-black/[0.5]' key={index}>{ skill }</motion.li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
