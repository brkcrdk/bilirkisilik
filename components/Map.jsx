/* eslint-disable max-len */
import GoogleMapReact from 'google-map-react';

const Map = () => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAvYFSKMTb5CTg_g1gYRdVY9YWiaolXx2c' }}
      defaultCenter={{ lat: 59.95, lng: 39.33 }}
      defaultZoom={11}
    />
  );
};

export default Map;
