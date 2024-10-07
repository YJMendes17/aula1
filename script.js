const cenarios = [
    {
        descricao: "Você está em uma floresta densa. O caminho se divide em duas direções.",
        opcoes: [
            { texto: "Ir para a esquerda", proximoCenario: 1 },
            { texto: "Ir para a direita", proximoCenario: 2 }
        ],
        imagem: "https://via.placeholder.com/300?text=Floresta"
    },
    {
        descricao: "Você encontra um rio. É possível atravessá-lo ou seguir a margem.",
        opcoes: [
            { texto: "Tentar atravessar", proximoCenario: 3 },
            { texto: "Seguir a margem", proximoCenario: 4 }
        ],
        imagem: "https://via.placeholder.com/300?text=Rio"
    },
    {
        descricao: "Você chega a uma caverna escura. Há um brilho no fundo.",
        opcoes: [
            { texto: "Entrar na caverna", proximoCenario: 5 },
            { texto: "Voltar para a floresta", proximoCenario: 0 }
        ],
        imagem: "https://via.placeholder.com/300?text=Caverna"
    },
    {
        descricao: "Você se molha ao tentar atravessar o rio e volta para a floresta.",
        opcoes: [
            { texto: "Voltar para a floresta", proximoCenario: 0 }
        ],
        imagem: "https://via.placeholder.com/300?text=Floresta"
    },
    {
        descricao: "Você encontra um tesouro escondido na margem do rio!",
        opcoes: [
            { texto: "Pegar o tesouro", proximoCenario: 6 },
            { texto: "Voltar para a floresta", proximoCenario: 0 }
        ],
        imagem: "https://via.placeholder.com/300?text=Tesouro"
    },
    {
        descricao: "Na caverna, você encontra um dragão! O que você faz?",
        opcoes: [
            { texto: "Lutar contra o dragão", proximoCenario: 6 },
            { texto: "Fugir", proximoCenario: 0 }
        ],
        imagem: "https://via.placeholder.com/300?text=Dragão"
    },
    {
        descricao: "Você encontrou o tesouro e venceu o dragão! Parabéns, você ganhou!",
        opcoes: [],
        imagem: "https://via.placeholder.com/300?text=Vitória"
    }
];

let cenarioAtual = 0;

function carregarCenario() {
    const c = cenarios[cenarioAtual];
    document.getElementById("imagem").src = c.imagem;
    document.getElementById("descricao").textContent = c.descricao;

    const opcoesDiv = document.getElementById("opcoes");
    opcoesDiv.innerHTML = '';
    c.opcoes.forEach(opcao => {
        const button = document.createElement("button");
        button.textContent = opcao.texto;
        button.className = 'button';
        button.onclick = () => {
            cenarioAtual = opcao.proximoCenario;
            carregarCenario();
        };
        opcoesDiv.appendChild(button);
    });
}

carregarCenario();













































