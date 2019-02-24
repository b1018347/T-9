const express = require('express');
const cors = require('cors');
const  t9 = require('t9-rest-api');
const app = express();
const port = 5000 || process.env.PORT;

app.use(cors());
app.use('/api/words', t9);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));