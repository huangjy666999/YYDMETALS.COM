import { Link } from 'react-router-dom'
import { ArrowRight, Globe2, Ship, PackageSearch, Handshake } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { images } from '../lib/images'

const capabilities = [
  { icon: Globe2, title: 'Global Procurement', desc: 'A network of suppliers across 40+ countries, from mine sites to recyclers to industrial generators.' },
  { icon: PackageSearch, title: 'Material Evaluation', desc: 'On-site inspection, sampling, and laboratory analysis to confirm quality and value before purchase.' },
  { icon: Ship, title: 'International Logistics', desc: 'Container, bulk, and vessel shipping with full export documentation and customs management.' },
  { icon: Handshake, title: 'Supplier Partnerships', desc: 'Long-term relationships built on fair pricing, transparent terms, and reliable payment.' },
]

const regions = [
  'Europe', 'North America', 'South America', 'Africa',
  'Middle East', 'South Asia', 'East Asia', 'Southeast Asia',
]

export default function Sourcing() {
  return (
    <>
      <PageBanner
        bgImage={images.cargoShip}
        title="Global Sourcing"
        intro="A worldwide network for sourcing ferroalloys, metal scrap, and industrial resources."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Global Sourcing' }]}
      />

      <section className="section">
        <div className="container">
          <div className="eyebrow">Our Network</div>
          <h2 className="section-title">Sourcing Wherever Materials Are</h2>
          <p className="section-intro" style={{ marginBottom: '40px' }}>
            YYD METALS maintains a global sourcing network spanning mines, smelters, recyclers,
            industrial generators, and traders. We identify and secure materials where they are
            available and deliver them where they are needed.
          </p>

          <div className="card-grid card-grid--4">
            {capabilities.map(c => {
              const Icon = c.icon
              return (
                <div key={c.title} className="resource-card">
                  <div className="resource-card__icon"><Icon size={22} /></div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div className="feature-row">
            <div className="prose">
              <div className="eyebrow">Coverage</div>
              <h2 className="section-title">Regions We Source From</h2>
              <p>Our sourcing footprint covers major producing and generating regions worldwide.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '24px' }}>
                {regions.map(r => (
                  <span key={r} style={{
                    padding: '8px 18px', background: 'var(--charcoal-700)',
                    border: '1px solid var(--charcoal-500)', borderRadius: 'var(--radius-sm)',
                    fontSize: '0.9rem', color: 'var(--grey-100)', fontFamily: 'var(--font-display)',
                    letterSpacing: '0.05em',
                  }}>{r}</span>
                ))}
              </div>
            </div>
            <div className="feature-row__img" style={{ backgroundImage: `url(${images.portSunrise})` }} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">For Suppliers</div>
          <h2 className="section-title">Sell Your Material to YYD</h2>
          <p className="section-intro" style={{ marginBottom: '32px' }}>
            If you generate or hold metal-bearing material — scrap, residues, sludge, dross, or
            surplus alloy — we want to hear from you. Submit your material details through our
            supplier form and our sourcing team will evaluate your offer.
          </p>
          <Link to="/submit-material" className="btn btn--primary">Submit Your Material <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
