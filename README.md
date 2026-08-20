blog empatia e cooperação <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EloSocial - Empatia e Cooperação</title>
    
    <style>
        /* --- ESTILOS GLOBAIS --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f0f4f1;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }

        /* --- CABEÇALHO --- */
        header {
            text-align: center;
            background: linear-gradient(135deg, #2e7d32, #1b5e20);
            color: white;
            padding: 35px 20px;
            border-radius: 12px;
            margin-bottom: 25px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
        }

        header h1 {
            font-size: 2.4rem;
            margin-bottom: 8px;
        }

        header p {
            font-size: 1.05rem;
            opacity: 0.95;
        }

        .estatisticas {
            margin-top: 15px;
            display: inline-block;
            background: rgba(255, 255, 255, 0.2);
            padding: 6px 16px;
            border-radius: 20px;
            font-size: 0.95rem;
        }

        /* --- CONTAINER PRINCIPAL --- */
        main {
            max-width: 800px;
            margin: 0 auto;
        }

        .formulario, .feed {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.05);
            margin-bottom: 25px;
        }

        .formulario h2 {
            color: #2e7d32;
            margin-bottom: 15px;
        }

        input[type="text"], select, textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 12px;
            border: 1px solid #ddd;
            border-radius: 8px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s;
        }

        input[type="text"]:focus, select:focus, textarea:focus {
            border-color: #2e7d32;
        }

        .btn-publicar {
            background-color: #2e7d32;
            color: white;
            border: none;
            padding: 12px;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            width: 100%;
            transition: background 0.2s;
        }

        .btn-publicar:hover {
            background-color: #1b5e20;
        }

        /* --- FEED E PUBLICAÇÕES --- */
        .feed-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 20px;
        }

        .feed-header h2 {
            color: #2e7d32;
        }

        #campoBusca {
            max-width: 250px;
            margin-bottom: 0;
        }

        .post {
            background: #fafafa;
            border: 1px solid #eee;
            padding: 20px;
            border-radius: 10px;
            margin-bottom: 15px;
            border-left: 5px solid #2e7d32;
        }

        .post-topo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }

        .tag {
            background: #e8f5e9;
            color: #2e7d32;
            padding: 4px 10px;
            border-radius: 12px;
            font-size: 0.8rem;
            font-weight: bold;
        }

        .post h3 {
            color: #1b5e20;
            margin-bottom: 8px;
        }

        .post p {
            color: #444;
            white-space: pre-wrap;
        }

        .post-rodape {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
            padding-top: 10px;
            border-top: 1px solid #eee;
        }

        .data {
            font-size: 0.8rem;
            color: #888;
        }

        .btn-curtir {
            background: #ffebee;
            color: #c62828;
            border: none;
            padding: 6px 12px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.1s;
        }

        .btn-curtir:active {
            transform: scale(1.1);
        }

        .btn-excluir {
            background: #fff;
            color: #d32f2f;
            border: 1px solid #ffcdd2;
            padding: 6px 12px;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.8rem;
        }

        .btn-excluir:hover {
            background: #ffebee;
        }
    </style>
</head>
<body>

<header>
    <h1>🤝 EloSocial</h1>
    <p>Grandes conquistas nascem quando a empatia conduz e a cooperação realiza.</p>
    
    <div class="estatisticas">
        <span>Total de Atitudes Salvas: <strong id="totalPosts">0</strong></span>
    </div>
</header>

<main>

    <section class="formulario">
        <h2>Criar Publicação</h2>

        <input type="text" id="titulo" placeholder="Título da publicação">

        <select id="categoria">
            <option value="Empatia">❤️ Empatia</option>
            <option value="Cooperação">🤝 Cooperação</option>
            <option value="Acolhimento">🤗 Acolhimento</option>
            <option value="Trabalho em Equipe">👥 Trabalho em Equipe</option>
        </select>

        <textarea id="texto" placeholder="Compartilhe sua atitude positiva hoje..." rows="4"></textarea>

        <button class="btn-publicar" onclick="criarPost()">Publicar</button>
    </section>

    <section class="feed">
        <div class="feed-header">
            <h2>Publicações</h2>
            <input type="text" id="campoBusca" placeholder="🔍 Buscar..." oninput="filtrarPosts()">
        </div>

        <div id="listaPosts"></div>
    </section>

</main>

<script>
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
            constartigo = document.createElement("article");
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
</script>

</body>
</html>
