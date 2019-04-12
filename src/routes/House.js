import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from '../components/Maker';
import LOS_ANGELES_CENTER from '../const/la_center';
const getMapBounds = (map, maps, places) => {
    const bounds = new maps.LatLngBounds();
  
    places.forEach((place) => {
      bounds.extend(new maps.LatLng(
        place.geometry.location.lat,
        place.geometry.location.lng,
      ));
    });
    return bounds;
  };
  
  // Re-center map when resizing the window
  const bindResizeListener = (map, maps, bounds) => {
    maps.event.addDomListenerOnce(map, 'idle', () => {
      maps.event.addDomListener(window, 'resize', () => {
        map.fitBounds(bounds);
      });
    });
  };
const apiIsLoaded = (map, maps, places) => {
    // Get bounds by our places
    const bounds = getMapBounds(map, maps, places);
    // Fit map to bounds
    map.fitBounds(bounds);
    // Bind the resize listener
    bindResizeListener(map, maps, bounds);
  };
class House extends Component {
    constructor(props) {
        super(props);
        this.state = {
          places: [],
        };
      }
    static defaultProps = {
        center: {
            lat: 25.074223,
            lng: 121.577818
        },
        zoom: 2
    };
    componentDidMount() {
        fetch('places.json')
            .then(response => response.json())
            .then(data => this.setState({ places: data.results }));
    }

    render() {
        const { places } = this.state;
        return (

            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
            <h2>關於我</h2>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: 'AIzaSyD5g_QO7b1pBfgl9OtX6vchzZwX1Vmxo2Y' }}
                    defaultCenter={LOS_ANGELES_CENTER}
                    defaultZoom={this.props.zoom}
                    onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, places)}
                >
                    {places.map(place => (
                        <Marker
                            key={place.id}
                            text={place.name}
                            lat={place.geometry.location.lat}
                            lng={place.geometry.location.lng}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        );
    }
}

export default House;