import conectarAoBanco from "../config/dbConfig.js"
// Conecta ao banco de dados MongoDB usando a string de conexão fornecida no ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export default async function getTodosPosts() {
    // Obtém o banco de dados "imersão-instabytes" da conexão
    const db = conexao.db("imersão-instabytes");
    // Obtém a coleção "posts" do banco de dados
    const colecao = db.collection("posts");
    // Retorna todos os documentos da coleção como um array
    return colecao.find().toArray();
}

