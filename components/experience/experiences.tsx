"use client"
import styles from '@/components/styles/Styles.module.css'
import { useMenuInView } from '@/lib/hooks'
import 'react-vertical-timeline-component/style.min.css';
import ExperienceElement from './experience';
import { motion } from 'framer-motion';

export default function Experience() {
    const { ref } = useMenuInView("Experience")

    return (
        <div className={styles.container}>
            <div ref={ref} id="experience" className={`${styles.page_container} scroll-mt-[7rem] mt-[2rem] w-[100%]`}>
                <motion.div className={styles.title_container}
                initial={{ opacity: 0, scale: 0}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ type: 'tween', duration: 0.3}}>
                    <span className={`${styles.title} dark:bg-black/[0.5]`}>Experience</span> 
                </motion.div>
                <div>
                    <ExperienceElement />
                </div>
            </div>
        </div>
    )
}
