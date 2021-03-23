const express = require('express');



const app = express();



// const rootCall = (req, res)=>{
//     res.send('Thank you very much');
// }

app.get('/',(req, res)=>{
    const fruit ={
        product: 'coconut',
        price:200
    }
    res.send(fruit);
});

app.listen(3000,()=>{
    console.log('listening on port 3000');
});