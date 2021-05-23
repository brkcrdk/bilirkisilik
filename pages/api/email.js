const { SocketLabsClient } = require('@socketlabs/email');

const serverId = 39325;
const injectionApiKey = 'k2YAg9b8ERo36ZqDj75H';

const client = new SocketLabsClient(serverId, injectionApiKey);
const message = {
  to: 'info@kriminalincelemeleri.com',
  from: 'brkcrdk@gmail.com',
  subject: 'Hello from Node.js',
  textBody: 'This message was sent using the SocketLabs Node.js library!',
  htmlBody:
    '<html>This message was sent using the SocketLabs Node.js library!</html>',
  messageType: 'basic',
};

export default async function email(request, response) {
  console.log(request);
  const { message, email } = request.body;

  // return client.send(message).then(
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
