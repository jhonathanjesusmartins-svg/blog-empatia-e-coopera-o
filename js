constCHAVE_STORAGE = "elosocial_posts";

constPOSTS_PADRAO = [
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

document.addEventListener("DOMContentLoaded", carregarPosts);

functioncarregarPosts() {
    constdadosSalvos = localStorage.getItem(CHAVE_STORAGE);
    letposts = dadosSalvos ? JSON.parse(dadosSalvos) : POSTS_PADRAO;

    if (!dadosSalvos) salvarNoStorage(posts);

    renderizarPosts(posts);
}

functioncriarPost() {
    consttituloInput = document.getElementById("titulo");
    constcategoriaInput = document.getElementById("categoria");
    consttextoInput = document.getElementById("texto");

    consttitulo = tituloInput.value.trim();
    constcategoria = categoriaInput.value;
    consttexto = textoInput.value.trim();

    if (!titulo || !texto) {
        alert("Por favor, preencha o título e a mensagem!");
        return;
    }

    constnovoPost = {
        id: Date.now(),
        titulo,
        categoria,
        texto,
        curtidas: 0,
        data: new Date().toLocaleDateString("pt-BR")
    };

    constposts = obterPostsSalvos();
    posts.unshift(novoPost);

    salvarNoStorage(posts);
    renderizarPosts(posts);

    tituloInput.value = "";
    textoInput.value = "";
}

functioncurtirPost(id) {
    constposts = obterPostsSalvos();
    constpost = posts.find(p => p.id === id);
    if (post) {
        post.curtidas += 1;
        salvarNoStorage(posts);
        renderizarPosts(posts);
    }
}

functiondeletarPost(id) {
    if (confirm("Deseja excluir esta publicação?")) {
        const posts = obterPostsSalvos().filter(p => p.id !== id);
        salvarNoStorage(posts);
        renderizarPosts(posts);
    }
}

functionfiltrarPosts() {
    consttermo = document.getElementById("campoBusca").value.toLowerCase();
    constposts = obterPostsSalvos();
    constpostsFiltrados = posts.filter(p => 
        p.titulo.toLowerCase().includes(termo) || 
        p.texto.toLowerCase().includes(termo) ||
        p.categoria.toLowerCase().includes(termo)
    );
    renderizarPosts(postsFiltrados, false);
}

functionrenderizarPosts(posts, atualizarContador = true) {
    constcontainer = document.getElementById("listaPosts");
    container.innerHTML = "";

    if (atualizarContador) {
        document.getElementById("totalPosts").innerText = obterPostsSalvos().length;
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

functionsalvarNoStorage(lista) {
    localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
}

functionobterPostsSalvos() {
    constdados = localStorage.getItem(CHAVE_STORAGE);
    returndados ? JSON.parse(dados) : [];
}
