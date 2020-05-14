import app from './app';
import port from './config/env';

app.listen(port, () => {
  console.log(`Executando na porta ${port}`);
});
