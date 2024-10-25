const formData = require('form-data');
const Mailgun = require('mailgun.js');
  
class EmailService {
  static async sendRegistrationEmail(email, username) {
    console.log(process.env.MAILGUN_API_KEY);
    const mailgun = new Mailgun(formData);
    const mg = mailgun.client({ username: 'api', key: process.env.MAILGUN_API_KEY });
  
    mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: "Hebrew Learning <mailgun@sandbox92e403cfeb2f48cc8a88adfe5012f414.mailgun.org>",
      to: [email],
      subject: "Welcome to Hebrew Learning",
      text: `Dear ${username}, welcome to Hebrew Learning! Your account has been successfully created and your 30 days trial has started.`,
    })
    .then(msg => console.log(msg)) // logs response data
    .catch(err => console.error(e)); // logs any error
  }
}

module.exports = EmailService;