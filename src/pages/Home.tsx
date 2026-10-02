import { Link } from 'react-router-dom'
import { ArrowRight, Recycle, Globe2, Factory, Beaker, Package, Wrench, Settings } from 'lucide-react'
import { images } from '../lib/images'

const capabilities = [
  {
    icon: Factory,
    title: 'Ferroalloy & Metal Production',
    body: 'We produce and process ferroalloys and metal products for industrial applications. Our production capabilities allow us to manufacture materials with different chemical compositions, specifications and performance requirements.',
  },
  {
    icon: Beaker,
    title: 'Customized Alloy & Metal Products',
    body: 'With our own metallurgical engineering and technical team, we can develop and manufacture customized alloy and metal products according to specific customer requirements. We work with customers on chemical composition, product specifications, raw material selection and production processes to develop suitable metallurgical solutions for specific applications.',
  },
  {
    icon: Globe2,
    title: 'Global Mineral Resource Sourcing',
    body: 'We source metal ores and mineral resources worldwide and apply metallurgical processes to extract and recover valuable metals from these resources. Our capabilities enable us to turn mineral resources into valuable metal products and industrial raw materials, creating greater value through resource recovery and metallurgical processing.',
  },
  {
    icon: Recycle,
    title: 'Global Metal Scrap & Industrial Residue Recovery',
    body: 'We purchase and process metal-bearing scrap, industrial residues, slags, powders and other secondary resources from global markets. Through sorting, processing and metallurgical recovery, we seek to recover valuable metals from secondary resources and return them to productive use.',
  },
  {
    icon: Package,
    title: 'Metal Products Supply',
    body: 'We supply ferroalloys, metals, mineral materials and processed metal products to industrial customers worldwide. In addition to standard products, we can provide customized materials and alloy products developed according to specific customer requirements.',
  },
  {
    icon: Wrench,
    title: 'Metallurgical Technology Services',
    body: 'Our metallurgical technical team provides smelting technology, process development, raw material optimization, metal recovery solutions and production process improvement. We can also support customers in developing and producing special-specification alloys and metal products.',
  },
  {
    icon: Settings,
    title: 'Metallurgical Equipment & Production Solutions',
    body: 'We provide metallurgical production equipment and related technical solutions for smelting, alloy production, metal recovery, material processing and recycling projects. Our technical capabilities allow us to assist customers from process design and equipment selection to production implementation and process optimization.',
  },
]

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${images.heroMolten})` }} />
        <div className="hero__overlay" />
        <div className="container hero__content">
          <div className="hero__tagline">YYD METALS &amp; MINERALS INDUSTRIES</div>
          <h1 className="hero__title">
            Metals, Minerals, Alloys<br />&amp; <span>Metallurgical Solutions</span>
          </h1>
          <div className="hero__sub">Supply. Source. Process. Trade.</div>
          <div className="hero__actions">
            <Link to="/contact" className="btn btn--primary">Request a Quote <ArrowRight size={18} /></Link>
            <Link to="/submit-material" className="btn btn--outline">Submit Your Material</Link>
          </div>
        </div>
      </section>

      {/* Who we are */}
      <section className="section">
        <div className="container">
          <div className="prose" style={{ maxWidth: '820px' }}>
            <div className="eyebrow">Who We Are</div>
            <h2 className="section-title">Metals, Minerals, Alloys &amp; Metallurgical Solutions</h2>
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

      {/* Core ferroalloys */}
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
          <div className="eyebrow">Metal Scrap &amp; Resources</div>
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

      {/* Closing line + CTA */}
      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>YYD — Metals, Minerals, Alloys &amp; Metallurgical Solutions</h2>
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
