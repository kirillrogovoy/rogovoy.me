import { useState, FormEvent } from 'react'

const mailchimpSubscribeUrl =
  'https://iobnm1te67.execute-api.eu-central-1.amazonaws.com/default/mailchimp-subscribe'

export function EmailForm() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  if (isSubscribed) {
    return <div className="h-20 mb-10 text-center">Done! Thank you.</div>
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
    <form onSubmit={submit} className="h-20 w-88 mx-auto mb-8 text-center">
      <span className="block text-lg mb-2">Get latest posts and extra content</span>
      <div className="h-8 flex">
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          className="w-3/4 px-2 border border-primary mr-2 outline-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="w-1/4 bg-primary text-back border border-primary cursor-pointer placeholder-faded hover:text-primary hover:bg-back"
        />
      </div>
    </form>
  )
}
