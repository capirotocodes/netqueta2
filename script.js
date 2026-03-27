/**
 * PROJETO: Netiqueta - Gerador de Dicas Aleatórias
 * FICHEIRO: script.js
 */

// 1. Lista de dicas rápidas (Array de Strings)
const dicas = [
    "Lembre-se: do outro lado do ecrã há um ser humano.",
    "Pense duas vezes antes de publicar algo emocional.",
    "Respeite o tempo e a largura de banda dos outros.",
    "Perdoe os erros de quem é novo na rede.",
    "Evite escrever tudo em MAIÚSCULAS (parece que está a gritar)."
];

// 2. Seleção dos elementos do DOM
const botao = document.getElementById("btnDica");
const texto = document.getElementById("textoDica");

// 3. Função para gerar a dica
function mostrarDica() {
    // Gera um número inteiro aleatório entre 0 e o tamanho da lista
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    
    // Atualiza o conteúdo do parágrafo no HTML
    texto.textContent = dicas[indiceAleatorio];
}

// 4. Verificação de segurança e atribuição do evento
if (botao && texto) {
    botao.addEventListener("click", mostrarDica);
} else {
    // Caso te esqueças de criar os IDs no HTML, este aviso aparecerá na consola (F12)
    console.warn("Aviso: Os elementos #btnDica ou #textoDica não foram encontrados no HTML.");
}