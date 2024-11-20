import express from "express"
import { listarPosts } from "../controllers/postsControllers.js";

 const routes = (app) => {
        // Permite que o Express entenda dados no formato JSON enviados em requisições
    app.use(express.json());
        // Rota para obter todos os posts
    app.get("/posts", listarPosts);
}

export default routes;

