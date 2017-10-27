// text.js
//
// import mailer from 'nodemailer';
// import smtpTransport from 'nodemailer-smtp-transport';
const fs = require('fs');
const mailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

let eamilContent = fs.readFileSync("./email.html", 'utf8');
// console.log(eamilContent);
// console.log(typeof eamilContent);



// 补充 author 代码
const author = {
  host: 'smtp.126.com',
  port: 465,
  secure: true, // upgrade later with STARTTLS
  auth: {
      user: 'hanwei_1989@126.com',
      pass: '********'
    }
};

const transporter = mailer.createTransport(smtpTransport(author));

// 补充mailOptions代码。
let mailOptions = {
        from: '"韩巍" <hanwei_1989@126.com>', // sender address
        to: 'i@xugaoyang.com, hanwei_1989@126.com', // list of receivers
        subject: '答复:【10.25】优化批量发邮件的内容', // Subject line
        // text: '刚刚忘记改自己的姓名了。', // plain text body
        html: eamilContent // html body
    };

transporter.sendMail(mailOptions, err => {
    if (err) {
      console.log(err);
    } else {
	  console.log('success');
	}
  });
