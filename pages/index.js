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

const IndexPage = (props) => (
  <Layout>
    <Welcome />
    <About />
    <Performance performers={props.performers} />
    <Schedule />
    <Sponsors sponsors={props.sponsors} />
    <Contact />
    <Location />
    <BottomNav />
  </Layout>
)

IndexPage.getInitialProps = async function (context) {
  const performers = [
    { id: 0, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' },
    { id: 1, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' },
    { id: 2, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' },
    { id: 3, name: 'Melina Almodovar', imgUrl: 'http://via.placeholder.com/200x200' }
  ]

  const sponsors = [
    { id: 0, name: '', imgUrl: 'http://via.placeholder.com/100x50' },
    { id: 1, name: '', imgUrl: 'http://via.placeholder.com/100x50' },
    { id: 2, name: '', imgUrl: 'http://via.placeholder.com/100x50' },
    { id: 3, name: '', imgUrl: 'http://via.placeholder.com/100x50' },
    { id: 4, name: '', imgUrl: 'http://via.placeholder.com/100x50' },
    { id: 5, name: '', imgUrl: 'http://via.placeholder.com/100x50' },
    { id: 6, name: '', imgUrl: 'http://via.placeholder.com/100x50' },
    { id: 7, name: '', imgUrl: 'http://via.placeholder.com/100x50' }
  ]

  return {
    performers,
    sponsors
  }
}

export default IndexPage