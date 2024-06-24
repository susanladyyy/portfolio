"use client"
import About from "@/components/about/about";
import Education from "@/components/education/educations";
import Project from "@/components/project/projects";
import styles from '@/components/styles/Styles.module.css'
import Skills from "@/components/skill/skills";
import Experience from "@/components/experience/experiences";
import Contact from "@/components/contact/contact";
import { motion } from "framer-motion";

export default function Home() {
  
  return (
    <main className={styles.main_container}>
      {/* <motion.div className={`${styles.left_container}`}
      initial={{ opacity: 0, scale: 0}}
      animate={{ opacity: 1, scale: 1}}
      transition={{ type: 'tween', duration: 0.3}}>
        <div className={`${styles.left_container_content} dark:bg-black/[0.5] dark:shadow-white/[0.1]`}>
          
        </div>
      </motion.div> */}
      <div className={styles.right_container}>
        <div className={styles.right_container_content}>
          <About />
          <Project />
          <Education />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </div>
    </main>
  );
}
