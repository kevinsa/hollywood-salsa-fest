import { Grid, Row, Col } from 'react-bootstrap'

const contentSection = (props) => {

  const theme = { fgColor: '#301540', bgColor: '#fff', underline: '#E80A40' }

  switch(props.theme) {
    case 'black':
      theme.fgColor = "#fff"
      theme.bgColor = "#000"
      break;
    case 'smoke':
      theme.bgColor = "whitesmoke"
      break;
    case 'lavendar':
      theme.bgColor = "#ececfb"
      theme.fgColor = "#301540"
      break;
    case 'purple':
      theme.bgColor = "#301540"
      theme.fgColor = "#fff"
      break;
    default:
      break;
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
        { props.children }
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
        background: ${theme.underline}
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