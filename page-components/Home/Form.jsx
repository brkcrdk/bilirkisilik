import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SectionContainer, Input, Textarea } from 'components';
import { device } from 'theme';
import { useForm } from 'hooks';

function Form() {
  const [name, setName] = useState(false);
  const { dispatch, state } = useForm();

  const handleSend = () => {
    fetch('/api/send', { method: 'POST' });
    return toast('Mesajınız iletildi!', { type: 'success' });
  };

  const handleInputChange = (value, property) => {
    return dispatch({ type: property, payload: value });
  };

  return (
    <StyledForm title="İletişim Formu">
      <Content>
        <Input
          label="Adınız Soyadınız"
          placeholder="Adınızı giriniz.."
          value={state.name}
          onChange={(e) => handleInputChange(e.target.value, 'name')}
          onBlur={() => {
            if (state.name === '') return setName(true);
            return setName(false);
          }}
          error={name && 'Gerekli'}
        />
        <Input
          label="Email"
          placeholder="Email adresinizi giriniz.."
          value={state.email}
          onChange={(e) => handleInputChange(e.target.value, 'email')}
        />
        <Input
          label="Telefon Numaranız"
          placeholder="Telefon numaranızı giriniz.."
          value={state.phone}
          onChange={(e) => handleInputChange(e.target.value, 'phone')}
        />
        <Input
          label="Kısa Açıklama"
          placeholder="Kısa açıklama yazınız "
          value={state.description}
          onChange={(e) => handleInputChange(e.target.value, 'description')}
        />
      </Content>
      <CustomTextarea
        label="Mesajınız"
        placeholder="Mesajınızı giriniz.."
        value={state.message}
        onChange={(e) => handleInputChange(e.target.value, 'message')}
      />
      <ToastContainer />
    </StyledForm>
  );
}
export default Form;

const StyledForm = styled(SectionContainer)`
  max-width: 1000px;
`;

const Content = styled.div`
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
