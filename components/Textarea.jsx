import styled from 'styled-components';

function Textarea({ ...props }) {
  return (
    <StyledTextarea {...props}>
      <CustomTextarea />
    </StyledTextarea>
  );
}
export default Textarea;

const StyledTextarea = styled.div``;

const CustomTextarea = styled.textarea`
  width: 100%;
`;
