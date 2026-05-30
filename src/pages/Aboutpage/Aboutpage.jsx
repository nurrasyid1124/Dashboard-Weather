import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Tentang Aplikasi</h1>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tujuan Aplikasi</h2>
        <p className={styles.text}>
          Weather Dashboard adalah aplikasi web multi-halaman yang menampilkan informasi cuaca statis
          untuk kota-kota di Indonesia. Aplikasi ini dibuat sebagai latihan praktis untuk mempelajari
          CSS Modules, React Router DOM v6, dynamic routes dengan useParams, dan pengelolaan data statis lokal.
        </p>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Tech Stack</h2>
        <ul className={styles.techList}>
          <li className={styles.techItem}>React</li>
          <li className={styles.techItem}>Vite</li>
          <li className={styles.techItem}>React Router DOM v6</li>
          <li className={styles.techItem}>CSS Modules</li>
          <li className={styles.techItem}>JavaScript/JSX</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Pembuat</h2>
        <p className={styles.text}>Dibuat oleh Developer Weather Dashboard</p>
      </section>
    </main>
  )
}

export default AboutPage