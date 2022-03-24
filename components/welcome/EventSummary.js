import { Grid, Row, Col } from 'react-bootstrap'

const eventSummary = (props) => (
  <React.Fragment>
    <Row className="hidden-xs hidden-sm">
      <Col md={4} sm={6} xs={12}>
        <div className="summary">
          <h3></h3>
        </div>
      </Col>
      <Col md={4} sm={6} xs={12}>
        <div className="summary">
          <h3></h3>
        </div>
      </Col>
      <Col md={4} sm={6} xs={12}>
        <div className="summary borderRightNone">
          <h3></h3>
        </div>
      </Col>
    </Row>
    <Row className="hidden-md hidden-lg">
      <Col md={12}>
        <div className="summary borderRightNone">
          <h3></h3>
        </div>
      </Col>
    </Row>
    <style jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Montserrat');
    
      .summary {
        margin-top: 120px;
        border-right: 1px solid #fff;
        color: #fff;
        text-align: center;
      }
      .summary h3 {
        font-size: 12px;
        letter-spacing: 2px;
        font-weight: 500;
        margin-top: 0
        font-family: 'Montserrat', sans-serif;
        text-transform: uppercase;
      }

      .borderRightNone {
        border-right: none;
      }

      @media only screen and (max-width:992px) {
        .summary {
          margin-top: 80px;
        }
      }
    `}</style>
  </React.Fragment>
)

export default eventSummary