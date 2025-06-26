import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
const base = '/'
app.use(base, express.static('dist/client/'));
app.use((req, res, next) => {  
    ssrHandler(req, res, next, locals);
});

app.listen(process.env.PORT || 8080, (error) => {
  if( error ) {
    console.error(`Error al levantar el servicio: ${error}`);
  }
  console.log(`Servicio levantado en el puerto: ${process.env.PORT || 8080}`);
});