import express from 'express';
import bodyParser from 'body-parser';
import { saveContact } from './contactcontroller';

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/contact/add', saveContact);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
