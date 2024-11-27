// Função para carregar os dados JSON

async function carregarDados() {
    try{
        const response = await fetch("JSON/destaques.json");
        const data = await response.json();
        renderDestaques(data.destaques);
    }
    catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
    
}

// Função para renderizar os destaques

function renderDestaques(destaques) {
    const container = document.getElementById("destaques-container");
    container.innerHTML = ""; // Limpar container

    destaques.forEach((item) => {
        const card = document.createElement("div");
        card.className = "destaques-box";

        card.innerHTML = `
        <div class="canal-box">
            <h3>${item.categoria}</h3>
        </div>
        <img class="destaques-box-img" src="${item.imagem}" alt="${item.titulo}">
        <div class="destaques-box-text">
            <div class="title-icon">
            <span class="destaques-title-box">${item.titulo}</span>
            <div class="dataBlog">
                <span id="destaqueCalenderIcon">${item.data} </span><i class="bi bi-calendar"></i>
            </div>
            </div>
                <p>${item.texto}</p>
            </div>
        <div class="btn-icons">
            <button id="lerMais" onclick="abrirDetalhes('${item.titulo}')">Ler mais</button>
            <div class="NumberLikes">
            <span id="destaquesLikeIcons">${item.likes} </span><i class="bi bi-hand-thumbs-up-fill"></i>
            </div>
        </div>
    `;

    container.appendChild(card);

    });
}

carregarDados();