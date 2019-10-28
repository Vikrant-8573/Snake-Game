const express = require('express');

let app = express();

// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.sendFile('web.html', {
        root: './views'
    });
});

app.listen(8080, () => {
    console.log('Server started at port 5000');
});