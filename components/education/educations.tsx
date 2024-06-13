"use client"
import React, { Fragment } from 'react'
import styles from '@/components/styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import EducationElement from './education'
import { motion } from 'framer-motion'

export default function Education() {
    const { ref } = useMenuInView("Education")

    return (
        <div ref={ref} id="education" className={`${styles.page_container} scroll-mt-[7rem] -mt-4 w-[85%]`}>
            <motion.div className={styles.title_container}
            initial={{ opacity: 0, scale: 0}}
            animate={{ opacity: 1, scale: 1}}
            transition={{ type: 'tween', duration: 0.3}}>
                <span className={`${styles.title} dark:bg-black/[0.5]`}>Education</span> 
            </motion.div>
            <div>
                <EducationElement />
            </div>
        </div>
    )
}
