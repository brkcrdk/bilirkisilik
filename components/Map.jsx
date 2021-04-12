import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { theme } from 'theme';

const Map = ({ coordinations }) => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAvYFSKMTb5CTg_g1gYRdVY9YWiaolXx2c' }}
      defaultCenter={{ lat: coordinations.lat, lng: coordinations.lng }}
      defaultZoom={14}
    >
      <CustomMarker
        lat={coordinations.lat}
        lng={coordinations.lng}
        className="icon-map-pin"
      />
    </GoogleMapReact>
  );
};

export default Map;

const CustomMarker = styled.i`
  font-size: ${theme.font20};
`;
