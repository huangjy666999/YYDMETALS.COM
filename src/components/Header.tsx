import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const ferroalloyLinks = [
  { to: '/ferroalloys', label: 'Overview' },
  { to: '/ferrosilicon', label: 'Ferrosilicon' },
  { to: '/ferrophosphorus', label: 'Ferrophosphorus' },
  { to: '/ferrochrome', label: 'Ferrochrome' },
  { to: '/ferrosulfur', label: 'Ferrosulfur' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMobileOpen(false) }, [location.pathname])

  return (
    <>
      <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
        <div className="container header__inner">
          <Link to="/" className="brand">
            <div className="brand__mark">Y</div>
            <div className="brand__text">
              YYD METALS
              <small>FERROALLOYS & RESOURCES</small>
            </div>
          </Link>

          <nav className="nav">
            <NavLink to="/" end className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Home</NavLink>
            <div className="nav__dropdown">
              <span className="nav__dropdown-trigger">
                Ferroalloys <ChevronDown size={14} />
              </span>
              <div className="nav__dropdown-menu">
                {ferroalloyLinks.map(l => (
                  <Link key={l.to} to={l.to}>{l.label}</Link>
                ))}
              </div>
            </div>
            <NavLink to="/resources" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Metal Scrap & Resources</NavLink>
            <NavLink to="/production" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Production</NavLink>
            <NavLink to="/sourcing" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Global Sourcing</NavLink>
            <NavLink to="/about" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>About</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}>Contact</NavLink>
          </nav>

          <div className="header__cta">
            <Link to="/submit-material" className="btn btn--outline">Submit Your Material</Link>
            <Link to="/contact" className="btn btn--primary">Request a Quote</Link>
            <button className="mobile-toggle" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
              {mobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-menu">
          <Link to="/">Home</Link>
          <Link to="/ferroalloys">Ferroalloys Overview</Link>
          <Link to="/ferrosilicon">Ferrosilicon</Link>
          <Link to="/ferrophosphorus">Ferrophosphorus</Link>
          <Link to="/ferrochrome">Ferrochrome</Link>
          <Link to="/ferrosulfur">Ferrosulfur</Link>
          <Link to="/resources">Metal Scrap & Resources</Link>
          <Link to="/production">Production</Link>
          <Link to="/sourcing">Global Sourcing</Link>
          <Link to="/about">About YYD</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/submit-material" style={{ color: 'var(--accent)', marginTop: '16px' }}>Submit Your Material</Link>
        </div>
      )}
    </>
  )
}
