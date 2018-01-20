import { Grid, Row, Col } from 'react-bootstrap'

const contentSection = (props) => {

  const theme = { fgColor: '#000', bgColor: '#fff' }

  switch(props.theme) {
    case 'black':
      theme.fgColor = "#fff"
      theme.bgColor = "#000"

    default:
  }
  
  return (
  <React.Fragment>
    <section className="content-section" id={props.sectionId || ''}>
      <Grid>
        <Row>
          <Col md={12} className="text-center">
            <div className="section-title">
              <h2>{props.title}</h2>
              <span></span>
              <p>
              </p>
            </div>
          </Col>
        </Row>
        <Row>
            { props.children }
        </Row>
      </Grid>
    </section>
    <style jsx>{`
      .content-section {
        padding: 60px 60px;
        background-color: ${theme.bgColor};
        color: ${theme.fgColor};
      }

      .text-center {
        text-align: center;
      }

      .section-title {
        margin-bottom: 60px;
      }

      .section-title h2 {
        color: ${theme.fgColor};
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
}

export default contentSection