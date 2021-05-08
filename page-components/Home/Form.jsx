import { useState } from 'react';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SectionContainer, Input, Textarea } from 'components';
import { device } from 'theme';

function Form() {
  const notify = () => toast('Mesajınız iletildi!', { type: 'success' });
  const [name, setName] = useState('');

  const handleTest = () => {
    fetch('/api/send', { method: 'POST' });
    return notify();
  };
  return (
    <StyledForm title="İletişim Formu">
      {/* <button onClick={notify}>Notify!</button>
      <button onClick={handleTest}>Gönder!</button> */}
      <Content>
        <Input
          value={name}
          label="Adınız Soyadınız"
          placeholder="Adınızı giriniz.."
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email adresinizi giriniz.."
          label="Email"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Telefon numaranızı giriniz.."
          label="Telefon Numaranız"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Kısa açıklama yazınız "
          label="Kısa Açıklama"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Content>
      <CustomTextarea />
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
