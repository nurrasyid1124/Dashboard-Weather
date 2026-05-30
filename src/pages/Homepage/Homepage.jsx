import { useNavigate } from 'react-router-dom'
import weatherData from '../../Data/WeatherData'
import CityCard from '../../components/CityCard/CityCard'
import styles from './HomePage.module.css'

function HomePage() {
  const navigate = useNavigate()

  return (
    <main className={styles.container}>
      <div className={styles.hero}>
        <h1 className={styles.title}>🌍 Weather Dashboard</h1>
        <p className={styles.subtitle}>
          Pilih kota untuk melihat informasi cuaca lengkap
        </p>
      </div>
      <div className={styles.row}>
        {Object.keys(weatherData).map((kota) => (
          <CityCard
            key={kota}
            kota={kota}
            data={weatherData[kota]}
            onClick={() => navigate(`/cuaca/${kota}`)}
          />
        ))}
      </div>
    </main>
  )
}

export default HomePage
