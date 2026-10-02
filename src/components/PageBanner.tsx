import { Link } from 'react-router-dom'

interface Props {
  bgImage: string
  title: string
  intro?: string
  crumbs?: { label: string; to?: string }[]
}

export default function PageBanner({ bgImage, title, intro, crumbs }: Props) {
  return (
    <div className="page-banner">
      <div className="page-banner__bg" style={{ backgroundImage: `url(${bgImage})` }} />
      <div className="page-banner__overlay" />
      <div className="container page-banner__content">
        {crumbs && (
          <div className="breadcrumb">
            {crumbs.map((c, i) => (
              <span key={i}>
                {c.to ? <Link to={c.to}>{c.label}</Link> : c.label}
                {i < crumbs.length - 1 && ' / '}
              </span>
            ))}
          </div>
        )}
        <h1>{title}</h1>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  )
}
