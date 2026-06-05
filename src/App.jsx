import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/Themecontext'
import Navbar from './component/Navbar/Navbar'
import HomePage from './pages/Homepage/Homepage'
import DashboardPage from './pages/Dashboardpage/Dashboardpage'
import AboutPage from './pages/Aboutpage/Aboutpage'
import NotFoundPage from './pages/Noutfoundpage/Noutfoundpage'

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