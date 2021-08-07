//Modelo Mapa em forma de Array
const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

// pegar o elemento onde vai ser criado o labirinto

const base = document.getElementById("container");


// criar elementos
function criaElementos() {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[i].length; j++) {
            let index = `${i};${j}`
            if (map[i][j] === "W") {
                let parede = document.createElement("div");
                parede.classList.add("parede");
                parede.id = index;
                base.appendChild(parede);

            } else if (map[i][j] === "S") {
                let personagem = document.createElement("div")
                let caminho = document.createElement("div")
                caminho.classList.add("caminho");
                personagem.classList.add ("personagem");
                caminho.id = index;
                caminho.appendChild(personagem);
                base.appendChild(caminho);
            } 
            else {
                let caminho = document.createElement("div");
                caminho.classList.add("caminho");
                caminho.id = index;
                base.appendChild(caminho);
            }
        }
    }
}

criaElementos();

// Função que verifica caminho livre ou não

function verificarCaminho () {
    document.addEventListener("keydown", (event) => {
        let personagem = document.getElementsByClassName("personagem")[0];
        let posicaoAtual = personagem.parentElement;
        let graph = posicaoAtual.id.split(";");
        let x = Number(graph[0]);
        let y = Number(graph[1]);
    // Quando clicar pra cima, vai ser x - 1;
    // Quando clicar pra baixo, vai ser x + 1;
    // Quando clicar pra direita, var ser y + 1;
    // Quando clicar pra esquerda, vai ser y - 1;
        const keyName = event.key;
        if (keyName === "ArrowRight") {
            let currentLetBloc = y + 1;
            const currentBloc = document.getElementById(`${x};${currentLetBloc}`);
            if(currentBloc.className === "caminho") {
                posicaoAtual.removeChild(personagem)
                currentBloc.appendChild(personagem) 
                
            }
            if(currentBloc.id === "8;20") {
                let container = document.getElementsByClassName("vitoria")[0]
                let vitoria = document.createElement("span")
                vitoria.classList.add("vitoria");
                vitoria.innerText = "Parabéns você ganhou!!!"
                container.appendChild(vitoria)
                
            }
        } 
        if (keyName === "ArrowLeft") {
            let currentLetBloc = y - 1;
            const currentBloc = document.getElementById(`${x};${currentLetBloc}`);
            if(currentBloc.className === "caminho") {
                posicaoAtual.removeChild(personagem);
                currentBloc.appendChild(personagem);
                   
            }
            

            
        }
        if (keyName === "ArrowUp") {
            let currentLetBloc = x - 1;
            const currentBloc = document.getElementById(`${currentLetBloc};${y}`);
            if (currentBloc.className === "caminho") {
                posicaoAtual.removeChild(personagem);
                currentBloc.appendChild(personagem)
            }
        }
        if (keyName === "ArrowDown") {
            let currentLetBloc = x + 1;
            const currentBloc = document.getElementById(`${currentLetBloc};${y}`);
            if (currentBloc.className === "caminho") {
                posicaoAtual.removeChild(personagem);
                currentBloc.appendChild(personagem);
            }
        }
    }) 
 }

 verificarCaminho()


 