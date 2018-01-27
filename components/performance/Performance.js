import { Grid, Row, Col } from 'react-bootstrap'
import ContentSection from '../ContentSection'

const performance = (props) => {

  const performerContents = props.performers.map((p) => {
    return (
          <React.Fragment key={p.id}>
          <Col key={p.id} lg={3}>
            <img className="img-performer" src={p.imgUrl} height="150"/>
            {/*
            <h3 className="title-performer">{p.name}</h3>
            */}
          </Col>
          <style jsx>{`
            .img-performer {
                display: table;
                margin: auto;
                border-radius: 50%;
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

  const descriptionContent = (
      <React.Fragment>
        <Col md={12}>
          <div className="wrapper">
            <p className="red">This year's performers to be announces shortly.   Artistas serán anunciados muy pronto.</p>
          </div>
          <style jsx>{`
            .wrapper {
              margin-bottom: 30px;
              text-align: center;
            }

            .wrapper .red {
              color: #D13B3D;
            }

            .wrapper p {
              font-size: 16px;
            }
          `}</style>
        </Col>
      </React.Fragment>
  )

  const pastPerformers = (
      <React.Fragment>
        <Col md={12}>
          <div className="wrapper">
            <h3>Previous Performers</h3>
            <p>
              Melina Almodovar, Chino Nuñez, Ramses Araya, Aymee Nuviola, Michelle Brava, Marlon Fernandez, Tito Puente Jr. and Orquesta Calle Sol
            </p>
            <br />
            <h3>Previous Dance Teams</h3>
            <p>
            Nuevolution Dance Studios, Cali Pal Mundo, Casa Salsa, Dvice, Salsa Central Dance Studios, and Dancing Thru Life
            </p>
          </div>
          <style jsx>{`
            .wrapper {
              margin-top: 50px;
              text-align: center;
            }
            .wrapper p {
              font-size: 16px;
            }
          `}</style>
        </Col>
      </React.Fragment>
  )

  return (
    <ContentSection title={ 'Event Performers' } theme={ 'lavendar' } sectionId={ 'performers' }>
      <Row>
        {descriptionContent}
      </Row>
      <Row>
        {performerContents} 
      </Row>
      <Row>
        {pastPerformers}
      </Row>
    </ContentSection>
  )
}

export default performance