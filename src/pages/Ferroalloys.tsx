import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { images } from '../lib/images'

const products = [
  { name: 'Ferrosilicon', to: '/ferrosilicon', img: images.ferrosilicon, desc: 'Iron-silicon alloy for deoxidation, alloying, and inoculation in steel and cast iron.' },
  { name: 'Ferrophosphorus', to: '/ferrophosphorus', img: images.ferrophosphorus1, desc: 'Phosphorus-bearing iron alloy for metallurgical and specialty applications.' },
  { name: 'Ferrochrome', to: '/ferrochrome', img: images.ferrochrome, desc: 'Chromium-iron alloy essential for stainless and high-alloy steel production.' },
  { name: 'Ferrosulfur', to: '/ferrosulfur', img: images.ferrosulfur1, desc: 'Sulfur-iron alloy for free-machining steels and controlled sulfur additions.' },
]

export default function Ferroalloys() {
  return (
    <>
      <PageBanner
        bgImage={images.ferroalloysBanner}
        title="Ferroalloys"
        intro="Primary alloys that drive steel, foundry, and specialty metallurgy worldwide."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Ferroalloys' }]}
      />

      <section className="section">
        <div className="container">
          <div className="eyebrow">Product Range</div>
          <h2 className="section-title">Our Ferroalloy Portfolio</h2>
          <p className="section-intro" style={{ marginBottom: '40px' }}>
            YYD METALS supplies a focused range of ferroalloys produced to consistent metallurgical
            specifications. Each grade is available in various sizes and packaging to meet customer
            requirements.
          </p>

          <div className="card-grid card-grid--4">
            {products.map(p => (
              <Link key={p.name} to={p.to} className="product-card">
                <div className="product-card__img" style={{ backgroundImage: `url(${p.img})` }} />
                <div className="product-card__body">
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                  <span className="product-card__link">View details <ArrowRight size={16} /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Need a specific grade or specification?</h2>
            <p>Tell us your requirements and we will source it from our global network.</p>
          </div>
          <Link to="/contact" className="btn btn--primary">Request a Quote <ArrowRight size={18} /></Link>
        </div>
      </section>
    </>
  )
}
