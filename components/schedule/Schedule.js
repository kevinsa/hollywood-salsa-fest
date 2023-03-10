import { Grid, Row, Col } from 'react-bootstrap'
import ContentSection from '../ContentSection'

const schedule = () => (
  <ContentSection title={ 'Saturday, April 8th 2023' } theme={ 'purple' } sectionId={ 'schedule' }>
    <Col sm={12} md={10} mdOffset={2}>
      {/*
      <div className="schedule-item">
        <span className="time pull-left">
          <i className="fa fa-clock"></i> 2PM  <span className="hidden-md hidden-lg">Live DJ</span>
        </span>
        <span className="title hidden-xs hidden-sm">
          Live DJ
        </span>
      </div>
      <div className="schedule-item">
        <span className="time pull-left">
          <i className="fa fa-clock"></i> 7PM  <span className="hidden-md hidden-lg">Dance Show</span> 
        </span>
        <span className="title hidden-xs hidden-sm">
          Dance Show
        </span>
      </div>
      */}
      <div className="schedule-item noborder">
        <span className="time">
          <i className="fa fa-clock"></i> 2PM-11PM  <span className="hidden-md hidden-lg">All Day Event</span>
        </span>
        <span className="title hidden-xs hidden-sm ">
          All Day Event
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

      .schedule-item .time span {
        margin-left: 5px;
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