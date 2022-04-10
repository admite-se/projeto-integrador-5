import express from "express";

const app = express();
const env = process.env;
const PORT = env.PORT || 8083;

app.get("/pagamentos/status", (req, res) => {
  res.status(200).send({
    success: "true",
    message: "Seja Bem-Vindo(a) a API de Pagamentos!",
  });
});

app.listen(PORT, () => {
  console.log(`API de Pagamentos iniciada com sucesso na porta ${PORT}`);
});
