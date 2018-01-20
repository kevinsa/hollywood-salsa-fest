import { Grid, Row, Col } from 'react-bootstrap'
import ContentSection from '../ContentSection'

const sponsors = (props) => {

  const sponsorContents = props.sponsors.map((sponsor) => {
    return (
        <div key={sponsor.id} className="sponsor">
          <img src={sponsor.imgUrl} />
          <style jsx>{`
            .sponsor {
              display: inline-block;
              margin-bottom: 7px;
              position: relative;
              padding: 10px;
            }
          `}</style>
      </div>
    )
  })

  return (
  <React.Fragment>
    <ContentSection title={ 'Event Sponsors' } theme={ 'white' } sectionId={ 'sponsors' }>
      <Col md={12}>
        <div className="sponsors">
          {sponsorContents}
        </div>
      </Col>
    </ContentSection>
    <style jsx>{`
      .sponsors {
        display: block;
        line-height: 0;
        margin-top: 10px;
        padding: 30px 10px;
        text-align: center;
      }
    `}</style>
  </React.Fragment>
  )
}
 
export default sponsors