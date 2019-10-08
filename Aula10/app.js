
const express = require('express');
const bodyparser = require('body-parser');  
const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());


const adminRoutes = require('./routes/adminRoutes.js')
app.use(adminRoutes);

app.listen(3000, () => {
    console.log("Escutando na porta 3000");
});