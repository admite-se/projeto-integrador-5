import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8082;

app.get("/vagas/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Seja Bem-Vindo(a) a API de Vagas!",
  });
});

app.listen(PORT, () => {
  console.log(`API de Vagas iniciada com sucesso na porta ${PORT}`);
});
