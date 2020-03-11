const express = require('express');
const app = express();
const blogRouter = require('./blog.router');
app.set('view engine', 'pug');

app.set('views', './views');

const PORT = 9000;
const HOST = 'localhost';

//traite les routes pour la partie front-office
app.use('/', blogRouter);

//Demarrage de l'appli
//---------------------------------




app.listen(PORT, HOST, () => console.log(`Exemple app listening sur  http://${HOST}:${PORT}`));