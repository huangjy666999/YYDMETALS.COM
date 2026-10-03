import { Link } from 'react-router-dom'
import { ArrowRight, Recycle, Factory, Beaker, Boxes } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { images } from '../lib/images'

const categories = [
  { title: 'Copper-bearing materials', icon: Boxes, desc: 'Copper scrap, copper slags, brass, bronze, and copper-rich residues recovered from industrial and recycling streams.' },
  { title: 'Nickel-bearing materials', icon: Factory, desc: 'Nickel scrap, nickel sludge, Ni-Cu alloys, and nickel-containing residues from plating and refining operations.' },
  { title: 'Cobalt-bearing materials', icon: Beaker, desc: 'Cobalt-rich residues, catalysts, alloy scrap, and cobalt-bearing sludge from chemical and battery-related streams.' },
  { title: 'Tin-bearing materials', icon: Recycle, desc: 'Tin scrap, solder dross, tin ash, and tin-bearing sludge from electronics, plating, and smelting operations.' },
  { title: 'Tungsten-bearing materials', icon: Factory, desc: 'Tungsten carbide scrap, tungsten sludge, grinding swarf, and tungsten-rich hardmetal residues.' },
  { title: 'Lead & Antimony materials', icon: Boxes, desc: 'Lead scrap, lead-acid battery residues, antimony-bearing alloys, and dross from smelting and refining.' },
  { title: 'Metal-bearing sludge', icon: Beaker, desc: 'Filter cakes, treatment sludge, and precipitates containing recoverable metals from electroplating and wastewater treatment.' },
  { title: 'Industrial residues', icon: Recycle, desc: 'Furnace dust, flue dust, dross, skimmings, and other secondary materials with recoverable metal value.' },
]

const materials = [
  { img: images.scrapSiliconWafers, title: 'Silicon Wafer Scrap', desc: 'Silicon-rich scrap from wafer and photovoltaic production streams.' },
  { img: images.ferroalloyBriquettes, title: 'Ferroalloy Briquettes', desc: 'Pressed briquettes for controlled charging into furnaces and ladles.' },
  { img: images.copperNickelSludge, title: 'Copper-Nickel Sludge', desc: 'Cu-Ni bearing filter cake and treatment sludge with recoverable metal value.' },
  { img: images.antimonyOre, title: 'Antimony Ore', desc: 'Antimony-bearing ore and concentrates for smelting and refining.' },
  { img: images.titanium, title: 'Titanium Material', desc: 'Titanium-bearing material for metal recovery and processing.' },
]

export default function Resources() {
  return (
    <>
      <PageBanner
        bgImage={images.resourcesBanner}
        title="Metal Scrap & Resources"
        intro="Global sourcing and processing of metal-bearing secondary materials and industrial residues."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Metal Scrap & Resources' }]}
      />

      <section className="section">
        <div className="container">
          <div className="eyebrow">What We Handle</div>
          <h2 className="section-title">Resource Categories</h2>
          <p className="section-intro" style={{ marginBottom: '40px' }}>
            YYD METALS sources, processes, and trades a broad spectrum of metal-bearing scrap,
            residues, and secondary materials. We work with industrial generators, recyclers, and
            traders to recover value from materials that would otherwise be lost.
          </p>

          <div className="card-grid card-grid--2">
            {categories.map(cat => {
              const Icon = cat.icon
              return (
                <div key={cat.title} className="resource-card">
                  <div className="resource-card__icon"><Icon size={22} /></div>
                  <h3>{cat.title}</h3>
                  <p>{cat.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Real photographs of the materials we trade */}
      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div className="eyebrow">Materials</div>
          <h2 className="section-title">Materials We Handle</h2>
          <p className="section-intro" style={{ marginBottom: '40px' }}>
            A selection of the metal-bearing materials and secondary resources we source and trade.
          </p>
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="feature-row feature-row--single">
            <div className="prose">
              <div className="eyebrow">Our Process</div>
              <h2 className="section-title">From generator to consumer</h2>
              <p>We identify, evaluate, and transport metal-bearing materials from where they are generated to where they create the most value.</p>
              <ul className="feature-list">
                <li><ArrowRight size={18} className="text-accent" /> <span><strong>Assessment</strong> — Chemical analysis and material evaluation on-site or via samples.</span></li>
                <li><ArrowRight size={18} className="text-accent" /> <span><strong>Agreement</strong> — Transparent pricing based on assay results and market conditions.</span></li>
                <li><ArrowRight size={18} className="text-accent" /> <span><strong>Logistics</strong> — Collection, packaging, and shipping with full documentation.</span></li>
                <li><ArrowRight size={18} className="text-accent" /> <span><strong>Processing</strong> — Sorting, upgrading, and preparing material for end consumers.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Have metal-bearing material to offer?</h2>
            <p>Submit details of your material and our sourcing team will evaluate it.</p>
          </div>
          <Link to="/submit-material" className="btn btn--primary">Submit Your Material <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
