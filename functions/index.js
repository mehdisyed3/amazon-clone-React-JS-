const functions = require('firebase-functions');
const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51HvtWZDBgrMbvem7JPjOJaIhYO669u0xnY1jQr9HrBWIpmx02Y7aJGUP4QdHGwzyuupEkaOaKOrkeWHRcvaNKPFI00N9ToyI5h')


// To set up an API we need the following
//- App Config
const app = express()

//- Middlewares
app.use(cors({ origin: true }))
app.use(express.json())
//= API routes

app.get('/', (req, res) => res.status(200).send('hello!'))


app.post('/payment/create', async (req, res) => {
  const total = req.query.total

  console.log("Payment REquesT Receevied for this " = total)

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });
})

// - Listen command

exports.api = functions.https.onRequest(app)