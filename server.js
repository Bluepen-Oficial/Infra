
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota principal
app.get('/', (req, res) => {
    res.status(200).json({
        mensagem: 'API funcionando!',
        status: 'online'
    });
});

// Rota de teste
app.get('/api/usuarios', (req, res) => {
    res.status(200).json([
        { id: 1, nome: 'Victor' },
        { id: 2, nome: 'João' }
    ]);
});

// Rota POST
app.post('/api/usuarios', (req, res) => {
    const { nome } = req.body;

    if (!nome) {
        return res.status(400).json({
            erro: 'O nome é obrigatório.'
        });
    }

    res.status(201).json({
        mensagem: 'Usuário cadastrado!',
        usuario: { nome }
    });
});

// Inicialização do servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
