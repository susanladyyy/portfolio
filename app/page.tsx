import About from "@/components/about";
import Education from "@/components/education";
import styles from '@/components/styles/Styles.module.css'

export default function Home() {
  return (
    <main className={styles.main_container}>
      <div className={styles.left_container}>
        <About />
      </div>
      <div className={styles.right_container}>
        <Education />
      </div>
    </main>
  );
}
