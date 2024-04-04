const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.setHeader('Accept-CH', 'Width, Downlink, Sec-CH-UA, Sec-CH-UA-Model')
  res.sendFile('index.html', { root: __dirname })
});

app.get('/parent', (req, res) => {
  // res.setHeader('Accept-CH', 'Width, Downlink, Sec-CH-UA, Sec-CH-UA-Model')
  res.sendFile('parent.html', { root: __dirname })
});

app.get('/api/init', (req, res) => {
  const httpClientHintModel = (req.headers["sec-ch-ua-model"])
  // res.setHeader('Accept-CH', 'Width, Downlink, Sec-CH-UA, Sec-CH-UA-Model')
  // res.setHeader('Vary', 'Accept, Width, ECT')
  // res.setHeader('Permissions-Policy', 'ch-ua-model=(self "http://localhost:3000")')
  res.json({ httpClientHintModel }).send()
});

app.get('/api/second', (req, res) => {
  const httpClientHintModel = (req.headers["sec-ch-ua-model"])
  // res.setHeader('Accept-CH', 'Sec-CH-UA-Model')
  res.json({ httpClientHintModel }).send()
});

app.listen(3000, () => {
  console.log('server started');
})