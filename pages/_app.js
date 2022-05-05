import Layout from '../comps/Layout'
import '../styles/globals.css'
import '../styles/nav.css';
import '../styles/scoreboards.css';
import '../styles/quicknav.css';





function MyApp({ Component, pageProps }) {
  return (
    <Layout className=''>
    
       <Component {...pageProps} />
    </Layout>
  )
}


export default MyApp
