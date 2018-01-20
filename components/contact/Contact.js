import { Grid, Row, Col } from 'react-bootstrap'

const contact = () => (
  <React.Fragment>
    <section className="contact-section">
    <Grid>
      <Row>
        <Col lg={6} sm={12} xs={12}>
          <div className="contact">
            <h3>Event Information</h3>
            <ul>
              <li>
                <i className="fa fa-map-marker"></i> 1 N Young Cir, Hollywood, FL 33020
              </li>
              <li>
                <i className="fa fa-phone"></i> 1.800.993.9909
              </li>
              <li>
                <i className="fa fa-envelope"></i> info@hollywoodsalsafest.com
              </li>
              <li>
                <i className="fa fa-clock"></i> Saturday April 7th 2018 5pm - 11pm
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Grid>
    </section>
    <style jsx>{`
      .contact-section {
        padding-top: 60px;
        padding-bottom: 60px;
        background: whitesmoke;
      }
      .contact h3 {
        margin: 0 0 40px;
        text-transform: uppercase;
      }
      .contact ul { 
        list-style: none;
      }
      .contact ul li { 
        font-size: 16px;
        margin-bottom: 15px;
      }
      .contact ul li i { 
        background: #fff none repeat scroll 0 0;
        color: red;
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
        border-radius: 30px;
        font-size: 18px;
        height: 45px;
        line-height: 45px;
        margin-right: 20px;
        text-align: center;
        width: 45px;
      }
    `}</style>
  </React.Fragment>
)

export default contact