const express = require("express")
require("dotenv").config()

const app = express();

// rest endpoint
app.get('/rest', function(req, res) {
    res.json({
        data: 'you hit rest endpoint great!'
    });
});
// rest endpoint
app.get('/rests', function(req, res) {
    res.json({
        data: 'you hit rest endpoint great!'
    });
});
// rest endpoint
app.get('/restl', function(req, res) {
    res.json({
        data: 'you hit rest endpoint great!'
    });
});

app.listen(process.env.PORT, function() {
    console.log(`server is ready at http://localhost:${process.env.PORT}`);
});

