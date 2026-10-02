import { Link } from 'react-router-dom'
import { Mail, ArrowRight } from 'lucide-react'
import { SocialLinks } from './SocialLinks'

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
                <small>FERROALLOYS &amp; RESOURCES</small>
              </div>
            </div>
            <p>
              Global metals, minerals and ferroalloys. Production, processing, sourcing and supply
              of alloys, metal products and secondary resources.
            </p>
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
            <Link to="/contact" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <Mail size={15} /> Request a Quote
            </Link>
            <Link to="/submit-material" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ArrowRight size={15} /> Submit Your Material
            </Link>
            <Link to="/contact" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <ArrowRight size={15} /> Online Inquiry
            </Link>
          </div>
        </div>

        {/* Social / messaging channels */}
        <div style={{
          borderTop: '1px solid var(--charcoal-600)',
          paddingTop: '28px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '24px',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
        }}>
          <div>
            <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '14px' }}>
              Connect with Us
            </h4>
            <SocialLinks />
          </div>
          <div style={{ textAlign: 'right' }}>
            <p style={{ color: 'var(--steel-300)', fontSize: '0.85rem', marginBottom: '10px' }}>
              Looking for a quote or technical support?
            </p>
            <Link to="/contact" className="btn btn--primary" style={{ padding: '10px 20px', fontSize: '0.8rem' }}>
              Contact Us <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} YYD METALS &amp; MINERALS INDUSTRIES LTD. All rights reserved.</span>
          <span>Metals, Minerals, Alloys &amp; Metallurgical Solutions.</span>
        </div>
      </div>
    </footer>
  )
}
