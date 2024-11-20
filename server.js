import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Array de posts de exemplo (será substituído por dados do banco de dados)
const posts = [
    { descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150", id: 1 },
    { descricao: "Gato fazendo yoga", imagem: "https://placekitten.com/400/200", id: 2 },
    { descricao: "Gato fazendo panqueca", imagem: "https://placekitten.com/400/200", id: 3 },
];

// Cria uma instância do Express, que será o nosso servidor web
const app = express();

routes(app)


// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

