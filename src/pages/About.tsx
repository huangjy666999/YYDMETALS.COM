import { Link } from 'react-router-dom'
import { ArrowRight, Target, Eye, Leaf, Factory, Beaker, Globe2, Recycle, Package, Wrench, Settings } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { images } from '../lib/images'

const values = [
  { icon: Target, title: 'Our Mission', desc: 'To be a trusted global partner in metals, minerals and metallurgical solutions — delivering quality, reliability and fair value in every transaction.' },
  { icon: Eye, title: 'Our Vision', desc: 'An industrial metals economy where ores, primary metals and secondary resources are transformed into valuable products with the least possible waste.' },
  { icon: Leaf, title: 'Sustainability', desc: 'We prioritise the recovery and recycling of secondary materials, reducing the demand for primary extraction and lowering the environmental footprint of metallurgy.' },
]

const capabilities = [
  {
    icon: Factory,
    title: 'Ferroalloy & Metal Production',
    body: 'We produce and process ferroalloys and metal products for industrial applications, with the ability to manufacture materials to different chemical compositions, specifications and performance requirements.',
  },
  {
    icon: Beaker,
    title: 'Customized Alloy & Metal Products',
    body: 'With our own metallurgical engineering and technical team we develop customized alloy and metal products to customer requirements, working together on chemical composition, specifications, raw material selection and production processes.',
  },
  {
    icon: Globe2,
    title: 'Global Mineral Resource Sourcing',
    body: 'We source metal ores and mineral resources worldwide and apply metallurgical processes to extract and recover valuable metals, turning mineral resources into valuable metal products and industrial raw materials.',
  },
  {
    icon: Recycle,
    title: 'Metal Scrap & Residue Recovery',
    body: 'We purchase and process metal-bearing scrap, industrial residues, slags, powders and other secondary resources from global markets, recovering valuable metals and returning them to productive use.',
  },
  {
    icon: Package,
    title: 'Metal Products Supply',
    body: 'We supply ferroalloys, metals, mineral materials and processed metal products worldwide, including customized materials and alloy products developed to specific customer requirements.',
  },
  {
    icon: Wrench,
    title: 'Metallurgical Technology Services',
    body: 'Our technical team provides smelting technology, process development, raw material optimisation, metal recovery solutions and production process improvement, including special-specification alloys.',
  },
  {
    icon: Settings,
    title: 'Metallurgical Equipment & Solutions',
    body: 'We provide metallurgical production equipment and technical solutions for smelting, alloy production, metal recovery, material processing and recycling — from process design and equipment selection to production implementation.',
  },
]

export default function About() {
  return (
    <>
      <PageBanner
        bgImage={images.factoryFloor}
        title="About YYD"
        intro="YYD Metals & Minerals Industries — metals, minerals, alloys and metallurgical solutions."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'About YYD' }]}
      />

      {/* Who we are */}
      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div className="feature-row__img" style={{ backgroundImage: `url(${images.foundryWorkers})` }} />
            <div className="prose">
              <div className="eyebrow">Who We Are</div>
              <h2 className="section-title">YYD Metals &amp; Minerals Industries</h2>
              <p>
                <strong>YYD Metals &amp; Minerals Industries</strong> is a global metals and minerals company
                specializing in the production, processing, sourcing and supply of ferroalloys, metal products,
                mineral resources and secondary metal materials.
              </p>
              <p>
                We combine metallurgical expertise, production capabilities and global resource sourcing to
                provide materials, customized products and technical solutions for industrial customers worldwide.
              </p>
              <p>
                Our activities cover the value chain from mineral and metal resource sourcing to metallurgical
                processing, metal recovery, alloy production, customized manufacturing and technical services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our capabilities */}
      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)', borderBottom: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div className="eyebrow">Our Capabilities</div>
          <h2 className="section-title">What We Do</h2>
          <p className="section-intro" style={{ marginBottom: '40px' }}>
            Seven integrated capabilities, from mineral resources and secondary materials through to
            finished alloys and metallurgical technology.
          </p>
          <div className="card-grid card-grid--2">
            {capabilities.map(cap => {
              const Icon = cap.icon
              return (
                <div key={cap.title} className="resource-card">
                  <div className="resource-card__icon"><Icon size={22} /></div>
                  <h3>{cap.title}</h3>
                  <p>{cap.body}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* From resources to metal products */}
      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div className="prose">
              <div className="eyebrow">From Resources to Metal Products</div>
              <h2 className="section-title">Global resources, metallurgical technology, industrial production</h2>
              <p>
                YYD brings together global mineral resources, metal resources, metallurgical technology and
                industrial production.
              </p>
              <p>
                By integrating resource sourcing, mineral processing, metal recovery, alloy production, metal
                processing and technical expertise, we help transform ores, raw materials and secondary
                resources into valuable metal products and customized industrial materials.
              </p>
              <p>
                We work with manufacturers, smelters, refineries, foundries, steel mills and other industrial
                customers and partners worldwide, providing reliable materials, customized products and
                practical metallurgical solutions.
              </p>
            </div>
            <div className="feature-row__img" style={{ backgroundImage: `url(${images.productionWarehouse})` }} />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div className="eyebrow">Principles</div>
          <h2 className="section-title">Mission, Vision &amp; Sustainability</h2>
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

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>YYD — Metals, Minerals, Alloys &amp; Metallurgical Solutions</h2>
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
