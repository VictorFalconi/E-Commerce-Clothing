const express = require('express');
const router = express.Router();
const { createPreference } = require('../controllers/mercadoPago');

router.post('/generar', createPreference);
router.get('/success', (req, res) => {
    res.send('Pago realizado con éxito');
});

router.post('/notification', (req, res) => {
    console.log('Notificación recibida');
    res.send('Notificación recibida');
});

module.exports = router;
















// require('dotenv').config();
// const express = require('express');
// // const http = require('http');

// const app = express();

// const port = process.env.PORT || 3000;

// const mercadopagoKey = process.env.MERCADOPAGO_KEY;


// app.get('/generar', (req, res) => {
// let preference = {
//     back_urls: {    
//         success: 'https://mercadopago-production.up.railway.app/success',
//     },
//     items: [
//         {
//             title: 'Mi producto',
//             unit_price: 100,
//             quantity: 1,
//             currency_id: 'UYU',
//         },
//     ],
//      Notification_url: 'https://mercadopago-production.up.railway.app/notification', 
// };

// mercadopago.preferences
//     .create(preference)
//     .then(function (response) {
//         console.log(response.body.init_point);
//         res.send(response.body.init_point);
//     })
//     .catch(function (error) {
//         console.log(error);
//     });
    
// });

// app.get('/success', (req, res) => {
//     res.send('Pago realizado con éxito');
// });


// app.post('/notification', (req, res) => {
//     console.log('Notificación recibida');
//     res.send('Notificación recibida');
// });



// const mercadopago = require('mercadopago');
// mercadopago.configure({
//     access_token: mercadopagoKey,
// });




// // http.createServer(app).listen(app.get('port'), () => {
// //     console.log(` HTTP escuchando en puerto ${port}`)
// // });


