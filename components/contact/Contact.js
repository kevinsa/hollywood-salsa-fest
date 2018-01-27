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
                <i className="fa fa-map-marker"></i> <a href="http://maps.google.com/maps?q=1 n young cir, hollywood, fl 33020">1 N Young Cir, Hollywood, FL 33020</a>
              </li>
              <li>
                <i className="fa fa-phone"></i> <a href="tel:954.399.0151">954.399.0151</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i> <a href="mailto:info@hollywoodsalsafest.com">info@hollywoodsalsafest.com</a>
              </li>
              <li>
                <i className="fa fa-clock"></i> Saturday April 7th 2018 at 5PM
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6} sm={12} xs={12}>
          <div className="contact">
            <h3>Sponsorship Information</h3>
            <div>
              Want to promote you business at the festival?  Sponsorship packages and food/merchandise booths are available for purchase.  To learn more about how you can promote your business at the
              festival please contact us at <a href="tel:954.399.0151">954.399.0151</a> or <a href="mailto:info@hollywoodsalsafest.com">info@hollywoodsalsafest.com</a>
            </div>
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
        color: #301540;
        text-transform: uppercase;
      }

      .contact a {
        color: #6B0DC1;
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