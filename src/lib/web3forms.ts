// Web3Forms explicitly identifies this value as a public client-side key.
// Keep the project key as a fallback so Cloudflare builds work without a
// separately configured environment variable; an env value can override it.
const accessKey = (import.meta.env as Record<string, string | undefined>).VITE_WEB3FORMS_ACCESS_KEY
  || '9a02c113-730c-404b-a7f5-2eb9cca98743'

export async function sendWeb3Form(input: {
  subject: string
  fromName: string
  replyTo: string
  message: string
}) {
  if (!accessKey) {
    throw new Error('The website email form is not configured. Please try again later or contact us directly.')
  }

  const response = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: input.subject,
      from_name: input.fromName,
      replyto: input.replyTo,
      message: input.message,
    }),
  })

  const result = await response.json() as { success?: boolean; message?: string }
  if (!response.ok || !result.success) {
    throw new Error(result.message || 'We could not send your message. Please try again later.')
  }
}
