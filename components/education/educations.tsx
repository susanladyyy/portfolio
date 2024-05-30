"use client"
import React, { Fragment } from 'react'
import styles from '@/components/styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import EducationElement from './education'

export default function Education() {
    const { ref } = useMenuInView("Education")

    return (
        <div ref={ref} id="education" className={`${styles.page_container} scroll-mt-[7rem] -mt-4`}>
            <div className={styles.title_container}>
                <span className={`${styles.title} dark:bg-black/[0.5]`}>Education</span> 
            </div>
            <div>
                <EducationElement />
            </div>
        </div>
    )
}
