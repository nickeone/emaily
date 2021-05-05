const express = require('express');
const app = express();



app.get('/',(req, res) => {
    console.log('req', req);
    console.log('res', res);

    res.send({'Hi': 'there'
    });

})

app.listen(5000);