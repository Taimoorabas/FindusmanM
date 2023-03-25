const path = require('path');
const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const contentFolder = path.resolve(__dirname, 'public');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(contentFolder, 'contact.html'));
});
app.post('/send', (req, res) => {
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usman@findusman.me',
      pass: '21f8cc421',
    },
  });
  const mailOptions = {
    from: req.body.email,
    to: 'usman@findusman.me',
    subject: 'ok',
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log('Email successfully send');
      res.send('success');
    }
  });
});

const port = 5000;

app.listen(port, () => {
  console.log(`Application is running in this port ${port}`);
});
