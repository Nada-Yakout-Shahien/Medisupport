const express = require('express');
const bodyParser = require('body-parser');
const Pusher = require('pusher');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const pusher = new Pusher({
  appId: '1769609',
  key: '699bcc950016f00a1982',
  secret: 'b7880726b0215105cb62',
  cluster: 'eu',
  useTLS: true
});

app.post('/pusher/auth', (req, res) => {
  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const auth = pusher.authenticate(socketId, channel);
  res.send(auth);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
