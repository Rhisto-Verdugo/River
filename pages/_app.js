import Hero from "../components/Hero"
import Nav from "../components/Nav"
import Servicios from "../components/Servicios"
import "../styles/globals.css"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
