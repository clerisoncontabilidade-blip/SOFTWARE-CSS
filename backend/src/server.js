const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend está rodando corretamente!' });
});

// Import routes
const clienteRoutes = require('./routes/clienteRoutes');
const financeiroDashboardRoutes = require('./routes/financeiroDashboardRoutes');
const notaFiscalRoutes = require('./routes/notaFiscalRoutes');
const autenticacaoRoutes = require('./routes/autenticacaoRoutes');

// Use routes
app.use('/api/clientes', clienteRoutes);
app.use('/api/financeiro', financeiroDashboardRoutes);
app.use('/api/notas-fiscais', notaFiscalRoutes);
app.use('/api/auth', autenticacaoRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo deu errado!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});

module.exports = app;