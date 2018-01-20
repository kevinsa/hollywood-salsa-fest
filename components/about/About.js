import { Grid, Row, Col } from 'react-bootstrap'

const about = () => (
  <React.Fragment>
    <section className="about-section" id="about">
      <Grid>
        <Row>
          <Col md={12} className="text-center">
            <div className="section-title" id="about">
              <h2>Hollowood's 5th Annual Salsa Festival</h2>
              <h3>Arts Park @ Young Circle, Hollywood Fl</h3>
              <span></span>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus blandit elit in rutrum. Curabitur cursus, risus vel ornare sodales, leo sapien placerat orci, a blandit mauris ligula sed nibh. In auctor mi quis neque lobortis posuere. Mauris at turpis hendrerit turpis molestie euismod. Donec blandit justo et luctus facilisis. Aenean condimentum justo at convallis auctor. Nam aliquet eu felis vel sodales. Fusce in lorem viverra, pharetra nunc vitae, sagittis odio. Praesent molestie laoreet feugiat. Nam at scelerisque sem, et molestie dui. Donec metus mauris, viverra vel molestie volutpat, luctus vel orci. Vivamus quis lacus tempus, rhoncus odio ac, scelerisque est. Ut luctus semper rutrum
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus blandit elit in rutrum. Curabitur cursus, risus vel ornare sodales, leo sapien placerat orci, a blandit mauris ligula sed nibh. In auctor mi quis neque lobortis posuere. Mauris at turpis hendrerit turpis molestie euismod. Donec blandit justo et luctus facilisis. Aenean condimentum justo at convallis auctor. Nam aliquet eu felis vel sodales. Fusce in lorem viverra, pharetra nunc vitae, sagittis odio. Praesent molestie laoreet feugiat. Nam at scelerisque sem, et molestie dui. Donec metus mauris, viverra vel molestie volutpat, luctus vel orci. Vivamus quis lacus tempus, rhoncus odio ac, scelerisque est. Ut luctus semper rutrum
              </p>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
    <style jsx>{`
      .about-section {
        padding-top: 60px;
        background-color: whitesmoke;
      }

      .text-center {
        text-align: center;
      }

      .section-title {
        margin-bottom: 60px;
      }

      .section-title span {
        background: red;
        height: 10px;
        width: 70px;
        display: block;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
      }
      
    `}</style>
  </React.Fragment>
)

export default about