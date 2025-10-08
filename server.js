import app from './src/app.js';

const PORT = process.env.PORT;

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});