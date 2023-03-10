import { Grid, Row, Col } from 'react-bootstrap'

const about = () => (
  <React.Fragment>
    <section className="about-section" id="about">
      <Grid>
        <Row>
          <Col md={12} className="text-center">
            <div className="section-title" id="about">
              <Row>
                <Col md={3}>
                  <img src="/static/images/logo.jpg" />
                </Col>
                <Col md={6}>
                  <div className="header">
                    <h3>Arts Park @ Young Circle, Hollywood Fl</h3>
                    <h5>1 N Young Cir, Hollywood, FL 33020</h5>
                  </div>
                </Col>
                <Col md={3}>
                  <img src="/static/images/logo.jpg"  className="hidden-xs hidden-sm"/>
                </Col>
              </Row>
              {/*
              <Row>
                <p>
                  <img src="/static/images/banner-flyer-2020.jpg" />
                </p>
              </Row>
              */}
              <p>
              For the past seven years The Hollywood Salsa Festival and its founders Melina Almodovar and Cristina Moinelo have dedicated themselves to the mission of keeping Salsa Music alive and well in our society by dedicating one day a year in the beautiful city of Hollywood, Florida at Arts Park at Young Circle to celebrating and enjoying salsa music in all its forms. 
              We welcome all of you salsa fans to our world of rumba, clave, and guaguanco for our 8th anniversary festival on Saturday April 8th 2023 at 2:00 pm at Arts Park at Young Circle, Hollywood FL.
              This event is free for all that want to enjoy the wonders of Salsa Music in all its forms Orchestras, dance performances, djs and more.
              </p>
              <br /><br />
              <p>
              Por los ultimos siete años el Hollywood Salsa Festival y sus fundadoras Melina Almodovar y Cristina Moinelo, se han propuesto la meta y la misión de celebrar y mantener viva la música y el género de la salsa en todas sus formas en nuestra sociedad, dedicando un día alaño en la bella ciudad de Hollywood, Florida en su parque Arts Park at Young Circle a la música salsera que amamos tanto.
              Los invitamos a nuestro mundo salsero de rumba, clave, y guaguancó el sábado, 8 de Abril, 2023 a las 2:00pm en el parque Arts Park at Young Circle en Hollywood, Florida para gozar de nuestra música y nuestras raíces Latinas.
              Este evento es totalmente gratis para todos los que desean difrutar en grande de nuestra cultura y música salsera en todas sus formas; Orquestas, presentaciones de baile, djs y mucho mas.
              </p>
              <div className="social-media">
                <h3>Visit us social media</h3>
                <a href="http://www.facebook.com/hollywoodsalsafestival" target="_blank">
                  <img className="pad-right" src="/static/images/facebook-icon.png" atl="salafest-facebook-link" />
                </a>
                <a href="https://www.instagram.com/hollywoodsalsafestival/?hl=en" target="_blank">
                  <img src="/static/images/instagram-icon.png" alt="salsafest-instagram-link" />
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    </section>
    <style jsx>{`
      .about-section {
        background-color: #fff;
      }
      
      .about-section img {
        height: 150px;
      }

      .text-center {
        text-align: center;
      }

      .section-title {
        margin-bottom: 60px;
      }

      .section-title .header {
        margin-top: 75px;
      }

      .section-title .header h3, .section-title .header h5 {
        color: #6B0DC1;
        font-family: 'Montserrat',sans-serif;
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

      .section-title p {
        font-size: 16px;
      }

      .about-section .social-media {
        margin-top: 20px
      }

      .about-section .social-media .pad-right {
        margin-right: 10px;
      }

      .about-section .social-media img {
        height: 50px;
        width: 50px;
      }

      @media only screen and (max-width:768px) {
        .section-title .header {
          margin-top: 10px;
        }
      }
    `}</style>
  </React.Fragment>
)

export default about