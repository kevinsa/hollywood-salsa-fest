import { Grid, Row, Col } from 'react-bootstrap'
import { Carousel } from 'react-responsive-carousel';
import ContentSection from '../ContentSection'

const gallery = (props) => {

  return (
  <React.Fragment>
    <ContentSection title={ 'Event Gallery' } theme={ 'smoke' } sectionId={ 'gallery' }>
      <Col md={12}>
          <div className="carousel-container">
            <Carousel>
                <div>
                    <img src="/static/images/gallery/carousel-4.jpg" />
                    <p className="legend">Arts Park Venue</p>
                </div>
                <div>
                    <img src="/static/images/gallery/carousel-5.jpg" />
                    <p className="legend">Arts Park Venue</p>
                </div>
                {/*
                <div>
                    <img src="/static/images/gallery/carousel-3.jpg" />
                    <p className="legend">Food and Merchandise</p>
                </div>
                */}
            </Carousel>
          </div>
      </Col>
    </ContentSection>
    <style jsx>{`
      .carousel-container {
        text-align: center;
      }
    `}</style>
  </React.Fragment>
  )
}
 
export default gallery
