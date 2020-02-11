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
    { id: 0, name: 'Tito Puente Jr', imgUrl: '/static/images/performers/2020/tito-puente-jr.jpg' },
    { id: 1, name: 'Menique', imgUrl: '/static/images/performers/2020/menique.jpg' },
    { id: 2, name: 'Bobby Cruz', imgUrl: '/static/images/performers/2020/bobby-cruz.jpg' },
    { id: 3, name: 'Orquesta Del Rey', imgUrl: '/static/images/performers/2020/orquesta-del-rey.jpg' },
    { id: 4, name: 'Melina Almodovar', imgUrl: '/static/images/performers/2020/melina-almodovar.jpg' },
    { id: 5, name: 'Timbalive', imgUrl: '/static/images/performers/2020/timbalive.png' },
    { id: 6, name: 'Le Perla Cubana', imgUrl: '/static/images/performers/2020/la-perla-cubana.jpg' },
    { id: 7, name: 'Miguel Cruz & Sugarcane', imgUrl: '/static/images/performers/2020/miguelito-cruz.jpg' },
    { id: 8, name: 'Leonardo Sierra', imgUrl: '/static/images/performers/2020/leonardo-sierra.jpg' },
    { id: 9, name: 'Edwin El Calvito Reyes', imgUrl: '/static/images/performers/2020/edwin-el-calvito-reyes.jpg' },
    { id: 10, name: 'David Lucca y Los Clasicos De La Salsa', imgUrl: '/static/images/performers/2020/david-lucca.jpg' },
    { id: 11, name: 'El Buho Loco', imgUrl: '/static/images/performers/2020/crazy-owl.jpg' },
    { id: 12, name: 'DJ Carmencita', imgUrl: '/static/images/performers/2020/dj-carmencita.jpg' },
    { id: 13, name: 'DJ Danny O', imgUrl: '/static/images/performers/2020/dj-danny-o.jpg' },
    { id: 14, name: 'Nelson Fritz', imgUrl: '/static/images/performers/2020/nelson-fritz.jpg' },
    { id: 15, name: 'Thelma Cruz', imgUrl: '/static/images/performers/2020/thelma-cruz.jpg' },
  ]

  const sponsors = [
    { id: 0, name: '', imgUrl: '/static/images/sponsors/cba-realty-logo.jpg', height: '100' },
    { id: 1, name: '', imgUrl: '/static/images/sponsors/hollywood-cra-logo.jpg', height: '100' },
    { id: 2, name: '', imgUrl: '/static/images/sponsors/hispanic-chamber.jpg', height: '80', width: '250' }
  ]

  const headliner = { id: 5, name: '', imgUrl: '/static/images/sponsors/gasolina.jpg', height: '250' }

  return {
    performers,
    sponsors,
    headliner
  }
}

export default IndexPage