import styled from 'styled-components';
import { color, theme } from 'theme';
function Input({ label = 'Test..', error, placeholder = 'Test', ...props }) {
  return (
    <StyledInput>
      {label && <InputTitle>{label}</InputTitle>}
      <CustomInput hasError={error} placeholder={placeholder} {...props} />
      {error && <InputError>{error}</InputError>}
    </StyledInput>
  );
}

export default Input;

const StyledInput = styled.form`
  position: relative;
`;

const CustomInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 10px 10px;
  font-size: ${theme.font16};
  outline: none;
  background: ${color.backgroundColor};
  border-width: 1px;
  border-style: solid;
  border-color: ${(p) => (p.hasError ? color.red : color.text300)};
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
  font-weight: 300;
  font-family: Work Sans;
  &:focus {
    border: 1px solid ${color.primary};
    box-shadow: ${theme.boxShadow150};
  }
  &::placeholder {
    color: ${color.text400};
  }
`;

const InputTitle = styled.label`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: ${theme.font16};
  font-weight: 300;
  font-family: Work Sans;
`;

const InputError = styled.label`
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: ${theme.font14};
  font-weight: 300;
  font-family: Work Sans;
  color: ${color.red};
`;
