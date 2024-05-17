import React from 'react'
import { educations } from '@/lib/data'
import styles from './styles/Styles.module.css'
import Image from 'next/image'

export default function Education() {
    return (
        <div id="education" className={`${styles.page_container} mt-[3rem]`}>
            <div className={styles.title_container}>
                <span className={styles.title}>Education</span> 
            </div>
            <div className={styles.education}>
                
            </div>
        </div>
    )
}
