let heroi = "Thunder"
let xp = 900
let nivelXp = " "
let nivelBatalha = "Fácil"
let resultBatalha = "Venceu"

switch (heroi){
	case "Thunder":
        if (xp <= 1000) {
            nivelXp = "Ferro"; }
            else if (xp <= 2000) {
            nivelXp = "Bronze";}
            else if (xp <= 5000) {
            nivelXp = "Prata";}
            else if (xp <= 7000) {
            nivelXp = "Ouro";}
            else if (xp <= 8000) {
            nivelXp = "Platina";}
            else if (xp <= 9000) {
            nivelXp = "Ascendente";}
            else if (xp <= 10000) {
            nivelXp = "Imortal";}
            else {
            nivelXp = "Radiante";}
            }
            console.log("Nosso Herói " + heroi + " possui um XP de " + xp + " e está no nível " + nivelXp)
            if (resultBatalha === "Venceu") {
                if (nivelBatalha === "Fácil") {
                    (xp += 500) }
                    else if (nivelBatalha === "Médio") {
                        (xp += 1200) }
                    else if (nivelBatalha === "Dificil") {
                        (xp += 2000) }
                    else {
                        (xp += 3000) }
                console.log("Nosso heroi " + heroi + " foi pra batalha das Termópilas e " + resultBatalha + ".")
                console.log("O nível da batalha foi " + nivelBatalha + " e seu XP elevou para " + xp)
                console.log("Agora o heroi "+ heroi + " está no nível "+ nivelXp)
                    }