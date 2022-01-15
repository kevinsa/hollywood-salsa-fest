import { Grid, Row, Col } from 'react-bootstrap'
import ContentSection from '../ContentSection'

const performerColumns = (performers) => {
  const contents = performers.map(p => {
    return (
          <React.Fragment key={p.id}>
          <Col key={p.id} lg={3}>
            <img className="img-performer" src={p.imgUrl} height="150"/>
            <h3 className="title-performer">{p.name}</h3>
          </Col>
          <style jsx>{`
            .img-performer {
                display: table;
                margin: auto;
                padding: 5px;
                border: 1px solid red;
              }


            .title-performer {
              font-weight: 500;
              text-align: center;
            }
          `}</style>
          </React.Fragment>
    )
  })
  return contents
}

const performance = (props) => {
  return (
    <ContentSection title={ 'Event Performers' } theme={ 'lavendar' } sectionId={ 'performers' }>
      <Row>
        <p className="performance-flyer">
          <img className="img-responsive" src="/static/images/banner-flyer-2022.jpg" />
        </p>
      </Row>
      {/*
     <Row>
        {performerColumns(props.performers.slice(0, 4))}
     </Row>
     <Row>
        {performerColumns(props.performers.slice(4, 8))}
     </Row>
     <Row>
        {performerColumns(props.performers.slice(8, 12))}
     </Row>
     <Row>
       <div className="last">
        {performerColumns(props.performers.slice(12, 16))}
        </div>
     </Row>
      */}
     <style jsx>{`
       .last {
         margin-top: 60px;
       }

       p.performance-flyer {
         text-align: center;
       }

       p.performance-flyer img {
         display: initial;
       }
     `}</style>
    </ContentSection>
  )
}

export default performance