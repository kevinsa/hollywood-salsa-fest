import { Grid, Row, Col } from 'react-bootstrap'
import SimpleMap from './SimpleMap'

const location = () => (
  <React.Fragment>
    <section className="location-section">
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <SimpleMap />
          </Col>
        </Row>
      </Grid>
    </section>
    <style jsx>{`
      .location-section {
        padding-top: 60px;
        background-color: whitesmoke;
      }
    `}</style>
  </React.Fragment>
)

export default location
