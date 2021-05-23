const { SocketLabsClient } = require('@socketlabs/email');

export default async function email(request, response) {
  const { name, email, subject, phone, message } = request.body;

  // serverId number olmak zorunda ama env dosyasından id string olarak geliyor
  const serverId = parseInt(process.env.EMAIL_SERVER_ID);
  const injectionApiKey = process.env.EMAIL_SERVER_KEY;

  const client = new SocketLabsClient(serverId, injectionApiKey);

  const mailMessage = {
    to: 'info@kriminalincelemeleri.com',
    from: email,
    subject: subject,
    textBody: `${message}`,
    htmlBody: `<html>
      <ul>
        <li>Ad Soyad: ${name}</li>
        <li>Telefon Numarası: <a href='tel:${phone}'>${phone}</a></li>
        <li>Email: ${email}</li>
      </ul>
      <h3>Mesaj:</h3>
      <p>${message}</p>
    </html>`,
    messageType: 'basic',
  };

  return client.send(mailMessage).then(
    () => {
      return response.status(200).json({ message: 'Mesajınız iletildi' });
    },
    (err) => {
      console.log(err);
    }
  );
}
