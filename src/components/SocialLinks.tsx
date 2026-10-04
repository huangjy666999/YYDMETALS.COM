import { Facebook, Twitter, Instagram, Linkedin, MessageCircle } from 'lucide-react'

// ---------------------------------------------------------------------------
// Social / messaging channels, used by the footer and the contact page.
//
export const socials = [
  { key: 'whatsapp',  label: 'WhatsApp',    href: 'https://wa.me/84865901028' },
  { key: 'line',      label: 'LINE',        href: 'https://line.me/R/nv/addFriends' },
  { key: 'linkedin',  label: 'LinkedIn · HUANG JERRY', href: 'https://www.linkedin.com/search/results/people/?keywords=HUANG%20JERRY' },
  { key: 'zalo',      label: 'Zalo',        href: 'https://zalo.me/84865901028' },
  { key: 'facebook',  label: 'Facebook',    href: '#' },
  { key: 'twitter',   label: 'X (Twitter)', href: '#' },
  { key: 'instagram', label: 'Instagram',   href: '#' },
]

// --- brand marks that are not part of the icon library ----------------------

function WhatsAppMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.01-1.04 2.47s1.06 2.86 1.21 3.06c.15.2 2.09 3.19 5.06 4.47.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.75-.71 2-1.4.25-.69.25-1.28.17-1.4-.07-.13-.27-.2-.57-.35z" />
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.13c-1.55 0-3.07-.42-4.4-1.2l-.32-.19-3.26.86.87-3.18-.2-.33a8.16 8.16 0 0 1-1.25-4.36c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
    </svg>
  )
}

function LineMark() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
      <path d="M12 2.4C6.53 2.4 2.1 6 2.1 10.4c0 3.95 3.53 7.26 8.3 7.89.32.07.76.21.87.49.1.25.07.64.03.9l-.14.85c-.04.25-.2.99.87.54 1.07-.45 5.77-3.4 7.87-5.82 1.45-1.6 2.14-3.24 2.14-5.04 0-4.4-4.44-7.81-9.9-7.81zM8.02 13.2H6.2a.44.44 0 0 1-.44-.44V8.36a.44.44 0 0 1 .88 0v3.96h1.38a.44.44 0 0 1 0 .88zm1.77-.44a.44.44 0 0 1-.88 0V8.36a.44.44 0 0 1 .88 0v4.4zm4.87 0a.44.44 0 0 1-.8.27l-1.9-2.6v2.33a.44.44 0 0 1-.88 0V8.36a.44.44 0 0 1 .8-.27l1.9 2.6V8.36a.44.44 0 0 1 .88 0v4.4zm3.32-2.64a.44.44 0 0 1 0 .88h-1.38v1.32h1.38a.44.44 0 0 1 0 .88h-1.82a.44.44 0 0 1-.44-.44V8.36a.44.44 0 0 1 .44-.44h1.82a.44.44 0 0 1 0 .88h-1.38v1.32h1.38z" />
    </svg>
  )
}

function ZaloMark() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <rect x="1" y="3" width="22" height="18" rx="6" fill="#0068ff" />
      <text x="3.1" y="14.8" fill="#fff" fontSize="7.3" fontWeight="700" fontFamily="Arial, sans-serif">Zalo</text>
    </svg>
  )
}

export function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case 'facebook':  return <Facebook size={18} />
    case 'twitter':   return <Twitter size={18} />
    case 'instagram': return <Instagram size={18} />
    case 'linkedin':  return <Linkedin size={18} />
    case 'whatsapp':  return <WhatsAppMark />
    case 'line':      return <LineMark />
    case 'zalo':      return <ZaloMark />
    default:          return <MessageCircle size={18} />
  }
}

export const socialLinkStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '38px',
  height: '38px',
  borderRadius: '50%',
  border: '1px solid var(--charcoal-500)',
  background: 'var(--charcoal-700)',
  color: 'var(--steel-200)',
  transition: 'all 0.2s ease',
}

/** Renders the row of social / messaging buttons. */
export function SocialLinks() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {socials.map(s => (
        <a
          key={s.key}
          href={s.href}
          title={s.label}
          aria-label={s.label}
          target={s.href === '#' ? undefined : '_blank'}
          rel={s.href === '#' ? undefined : 'noopener noreferrer'}
          style={socialLinkStyle}
          onMouseEnter={e => {
            e.currentTarget.style.color = 'var(--accent)'
            e.currentTarget.style.borderColor = 'var(--accent)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color = 'var(--steel-200)'
            e.currentTarget.style.borderColor = 'var(--charcoal-500)'
          }}
        >
          <SocialIcon name={s.key} />
        </a>
      ))}
    </div>
  )
}
