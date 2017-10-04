const express = require ('express'),
      bodyParser = require ('body-parser'),
      app = express(),
      port = 3000,
      mc = require('./controllers/messages-controller');
      
      
app.use(bodyParser.json())     
app.use(express.static("__dirname + '/../public/build'"));

const messagesBaseUrl = "/api/messages";

app.post(messagesBaseUrl, mc.create);
app.get(messagesBaseUrl, mc.read);
app.put(`${messagesBaseUrl}/:id`, mc.update);
app.delete(`${messagesBaseUrl}/:id`, mc.delete)

app.listen(port, () => console.log(`listening on port ${port}`));