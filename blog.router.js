const express = require('express');

//creer d'un nouvel objet de router
const blogRouter = express.Router();

blogRouter.get('/', (req, res)=> { 
    const prenom = "Rui";
    res.render('index.pug', {prenom})
});
blogRouter.get('/article', (req, res)=> { 

    res.render('article.pug')
});
blogRouter.get('/admin', (req, res)=>{ 
   
    res.render('admin/admin.pug')
});
blogRouter.get('/admin/edit', (req, res)=>{ 
   
    res.render('admin/edit.pug')
});
blogRouter.get('/admin/write', (req, res)=>{ 
   
    res.render('admin/write.pug')
});

//Export l'objet Router crée
module.exports = blogRouter;