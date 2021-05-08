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
    <SectionContainer title="İletişim Formu">
      <button onClick={notify}>Notify!</button>
      <button onClick={handleTest}>Gönder!</button>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <ToastContainer />
    </SectionContainer>
  );
}
export default Form;
