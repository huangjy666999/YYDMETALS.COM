import { useState } from 'react'
import { Globe, MapPin, Send, CheckCircle } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { SocialLinks } from '../components/SocialLinks'
import { images } from '../lib/images'
import { getSupabase } from '../lib/supabase'

const topics = [
  'Ferroalloys',
  'Minerals & Ores',
  'Metal Recycling',
  'Custom Alloy Solutions',
  'Technical Services',
  'Other',
]

const CONTACT_FALLBACK =
  'We could not submit your inquiry at this time. Please try again or email info@yydmetals.com.'

const emptyForm = {
  name: '',
  company: '',
  email: '',
  country: '',
  topic: '',
  message: '',
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle')
  const [error, setError] = useState('')
  const [form, setForm] = useState(emptyForm)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.company.trim() || !form.email.trim() ||
        !form.country.trim() || !form.message.trim()) {
      setError('Please fill in name, company, business email, country and your requirements.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    const composed = [
      'REQUEST FOR QUOTE / BUSINESS INQUIRY',
      '',
      `Full Name: ${form.name}`,
      `Company: ${form.company}`,
      `Business Email: ${form.email}`,
      `Country / Region: ${form.country}`,
      `Topic of Interest: ${form.topic || 'not specified'}`,
      '',
      'Message / Specifications:',
      form.message,
    ].join('\n')

    const supabase = getSupabase()
    if (supabase) {
      try {
        const { error: dbError } = await supabase
          .from('supplier_submissions')
          .insert({
            material_name: 'Business Inquiry / Request for Quote',
            material_category: form.topic || null,
            origin: form.country || null,
            contact_name: form.name,
            contact_email: form.email,
            company: form.company || null,
            message: composed,
          })

        if (dbError) {
          console.error('[YYD METALS] inquiry insert failed:', dbError.message)
          setError(CONTACT_FALLBACK)
          setStatus('error')
          return
        }
      } catch (err) {
        console.error('[YYD METALS] inquiry insert threw:', err)
        setError(CONTACT_FALLBACK)
        setStatus('error')
        return
      }
    } else {
      console.warn('[YYD METALS] Supabase is not configured - falling back to email')
    }

    setSubmitted(true)
    setStatus('idle')
  }

  const reset = () => {
    setSubmitted(false)
    setForm(emptyForm)
    setError('')
    setStatus('idle')
  }

  return (
    <>
      <PageBanner
        bgImage={images.cargoPort}
        title="Request a Quote / Contact Us"
        intro="Get in touch with our team — products, technical solutions and resource sourcing."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Online Inquiry</div>
              <h2 className="section-title">Get in Touch with Our Team</h2>
              <p className="section-intro" style={{ marginBottom: '32px' }}>
                Have a question about our products, technical solutions, or resource sourcing?
                Fill out the form, and our metallurgical experts will respond to your inquiry
                within 24 hours.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-item__icon"><Globe size={18} /></div>
                <div>
                  <h4>Website</h4>
                  <p>yydmetals.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon"><MapPin size={18} /></div>
                <div>
                  <h4>Head Office</h4>
                  <p>YYD Metals &amp; Minerals Industries Ltd.<br />London, United Kingdom</p>
                </div>
              </div>

              <div style={{ marginTop: '28px' }}>
                <h4 style={{ fontSize: '0.9rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '12px' }}>
                  Message Us
                </h4>
                <p className="field-hint" style={{ marginBottom: '16px' }}>
                  Reach our team directly through any of these channels.
                </p>
                <SocialLinks />
              </div>
            </div>

            <div>
              {submitted ? (
                <div style={{ padding: '48px', background: 'var(--charcoal-800)', border: '1px solid var(--charcoal-600)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                  <CheckCircle size={48} className="text-accent" style={{ margin: '0 auto 20px' }} />
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>
                    Thank you for reaching out to YYD Metals &amp; Minerals Industries!
                  </h3>
                  <p className="text-muted" style={{ marginBottom: '8px' }}>
                    We have received your inquiry. A designated account manager or technical specialist
                    will review your request and get back to you shortly via email.
                  </p>
                  <p className="field-hint" style={{ marginBottom: '24px' }}>
                    Our metallurgical experts respond to all inquiries within 24 hours.
                  </p>
                  <button className="btn btn--outline" onClick={reset}>
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: 'var(--charcoal-800)', border: '1px solid var(--charcoal-600)', borderRadius: 'var(--radius-lg)', padding: '32px' }}>
                  {error && <div className="form-alert form-alert--error">{error}</div>}

                  <div className="form-grid">
                    <div className="field">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" name="name" type="text" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Company Name *</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange} required />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Business Email *</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Please use company email" />
                    </div>
                    <div className="field">
                      <label htmlFor="country">Country / Region *</label>
                      <input id="country" name="country" type="text" value={form.country} onChange={handleChange} required />
                    </div>
                    <div className="field field--full">
                      <label htmlFor="topic">Product / Topic of Interest</label>
                      <select id="topic" name="topic" value={form.topic} onChange={handleChange}>
                        <option value="">Select a topic</option>
                        {topics.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="field field--full">
                      <label htmlFor="message">Message / Specifications *</label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Chemical composition, quantity, delivery terms, destination, or any other requirements."
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn--primary"
                    style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}
                    disabled={status === 'submitting'}
                  >
                    {status === 'submitting' ? 'Submitting...' : <>Submit Inquiry <Send size={16} /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
