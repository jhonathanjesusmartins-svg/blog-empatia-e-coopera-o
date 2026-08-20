blog empatia e cooperação const CHAVE_STORAGE = "elosocial_posts";

const POSTS_PADRAO = [
    {
        id: 1,
        titulo: "Escuta Ativa no Trabalho",
        categoria: "Empatia",
        texto: "Hoje decidi ouvir meus colegas sem interromper. A comunicação fluiu muito melhor!",
        curtidas: 5,
        data: "20/08/2026"
    },
    {
        id: 2,
        titulo: "Projeto em Equipe",
        categoria: "Cooperação",
        texto: "Dividimos as tarefas do projeto e conseguimos entregar tudo antes do prazo.",
        curtidas: 8,
        data: "20/08/2026"
    }
];

// Carrega os posts assim que a página é aberta
document.addEventListener("DOMContentLoaded", () => {
    carregarPosts();
});

function carregarPosts() {
    const dadosSalvos = localStorage.getItem(CHAVE_STORAGE);
    let posts = dadosSalvos ? JSON.parse(dadosSalvos) : POSTS_PADRAO;

    if (!dadosSalvos) {
        salvarNoStorage(posts);
    }

    renderizarPosts(posts);
}

function criarPost() {
    // Pega os elementos do formulário
    const campoTitulo = document.getElementById("titulo");
    const campoCategoria = document.getElementById("categoria");
    const campoTexto = document.getElementById("texto");

    // Extrai os valores sem espaços em branco nas pontas
    const titulo = campoTitulo ? campoTitulo.value.trim() : "";
    const categoria = campoCategoria ? campoCategoria.value : "Empatia";
    const texto = campoTexto ? campoTexto.value.trim() : "";

    // Validação dos campos
    if (titulo === "" || texto === "") {
        alert("Por favor, preencha o título e a mensagem antes de publicar!");
        return;
    }

    // Cria o novo objeto da publicação
    const novoPost = {
        id: Date.now(),
        titulo: titulo,
        categoria: categoria,
        texto: texto,
        curtidas: 0,
        data: new Date().toLocaleDateString("pt-BR")
    };

    // Obtém a lista atual, adiciona o novo post no topo e salva
    const posts = obterPostsSalvos();
    posts.unshift(novoPost);

    salvarNoStorage(posts);
    renderizarPosts(posts);

    // Limpa os campos após publicar
    campoTitulo.value = "";
    campoTexto.value = "";
}

function curtirPost(id) {
    const posts = obterPostsSalvos();
    const post = posts.find(p => p.id === id);
    if (post) {
        post.curtidas += 1;
        salvarNoStorage(posts);
        renderizarPosts(posts);
    }
}

function deletarPost(id) {
    if (confirm("Deseja excluir esta publicação?")) {
        const posts = obterPostsSalvos().filter(p => p.id !== id);
        salvarNoStorage(posts);
        renderizarPosts(posts);
    }
}

function filtrarPosts() {
    const campoBusca = document.getElementById("campoBusca");
    if (!campoBusca) return;

    const termo = campoBusca.value.toLowerCase();
    const posts = obterPostsSalvos();

    const postsFiltrados = posts.filter(p => 
        p.titulo.toLowerCase().includes(termo) || 
        p.texto.toLowerCase().includes(termo) ||
        p.categoria.toLowerCase().includes(termo)
    );

    renderizarPosts(postsFiltrados, false);
}

function renderizarPosts(posts, atualizarContador = true) {
    const container = document.getElementById("listaPosts");
    if (!container) return;

    container.innerHTML = "";

    if (atualizarContador) {
        const contadorElemento = document.getElementById("totalPosts");
        if (contadorElemento) {
            contadorElemento.innerText = obterPostsSalvos().length;
        }
    }

    if (posts.length === 0) {
        container.innerHTML = "<p style='text-align: center; color: #888; padding: 20px;'>Nenhuma publicação encontrada.</p>";
        return;
    }

    posts.forEach(post => {
        const artigo = document.createElement("article");
        artigo.classList.add("post");

        artigo.innerHTML = `
            <div class="post-topo">
                <span class="tag">${post.categoria}</span>
                <span class="data">${post.data}</span>
            </div>
            <h3>${post.titulo}</h3>
            <p>${post.texto}</p>
            <div class="post-rodape">
                <button class="btn-curtir" onclick="curtirPost(${post.id})">
                    ❤️ ${post.curtidas}
                </button>
                <button class="btn-excluir" onclick="deletarPost(${post.id})">
                    Excluir
                </button>
            </div>
        `;

        container.appendChild(artigo);
    });
}

function salvarNoStorage(lista) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

function obterPostsSalvos() {
    const dados = localStorage.getItem(CHAVE_STORAGE);
    return dados ? JSON.parse(dados) : [];
}
