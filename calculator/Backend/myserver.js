const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


app.get('/', (req, res) => {
  res.send('Hello');
})



app.post('/calci', (req, res) => {
    var n1 = parseInt(req.body.n1, 10);
    var n2 = parseInt(req.body.n2, 10);
    var op = req.body.op;
    var n3;
    if(op == '+'){
        n3 = n1 + n2;
    }
    else if(op == '-'){
        n3 = n1 - n2;
    }
    else if(op == '*'){
        n3 = n1 * n2;
    }
    else if(op == '/'){
        n3 = n1 / n2;
    }
    n3 = n3.toString();
    res.send(n3);
});

app.listen(3001);
console.log('Server Started. Listening on port 3001');