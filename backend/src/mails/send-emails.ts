import * as nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nelshohat@gmail.com',
    pass: 'Nora&&nora237',
  },
});

export const sendEmail = (email, id) => {
  const url = `http://localhost:4000/users/reset-password/${id}`;
  let mailOptions = {
    from: 'nelshohat@gmail.com', // sender address
    to: `${email}`, // list of receivers
    subject: 'Mail Confirmation ✔', // Subject line
    text: `
    This Is Your URl to Confirm Your New Password for your email ${email} :
     ${url}`,
  };
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log('Error Occurs', err);
    } else {
      console.log('Message Sent', data);
    }
  });
};
