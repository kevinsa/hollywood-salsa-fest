import { Grid, Row, Col } from 'react-bootstrap'
import EventSummary from './EventSummary'


const Welcome = (props) => (
  <React.Fragment>
    <header>
      <Grid>
        <Row>
          <Col md={12} className="text-center">
            <div className="hero-text">
              <h1>Hollywood Salsa Festival</h1>
              <h5>
                postponed due to covid-19
              </h5>
              <p>
                Saturday, September 12th 2020
              </p>
            </div>
          </Col>
        </Row>
        <EventSummary />
      </Grid>
    </header>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Comfortaa|Montserrat');

      header {
        background-color: #000;
        /*
        background-image: url('static/images/welcome-bg.jpg');
        background-size: cover;
        background-position: 0% 40%
        */
        height: 600px;
        position: relative;
        z-index: 0;
      }

      header:before {
        content: ' ';
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        opacity: 0.6;
        background-image: url('static/images/welcome-bg.jpg');
        background-size: cover;
        background-position: 0% 40%
      }

      .text-center {
        text-align: center;
      }

      .hero-text {
        padding-top: 250px;
        color: #fff;
      }
      
      .hero-text p {
        color: #fff;
        font-size: 25px;
        font-weight: 500;
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
      }

      .hero-text h1 {
        font-size: 80px;
        font-weight: 700;
        color: #D2B4DE;
        font-family: 'Comfortaa', cursive;
        margin-bottom: 0px;
      }

      .hero-text h5 {
        color: yellow;
        text-transform: uppercase;
        margin: 0px;
      }

      @media only screen and (max-width:768px) {
        .hero-text {
          padding-top: 100px;
        }
        .hero-text h1 {
          font-size: 40px;
        }

        header {
          height: 400px;
        }
      }
    `}</style>
  </React.Fragment>
)

export default Welcome