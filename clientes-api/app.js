import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8081;

app.get("/clientes/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Seja Bem-Vindo(a) a API de Clientes!",
  });
});

app.listen(PORT, () => {
  console.log(`API de Clientes iniciada com sucesso na porta ${PORT}`);
});
