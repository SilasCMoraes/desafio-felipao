// Definindo as variáveis para nome e experiência (XP) do herói
let nomeHeroi = "ExemploHeroi";
let experienciaHeroi = 8500;  // Defina o valor de XP do herói

// Variável para armazenar o nível do herói
let nivelHeroi;

// Estrutura de decisão para determinar o nível de acordo com a XP
if (experienciaHeroi < 1000) {
    nivelHeroi = "Ferro";
} else if (experienciaHeroi >= 1001 && experienciaHeroi <= 2000) {
    nivelHeroi = "Bronze";
} else if (experienciaHeroi >= 2001 && experienciaHeroi <= 5000) {
    nivelHeroi = "Prata";
} else if (experienciaHeroi >= 6000 && experienciaHeroi <= 7000) {
    nivelHeroi = "Ouro";
} else if (experienciaHeroi >= 5001 && experienciaHeroi <= 8000) {
    nivelHeroi = "Platina";
} else if (experienciaHeroi >= 8001 && experienciaHeroi <= 9000) {
    nivelHeroi = "Ascendente"
} else if (experienciaHeroi >= 9001 && experienciaHeroi <= 10000) {
    nivelHeroi = "Imortal";
} else if (experienciaHeroi >= 10001) {
    nivelHeroi = "Radiante";
}

// Saída com a mensagem final
console.log(`O Herói de nome ${nomeHeroi} está no nível de ${nivelHeroi}`);
