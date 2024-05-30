"use client"
import styles from '@/components/styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import 'react-vertical-timeline-component/style.min.css';
import ExperienceElement from './experience';

export default function Experience() {
    const { ref } = useMenuInView("Experience")

    return (
        <div ref={ref} id="experience" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem]`}>
            <div className={styles.title_container}>
                <span className={`${styles.title} dark:bg-black/[0.5]`}>Experience</span> 
            </div>
            <div>
                <ExperienceElement />
            </div>
        </div>
    )
}
