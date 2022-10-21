const express = require('express');
const router = express.Router();

router.get('/demand', (req, res)=>{
    const str = [{
        "name": "Aregawi",
        "msg": "This is training from Node",
        "username": "aregawigdy"
    }];
    res.end(JSON.stringify(str));
});

router.post('/addDemand', (req, res) =>{
    res.end('NA');
});

module.exports = router;