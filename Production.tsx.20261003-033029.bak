import { Link } from 'react-router-dom'
import { ArrowRight, Factory, Warehouse } from 'lucide-react'
import { images } from '../lib/images'

// NOTE: the "file" values below match the real file names in public/videos/,
// including capital letters and spaces. The spaces are encoded as %20 so the
// browser requests the file correctly (a raw space in a URL is invalid).
const videos = [
  {
    title: 'Electric Arc Furnace Production',
    titleCn: '电弧炉生产',
    description: 'Electric arc furnace operations: scrap charging, melting and high-temperature alloy production.',
    file: '/videos/Electric%20Arc%20Furnace%20Production%20Video.mp4',
    poster: images.production1,
    meta: 'Production Process',
  },
  {
    title: 'Blast Furnace Production',
    titleCn: '高炉生产',
    description: 'Blast furnace smelting and continuous tapping of molten metal for downstream processing.',
    file: '/videos/Blast%20furnace%20production%20video.mp4',
    poster: images.production2,
    meta: 'Production Process',
  },
  {
    title: 'Reverberatory Furnace Production',
    titleCn: '反射炉生产',
    description: 'Reverberatory furnace operations used in metal and alloy melting and refining.',
    file: '/videos/Reverberatory%20furnace%20production%20video.mp4',
    poster: images.production3,
    meta: 'Production Process',
  },
  {
    title: 'Medium-Frequency Induction Furnace',
    titleCn: '中频炉生产',
    description: 'Medium-frequency induction furnace melting for precise alloy composition control.',
    file: '/videos/Video%20of%20medium-frequency%20furnace%20production.mp4',
    poster: images.ferroalloyBriquettes,
    meta: 'Production Process',
  },
]

function ProductionVideo({ file, title, poster }: { file: string; title: string; poster?: string }) {
  return (
    <div className="video-card__media">
      <video
        controls
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={title}
      >
        <source src={file} type="video/mp4" />
        Your browser does not support embedded video.
      </video>
    </div>
  )
}

export default function Production() {
  return (
    <>
      <section className="page-banner">
        <div className="page-banner__bg" style={{ backgroundImage: `url(${images.production1})` }} />
        <div className="page-banner__overlay" />
        <div className="container page-banner__content">
          <div className="breadcrumb"><Link to="/">Home</Link> / Production</div>
          <h1>Production &amp; Processing</h1>
          <p>Selected footage from our production and metal-processing activities.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="production-intro">
            <div className="eyebrow">Production &amp; Processing</div>
            <h2 className="section-title">From raw materials to industrial metals and ferroalloys.</h2>
            <p className="section-intro">
              Furnace operations, material processing, sorting, alloy production, packaging and
              logistics — footage from our own production and processing activities.
            </p>
          </div>

          <div className="video-grid">
            {videos.map(video => (
              <article className="video-card" key={video.file}>
                <ProductionVideo file={video.file} title={video.title} poster={video.poster} />
                <div className="video-card__body">
                  <h2>{video.title}</h2>
                  <div className="video-card__meta">{video.titleCn}</div>
                  <p>{video.description}</p>
                  <div className="video-card__meta">
                    <Factory size={14} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                    {video.meta}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Facility & logistics */}
          <div className="feature-row" style={{ marginTop: '64px' }}>
            <div className="feature-row__img" style={{ backgroundImage: `url(${images.productionWarehouse})` }} />
            <div className="prose">
              <div className="eyebrow">Warehouse &amp; Logistics</div>
              <h2 className="section-title">Stored, packed, and ready to ship</h2>
              <p>
                Finished ferroalloys and processed materials are packed in big bags and stored under
                cover before dispatch, keeping chemistry and sizing consistent from furnace to
                customer.
              </p>
              <ul className="feature-list">
                <li><Warehouse size={18} className="text-accent" /> <span>1 MT big bags, 50 kg bags, or bulk</span></li>
                <li><Warehouse size={18} className="text-accent" /> <span>Covered warehouse storage</span></li>
                <li><Warehouse size={18} className="text-accent" /> <span>Container and breakbulk loading</span></li>
              </ul>
            </div>
          </div>

          <div className="production-note">
            More production footage can be added later without changing the page structure.
            Upload each MP4 to <strong>public/videos/</strong> and add it to the video list on this page.
          </div>

          <div style={{ marginTop: '40px' }}>
            <Link to="/contact" className="btn btn--primary">
              Discuss Production &amp; Supply <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
