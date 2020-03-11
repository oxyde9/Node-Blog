const express = require('express');

//creer d'un nouvel objet de router
const blogRouter = express.Router();

blogRouter.get('/', (req, res)=> { 
    const prenom = "Rui";
    res.render('index.pug', {prenom})
});
blogRouter.get('/admin', (req, res)=> res.send('Bienvenue'));

//Export l'objet Router crée
module.exports = blogRouter;