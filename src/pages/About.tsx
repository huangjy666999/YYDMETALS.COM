import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Leaf } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { images } from '../lib/images'

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To be a trusted global bridge between material holders and industrial consumers — delivering quality, reliability, and fair value in every transaction.' },
  { icon: Eye, title: 'Our Vision', desc: 'A circular industrial economy where metal-bearing resources are recovered, reused, and returned to productive use with minimal waste.' },
  { icon: Leaf, title: 'Sustainability', desc: 'We prioritize the recovery and recycling of secondary materials, reducing the demand for primary extraction and lowering the environmental footprint of metallurgy.' },
]

const stats = [
  { num: '15+', label: 'Years in Trade' },
  { num: '40+', label: 'Countries' },
  { num: '500+', label: 'Suppliers' },
  { num: '4', label: 'Core Ferroalloys' },
]

export default function About() {
  return (
    <>
      <PageBanner
        bgImage={images.factoryFloor}
        title="About YYD"
        intro="YYD METALS & MINERALS INDUSTRIES LTD. — a global ferroalloys and metal resources company."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About YYD' }]}
      />

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div className="feature-row__img" style={{ backgroundImage: `url(${images.foundryWorkers})` }} />
            <div className="prose">
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title">YYD METALS & MINERALS INDUSTRIES LTD.</h2>
              <p>
                YYD METALS is a global ferroalloys, metals, minerals, metal scrap, and industrial
                resources company. We supply primary ferroalloys, source metal-bearing secondary
                materials, process them for industrial use, and trade them across international
                markets.
              </p>
              <p>
                Our approach is built on deep metallurgical knowledge, a broad supplier network,
                and a commitment to transparent, reliable commercial relationships. We serve
                steel mills, foundries, refineries, and smelters that depend on consistent
                material quality and dependable delivery.
              </p>
              <p>
                From our core ferroalloy range — ferrosilicon, ferrophosphorus, ferrochrome, and
                ferrosulfur — to the diverse resource categories we handle, YYD METALS is a
                single partner for sourcing, processing, and trading industrial materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div className="eyebrow">Principles</div>
          <h2 className="section-title">Mission, Vision & Sustainability</h2>
          <div className="card-grid card-grid--3" style={{ marginTop: '32px' }}>
            {values.map(v => {
              const Icon = v.icon
              return (
                <div key={v.title} className="resource-card">
                  <div className="resource-card__icon"><Icon size={22} /></div>
                  <h3>{v.title}</h3>
                  <p>{v.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-row">
            {stats.map(s => (
              <div key={s.label} className="stat">
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Partner with YYD METALS</h2>
            <p>Whether you need supply or have material to sell, we are ready to talk.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn--primary">Request a Quote <ArrowRight size={18} /></Link>
            <Link to="/submit-material" className="btn btn--outline">Submit Your Material</Link>
          </div>
        </div>
      </section>
    </>
  )
}
