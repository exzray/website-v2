const express = require('express');
const path = require('path');

const ngApp = express();

ngApp.use(express.static('./dist/website-v2'));

ngApp.get('/*', function (request, response) {
  response.sendFile(path.join(__dirname, '/dist/dist/website-v2/index.html'));
});

ngApp.listen(process.env.PORT || 8080);
