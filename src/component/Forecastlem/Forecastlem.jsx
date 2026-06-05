import styles from './Forecastlem.module.css'

function ForecastItem({ hari, ikon, kondisi, suhu_min, suhu_max }) {
  return (
    <div data-testid="forecast-item" className={styles.item}>
      <span className={styles.day}>{hari}</span>
      <span className={styles.icon}>{ikon}</span>
      <span className={styles.condition}>{kondisi}</span>
      <span className={styles.temps}>
        <span className={styles.tempMin}>{suhu_min}°C</span>
        <span className={styles.separator}>/</span>
        <span className={styles.tempMax}>{suhu_max}°C</span>
      </span>
    </div>
  )
}

export default ForecastItem