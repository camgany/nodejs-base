const express = require('express');
const routes = require('./routes');
const app = express();

app.use('/api', routes);

app.listen(3000, () => {
    console.log('Happy Codding the app listening on port 3000!');
});
