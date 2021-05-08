import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SectionContainer, Input } from 'components';
import { useState } from 'react';

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
  grid-template-columns: repeat(2, 1fr);
  margin: 0 20px;
  gap: 60px;
`;
