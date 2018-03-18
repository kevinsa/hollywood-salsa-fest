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
    <Sponsors sponsors={props.sponsors} />
    <Contact />
    <Location />
    <BottomNav />
  </Layout>
)

IndexPage.getInitialProps = async function (context) {
  const performers = [
    { id: 0, name: 'Melina Almodovar', imgUrl: '/static/images/performers/melina-almodovar.jpg' },
    { id: 1, name: 'Luisito Carrion', imgUrl: '/static/images/performers/luis-carrion.jpg' },
    { id: 2, name: 'El Buho Loco', imgUrl: '/static/images/performers/crazy-owl.jpg' },
    { id: 3, name: 'Ramses Araya', imgUrl: '/static/images/performers/ramses.jpg' },
    { id: 4, name: 'Mario Ortiz', imgUrl: '/static/images/performers/mario-ortiz.jpg' },
    { id: 5, name: 'Jerry Santiago', imgUrl: '/static/images/performers/jerry-santiago.jpg' },
    { id: 6, name: 'DJ Raya', imgUrl: '/static/images/performers/dj-raya.jpg' },
    { id: 7, name: 'MC Negro Fino', imgUrl: '/static/images/performers/nelson-fritz.jpg' }
  ]

  const sponsors = [
    { id: 0, name: '', imgUrl: '/static/images/sponsors/cba-realty-logo.jpg', height: '125' },
    { id: 1, name: '', imgUrl: '/static/images/sponsors/hollywood-cra-logo.jpg', height: '125' },
    { id: 2, name: '', imgUrl: '/static/images/sponsors/budlight.jpg', height: '125' },
    { id: 3, name: '', imgUrl: '/static/images/sponsors/presidente.jpg', height: '125' },
    { id: 4, name: '', imgUrl: '/static/images/sponsors/casa-borinquen.jpg', height: '125' },
    { id: 5, name: '', imgUrl: '/static/images/sponsors/gasolina.jpg', height: '125' },
    { id: 6, name: '', imgUrl: '/static/images/sponsors/prowater.jpg', height: '125' },
    { id: 7, name: '', imgUrl: '/static/images/sponsors/yo-soy-latino.jpg', height: '125' },
  ]

  return {
    performers,
    sponsors
  }
}

export default IndexPage