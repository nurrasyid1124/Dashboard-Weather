import styles from './WeatherDetail.module.css'

function WeatherDetail({ kelembapan, kecepatan_angin, uv_index }) {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <span className={styles.label}>Kelembapan</span>
        <span className={styles.value}>{kelembapan}%</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>Kecepatan Angin</span>
        <span className={styles.value}>{kecepatan_angin} km/h</span>
      </div>
      <div className={styles.item}>
        <span className={styles.label}>UV Index</span>
        <span className={styles.value}>{uv_index}</span>
      </div>
    </div>
  )
}

export default WeatherDetail