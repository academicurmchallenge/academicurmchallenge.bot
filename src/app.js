import express from 'express';

const PORT = parseInt(process.env.PORT) || 8080;

const app = express();

app.listen(PORT, () => {
  console.log('listening on port %d', PORT);
});
