 require('dotenv').config();
 const mercadopago = require('mercadopago');
 const { buggyModel, userModel } = require('../models/index.js');
 
 const mercadoKey = process.env.MERCADO_KEY;
 
 mercadopago.configure({
   access_token: mercadoKey,
 });
 
 const createPreference = async (req, res) => {
   // buscar el usuario en la base de datos
  //  let user = await userModel.findOne({ _id: req.body.userId });
  //  //console.log(req.body)
  //  if (user) {
  //    let buggy = await buggyModel.findOne({ userId: req.body.userId });
  //    if (buggy) {
       // crear un item para cada producto en el carrito
       let user = req.body.userId;
       let cart = req.body.products;
       let items = cart?.map(product => {
         return {
           userId: user,
           title: product.name,
           unit_price: product.price,
           description: product.description,
           quantity: product.quantity,
           currency_id: 'UYU',
         }
       });
       // crear la preferencia con los items y las URLs de retorno
       let preference = {
         back_urls: {
           success: `https://e-commerce-clothing-three.vercel.app/pagado`,
         },         
         items: items
       };
       try {
         const response = await mercadopago.preferences.create(preference);
         res.send(response.body.init_point);
       } catch (error) {
         //console.log(error);
         res.status(500).send({ message: "Error al procesar la solicitud" });
       }
  //    } else {
  //      res.status(404).send({ message: "No se encontró el carrito del usuario" });
  //    }
  //  } else {
  //    res.status(404).send({ message: "No se encontró el usuario" });
  //  }
 }
 
 module.exports = { createPreference };
 





  //  const createPreference = async (req, res) => {
//      let preference = {
//          back_urls: {    
//              success: 'http://localhost:3000/success',
//          },
//          items: [
//              {
//                  title: 'Mi producto',
//                  unit_price: 10,
//                  description: "magic product",
//                  quantity: 1,
//                  currency_id: 'UYU',
//              },
//          ],
//      };
//      try {
//          const response = await mercadopago.preferences.create(preference);
//          res.send(response.body.init_point);
//      } catch (error) {
//          console.log(error);
//          res.status(500).send({ message: "Error al procesar la solicitud" });
//      }
//  };