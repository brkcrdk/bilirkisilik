import styled from 'styled-components';
import { color, theme } from 'theme';

function Textarea({
  error,
  title = 'Test',
  placeholder = 'Mesajınızı giriniz',
  value,
  onChange,
  ...props
}) {
  return (
    <StyledTextarea {...props}>
      <InputTitle>{title}</InputTitle>
      <CustomTextarea
        hasError={error}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <InputError>{error}</InputError>
    </StyledTextarea>
  );
}
export default Textarea;

const StyledTextarea = styled.div`
  position: relative;
`;

const CustomTextarea = styled.textarea`
  box-sizing: border-box;
  width: 100%;
  min-height: 100px;
  resize: none;
  padding: 10px 10px;
  border-color: ${(p) => (p.hasError ? color.red : color.text300)};
  border-radius: ${theme.borderRadius};
  font-weight: 300;
  font-family: Work Sans;
  font-size: ${theme.font16};
  outline: none;
  transition: ${theme.transition};
  background: ${color.backgroundColor};

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
  font-size: ${theme.font16};
  font-weight: 300;
  font-family: Work Sans;
`;

const InputError = styled.label`
  position: absolute;
  bottom: -20px;
  font-size: ${theme.font14};
  font-weight: 300;
  font-family: Work Sans;
  color: ${color.red};
`;
