"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer = require("nodemailer");
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'nelshohat@gmail.com',
        pass: 'Nora&&nora237',
    },
});
const sendEmail = (email, id) => {
    const url = `http://localhost:4000/users/reset-password/${id}`;
    let mailOptions = {
        from: 'nelshohat@gmail.com',
        to: `${email}`,
        subject: 'Mail Confirmation ✔',
        text: `
    This Is Your URl to Confirm Your New Password for your email ${email} :
     ${url}`,
    };
    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('Error Occurs', err);
        }
        else {
            console.log('Message Sent', data);
        }
    });
};
exports.sendEmail = sendEmail;
//# sourceMappingURL=send-emails.js.map