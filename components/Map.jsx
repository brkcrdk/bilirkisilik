/* eslint-disable max-len */
import styled from 'styled-components';

const Map = () => (
  <StyledMap
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.3255761153155!2d32.741343315783425!3d39.95647297942126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDU3JzIzLjMiTiAzMsKwNDQnMzYuNyJF!5e0!3m2!1str!2str!4v1616524096218!5m2!1str!2str"
    style="border:0;"
    allowFullScreen=""
    loading="lazy"
  />
);

export default Map;

const StyledMap = styled.iframe`
  width: 100%;
  min-height: 200px;
`;
