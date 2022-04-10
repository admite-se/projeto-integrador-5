import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8084;

app.get("/notificacoes/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Seja Bem-Vindo(a) a API de Notificações!",
  });
});

app.listen(PORT, () => {
  console.log(`API de Notificações iniciada com sucesso na porta ${PORT}`);
});
