const path = require('path');
const express = require('express');
const router = require('./routes/index');
const ConnectDb = require('./config/database');
const dotenv = require('dotenv');

const app = express();
const contentFolder = path.resolve(__dirname, 'public');

dotenv.config();

ConnectDb();
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(contentFolder, 'contact.html'));
});
app.use('/api', router);

const __dir = path.resolve();

app.use('/api', express.static(path.join(__dir, 'uploads')));

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Application is running in this port ${port}`);
});
