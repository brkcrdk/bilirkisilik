import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { SectionContainer } from 'components';

function Form() {
  const notify = () => toast('Mesajınız iletildi!', { type: 'success' });

  const handleTest = () => {
    fetch('/api/send', { method: 'POST' });
    return notify();
  };
  return (
    <SectionContainer title="İletişim Formu">
      <button onClick={notify}>Notify!</button>
      <button onClick={handleTest}>Gönder!</button>
      <ToastContainer />
    </SectionContainer>
  );
}
export default Form;
