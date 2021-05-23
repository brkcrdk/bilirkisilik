const { SocketLabsClient } = require('@socketlabs/email');

const serverId = 39325;
const injectionApiKey = 'k2YAg9b8ERo36ZqDj75H';

const client = new SocketLabsClient(serverId, injectionApiKey);

export default async function email(request, response) {
  const { name, email, subject, phone, message } = request.body;

  const mailMessage = {
    to: 'info@kriminalincelemeleri.com',
    from: 'brkcrdk@gmail.com',
    subject: 'Hello from Node.js',
    textBody: 'This message was sent using the SocketLabs Node.js library!',
    htmlBody:
      '<html>This message was sent using the SocketLabs Node.js library!</html>',
    messageType: 'basic',
  };

  // return client.send(mailMessage).then(
  //   (e) => {
  //     //Handle successful API call
  //     console.log(e);
  //     return response.status(200).json({ message: 'Mesajınız iletildi' });
  //   },
  //   (err) => {
  //     //Handle error making API call
  //     console.log(err);
  //   }
  // );
}
