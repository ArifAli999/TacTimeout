import Layout from '../comps/Layout'
import '../styles/globals.css'
import '../styles/nav.css';
import '../styles/scoreboards.css';

export function reportWebVitals(metric) {
  switch (metric.name) {
    case 'Next.js-hydration':
      console.log(metric)
      break
    case 'Next.js-route-change-to-render':
      // handle route-change to render results
      console.log(metric)
      break
    case 'Next.js-render':
      // handle render results
      console.log(metric)
      break
    default:
      break
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    
       <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
