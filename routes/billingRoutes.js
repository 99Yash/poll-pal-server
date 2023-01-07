const keys = require('../config/keys');
const requireLogin = require('../middlewares/requireLogin');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = (app) => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    if (!req.user) {
      return res.status(401).send({ error: 'You must login!' });
    }
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 500,
      currency: 'inr',
      description: 'inr 500 for 5 credits',
      payment_method_data: {
        type: 'card',
        card: {
          token: req.body.id,
        },
      },
      confirmation_method: 'manual',
      confirm: 'true',
    });

    req.user.credits += 5;
    const user = await req.user.save();
    res.send(user);
    console.log(paymentIntent);
  });
};
