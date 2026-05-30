import styles from './CityCard.module.css'

function getGradientClass(kondisi) {
  const k = kondisi?.toLowerCase() || ''
  if (k.includes('cerah') && !k.includes('berawan')) return styles.gradCerah
  if (k.includes('berawan') || k.includes('cerah berawan')) return styles.gradBerawan
  if (k.includes('hujan')) return styles.gradHujan
  if (k.includes('panas') || k.includes('sangat panas')) return styles.gradPanas
  return styles.gradDefault
}

function CityCard({ kota, data, onClick }) {
  const besok = data.prakiraan?.[0]
  const gradClass = getGradientClass(data.kondisi)

  return (
    <div
      data-testid="city-card"
      className={`${styles.card} ${gradClass}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
    >
      {/* Header: nama kota + negara */}
      <div className={styles.header}>
        <div>
          <h2 className={styles.cityName}>{data.kota}</h2>
          <span className={styles.country}>{data.negara}</span>
        </div>
        <span className={styles.badge}>{data.kondisi}</span>
      </div>

      {/* Main: ikon besar + suhu */}
      <div className={styles.main}>
        <span className={styles.icon}>{data.ikon}</span>
        <div className={styles.tempBlock}>
          <span className={styles.temp}>{data.suhu}°</span>
          <span className={styles.unit}>C</span>
        </div>
      </div>

      {/* Detail row */}
      <div className={styles.details}>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>💧</span>
          <span>{data.kelembapan}%</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>💨</span>
          <span>{data.kecepatan_angin} km/h</span>
        </div>
        <div className={styles.detailItem}>
          <span className={styles.detailIcon}>🔆</span>
          <span>UV {data.uv_index}</span>
        </div>
      </div>

      {/* Prakiraan besok */}
      {besok && (
        <div className={styles.tomorrow}>
          <span className={styles.tomorrowLabel}>Besok</span>
          <div className={styles.tomorrowContent}>
            <span className={styles.tomorrowIcon}>{besok.ikon}</span>
            <span className={styles.tomorrowCondition}>{besok.kondisi}</span>
            <span className={styles.tomorrowTemps}>
              <span className={styles.tomorrowMin}>{besok.suhu_min}°</span>
              <span className={styles.tomorrowSep}>/</span>
              <span className={styles.tomorrowMax}>{besok.suhu_max}°</span>
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default CityCard