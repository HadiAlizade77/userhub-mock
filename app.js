//CONFIG
const dynamicApi = 'http://127.0.0.1:8000/api/auth/planning_dynamic_endpoint'
const toolURL = 'http://127.0.0.1:8000/'
//
const axios = require('axios')
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
let responses = JSON.parse(fs.readFileSync('responsesMock.json'));

app.get('/', (req, res) => {
  let request_code = req.query.request_code || null;
  let request = responses.auth[getRandomInt(3)]
  request.request_code = request_code
  if (request_code !== null){
    console.log('Hi :) I sent this response to your server')
    console.log(request)
    axios.post(dynamicApi,request).then((response)=>{
      res.redirect(toolURL+'login?payload_code='+request.payload_code)
      console.log(response.data)
    }).catch((err)=>{
      res.send('youre server didnt respond with 200')
      console.log('youre server didnt respond with 200')
      if(typeof err.response !== 'undefined'){
        console.log('message:' + err.response.data.message)
        console.log('file:' + err.response.data.file)
        console.log('line:' + err.response.data.line)
      }
      else {
        console.log('\x1b[31m', 'BUT your server didnt respond')  //cyan
      }
    })
  }else{
    res.send('check your console for info')
    console.log('\x1b[31m', '')  //cyan
  }
})
///helpers
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)) | 0 ;
}

app.listen(port, () => {
  console.log(`UserHub mock listening at http://localhost:${port}`)
})
