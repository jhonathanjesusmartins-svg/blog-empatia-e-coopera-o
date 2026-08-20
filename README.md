<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EloSocial - Empatia & Cooperação</title>
    
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        :root {
            --primary: #10b981;
            --primary-hover: #059669;
            --secondary: #6366f1;
            --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f766e 100%);
            --card-bg: rgba(255, 255, 255, 0.95);
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --danger: #ef4444;
            --danger-light: #fef2f2;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Plus Jakarta Sans', sans-serif;
        }

        body {
            background: var(--bg-gradient);
            background-attachment: fixed;
            color: var(--text-dark);
            min-height: 100vh;
            padding: 30px 15px;
        }

        header {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            color: white;
            padding: 40px 25px;
            border-radius: 24px;
            margin-bottom: 35px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            max-width: 850px;
            margin-left: auto;
            margin-right: auto;
        }

        header h1 {
            font-size: 2.8rem;
            font-weight: 800;
            margin-bottom: 12px;
            background: linear-gradient(to right, #34d399, #818cf8);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }

        header p {
            font-size: 1.1rem;
            color: #e2e8f0;
            max-width: 600px;
            margin: 0 auto 20px;
        }

        .estatisticas {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: rgba(255, 255, 255, 0.15);
            padding: 8px 20px;
            border-radius: 30px;
            font-weight: 600;
            font-size: 0.95rem;
            border: 1px solid rgba(255, 255, 255, 0.25);
        }

        .estatisticas strong {
            color: #34d399;
            font-size: 1.2rem;
        }

        main {
            max-width: 850px;
            margin: 0 auto;
        }

        .card {
            background: var(--card-bg);
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
            margin-bottom: 30px;
            border: 1px solid rgba(255, 255, 255, 0.8);
        }

        .card h2 {
            color: var(--text-dark);
            font-size: 1.4rem;
            font-weight: 700;
            margin-bottom: 20px;
        }

        .form-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }

        @media (max-width: 600px) {
            .form-grid { grid-template-columns: 1fr; }
        }

        .form-group {
            margin-bottom: 16px;
        }

        label {
            display: block;
            font-size: 0.85rem;
            font-weight: 700;
            color: var(--text-muted);
            margin-bottom: 6px;
            text-transform: uppercase;
        }

        input[type="text"], select, textarea {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 0.95rem;
            outline: none;
            background: #f8fafc;
            color: var(--text-dark);
            transition: all 0.3s ease;
        }

        input[type="text"]:focus, select:focus, textarea:focus {
            border-color: var(--primary);
            background: #ffffff;
            box-shadow: 0 0 0 4px rgba(16, 185, 129, 0.15);
        }

        .btn-publicar {
            background: linear-gradient(135deg, var(--primary), var(--primary-hover));
            color: white;
            border: none;
            padding: 14px;
            font-size: 1rem;
            font-weight: 700;
            border-radius: 12px;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
        }

        .btn-publicar:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(16, 185, 129, 0.4);
        }

        .feed-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 25px;
        }

        #campoBusca {
            max-width: 280px;
            padding: 10px 16px;
            border-radius: 20px;
            font-size: 0.9rem;
            margin-bottom: 0;
            background: #ffffff;
        }

        .post {
            background: #ffffff;
            border-radius: 16px;
            padding: 24px;
            margin-bottom: 20px;
            border: 1px solid #f1f5f9;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }

        .post::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 6px;
            height: 100%;
            background: linear-gradient(to bottom, var(--primary), var(--secondary));
        }

        .post-topo {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
        }

        .tag {
            padding: 6px 14px;
            border-radius: 20px;
            font-size: 0.8rem;
            font-weight: 700;
            background: #e0e7ff;
            color: #4338ca;
        }

        .post h3 {
            color: var(--text-dark);
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 6px;
        }

        .autor {
            font-size: 0.85rem;
            color: var(--secondary);
            font-weight: 600;
            margin-bottom: 12px;
        }

        .post p {
            color: #475569;
            font-size: 1rem;
            line-height: 1.6;
            white-space: pre-wrap;
            margin-bottom: 15px;
        }

        .palavras-chave-container {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin-bottom: 15px;
        }

        .palavra-chave {
            background: #f1f5f9;
            color: #475569;
            font-size: 0.75rem;
            font-weight: 600;
            padding: 4px 10px;
            border-radius: 8px;
        }

        .post-rodape {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 15px;
            border-top: 1px solid #f1f5f9;
        }

        .data {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-muted);
        }

        .btn-curtir {
            background: #fff1f2;
            color: #e11d48;
            border: 1px solid #fecdd3;
            padding: 6px 14px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.85rem;
        }

        .btn-excluir {
            background: transparent;
            color: var(--text-muted);
            border: none;
            padding: 6px 10px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
        }

        .btn-excluir:hover {
            background: var(--danger-light);
            color: var(--danger);
        }
    </style>
</head>
<body>

<header>
    <h1>🤝 EloSocial</h1>
    <p>"Empatia é enxergar o mundo com os olhos do outro, ouvir com os ouvidos do outro e sentir com o coração do outro."</p>
    
    <div class="estatisticas">
        ✨ Total de Atitudes Salvas: <strong id="totalPosts">0</strong>
    </div>
</header>

<main>

    <section class="card">
        <h2>✨ Publicar Nova Atitude</h2>

        <div class="form-grid">
            <div class="form-group">
                <label for="autor">Seu Nome / Autor</label>
                <input type="text" id="autor" placeholder="Ex: Maria Silva">
            </div>

            <div class="form-group">
                <label for="titulo">Título</label>
                <input type="text" id="titulo" placeholder="Ex: Escuta Ativa na Reunião">
            </div>
        </div>

        <div class="form-grid">
            <div class="form-group">
                <label for="categoria">Categoria</label>
                <select id="categoria">
                    <option value="Empatia">❤️ Empatia</option>
                    <option value="Cooperação">🤝 Cooperação</option>
                    <option value="Acolhimento">🤗 Acolhimento</option>
                    <option value="Trabalho em Equipe">👥 Trabalho em Equipe</option>
                </select>
            </div>

            <div class="form-group">
                <label for="palavrasChave">Palavras-chave (separadas por vírgula)</label>
                <input type="text" id="palavrasChave" placeholder="Ex: amizade, respeito, escuta">
            </div>
        </div>

        <div class="form-group">
            <label for="texto">Sua Mensagem</label>
            <textarea id="texto" placeholder="Descreva sua atitude ou experiência positiva..." rows="3"></textarea>
        </div>

        <div class="form-group">
            <label for="modoSalvar">Modo de Salvamento</label>
            <select id="modoSalvar">
                <option value="local">💾 Salvar no Navegador (LocalStorage)</option>
                <option value="arquivo">📥 Baixar Cópia em Arquivo (.json)</option>
            </select>
        </div>

        <button class="btn-publicar" onclick="criarPost()">
            🚀 Publicar Atitude
        </button>
    </section>

    <section class="card">
        <div class="feed-header">
            <h2>💬 Feed de Impacto</h2>
            <input type="text" id="campoBusca" placeholder="🔍 Buscar títulos, palavras..." oninput="filtrarPosts()">
        </div>

        <div id="listaPosts"></div>
    </section>

</main>

<script>
    constCHAVE_STORAGE = "elosocial_posts_v3";

    constPOSTS_PADRAO = [
        {
            id: 1,
            autor: "Ana Souza",
            titulo: "Escuta Ativa no Trabalho",
            categoria: "Empatia",
            texto: "Hoje decidi ouvir meus colegas com atenção plena e sem interrupções.",
            palavras: ["escuta", "respeito", "foco"],
            curtidas: 12,
            data: "20/08/2026"
        },
        {
            id: 2,
            autor: "Carlos Lima",
            titulo: "Mutirão de Projetos",
            categoria: "Cooperação",
            texto: "Dividimos as tarefas da semana e ajudamos quem estava sobrecarregado.",
            palavras: ["ajuda", "equipe", "uniao"],
            curtidas: 19,
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
        constcampoAutor = document.getElementById("autor");
        constcampoTitulo = document.getElementById("titulo");
        constcampoCategoria = document.getElementById("categoria");
        constcampoPalavras = document.getElementById("palavrasChave");
        constcampoTexto = document.getElementById("texto");
        constmodoSalvar = document.getElementById("modoSalvar").value;

        constautor = campoAutor ? campoAutor.value.trim() : "Anônimo";
        consttitulo = campoTitulo ? campoTitulo.value.trim() : "";
        constcategoria = campoCategoria ? campoCategoria.value : "Empatia";
        consttexto = campoTexto ? campoTexto.value.trim() : "";
        
        // Converte as palavras-chave em uma lista tratada
        constpalavrasTratadas = campoPalavras.value
            .split(",")
            .map(p => p.trim())
            .filter(p => p !== "");

        if (titulo === "" || texto === "") {
            alert("Por favor, preencha o título e o conteúdo da mensagem!");
            return;
        }

        constnovoPost = {
            id: Date.now(),
            autor: autor || "Anônimo",
            titulo,
            categoria,
            texto,
            palavras: palavrasTratadas,
            curtidas: 0,
            data: new Date().toLocaleDateString("pt-BR")
        };

        constposts = obterPostsSalvos();
        posts.unshift(novoPost);

        salvarNoStorage(posts);
        renderizarPosts(posts);

        // Se o modo selecionado for baixar em arquivo .json
        if (modoSalvar === "arquivo") {
            baixarArquivoJSON(novoPost);
        }

        campoAutor.value = "";
        campoTitulo.value = "";
        campoPalavras.value = "";
        campoTexto.value = "";
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
        if (confirm("Deseja realmente remover esta publicação?")) {
            constposts = obterPostsSalvos().filter(p => p.id !== id);
            salvarNoStorage(posts);
            renderizarPosts(posts);
        }
    }

    functionfiltrarPosts() {
        constcampoBusca = document.getElementById("campoBusca");
        if (!campoBusca) return;

        consttermo = campoBusca.value.toLowerCase();
        constposts = obterPostsSalvos();

        constpostsFiltrados = posts.filter(p => 
            p.titulo.toLowerCase().includes(termo) || 
            p.texto.toLowerCase().includes(termo) ||
            p.autor.toLowerCase().includes(termo) ||
            p.categoria.toLowerCase().includes(termo) ||
            (p.palavras && p.palavras.some(palavra => palavra.toLowerCase().includes(termo)))
        );

        renderizarPosts(postsFiltrados, false);
    }

    functionrenderizarPosts(posts, atualizarContador = true) {
        constcontainer = document.getElementById("listaPosts");
        if (!container) return;

        container.innerHTML = "";

        if (atualizarContador) {
            constcontadorElemento = document.getElementById("totalPosts");
            if (contadorElemento) {
                contadorElemento.innerText = obterPostsSalvos().length;
            }
        }

        if (posts.length === 0) {
            container.innerHTML = "<p style='text-align: center; color: var(--text-muted); padding: 30px;'>Nenhuma publicação encontrada.</p>";
            return;
        }

        posts.forEach(post => {
            constartigo = document.createElement("article");
            artigo.classList.add("post");

            consttagsHTML = post.palavras && post.palavras.length > 0 
                ? `<div class="palavras-chave-container">
                    ${post.palavras.map(palavra => `<span class="palavra-chave">#${palavra}</span>`).join('')}
                   </div>`
                : '';

            artigo.innerHTML = `
                <div class="post-topo">
                    <span class="tag">${post.categoria}</span>
                    <span class="data">${post.data}</span>
                </div>
                <h3>${post.titulo}</h3>
                <div class="autor">Por: ${post.autor}</div>
                <p>${post.texto}</p>
                ${tagsHTML}
                <div class="post-rodape">
                    <button class="btn-curtir" onclick="curtirPost(${post.id})">
                        ❤️ ${post.curtidas}
                    </button>
                    <button class="btn-excluir" onclick="deletarPost(${post.id})">
                        🗑️ Excluir
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

    functionbaixarArquivoJSON(post) {
        constdataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(post, null, 2));
        constdownloadAnchor = document.createElement('a');
        downloadAnchor.setAttribute("href", dataStr);
        downloadAnchor.setAttribute("download", `post_${post.id}.json`);
        document.body.appendChild(downloadAnchor);
        downloadAnchor.click();
        downloadAnchor.remove();
    }
</script>

</body>
</html>
