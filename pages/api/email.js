const { SocketLabsClient } = require('@socketlabs/email');

const serverId = 39325;
const injectionApiKey = 'k2YAg9b8ERo36ZqDj75H';

const client = new SocketLabsClient(serverId, injectionApiKey);

export default async function email(request, response) {
  const { name, email, subject, phone, message } = request.body;

  const mailMessage = {
    to: 'info@kriminalincelemeleri.com',
    from: 'brkcrdk@gmail.com',
    subject: subject,
    textBody: `${message}`,
    htmlBody: `<html>
      <ul>
        <li>Ad Soyad: ${name}</li>
        <li>Telefon Numarası: ${phone}</li>
        <li>Email: ${email}</li>
      </ul>
      <h5>Mesaj:</h5>
      <p>${message}</p>
    </html>`,
    messageType: 'basic',
  };

  return client.send(mailMessage).then(
    (e) => {
      //Handle successful API call
      console.log(e);
      return response.status(200).json({ message: 'Mesajınız iletildi' });
    },
    (err) => {
      //Handle error making API call
      console.log(err);
    }
  );
}
