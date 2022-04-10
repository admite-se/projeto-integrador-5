import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8085;

app.get("/recomendacoes/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Seja Bem-Vindo(a) a API de Recomendações!",
  });
});

app.listen(PORT, () => {
  console.log(`API de Recomendações iniciada com sucesso na porta ${PORT}`);
});
