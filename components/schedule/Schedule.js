import { Grid, Row, Col } from 'react-bootstrap'
import ContentSection from '../ContentSection'

const schedule = () => (
  <ContentSection title={ 'Saturday April 7th 2018' } theme={ 'purple' } sectionId={ 'schedule' }>
    <Col md={10} mdOffset={2}>
      <div className="schedule-item">
        <span className="time pull-left">
          <i className="fa fa-clock"></i> 5:00PM
        </span>
        <span className="title">
          Live DJ
        </span>
      </div>
      <div className="schedule-item">
        <span className="time pull-left">
          <i className="fa fa-clock"></i> 7:00PM
        </span>
        <span className="title">
          Dance Performances
        </span>
      </div>
      <div className="schedule-item noborder">
        <span className="time pull-left">
          <i className="fa fa-clock"></i> 8:00PM
        </span>
        <span className="title">
          Musical Performances
        </span>
      </div>
    </Col>
    <style jsx>{`
      .schedule-item {
        padding: 20px 0 20px 0;
        font-size: 24px;
        border-bottom: 1px solid red;
      }

      .schedule-item .time i {
        color: #E80A40;
      }

      .schedule-item .title {
        padding-left: 75px;
        color: #ececfb;
      }

      .noborder {
        border: none;
      }

      @media only screen and (max-width:768px) {

        .schedule-item {
          padding: 20px 0 20px 0;
          font-size: 14px;
          border-bottom: 1px solid red;
        }
      }
    `}</style>
  </ContentSection>
)

export default schedule