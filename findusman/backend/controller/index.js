// const nodemailer = require('nodemailer');
// const handleMail = (req, res) => {
//   console.log(req.body);
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'usman@findusman.me',
//       pass: '21f8cc421',
//     },
//   });
//   const mailOptions = {
//     from: req.body.email,
//     to: 'usman@findusman.me',
//     subject: 'ok',
//     text: req.body.message,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       res.send('error');
//     } else {
//       console.log('Email successfully send');
//       res.send('success');
//     }
//   });
// };
// module.exports = handleMail;

const User = require('../model/user');
const nodemailer = require('nodemailer');
const asyncHandler = require('express-async-handler');

// Path         /api/send
// Type         Post
// Access       Private
// Desc         Create User
const userData = asyncHandler(async (req, res) => {
  const { name, email, message, file } = req.body;
  const user = new User({
    name,
    email,
    message,
    file,
  });

  const createdUser = await user.save();
  res.json({
    _id: createdUser._id,
    name: createdUser.name,
    email: createdUser.email,
    message: createdUser.message,
    file: createdUser.file,
  });
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'usman@findusman.me',
      pass: '21f8cc421',
    },
  });
  const mailOptions = {
    from: createdUser.email,
    to: 'usman@findusman.me',
    subject: 'ok',
    text: createdUser.message,
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

module.exports = userData;
