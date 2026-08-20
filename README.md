blog empatia e cooperação<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blog da Empatia e Cooperação</title>
    
    <style>
        /* --- ESTILOS GLOBAIS --- */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background-color: #f4f7f6;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }

        /* --- CABEÇALHO --- */
        header {
            text-align: center;
            background-color: #2e7d32;
            color: white;
            padding: 40px 20px;
            border-radius: 10px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        header h1 {
            font-size: 2.2rem;
            margin-bottom: 10px;
        }

        header p {
            font-size: 1.1rem;
            opacity: 0.9;
        }

        /* --- CONTEÚDO PRINCIPAL --- */
        main {
            max-width: 800px;
            margin: 0 auto;
        }

        /* --- SEÇÃO DO FORMULÁRIO --- */
        .formulario {
            background: white;
            padding: 25px;
            border-radius: 10px;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
            margin-bottom: 30px;
        }

        .formulario h2 {
            margin-bottom: 15px;
            color: #2e7d32;
        }

        input[type="text"], 
        textarea {
            width: 100%;
            padding: 12px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 6px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.3s;
        }

        input[type="text"]:focus, 
        textarea:focus {
            border-color: #2e7d32;
        }

        button.btn-publicar {
            background-color: #2e7d32;
            color: white;
            border: none;
            padding: 12px 25px;
            font-size: 1rem;
            font-weight: bold;
            border-radius: 6px;
            cursor: pointer;
            transition: background 0.3s;
            width: 100%;
        }

        button.btn-publicar:hover {
            background-color: #1b5e20;
        }

        /* --- CARTÕES DE PUBLICAÇÃO --- */
        .post {
            background: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
            margin-bottom: 20px;
            border-left: 5px solid #2e7d32;
        }

        .post h3 {
            color: #1b5e20;
            margin-bottom: 10px;
        }

        .post p {
            color: #555;
            white-space: pre-wrap;
        }

        .post-rodape {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 15px;
        }

        .post .data {
            font-size: 0.85rem;
            color: #888;
        }

        .btn-excluir {
            background-color: #d32f2f;
            color: white;
            border: none;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 0.8rem;
            cursor: pointer;
            transition: background 0.3s;
        }

        .btn-excluir:hover {
            background-color: #9a0007;
        }
    </style>
</head>
<body>

<header>
    <h1>🤝 Blog da Empatia e Cooperação</h1>
    <p>Compartilhe atitudes positivas e inspire outras pessoas.</p>
</header>

<main>

    <section class="formulario">
        <h2>Criar Publicação</h2>

        <input 
            type="text" 
            id="titulo" 
            placeholder="Título da publicação">

        <textarea 
            id="texto" 
            placeholder="Escreva sua mensagem..." 
            rows="6"></textarea>

        <button class="btn-publicar" onclick="criarPost()">
            Publicar
        </button>
    </section>

    <section>
        <h2>Publicações</h2>
        <div id="listaPosts"></div>
    </section>

</main>

<script>
    // Chave única para o banco de dados do navegador
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

    // Executa assim que a página carregar
    document.addEventListener("DOMContentLoaded", carregarPosts);

    // Carrega os dados do localStorage ou exibe os padrão
    functioncarregarPosts() {
        constdadosSalvos = localStorage.getItem(CHAVE_STORAGE);
        le posts = [];

        if (dadosSalvos) {
            posts = JSON.parse(dadosSalvos);
        } else {
            posts = POSTS_PADRAO;
            salvarNoStorage(posts);
        }

        renderizarPosts(posts);
    }

    // Cria um novo post a partir dos dados do formulário
    functioncriarPost() {
        consttituloInput = document.getElementById("titulo");
        consttextoInput = document.getElementById("texto");

        consttitulo = tituloInput.value.trim();
        consttexto = textoInput.value.trim();

         (titulo === "" || texto === "") {
            alert("Por favor, preencha o título e a mensagem antes de publicar!") return;
        }

        constnovoPost = {
            id: Date.now(), // Gera um ID único
            titulo: titulo,
            texto: texto,
            data: new Date().toLocaleDateString('pt-BR')
        };

        constpostsAtualizados = obterPostsSalvos();
        postsAtualizados.unshift(novoPost); // Coloca o novo post no topo
        
        salvarNoStorage(postsAtualizados);
        renderizarPosts(postsAtualizados);

        // Limpa os campos de texto
        tituloInput.value = "";
        textoInput.value = "";
    }

    // Deleta uma publicação específica pelo ID
    functiondeletarPost(id) {
        if (confirm("Tem certeza que deseja excluir esta publicação?")) {
            letposts = obterPostsSalvos();
            posts = posts.filter(post => post.id !== id);
            
            salvarNoStorage(posts);
            renderizarPosts(posts);
        }
    }

    // Desenha as publicações na tela
    functionrenderizarPosts(posts) {
        constlistaPostsContainer = document.getElementById("listaPosts");
        listaPostsContainer.innerHTML = "";

        posts.forEach(post => {
            constartigo = document.createElement("article");
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

    // Salva o array de posts no localStorage convertido em texto JSON
    functionsalvarNoStorage(lista) {
        localStorage.setItem(CHAVE_STORAGE, JSON.stringify(lista));
    }

    // Obtém o array salvo do localStorage
    functionobterPostsSalvos() {
        constdados = localStorage.getItem(CHAVE_STORAGE);
        returndados ? JSON.parse(dados) : [];
    }
</script>

</body>
</html>
