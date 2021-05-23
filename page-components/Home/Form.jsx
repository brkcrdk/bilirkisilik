import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SectionContainer, Input, Textarea } from 'components';
import { color, device, theme } from 'theme';
import { useForm } from 'hooks';

function Form() {
  const { dispatch, state } = useForm();

  const handleSend = async () => {
    fetch('/api/email', { method: 'POST' });
    return toast('Mesajınız iletildi!', { type: 'success' });
  };

  const handleInputChange = (value, property) => {
    if (value !== '') {
      dispatch({ type: `${property}_error`, payload: '' });
    }
    return dispatch({ type: property, payload: value });
  };

  const handleBlurValidate = (property) => {
    if (property === 'email' && !state.email.value.match(/\S+@\S+\.\S+/gi))
      return dispatch({
        type: 'email_error',
        payload: 'Geçersiz mail girdiniz.',
      });
    if (state[property].value === '') {
      return dispatch({ type: `${property}_error`, payload: 'Gerekli' });
    }
    return dispatch({ type: `${property}_error`, payload: '' });
  };

  return (
    <StyledForm title="İletişim Formu">
      <Content>
        <Input
          label="Adınız Soyadınız"
          placeholder="Adınızı giriniz.."
          value={state.name.value}
          onChange={(e) => handleInputChange(e.target.value, 'name')}
          onBlur={() => handleBlurValidate('name')}
          error={state.name.error}
        />
        <Input
          label="Email"
          placeholder="Email adresinizi giriniz.."
          value={state.email.value}
          onChange={(e) => handleInputChange(e.target.value, 'email')}
          onBlur={() => handleBlurValidate('email')}
          error={state.email.error}
          type="email"
        />
        <Input
          label="Telefon Numaranız"
          placeholder="Telefon numaranızı giriniz.."
          value={state.phone.value}
          onChange={(e) =>
            handleInputChange(e.target.value.replace(/[^0-9]/g, ''), 'phone')
          }
          onBlur={() => handleBlurValidate('phone')}
          error={state.phone.error}
          maxLength="10"
        />
        <Input
          label="Kısa Açıklama"
          placeholder="Kısa açıklama yazınız "
          value={state.description.value}
          onChange={(e) => handleInputChange(e.target.value, 'description')}
          onBlur={() => handleBlurValidate('description')}
          error={state.description.error}
        />
      </Content>
      <CustomTextarea
        label="Mesajınız"
        placeholder="Mesajınızı giriniz.."
        value={state.message.value}
        onChange={(e) => handleInputChange(e.target.value, 'message')}
        onBlur={() => handleBlurValidate('message')}
        error={state.message.error}
      />
      <SendButton alt="Mesaj Gönder." title="Mesaj Gönder" onClick={handleSend}>
        Gönder
      </SendButton>
      <ToastContainer />
    </StyledForm>
  );
}
export default Form;

const StyledForm = styled(SectionContainer)`
  max-width: 1000px;
`;

const Content = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 6fr);
  margin: 0 20px;
  gap: 60px;
  @media ${device.tablet} {
    column-gap: 24px;
  }
  @media ${device.phone} {
    grid-template-columns: 1fr;
  }
`;

const CustomTextarea = styled(Textarea)`
  /* grid-column: 1/3; */
  margin: 0 20px;
  margin-top: 60px;
`;

const SendButton = styled.button`
  text-align: center;
  margin: 0 20px;
  margin-top: 30px;
  padding: 10px;
  background: ${color.primary};
  color: ${color.backgroundColor};
  border-radius: ${theme.borderRadius};
  max-width: 200px;
`;
