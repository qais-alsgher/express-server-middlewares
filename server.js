`use strict`;
const express = require('express');
const cors = require('cors');
const validate = require('./middlewares/validate-number');
const handleError = require('./error-handlers/500')
const app = express();
app.use(cors());
// app.use(validate);

app.get('/', (req, res) => {
    res.status(200).send('test');
})

app.get('/square', validate, (req, res) => {
    const vNum = req.isNum;
    const squareN = vNum * vNum;

    res.status(200).send({ num: squareN });

});

function start(PORT) {
    app.listen(PORT, console.log(`the server is start for port ${PORT}`));
}

app.use(handleError);
module.exports = {
    app: app,
    start: start
}