
const express = require('express');
const bodyparser = require('body-parser');  

const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.static('public')); //o padrao é /public, então pode ser omitido
app.use('/data', express.static('data'));

//incluindo meu novo router
const userRoutes = require('./routes/userRoutes');
app.use(userRoutes);

//antes da página de erro devemos definir os nossos routers
const adminRoutes = require('./routes/adminRoutes');
app.use('/admin', adminRoutes);


app.use((req, res) => {
    res.status(404);
    res.write("ERRO! PÁGINA INEXISTENTE!");
    res.end();
});

app.listen(3000, () => console.log("Listening at 3000"));