const express = require('express');
const app = express();

app.get('/a', (req, res) => {
    res.send({ hi: 'body' });

});

// const PORT = process.env.PORT || 5000;
app.listen(5000);