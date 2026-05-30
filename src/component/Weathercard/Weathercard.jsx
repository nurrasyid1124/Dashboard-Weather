import styles from './WeatherCard.module.css'

function WeatherCard({ kota, suhu, kondisi, ikon }) {
  return (
    <div className={styles.card}>
      <h1 className={styles.cityName}>{kota !== undefined ? kota : 'N/A'}</h1>
      <div className={styles.main}>
        <span className={styles.icon}>{ikon !== undefined ? ikon : 'N/A'}</span>
        <span className={styles.temp}>{suhu !== undefined ? `${suhu}°C` : 'N/A'}</span>
      </div>
      <p className={styles.condition}>{kondisi !== undefined ? kondisi : 'N/A'}</p>
    </div>
  )
}

export default WeatherCard