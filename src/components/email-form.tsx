import { useState, FormEvent } from 'react'

const mailchimpSubscribeUrl =
  'https://iobnm1te67.execute-api.eu-central-1.amazonaws.com/default/mailchimp-subscribe'

export function EmailForm() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  if (isSubscribed) {
    return <div style={{ height: '85px', textAlign: 'center' }}>Done! Thank you.</div>
  }

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log('email', email)

    fetch(mailchimpSubscribeUrl, {
      method: 'post',
      body: JSON.stringify({ email }),
    })

    setIsSubscribed(true)
  }

  return (
    <div>
      <form
        onSubmit={submit}
        style={{ margin: '0 auto 40px', width: '350px', textAlign: 'center' }}
      >
        <span
          style={{
            display: 'block',
            marginBottom: '10px',
          }}
        >
          Get latest posts and special content
        </span>
        <div style={{ height: '33px', display: 'flex' }}>
          <input
            type="email"
            value={email}
            placeholder="Email"
            onChange={e => setEmail(e.target.value)}
            style={{
              width: '220px',
              padding: '0 3px',
              outline: 'none',
              border: '1px #000 solid',
              marginRight: '10px',
            }}
          />
          <input
            type="submit"
            value="Subscribe"
            style={{
              background: '#333',
              border: '1px #333 solid',
              cursor: 'pointer',
              color: '#fff',
            }}
          />
        </div>
        <style jsx>
          {`
            input[type='submit']:hover {
              background: none !important;
              color: #333 !important;
            }
            ::placeholder {
              color: rgb(211, 211, 211);
            }
          `}
        </style>
      </form>
    </div>
  )
}
