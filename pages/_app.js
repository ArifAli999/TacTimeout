import Layout from '../comps/Layout'
import '../styles/globals.css'
import '../styles/nav.css';
import '../styles/scoreboards.css';


function MyApp({ Component, pageProps }) {
  return (
    <Layout>
    
       <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
