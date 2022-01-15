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
                <i className="fa fa-envelope"></i> <a href="mailto:melinasalsa@gmail.com">melinasalsa@gmail.com</a>
              </li>
              <li>
                <i className="fa fa-envelope"></i> <a href="mailto:cristinasalsafest@gmail.com">cristinasalsafest@gmail.com</a>
              </li>
              <li>
                <i className="fa fa-clock"></i> Saturday April 9th, 2022 @ 12PM
              </li>
            </ul>
          </div>
        </Col>
        <Col lg={6} sm={12} xs={12}>
          <div className="contact pad-top">
            <h3>Sponsorship Information</h3>
            <div>
              Want to promote your business at the festival?  Sponsorship packages and food/merchandise booths are available for purchase.  To learn more about how you can promote your business at the
              festival view our <a href="https://drive.google.com/file/d/1Pa3GCPsB9Cqx6cBI0WmYOyzq3yR0iMYE/view?usp=sharing" target="_blank">sponsorship packages</a> and contact us at <a href="tel:954.399.0151">954.399.0151</a>
              
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

      @media only screen and (max-width:768px) {
        .contact {
          margin-top: 20px;
        }

        .contact ul li i { 
          background: #fff none repeat scroll 0 0;
          color: red;
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
          border-radius: 30px;
          font-size: 18px;
          height: 45px;
          line-height: 45px;
          margin-right: 0px;
          text-align: center;
          width: 45px;
        }
      }
    `}</style>
  </React.Fragment>
)

export default contact