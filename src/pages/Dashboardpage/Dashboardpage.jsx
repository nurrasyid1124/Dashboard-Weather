import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import weatherData from '../../Data/WeatherData'
import WeatherCard from '../../components/WeatherCard/WeatherCard'
import WeatherDetail from '../../components/WeatherDetail/WeatherDetail'
import ForecastList from '../../components/ForecastList/ForecastList'
import styles from './DashboardPage.module.css'

function DashboardPage() {
  const { kota } = useParams()
  const navigate = useNavigate()
  const cityData = weatherData[kota]

  useEffect(() => {
    if (!cityData) {
      navigate('/not-found')
    }
  }, [kota, cityData, navigate])

  if (!cityData) {
    return null
  }

  return (
    <main className={styles.container}>
      <button
        className={styles.backButton}
        onClick={() => navigate('/')}
      >
        ← Kembali
      </button>
      <div className={styles.content}>
        <WeatherCard
          kota={cityData.kota}
          suhu={cityData.suhu}
          kondisi={cityData.kondisi}
          ikon={cityData.ikon}
        />
        <WeatherDetail
          kelembapan={cityData.kelembapan}
          kecepatan_angin={cityData.kecepatan_angin}
          uv_index={cityData.uv_index}
        />
        <ForecastList prakiraan={cityData.prakiraan} />
      </div>
    </main>
  )
}

export default DashboardPage