import GoogleMapReact from 'google-map-react'

const EventMarker = ({ text }) => (
  <React.Fragment>
    <div>
      <span>{text}</span>
      <i className="fa fa-map-marker"></i>
    </div>
    <style jsx>{`
      div {
        position: absolute;
        top: -30px;
        right: -10px;
        text-align: center;
      }
      span {
        display: block;
        font-weight: 600;
        color: #000;
      }
      i {
        font-size: 16px;
        color: red;
      }
    `}</style>
  </React.Fragment>
)

class SimpleMap extends React.Component {
  static defaultProps = {
    center: { lat: 26.0113843, lng: -80.1423338 },
    zoom: 15
  }

  render() {
    return (
      <React.Fragment>
      <div className="google-map">
        <GoogleMapReact 
          bootstrapURLKeys={{ key: 'AIzaSyC8RZ6GLGl3SbEC95bJKGrNHURMBzcBqA0'}}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}>
            <EventMarker lat={26.0113843} lng={-80.1423338} text={ 'Arts Park' } />
        </GoogleMapReact>
      </div>
      <style jsx>{`
       .google-map {
         height: 400px;
         width: 100%;
       } 
      `}</style>
      </React.Fragment>
    )
  }
}

export default SimpleMap