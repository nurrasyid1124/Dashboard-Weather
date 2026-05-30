import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";                                          
import weatherData from "../../data/weatherData";
import WeatherCard from "../../components/WeatherCard/WeatherCard"; (x2)
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Homepage/Homepage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import AboutPage from './pages/AboutPage/AboutPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cuaca/:kota" element={<DashboardPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App