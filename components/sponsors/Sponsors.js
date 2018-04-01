import { Grid, Row, Col } from 'react-bootstrap'
import ContentSection from '../ContentSection'

const sponsors = (props) => {

  const sponsorContents = props.sponsors.map((sponsor) => {
    let imgWidth = sponsor.hasOwnProperty('width') ? sponsor.width : '';

    return (
        <div key={sponsor.id} className="sponsor">
          <img src={sponsor.imgUrl} height={sponsor.height} width={imgWidth} />
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
    <Row>
      <Col md={12}>
        <div className="main-sponsor">
          <img src={props.headliner.imgUrl} height={props.headliner.height} />
        </div>
        <div className="sponsors">
          {sponsorContents}
        </div>
      </Col>
    </Row>
    </ContentSection>
    <style jsx>{`
      .sponsors {
        display: block;
        line-height: 0;
        margin-top: 10px;
        padding: 30px 10px;
        text-align: center;
      }

      .main-sponsor {
        text-align: center;
      }
    `}</style>
  </React.Fragment>
  )
}
 
export default sponsors