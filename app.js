const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
let responses = JSON.parse(fs.readFileSync('responsesMock.json'));

app.get('/', (req, res) => {

  console.log('Hi :) I sent a response to your server')
  let request_code = req.query.request_code ;
  let payload_code = req.query.payload_code;
  let request = responses.auth[getRandomInt(3)]
  request.request_code = request_code

  axios.post('http://127.0.0.1:8000/api/dynamic',request).then((response)=>{
    res.redirect('http://127.0.0.1:8000');
  console.log(response)
  }).catch((err)=>{
    res.send('sorry but youre not a valid user :D');
    console.log(err)
  })
})



app.listen(port, () => {
  console.log(`UserHub mock listening at http://localhost:${port}`)
})

///helpers
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) | 0 ;
}