const nodemailer = require('nodemailer');

export default async function send(req, res) {
  const transporter = nodemailer.createTransport({
    pool: true,
    host: 'smtpout.secureserver.net',
    port: 465,
    secure: true,
    auth: {
      user: 'info@kriminalincelemeleri.com',
      pass: 'yesim.yildiz12',
    },
  });
  const mailSend = await transporter.sendMail({
    from: 'brkcrdk@gmail.com',
    to: 'info@kriminalincelemeleri.com',
    subject: 'Test Email Subject',
    html: '<h1>Example HTML Message Body</h1>',
  });

  if (mailSend.accepted.length)
    return res.status(200).json({ message: 'Mesajınız iletildi' });
  return res.status(200).json({ message: 'Bir hata oluştu' });
}
