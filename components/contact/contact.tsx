"use client"
import React from 'react'
import styles from '../styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'

export default function Contact() {
    const { ref } = useMenuInView("Contact")

    return (
        <div ref={ref} id="skills" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Contact</span> 
            </div>
            <div className={styles.contact}>
                
            </div>
        </div>
    )
}
