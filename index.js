 const express = require ('express');
 const app = express ();

 app.get('/' , (req, res) => res.json ({message: 'Hello, 375'}));

 app.listem(3030, () => console.log('App started'));
