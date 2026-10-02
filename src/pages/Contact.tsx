import { useState } from 'react'
import { Mail, Phone, Globe, MapPin, Send, CheckCircle } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { images } from '../lib/images'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '',
    subject: 'Quote Request', message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }

    const mailto = `mailto:info@yydmetals.com?subject=${encodeURIComponent(form.subject + ' — ' + form.name)}&body=${encodeURIComponent(
      `Name: ${form.name}\nCompany: ${form.company}\nEmail: ${form.email}\nPhone: ${form.phone}\n\n${form.message}`
    )}`

    window.location.href = mailto
    setSubmitted(true)
  }

  return (
    <>
      <PageBanner
        bgImage={images.cargoPort}
        title="Contact"
        intro="Request a quote, ask about a product, or get in touch with our team."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Contact' }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <div className="eyebrow">Get in Touch</div>
              <h2 className="section-title">Talk to Our Team</h2>
              <p className="section-intro" style={{ marginBottom: '32px' }}>
                Whether you need a quote for ferroalloys, want to discuss sourcing, or have material
                to offer — we respond to all enquiries within 48 hours.
              </p>

              <div className="contact-info-item">
                <div className="contact-info-item__icon"><Mail size={18} /></div>
                <div>
                  <h4>Email</h4>
                  <p>info@yydmetals.com</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-item__icon"><Phone size={18} /></div>
                <div>
                  <h4>Phone</h4>
                  <p>+44 20 0000 0000</p>
                </div>
              </div>
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
                  <p>YYD Metals & Minerals Industries Ltd.<br />London, United Kingdom</p>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div style={{ padding: '48px', background: 'var(--charcoal-800)', border: '1px solid var(--charcoal-600)', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                  <CheckCircle size={48} className="text-accent" style={{ margin: '0 auto 20px' }} />
                  <h3 style={{ fontSize: '1.4rem', marginBottom: '12px' }}>Thank You</h3>
                  <p className="text-muted">Your email client should have opened with your message. If not, please email us directly at info@yydmetals.com.</p>
                  <button className="btn btn--outline" style={{ marginTop: '24px' }} onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', subject: 'Quote Request', message: '' }) }}>
                    Send Another
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
                      <label htmlFor="company">Company</label>
                      <input id="company" name="company" type="text" value={form.company} onChange={handleChange} />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email *</label>
                      <input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="field field--full">
                      <label htmlFor="subject">Subject</label>
                      <select id="subject" name="subject" value={form.subject} onChange={handleChange}>
                        <option>Quote Request</option>
                        <option>Product Enquiry</option>
                        <option>Sourcing Enquiry</option>
                        <option>Supplier Offer</option>
                        <option>General</option>
                      </select>
                    </div>
                    <div className="field field--full">
                      <label htmlFor="message">Message *</label>
                      <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} required placeholder="Tell us what you need — product, grade, quantity, destination, or your material offer." />
                    </div>
                  </div>
                  <button type="submit" className="btn btn--primary" style={{ marginTop: '24px', width: '100%', justifyContent: 'center' }}>
                    Send Message <Send size={16} />
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
