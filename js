// Chave para o localStorage
const CHAVE_STORAGE = "blog_empatia_posts";

// Posts de exemplo iniciais
const POSTS_PADRAO = [
    {
        id: 1,
        titulo: "O Poder da Empatia no Dia a Dia",
        texto: "Empatia não é apenas se colocar no lugar do outro, mas ouvir sem julgar. Quando praticamos a escuta ativa, criamos pontes de confiança e tornamos o ambiente ao nosso redor mais acolhedor.",
        data: "30/07/2026"
    },
    {
        id: 2,
        titulo: "Cooperação Gera Resultados Incríveis",
        texto: "Quando trabalhamos juntos em prol de um objetivo comum, dividimos os desafios e multiplicamos as conquistas. O trabalho em equipe transforma ideias em realidade!",
        data: "30/07/2026"
    }
];

// Carregar posts ao abrir a página
document.addEventListener("DOMContentLoaded", carregarPosts);

function carregarPosts() {
    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);
    let posts = [];

    if (dadosSalvos) {
        posts = JSON.parse(dadosSalvos);
    } else {
        posts = POSTS_PADRAO;
        salvarNoStorage(posts);
    }

    renderizarPosts(posts);
}

function criarPost() {
    const tituloInput = document.getElementById("titulo");
    const textoInput = document.getElementById("texto");

    const titulo = tituloInput.value.trim();
    const texto = textoInput.value.trim();

    if (titulo === "" || texto === "") {
        alert("Por favor, preencha o título e a mensagem antes de publicar!");
        return;
    }

    const novoPost = {
        id: Date.now(),
        titulo: titulo,
        texto: texto,
        data: new Date().toLocaleDateString('pt-BR')
    };

    const postsAtualizados = obterPostsSalvos();
    postsAtualizados.unshift(novoPost);
    
    salvarNoStorage(postsAtualizados);
    renderizarPosts(postsAtualizados);

    tituloInput.value = "";
    textoInput.value = "";
}

function deletarPost(id) {
    if (confirm("Tem certeza que deseja excluir esta publicação?")) {
        let posts = obterPostsSalvos();
        posts = posts.filter(post => post.id !== id);
        
        salvarNoStorage(posts);
        renderizarPosts(posts);
    }
}

function renderizarPosts(posts) {
    const listaPostsContainer = document.getElementById("listaPosts");
    listaPostsContainer.innerHTML = "";

    posts.forEach(post => {
        const artigo = document.createElement("article");
        artigo.classList.add("post");

        artigo.innerHTML = `
            <h3>${post.titulo}</h3>
            <p>${post.texto}</p>
            <div class="post-rodape">
                <span class="data">Publicado em: ${post.data}</span>
                <button class="btn-excluir" onclick="deletarPost(${post.id})">
                    Excluir
                </button>
            </div>
        `;

        listaPostsContainer.appendChild(artigo);
    });
}

function salvarNoStorage(lista) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

function obterPostsSalvos() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    return dados ? JSON.parse(dados) : [];
}