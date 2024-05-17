"use client"
import React from 'react'
import styles from './styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'

export default function Education() {
    const { ref } = useMenuInView("Education")

    return (
        <div ref={ref} id="education" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Education</span> 
            </div>
            <div className={styles.education}>
                
            </div>
        </div>
    )
}
