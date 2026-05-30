import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import styles from './Navbar.module.css'

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav role="navigation" className={styles.navbar}>

      {/* Kiri: traffic lights + logo + app name */}
      <div className={styles.left}>
        <div className={styles.trafficLights}>
          <span className={`${styles.dot} ${styles.dotRed}`} title="Close" />
          <span className={`${styles.dot} ${styles.dotYellow}`} title="Minimize" />
          <span className={`${styles.dot} ${styles.dotGreen}`} title="Maximize" />
        </div>
        <div className={styles.brand}>
          <span className={styles.brandIcon}>🌤️</span>
          <span className={styles.brandName}>WeatherApp</span>
        </div>
      </div>

      {/* Tengah: nav links */}
      <div className={styles.center}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.linkIcon}>🏠</span>
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <span className={styles.linkIcon}>ℹ️</span>
          <span>About</span>
        </NavLink>
      </div>

      {/* Kanan: theme toggle */}
      <div className={styles.right}>
        <button
          className={styles.themeToggle}
          onClick={toggleTheme}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          aria-label="Toggle theme"
        >
          <span className={styles.themeIcon}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </span>
          <span className={styles.themeLabel}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </span>
        </button>
      </div>

    </nav>
  )
}

export default Navbar