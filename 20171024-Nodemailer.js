// import mailer from 'nodemailer';
// import smtpTransport from 'nodemailer-smtp-transport';
// node8貌似不支持import，所以用回required。
const mailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

// 补充 author 代码
const author = {
  host: 'smtp.126.com', //用的126邮箱
  port: 25,
  secure: false, // upgrade later with STARTTLS
  auth: {
      user: 'hanwei_1989@126.com',  //使用自己的邮箱名；
      pass: '********'  //使用自己的密码；
    }
};

const transporter = mailer.createTransport(smtpTransport(author));

// 补充mailOptions代码。
let mailOptions = {
        from: '"韩巍" <hanwei_1989@126.com>', // sender address
        to: 'i@xugaoyang.com, hanwei_1989@126.com', // list of receivers
        subject: '答复:【10.24】批量发邮件', // Subject line
        text: '内容', // plain text body
        html: '<p>内容</p>' // html body(html和text二选一，两者都填默认html)
    };

transporter.sendMail(mailOptions, err => {
    if (err) {
      console.log(err);
    } else {
	  console.log('success');
	}
  });
