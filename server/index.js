const express = require('express');

const app = express();

app.get('/', (req,res) => {
  res.status(200);
  res.send('Hello World')
  res.end();
})

app.listen(3000, ()=> console.log('Example app listening on port 3000!'))//Not wrapped because one line and fatarrow
