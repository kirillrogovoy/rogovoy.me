import Link from 'next/link'
import Head from 'next/head'
import Normalize from './normalize'
import Separator from './separator'
import GoogleAnalytics from './google-analytics'

export default (props) => <div style={{maxWidth: '90%', width: '700px', margin: 'auto'}}>
  <Head>
    <GoogleAnalytics />
  </Head>
  <Normalize />
  <header style={{padding: '0', maxWidth: '90%', margin: 'auto'}}>
      <Link href="/">
        <span style={{
          textAlign: 'center',
          display: 'block',
          margin: '50px 0 5px 39px',
          cursor: 'pointer',
          fontSize: '50px',
          fontWeight: '300',
        }}>
            Кирилл Роговой
              <a target="_blank" href="https://www.facebook.com/profile.php?id=100013869703829">
                <FbSvg />
              </a>
        </span>
      </Link>
      <span style={{
        display: 'block',
        margin: '0 auto',
        textAlign: 'center',
        fontSize: '18px',
        fontWeight: '300'
      }}>
        О жизни, путешествиях, работе и личном росте
      </span>
  </header>

  <Separator />

  <main>
    {props.children}
  </main>

  <style jsx global>{`
    body {
      @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,700&subset=cyrillic');
      font-family: 'Open Sans', sans-serif;
      animation        : fadein 0.5s linear;

      color: #333;
      font-size: 18px;
      font-weight: 300;
    }
    a {
      text-decoration: none;
      font-weight: bold;
      color: #d07070;
    }
    a:hover {
      color: #f08080;
    }
    a:visited {
      color: #bbb;
   }
    @keyframes fadein {
        0% {opacity:0;}
        100% {opacity:1;}
    }
  `}</style>
</div>

function FbSvg() {
  const style = {
    width: '30px',
    marginLeft: '9px',
    marginBottom: '18px',
    enableBackground: 'new 0 0 408.788 408.788',
  }

  return <svg version="1.1" id="Layer_1" x="0px" y="0px" style={style} viewBox="0 0 408.788 408.788"> <path style={{fill: '#475993'}} d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085 h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882 v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955 l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087 c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085 C408.786,24.662,384.124,0,353.701,0z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg>
}
