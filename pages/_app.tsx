import type { AppProps /*, AppContext */ } from 'next/app'
import Maintenace from '../components/maintenance'

function MyApp({ Component, pageProps }: AppProps) {
    if (process.env.MAINTENANCE_MODE) {
     return <Maintenace />   
    } 
     return <Component {...pageProps} />

}

export default MyApp