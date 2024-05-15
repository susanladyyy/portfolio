import About from "@/components/about";
import Education from "@/components/education";
import Project from "@/components/projects";
import styles from '@/components/styles/Styles.module.css'

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
          <Project />
          <Education />
        </div>
      </div>
    </main>
  );
}
