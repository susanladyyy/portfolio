"use client"
import React from 'react'
import styles from './styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'

export default function Experience() {
    const { ref } = useMenuInView("Experience")

    return (
        <div ref={ref} id="experience" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Experience</span> 
            </div>
            <div className={styles.experience}>
                
            </div>
        </div>
    )
}
