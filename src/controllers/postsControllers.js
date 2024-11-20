import getTodosPosts from "../models/postsModel.js";

export async function listarPosts (req, res) {
    // Chama a função para buscar todos os posts
const posts = await getTodosPosts();
    // Envia os posts como resposta em formato JSON
res.status(200).json(posts);  
}

