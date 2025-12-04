class Nota {
    constructor(id, titulo, conteudo) {
        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
    }
}

let notas = [];
let notaAtual = null;

// ------------------- CARREGAR AO INICIAR -------------------
window.onload = () => {
    carregarNotas();
    listarNotas();
};

// ------------------- LOCAL STORAGE -------------------
function carregarNotas() {
    const dados = localStorage.getItem("notas");
    notas = dados ? JSON.parse(dados) : [];
}

function salvarStorage() {
    localStorage.setItem("notas", JSON.stringify(notas));
}

// ------------------- CRUD -------------------
function listarNotas() {
    const lista = document.getElementById("listaNotas");
    lista.innerHTML = "";

    notas.forEach(nota => {
        const div = document.createElement("div");
        div.textContent = nota.titulo || "(Sem título)";
        div.onclick = () => abrirNota(nota.id);
        lista.appendChild(div);
    });
}

function abrirNota(id) {
    const nota = notas.find(n => n.id === id);

    if (!nota) return;

    notaAtual = nota;
    document.getElementById("titulo").value = nota.titulo;
    document.getElementById("conteudo").value = nota.conteudo;
}

function salvarNota() {
    const titulo = document.getElementById("titulo").value;
    const conteudo = document.getElementById("conteudo").value;

    if (!notaAtual) {
        // Criar nova nota
        const nova = new Nota(Date.now(), titulo, conteudo);
        notas.push(nova);
    } else {
        // Editar nota existente
        notaAtual.titulo = titulo;
        notaAtual.conteudo = conteudo;
    }

    salvarStorage();
    listarNotas();
}

function excluirNota() {
    if (!notaAtual) {
        alert("Nenhuma nota selecionada!");
        return;
    }

    const confirmar = confirm("Deseja realmente excluir esta nota?");
    if (!confirmar) return;

    notas = notas.filter(n => n.id !== notaAtual.id);
    salvarStorage();
    listarNotas();
    novaNota();
}

function novaNota() {
    notaAtual = null;
    document.getElementById("titulo").value = "";
    document.getElementById("conteudo").value = "";
}
