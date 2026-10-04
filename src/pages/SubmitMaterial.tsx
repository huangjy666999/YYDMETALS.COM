import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Upload, X } from 'lucide-react'
import PageBanner from '../components/PageBanner'
import { images } from '../lib/images'
import { getSupabase } from '../lib/supabase'
import { sendWeb3Form } from '../lib/web3forms'

const CONTACT_FALLBACK =
  'We could not submit your offer at this time. Please try again or email info@yydmetals.com.'

const categories = [
  'Copper-bearing materials',
  'Nickel-bearing materials',
  'Cobalt-bearing materials',
  'Tin-bearing materials',
  'Tungsten-bearing materials',
  'Lead & Antimony materials',
  'Metal-bearing sludge',
  'Industrial residues',
  'Ferrosilicon',
  'Ferrophosphorus',
  'Ferrochrome',
  'Ferrosulfur',
  'Other',
]

export default function SubmitMaterial() {
  const [form, setForm] = useState({
    material_name: '',
    material_category: '',
    origin: '',
    quantity: '',
    chemical_analysis: '',
    location: '',
    availability: '',
    contact_name: '',
    contact_email: '',
    contact_phone: '',
    company: '',
    message: '',
  })
  const [photoUrls, setPhotoUrls] = useState<string[]>([])
  const [photoInput, setPhotoInput] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const addPhoto = () => {
    const url = photoInput.trim()
    if (url && photoUrls.length < 5) {
      setPhotoUrls(prev => [...prev, url])
      setPhotoInput('')
    }
  }

  const removePhoto = (idx: number) => {
    setPhotoUrls(prev => prev.filter((_, i) => i !== idx))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!form.material_name.trim() || !form.contact_name.trim() || !form.contact_email.trim()) {
      setError('Please fill in material name, your name, and your email.')
      setStatus('error')
      return
    }

    setStatus('submitting')

    try {
      const message = [
        'MATERIAL OFFER / SUPPLIER SUBMISSION',
        '',
        `Material: ${form.material_name}`,
        `Category: ${form.material_category || 'not specified'}`,
        `Origin: ${form.origin || 'not specified'}`,
        `Quantity: ${form.quantity || 'not specified'}`,
        `Current location: ${form.location || 'not specified'}`,
        `Availability: ${form.availability || 'not specified'}`,
        `Chemical analysis: ${form.chemical_analysis || 'not specified'}`,
        `Photo links: ${photoUrls.length ? photoUrls.join(', ') : 'none'}`,
        '',
        `Contact name: ${form.contact_name}`,
        `Company: ${form.company || 'not specified'}`,
        `Email: ${form.contact_email}`,
        `Phone: ${form.contact_phone || 'not specified'}`,
        '',
        `Additional notes: ${form.message || 'none'}`,
      ].join('\n')

      await sendWeb3Form({
        subject: `Material offer: ${form.material_name}`,
        fromName: form.contact_name,
        replyTo: form.contact_email,
        message,
      })
    } catch (err) {
      console.error('[YYD METALS] material offer email failed:', err)
      setError(err instanceof Error ? err.message : CONTACT_FALLBACK)
      setStatus('error')
      return
    }

    const supabase = getSupabase()
    if (supabase) {
      try {
        const { error: dbError } = await supabase.from('supplier_submissions').insert({
          material_name: form.material_name,
          material_category: form.material_category || null,
          origin: form.origin || null,
          quantity: form.quantity || null,
          chemical_analysis: form.chemical_analysis || null,
          photo_urls: photoUrls,
          location: form.location || null,
          availability: form.availability || null,
          contact_name: form.contact_name,
          contact_email: form.contact_email,
          contact_phone: form.contact_phone || null,
          company: form.company || null,
          message: form.message || null,
        })
        if (dbError) console.warn('[YYD METALS] offer email sent; database logging failed:', dbError.message)
      } catch (err) {
        console.warn('[YYD METALS] offer email sent; database logging threw:', err)
      }
    }

    setStatus('success')
    setForm({
      material_name: '', material_category: '', origin: '', quantity: '',
      chemical_analysis: '', location: '', availability: '',
      contact_name: '', contact_email: '', contact_phone: '',
      company: '', message: '',
    })
    setPhotoUrls([])
  }

  if (status === 'success') {
    return (
      <>
        <PageBanner
          bgImage={images.submitMaterialBanner}
          title="Submit Your Material"
          crumbs={[{ label: 'Home', to: '/' }, { label: 'Submit Your Material' }]}
        />
        <section className="section">
          <div className="container" style={{ maxWidth: '640px', textAlign: 'center' }}>
            <CheckCircle size={56} className="text-accent" style={{ margin: '0 auto 24px' }} />
            <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Submission Received</h2>
            <p className="text-muted" style={{ fontSize: '1.1rem', marginBottom: '32px' }}>
              Thank you. Your material offer has been submitted to our sourcing team. We will review
              the details and contact you within 48 hours.
            </p>
            <Link to="/" className="btn btn--outline">Back to Home</Link>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageBanner
        bgImage={images.submitMaterialBanner}
        title="Submit Your Material"
        intro="Tell us about the material you have available. Our sourcing team will evaluate your offer."
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Submit Your Material' }]}
      />

      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          <form translate="no" onSubmit={handleSubmit} style={{ background: 'var(--charcoal-800)', border: '1px solid var(--charcoal-600)', borderRadius: 'var(--radius-lg)', padding: '36px' }}>
            {error && <div className="form-alert form-alert--error">{error}</div>}

            <h3 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Material Details</h3>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="material_name">Material Name *</label>
                <input id="material_name" name="material_name" type="text" value={form.material_name} onChange={handleChange} required placeholder="e.g. Copper scrap, Ni sludge, FeSi lump" />
              </div>
              <div className="field">
                <label htmlFor="material_category">Category</label>
                <select id="material_category" name="material_category" value={form.material_category} onChange={handleChange}>
                  <option value="">Select category</option>
                  {categories.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div className="field">
                <label htmlFor="origin">Country / Region of Origin</label>
                <input id="origin" name="origin" type="text" value={form.origin} onChange={handleChange} placeholder="e.g. Germany, South Africa, India" />
              </div>
              <div className="field">
                <label htmlFor="quantity">Quantity Available</label>
                <input id="quantity" name="quantity" type="text" value={form.quantity} onChange={handleChange} placeholder="e.g. 50 MT / month" />
              </div>
              <div className="field">
                <label htmlFor="location">Current Location</label>
                <input id="location" name="location" type="text" value={form.location} onChange={handleChange} placeholder="Where is the material now?" />
              </div>
              <div className="field">
                <label htmlFor="availability">Availability</label>
                <input id="availability" name="availability" type="text" value={form.availability} onChange={handleChange} placeholder="e.g. Available now, one-time, ongoing" />
              </div>
              <div className="field field--full">
                <label htmlFor="chemical_analysis">Chemical Analysis / Assay</label>
                <textarea id="chemical_analysis" name="chemical_analysis" rows={4} value={form.chemical_analysis} onChange={handleChange} placeholder="Composition details, assay results, or lab analysis if available." />
              </div>
            </div>

            {/* Photos */}
            <div style={{ marginTop: '24px' }}>
              <label style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--steel-200)', display: 'block', marginBottom: '6px' }}>
                Photo Links (up to 5)
              </label>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="url"
                  value={photoInput}
                  onChange={e => setPhotoInput(e.target.value)}
                  placeholder="Paste a photo URL (e.g. https://...)"
                  style={{ flex: 1, background: 'var(--charcoal-800)', border: '1px solid var(--charcoal-500)', borderRadius: 'var(--radius-sm)', padding: '12px 14px', color: 'var(--grey-100)', fontSize: '0.95rem' }}
                />
                <button type="button" className="btn btn--outline" style={{ padding: '12px 18px', fontSize: '0.8rem' }} onClick={addPhoto} disabled={photoUrls.length >= 5}>
                  <Upload size={16} /> Add
                </button>
              </div>
              <div className="field-hint" style={{ marginTop: '6px' }}>Share links to photos of the material (Google Drive, Dropbox, or direct image URLs).</div>
              {photoUrls.length > 0 && (
                <div style={{ marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {photoUrls.map((url, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--charcoal-700)', border: '1px solid var(--charcoal-500)', borderRadius: 'var(--radius-sm)', padding: '8px 12px' }}>
                      <span style={{ flex: 1, fontSize: '0.85rem', color: 'var(--steel-200)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{url}</span>
                      <button type="button" onClick={() => removePhoto(i)} style={{ color: 'var(--steel-300)' }}><X size={16} /></button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <h3 style={{ fontSize: '1.2rem', marginTop: '36px', marginBottom: '20px' }}>Contact Information</h3>
            <div className="form-grid">
              <div className="field">
                <label htmlFor="contact_name">Your Name *</label>
                <input id="contact_name" name="contact_name" type="text" value={form.contact_name} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" type="text" value={form.company} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="contact_email">Email *</label>
                <input id="contact_email" name="contact_email" type="email" value={form.contact_email} onChange={handleChange} required />
              </div>
              <div className="field">
                <label htmlFor="contact_phone">Phone</label>
                <input id="contact_phone" name="contact_phone" type="tel" value={form.contact_phone} onChange={handleChange} />
              </div>
              <div className="field field--full">
                <label htmlFor="message">Additional Notes</label>
                <textarea id="message" name="message" rows={4} value={form.message} onChange={handleChange} placeholder="Any other details about the material, terms, or logistics." />
              </div>
            </div>

            <button type="submit" className="btn btn--primary" style={{ marginTop: '28px', width: '100%', justifyContent: 'center' }} disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Submitting...' : <>Submit Material Offer <ArrowRight size={18} /></>}
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
