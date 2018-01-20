import { Grid, Row, Col } from 'react-bootstrap'

const bottomNav = () => (
  <React.Fragment>
  <div className="footer">
    <Grid>
      <Row>
        <Col md={6} xs={12}>
          <div className="copyright">
            <p>Copyright © 2018 | All Rights Reserved</p>
          </div>
        </Col>
      </Row>
    </Grid>

  </div>
  <style jsx>{`
    @import url('https://fonts.googleapis.com/css?family=Comfortaa|Montserrat');

    .footer {
      padding: 30px 0;
    }

    .copyright p {
      color: #333;
      font-size: 14px;
      margin-bottom: 0;
      text-transform: uppercase;
      font-family: 'Montserrat', sans-serif;
    }
  `}</style>
  </React.Fragment>

)
 
export default bottomNav