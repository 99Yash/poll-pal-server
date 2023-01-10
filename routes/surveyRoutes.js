const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');

const nodemailer = require('nodemailer');
const sendgridTransport = require('nodemailer-sendgrid-transport');

const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');

const keys = require('../config/keys');

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: keys.sendGridKey,
    },
  })
);

module.exports = (app) => {
  app.post('/api/surveys', requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(',')
        .map((email) => ({ email: email.trim() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    await transporter.sendMail({
      to: recipients,
      from: 'yashgouravkar@gmail.com',
      subject: subject,
      html: surveyTemplate(survey),
    });
  });
};
