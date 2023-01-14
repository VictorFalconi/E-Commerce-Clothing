 require('dotenv').config();
 const mercadoKey = process.env.MERCADO_KEY;

 const mercadopago = require('mercadopago');
 mercadopago.configure({
     access_token: mercadoKey,
 });

 const createPreference = async (req, res) => {
     let preference = {
         back_urls: {    
             success: 'http://localhost:3000/success',
         },
         items: [
             {
                 title: 'Mi producto',
                 unit_price: 10,
                 description: "magic product",
                 quantity: 1,
                 currency_id: 'UYU',
             },
         ],
     };
     try {
         const response = await mercadopago.preferences.create(preference);
         res.send(response.body.init_point);
     } catch (error) {
         console.log(error);
         res.status(500).send({ message: "Error al procesar la solicitud" });
     }
 };

 module.exports = { createPreference };
