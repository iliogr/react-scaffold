"use strict";

import express from 'express'
import bodyParser from 'body-parser'
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

app.listen(4000, () => {
   console.log("App listening on 4000")
});
