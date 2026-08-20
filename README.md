<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EloSocial - Empatia & Cooperação</title>
    
    <style>
        /* --- IMPORTAÇÃO DE FONTE E VARIÁVEIS DE CORES --- */
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&display=swap');

        :root {
            --primary: #10b981;
            --primary-hover: #059669;
            --primary-light: #ecfdf5;
            --secondary: #6366f1;
            --bg-gradient: linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f766e 100%);
            --card-bg: rgba(255, 255, 255, 0.95);
            --text-dark: #0f172a;
            --text-muted: #64748b;
            --danger: #ef4444;
            --danger-light: #fef2f2;
            --accent-yellow: #f59e0b;
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

        /* --- CABEÇALHO --- */
        header {
            text-align: center;
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
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
            letter-spacing: -1px;
        }

        header p {
            font-size: 1.15rem;
            color: #e2e8f0;
            max-width: 600px;
            margin: 0 auto 20px;
            line-height: 1.5;
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
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .estatisticas strong {
            color: #34d399;
            font-size: 1.2rem;
        }

        /* --- CONTAINER PRINCIPAL --- */
        main {
            max-width: 850px;
            margin: 0 auto;
        }

        /* --- CARDS & FORMULÁRIO --- */
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
            display: flex;
            align-items: center;
            gap: 10px;
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
            letter-spacing: 0.5px;
        }

        input[type="text"], select, textarea {
            width: 100%;
            padding: 14px 18px;
            border: 2px solid #e2e8f0;
            border-radius: 12px;
            font-size: 1rem;
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
            padding: 16px;
            font-size: 1.05rem;
            font-weight: 700;
            border-radius: 12px;
            cursor: pointer;
            width: 100%;
            transition: all 0.3s ease;
            box-shadow: 0 8px 20px rgba(16, 185, 129, 0.3);
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        .btn-publicar:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 25px rgba(16, 185, 129, 0.4);
        }

        /* --- FEED --- */
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

        /* --- CARDS DE PUBLICAÇÃO --- */
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

        .post:hover {
            transform: translateY(-4px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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
            letter-spacing: 0.3px;
        }

        .tag-empatia { background: #fce7f3; color: #be185d; }
        .tag-cooperacao { background: #e0e7ff; color: #4338ca; }
        .tag-acolhimento { background: #fef3c7; color: #b45309; }
        .tag-equipe { background: #dcfce7; color: #15803d; }

        .post h3 {
            color: var(--text-dark);
            font-size: 1.25rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        .post p {
            color: #475569;
            font-size: 1rem;
            line-height: 1.6;
            white-space: pre-wrap;
        }

        .post-rodape {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #f1f5f9;
        }

        .data {
            font-size: 0.8rem;
            font-weight: 600;
            color: var(--text-muted);
        }

        .acoes {
            display: flex;
            gap: 10px;
        }

        .btn-curtir {
            background: #fff1f2;
            color: #e11d48;
            border: 1px solid #fecdd3;
            padding: 8px 16px;
            border-radius: 20px;
            cursor: pointer;
            font-weight: 700;
            font-size: 0.9rem;
            display: flex;
            align-items: center;
            gap: 6px;
            transition: all 0.2s ease;
        }

        .btn-curtir:hover {
            background: #ffe4e6;
            transform: scale(1.05);
        }

        .btn-curtir:active {
            transform: scale(0.95);
        }

        .btn-excluir {
            background: transparent;
            color: var(--text-muted);
            border: none;
            padding: 8px 12px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.85rem;
            font-weight: 600;
            transition: all 0.2s ease;
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
        <h2>✨ Compartilhar Inspiração</h2>

        <div class="form-group">
            <label for="titulo">Título</label>
            <input type="text" id="titulo" placeholder="Ex: Gestual de Apoio no Trabalho">
        </div>

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
            <label for="texto">Sua Mensagem</label>
            <textarea id="texto" placeholder="Descreva sua atitude ou experiência positiva..." rows="4"></textarea>
        </div>

        <button class="btn-publicar" onclick="criarPost()">
            <span>🚀 Publicar Atitude</span>
        </button>
    </section>

    <section class="card">
        <div class="feed-header">
            <h2>💬 Feed de Impacto</h2>
            <input type="text" id="campoBusca" placeholder="🔍 Buscar mensagens..." oninput="filtrarPosts()">
        </div>

        <div id="listaPosts"></div>
    </section>

</main>

<script>
    constCHAVE_STORAGE = "elosocial_posts_v2";

    constPOSTS_PADRAO = [
        {
            id: 1,
            titulo: "Escuta Ativa no Trabalho",
            categoria: "Empatia",
            texto: "Hoje decidi ouvir meus colegas com atenção plena e sem interrupções. A sintonia do time melhorou visivelmente!",
            curtidas: 12,
            data: "20/08/2026"
        },
        {
            id: 2,
            titulo: "Mutirão de Projetos",
            categoria: "Cooperação",
            texto: "Dividimos as tarefas pendentes da semana e conseguimos apoiar quem estava sobrecarregado. Juntos fomos muito mais longe!",
            curtidas: 19,
            data: "20/08/2026"
        }
    ];

    document.addEventListener("DOMContentLoaded", carregarPosts);

    functioncarregarPosts() {
        constdadosSalvos = localStorage.getItem(CHAVE_STORAGE);
        let posts = dadosSalvos ? JSON.parse(dadosSalvos) : POSTS_PADRAO;

        if (!dadosSalvos) salvarNoStorage(posts);

        renderizarPosts(posts);
    }

    functioncriarPost() {
        constcampoTitulo = document.getElementById("titulo");
        constcampoCategoria = document.getElementById("categoria");
        constcampoTexto = document.getElementById("texto");

        consttitulo = campoTitulo ? campoTitulo.value.trim() : "";
        constcategoria = campoCategoria ? campoCategoria.value : "Empatia";
        consttexto = campoTexto ? campoTexto.value.trim() : "";

        if (titulo === "" || texto === "") {
            alert("Por favor, preencha o título e o conteúdo antes de publicar!");
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

        campoTitulo.value = "";
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
            const posts = obterPostsSalvos().filter(p => p.id !== id);
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
            p.categoria.toLowerCase().includes(termo)
        );

        renderizarPosts(postsFiltrados, false);
    }

    functionobterClasseTag(categoria) {
        switch (categoria) {
            case "Empatia": return "tag-empatia";
            case "Cooperação": return "tag-cooperacao";
            case "Acolhimento": return "tag-acolhimento";
            case "Trabalho em Equipe": return "tag-equipe";
            default: return "tag-empatia";
        }
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

            constclasseTag = obterClasseTag(post.categoria);

            artigo.innerHTML = `
                <div class="post-topo">
                    <span class="tag ${classeTag}">${post.categoria}</span>
                    <span class="data">${post.data}</span>
                </div>
                <h3>${post.titulo}</h3>
                <p>${post.texto}</p>
                <div class="post-rodape">
                    <div class="acoes">
                        <button class="btn-curtir" onclick="curtirPost(${post.id})">
                            ❤️ <span>${post.curtidas}</span>
                        </button>
                    </div>
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
</script>

</body>
</html>
