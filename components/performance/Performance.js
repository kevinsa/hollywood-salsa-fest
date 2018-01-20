import { Grid, Row, Col } from 'react-bootstrap'
import ContentSection from '../ContentSection'

const performance = (props) => {

  const performerContents = props.performers.map((p) => {
    return (
          <Col key={p.id} lg={3}>
            <img className="img-circle" src={p.imgUrl} />
            <h3>{p.name}</h3>
          </Col>
    )
  })

  return (
    <ContentSection title={ 'Event Performers' } theme={ 'white' } sectionId={ 'performers' }>
        {performerContents} 
        <style jsx>{`
          .img {
            display: table;
            margin: auto;
            border-radius: 50%;
            padding: 5px;
            border: 1px solid red;
          }

          .h3 {
            font-weight: 500;
            text-align: center;
          }
        `}</style>
    </ContentSection>
  )
}

export default performance