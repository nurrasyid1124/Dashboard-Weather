import ForecastItem from '../Forecastlem/Forecastlem'
import styles from './ForecastList.module.css'

function ForecastList({ prakiraan }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Prakiraan 5 Hari</h3>
      <div className={styles.list}>
        {prakiraan.map((item, index) => (
          <ForecastItem
            key={item.hari || index}
            hari={item.hari}
            ikon={item.ikon}
            kondisi={item.kondisi}
            suhu_min={item.suhu_min}
            suhu_max={item.suhu_max}
          />
        ))}
      </div>
    </div>
  )
}

export default ForecastList