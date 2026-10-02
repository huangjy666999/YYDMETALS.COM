import { Link } from 'react-router-dom'
import { Mail, Phone, Globe, ArrowRight } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div className="brand__mark">Y</div>
              <div className="brand__text">
                YYD METALS
                <small>FERROALLOYS & RESOURCES</small>
              </div>
            </div>
            <p>Global ferroalloys, metals, minerals, and industrial resources. Supply. Source. Process. Trade.</p>
          </div>

          <div className="footer__col">
            <h4>Products</h4>
            <Link to="/ferrosilicon">Ferrosilicon</Link>
            <Link to="/ferrophosphorus">Ferrophosphorus</Link>
            <Link to="/ferrochrome">Ferrochrome</Link>
            <Link to="/ferrosulfur">Ferrosulfur</Link>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <Link to="/about">About YYD</Link>
            <Link to="/sourcing">Global Sourcing</Link>
            <Link to="/production">Production</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer__col">
            <h4>Get in Touch</h4>
            <Link to="/contact" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><Mail size={15} /> Request a Quote</Link>
            <Link to="/submit-material" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}><ArrowRight size={15} /> Submit Your Material</Link>
            <span style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--steel-200)', fontSize: '0.9rem', padding: '4px 0' }}><Globe size={15} /> yydmetals.com</span>
            <span style={{ display: 'flex', gap: '8px', alignItems: 'center', color: 'var(--steel-200)', fontSize: '0.9rem', padding: '4px 0' }}><Phone size={15} /> +44 20 0000 0000</span>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} YYD METALS & MINERALS INDUSTRIES LTD. All rights reserved.</span>
          <span>Supply. Source. Process. Trade.</span>
        </div>
      </div>
    </footer>
  )
}
