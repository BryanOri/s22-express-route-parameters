const express = require('express')
const path = require('path')
const { disconnect } = require('process')
const { threadId } = require('worker_threads')
const app = express()
const port = 3000

const DISCOGRAPHIES = require('./discographies.json')
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'))
})

// STEP 1: Implement a new "search" route using an "artist" route parameter for
//         receiving the artist name (which will then automatically populate the
//         "req.params" object with an "artist" key-value pair)
//
//         NOTE: You may Google how to use route parameters with ExpressJS
app.get('/search/:artist', (req, res) => {

  // let keyObj = {banana : 0}
  // console.log("apple" in keyObj);
  if(req.params.artist in DISCOGRAPHIES){
    res.json(DISCOGRAPHIES[req.params.artist])
  }else{
      res.sendStatus(204).end();
  }
  // STEP 2: Check to see if the supplied "artist" name exists in the
  //         DISCOGRAPHIES object
  //
  //         NOTE: You may Google how to check if a key exists in an object

  // STEP 3: If the artist exists, respond with a JSON of the array containing the
  //         discography of the artist
  //
  //         NOTE: You may Google how to send JSON with ExpressJS

  // STEP 4: If the artist doesn't exist, respond with a status code that lets the
  //         requester know the request went OK but there was no content to be found
})
app.get("/list/", (req, res) => {
  let _list = [];
  for (let newlist in DISCOGRAPHIES){
      _list.push(newlist)
  }
  res.json(_list);

})

// STEP 5: Implement a new "list" route that responds with a JSON array containing
//         all the artists that exist in our DISCOGRAPHIES object
//
//         NOTE: You may Google how to get array of an object's keys


// STEP 6: Verify that both routes work as intended for all Steps

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})