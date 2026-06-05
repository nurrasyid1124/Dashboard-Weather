import { useNavigate } from 'react-router-dom'
import styles from './Noutfoundpage.module.css'

function NotFoundPage() {
  const navigate = useNavigate()

  return (
    <main className={styles.container}>
      <h1 className={styles.code}>404</h1>
      <p className={styles.message}>Halaman tidak ditemukan</p>
      <p className={styles.description}>
        URL yang Anda akses tidak tersedia atau sudah tidak berlaku.
      </p>
      <button
        className={styles.backButton}
        onClick={() => navigate('/')}
      >
        Kembali ke Beranda
      </button>
    </main>
  )
}

export default NotFoundPage