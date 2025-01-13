const express = require("express");
const app = express();
const {connectToDb} = require("./DB_Config");
const {router} = require('./routes/route.product');

app.use(express.json());
app.use('/products', router);

app.listen(8000,()=>connectToDb());