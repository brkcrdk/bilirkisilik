import { useContext } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { color, theme } from 'theme';
import { SettingsContext } from 'context';
const Map = () => {
  const {
    settings: { adres },
  } = useContext(SettingsContext);
  return (
    <GoogleMapReact
      bootstrapURLKeys={{ key: 'AIzaSyAvYFSKMTb5CTg_g1gYRdVY9YWiaolXx2c' }}
      defaultCenter={{ lat: adres?.latitude, lng: adres?.longitude }}
      defaultZoom={14}
    >
      <CustomMarker
        lat={adres?.latitude}
        lng={adres?.longitude}
        className="icon-map-marker"
      />
    </GoogleMapReact>
  );
};

export default Map;

const CustomMarker = styled.i`
  font-size: ${theme.font32};
  color: ${color.primary};
`;
