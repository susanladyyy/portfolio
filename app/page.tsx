import About from "@/components/about/about";
import Education from "@/components/education/educations";
import Project from "@/components/project/projects";
import styles from '@/components/styles/Styles.module.css'
import Skills from "@/components/skill/skills";
import Experience from "@/components/experience/experiences";
import Contact from "@/components/contact/contact";
import Footer from "@/components/footer/footer";

export default function Home() {
  return (
    <main className={styles.main_container}>
      <div className={styles.left_container}>
        <div className={styles.left_container_content}>
          <About />
        </div>
      </div>
      <div className={styles.right_container}>
        <div className={styles.right_container_content}>
          <Education />
          <Skills />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </main>
  );
}
