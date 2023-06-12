const express = require('express');
const app = express();
const path = require('path');
const router = require("./src/routes/web.router");
const port = 8000;

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('./src/public'));
app.use(router);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});