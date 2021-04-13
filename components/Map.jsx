import { useContext } from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { color, theme } from 'theme';
import { SettingsContext } from 'context';

const Map = ({ ...props }) => {
  const {
    settings: { adres },
  } = useContext(SettingsContext);

  return (
    <MapContainer {...props}>
      <GoogleMapReact
        // Google maps api key
        bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_GOOGLE_MAP }}
        defaultCenter={{ lat: adres?.latitude, lng: adres?.longitude }}
        defaultZoom={14}
      >
        <CustomMarker
          lat={adres?.latitude}
          lng={adres?.longitude}
          className="icon-map-marker"
        />
      </GoogleMapReact>
    </MapContainer>
  );
};

export default Map;

const MapContainer = styled.div`
  min-height: 200px;
  width: 100%;
`;

const CustomMarker = styled.i`
  font-size: ${theme.font32};
  color: ${color.primary};
`;
