blog empatia e cooperação <!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EloSocial - Empatia e Cooperação</title>
    <link rel="stylesheet" href="style.css">
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

<script src="script.js"></script>
</body>
</html>
