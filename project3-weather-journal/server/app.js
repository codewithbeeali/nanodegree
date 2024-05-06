const express = require('express')
const app = express()
var cors = require('cors')
// const bodyParser = require('body-parser')
app.use(express.json())
app.use(cors())


//creating an GET API
// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

//Fetch dynamic values
// app.get('/:name/:id', function (req, res) {
//     console.log(req.params)
//     res.send('Sanat i am too good for UDACITY, can you pass this degree?')
//   })

//Post-API , always take two arguments
app.post('/post-weather-data', (request,response) => {
    console.log(request.body);
    response.send({ 
        success:true 
    });
    
});

app.listen(3000, () => {
    console.log('server started, running on port 3000');
})