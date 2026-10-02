import { Link } from 'react-router-dom'
import { ArrowRight, Recycle, Globe2, Factory, ShieldCheck } from 'lucide-react'
import { images } from '../lib/images'

const products = [
  { name: 'Ferrosilicon', to: '/ferrosilicon', img: images.ferrosilicon, desc: 'Alloy of iron and silicon for deoxidation and alloying in steel and cast iron production.' },
  { name: 'Ferrophosphorus', to: '/ferrophosphorus', img: images.ferrophosphorus1, desc: 'Phosphorus-iron alloy used in metallurgical processes and specialty casting.' },
  { name: 'Ferrochrome', to: '/ferrochrome', img: images.ferrochrome, desc: 'Essential chromium-iron alloy for stainless and specialty steel manufacturing.' },
  { name: 'Ferrosulfur', to: '/ferrosulfur', img: images.ferrosulfur1, desc: 'Sulfur-iron alloy for free-machining steels and targeted alloying applications.' },
]

const resourceCategories = [
  'Copper-bearing materials',
  'Nickel-bearing materials',
  'Cobalt-bearing materials',
  'Tin-bearing materials',
  'Tungsten-bearing materials',
  'Lead & Antimony materials',
  'Metal-bearing sludge',
  'Industrial residues',
]

const materials = [
  { img: images.scrapSiliconWafers, title: 'Silicon Wafer Scrap', desc: 'Silicon-rich scrap from wafer and photovoltaic production streams.' },
  { img: images.ferroalloyBriquettes, title: 'Ferroalloy Briquettes', desc: 'Pressed briquettes for controlled charging into furnaces and ladles.' },
  { img: images.copperNickelSludge, title: 'Copper-Nickel Sludge', desc: 'Cu-Ni bearing filter cake and treatment sludge with recoverable metal value.' },
  { img: images.antimonyOre, title: 'Antimony Ore', desc: 'Antimony-bearing ore and concentrates for smelting and refining.' },
]

const stats = [
  { num: '40+', label: 'Countries Sourced' },
  { num: '500+', label: 'Supplier Partners' },
  { num: '15+', label: 'Years Experience' },
  { num: '99.5%', label: 'On-Time Delivery' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${images.heroMolten})` }} />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__tagline">YYD METALS</div>
          <h1 className="hero__title">
            GLOBAL FERROALLOYS<br />& <span>METAL RESOURCES</span>
          </h1>
          <div className="hero__sub">Supply. Source. Process. Trade.</div>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">Request a Quote <ArrowRight size={18} /></Link>
            <Link to="/submit-material" className="btn btn--outline">Submit Your Material</Link>
          </div>
        </div>
      </section>

      {/* Intro band */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '760px' }}>
            <div className="eyebrow">Who We Are</div>
            <h2 className="section-title">A global partner in ferroalloys, metals, minerals, and industrial resources.</h2>
            <p className="section-intro">
              YYD METALS & MINERALS INDUSTRIES LTD. supplies, sources, processes, and trades
              ferroalloys and metal-bearing resources for industrial consumers worldwide. From
              primary alloys to secondary scrap and residues, we connect material holders with
              the refineries, foundries, and mills that need them.
            </p>
          </div>

          <div className="stats-row" style={{ marginTop: '48px' }}>
            {stats.map(s => (
              <div key={s.label} className="stat">
                <div className="stat__num">{s.num}</div>
                <div className="stat__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core ferroalloys - real product photography */}
      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)', borderBottom: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '16px', marginBottom: '40px' }}>
            <div>
              <div className="eyebrow">Core Products</div>
              <h2 className="section-title">Ferroalloys</h2>
              <p className="section-intro">Primary alloys for steel, foundry, and specialty metallurgy.</p>
            </div>
            <Link to="/ferroalloys" className="btn btn--ghost">View all <ArrowRight size={16} /></Link>
          </div>

          <div className="card-grid card-grid--4">
            {products.map(p => (
              <Link key={p.name} to={p.to} className="product-card">
                <div className="product-card__img" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="product-card__body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="product-card__link">Learn more <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Resource categories */}
      <section className="section">
        <div className="container">
          <div className="eyebrow">Metal Scrap & Resources</div>
          <h2 className="section-title">Resource Categories We Handle</h2>
          <p className="section-intro" style={{ marginBottom: '40px' }}>
            We source and process a wide range of metal-bearing secondary materials and industrial residues.
          </p>

          <div className="card-grid card-grid--4">
            {resourceCategories.map(cat => (
              <div key={cat} className="resource-card">
                <div className="resource-card__icon"><Recycle size={22} /></div>
                <h3>{cat}</h3>
                <p>Available globally — sourced from industrial generators, recyclers, and traders.</p>
              </div>
            ))}
          </div>

          {/* Materials we handle - real photographs */}
          <h3 className="section-title" style={{ fontSize: '1.5rem', marginTop: '56px', marginBottom: '24px' }}>Materials We Handle</h3>
          <div className="card-grid card-grid--4">
            {materials.map(m => (
              <div key={m.title} className="product-card">
                <div className="product-card__img" style={{ backgroundImage: `url(${m.img})` }} />
                <div className="product-card__body">
                  <h3>{m.title}</h3>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/resources" className="btn btn--outline">Explore Resources <ArrowRight size={18} /></Link>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div className="feature-row">
            <div>
              <div className="eyebrow">What We Do</div>
              <h2 className="section-title">Supply. Source. Process. Trade.</h2>
              <p className="section-intro" style={{ marginBottom: '24px' }}>
                Four capabilities, one global network. We move ferroalloys and metal resources
                from where they are to where they are needed.
              </p>
              <ul className="feature-list">
                <li><Factory size={20} className="text-accent" /> <span><strong>Supply</strong> — Primary ferroalloys delivered to specification, on schedule.</span></li>
                <li><Globe2 size={20} className="text-accent" /> <span><strong>Source</strong> — Global procurement of metal-bearing scrap and residues.</span></li>
                <li><Recycle size={20} className="text-accent" /> <span><strong>Process</strong> — Sorting, upgrading, and preparing materials for consumption.</span></li>
                <li><ShieldCheck size={20} className="text-accent" /> <span><strong>Trade</strong> — Reliable logistics and documentation across borders.</span></li>
              </ul>
            </div>
            <div className="feature-row__img" style={{ backgroundImage: `url(${images.productionWarehouse})` }} />
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Have material to sell, or need a reliable supply?</h2>
            <p>Submit your material offer or request a quote — our team responds within 48 hours.</p>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/submit-material" className="btn btn--primary">Submit Your Material</Link>
            <Link to="/contact" className="btn btn--outline">Request a Quote</Link>
          </div>
        </div>
      </section>
    </>
  )
}
