import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { Grid, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'
import Welcome from '../components/welcome/Welcome'
import About from '../components/about/About'
import Performance from '../components/performance/Performance'
import Schedule from '../components/schedule/Schedule'
import Sponsors from '../components/sponsors/Sponsors'
import BottomNav from '../components/BottomNav'
import Contact from '../components/contact/Contact'
import Location from '../components/location/Location'
import Gallery from '../components/gallery/Gallery'

const IndexPage = (props) => (
  <Layout>
    <Welcome />
    <About />
    <Performance performers={props.performers} />
    <Schedule />
    <Gallery />
    <Sponsors sponsors={props.sponsors} headliner={props.headliner} />
    <Contact />
    <Location />
    <BottomNav />
  </Layout>
)

IndexPage.getInitialProps = async function (context) {
  const performers = [
    { id: 0, name: 'Puerto Rican Power', imgUrl: '/static/images/performers/puerto-rican-power-album.jpg' },
    { id: 1, name: 'Melina Almodovar', imgUrl: '/static/images/performers/melina-almodovar-con-mi-sabor.png' },
    { id: 2, name: 'Tito Puente Jr.', imgUrl: '/static/images/performers/tito-puente-jr.jpg' },
    { id: 3, name: 'Luigi Flores', imgUrl: '/static/images/performers/luigi-flores.jpg' },
    { id: 4, name: 'Tamara Morales', imgUrl: '/static/images/performers/tamara-morales.jpg' },
    { id: 5, name: 'Jey Zamorano', imgUrl: '/static/images/performers/jey-zamorano.jpg' },
    { id: 5, name: 'Cachy y Saoco Nuevo', imgUrl: '/static/images/performers/cachy-y-saoco-nuevo.jpg' },
    { id: 6, name: 'El Buho Loco', imgUrl: '/static/images/performers/crazy-owl.jpg' },
    { id: 7, name: 'MC Negro Fino', imgUrl: '/static/images/performers/nelson-fritz.jpg' },
    { id: 8, name: 'Thelma Cruz', imgUrl: '/static/images/performers/thelma-cruz.jpg' },
    { id: 9, name: 'DJ Raya', imgUrl: '/static/images/performers/dj-raya.jpg' },
    { id: 10, name: 'DJ Carmencita', imgUrl: '/static/images/performers/dj-carmencita.jpg' },
    { id: 11, name: 'DJ Danny O', imgUrl: '/static/images/performers/dj-danny-o.jpg' },
  ]

  const sponsors = [
    { id: 0, name: '', imgUrl: '/static/images/sponsors/cba-realty-logo.jpg', height: '100' },
    { id: 1, name: '', imgUrl: '/static/images/sponsors/hollywood-cra-logo.jpg', height: '100' },
    { id: 2, name: '', imgUrl: '/static/images/sponsors/bioptest.jpg', height: '100' },
    { id: 3, name: '', imgUrl: '/static/images/sponsors/casa-borinquen.jpg', height: '100' },
    { id: 4, name: '', imgUrl: '/static/images/sponsors/hispanic-chamber.jpg', height: '80', width: '250' }
  ]

  const headliner = { id: 5, name: '', imgUrl: '/static/images/sponsors/gasolina.jpg', height: '250' }

  return {
    performers,
    sponsors,
    headliner
  }
}

export default IndexPage