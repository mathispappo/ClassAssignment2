const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile('/Users/mathispappo/Documents/Assigment 2/public');
})

app.get('/api/burger', (req, res) => {
    console.log(req.query)
    if (req.query.value== 'BigMac'){
        res.send([{Nom:"Steak"},{Nom:"Salade"},{Nom:"Fromage" },{Nom:"Pain" }])
    }
    if (req.query.value== 'TripleCheese'){
        res.send([{Nom:"Steak"},{Nom:"Fromage"},{Nom:"Cornichons" },{Nom:"Pain" }])
    }
    if (req.query.value== '280Original'){
        res.send([{Nom:"Ognion"},{Nom:"Tomates"},{Nom:"Oeuf" },{Nom:"Steak" },{Nom:"Pain" }])
    }
});

app.listen(port, ()=>{
    console.log('Example app listening on port', port);
})
