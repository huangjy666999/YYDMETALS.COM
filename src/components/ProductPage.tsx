import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageBanner from '../components/PageBanner'

interface ProductData {
  name: string
  bannerImg: string
  featureImg: string
  tagline: string
  intro: string
  description: string
  applications: string[]
  packaging: string[]
  gallery?: string[]

  // Either use the simple two-column list ...
  grades?: { grade: string; composition: string }[]
  // ... or a full multi-column chemistry table.
  specs?: {
    title?: string
    intro?: string
    headers: string[]
    rows: string[][]
    footnote?: string
  }
}

interface Props {
  data: ProductData
}

export default function ProductPage({ data }: Props) {
  return (
    <>
      <PageBanner
        bgImage={data.bannerImg}
        title={data.name}
        intro={data.tagline}
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Ferroalloys', to: '/ferroalloys' }, { label: data.name }]}
      />

      <section className="section">
        <div className="container">
          <div className="feature-row">
            <div className="feature-row__img" style={{ backgroundImage: `url(${data.featureImg})` }} />
            <div className="prose">
              <div className="eyebrow">Overview</div>
              <h2 className="section-title">{data.name}</h2>
              <p>{data.intro}</p>
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--charcoal-800)', borderTop: '1px solid var(--charcoal-600)', borderBottom: '1px solid var(--charcoal-600)' }}>
        <div className="container">
          <div className="eyebrow">Applications</div>
          <h2 className="section-title">Where It's Used</h2>
          <div className="card-grid card-grid--2" style={{ marginTop: '32px' }}>
            {data.applications.map(app => (
              <div key={app} className="resource-card" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <Check size={22} className="text-accent" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span style={{ color: 'var(--grey-100)' }}>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {data.gallery && data.gallery.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="eyebrow">Product Gallery</div>
            <h2 className="section-title">{data.name} in Detail</h2>
            <div className="card-grid card-grid--3" style={{ marginTop: '32px' }}>
              {data.gallery.map((src, i) => (
                <div key={i} style={{
                  borderRadius: 'var(--radius)',
                  overflow: 'hidden',
                  border: '1px solid var(--charcoal-600)',
                  aspectRatio: '4 / 3',
                  backgroundImage: `url(${src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="eyebrow">Specifications</div>
          <h2 className="section-title">{data.specs?.title ?? 'Typical Grades & Composition'}</h2>
          <p className="section-intro">
            {data.specs?.intro ?? 'Representative grades — custom specifications available on request.'}
          </p>

          {/* Simple two-column list */}
          {data.grades && data.grades.length > 0 && (
            <table className="spec-table">
              <thead>
                <tr><th>Grade</th><th>Typical Composition</th></tr>
              </thead>
              <tbody>
                {data.grades.map(g => (
                  <tr key={g.grade}><td>{g.grade}</td><td>{g.composition}</td></tr>
                ))}
              </tbody>
            </table>
          )}

          {/* Full multi-column chemistry table */}
          {data.specs && (
            <div style={{ overflowX: 'auto', marginTop: '8px' }}>
              <table className="spec-table" style={{ minWidth: '900px' }}>
                <thead>
                  <tr>
                    {data.specs.headers.map((h, i) => (
                      <th key={i} style={i === 0 ? undefined : { textAlign: 'center', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {data.specs.rows.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td
                          key={ci}
                          style={ci === 0
                            ? { whiteSpace: 'nowrap', color: 'var(--grey-100)' }
                            : { textAlign: 'center', whiteSpace: 'nowrap' }}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              {data.specs.footnote && (
                <p className="field-hint" style={{ marginTop: '12px' }}>{data.specs.footnote}</p>
              )}
            </div>
          )}

          <div style={{ marginTop: '40px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '12px' }}>Packaging & Delivery</h3>
            <ul className="feature-list" style={{ maxWidth: '600px' }}>
              {data.packaging.map(p => <li key={p}><Check size={18} className="text-accent" /> {p}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container cta-band__inner">
          <div>
            <h2>Request a quote for {data.name}</h2>
            <p>Available in various grades and sizes — let us know your requirements.</p>
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
