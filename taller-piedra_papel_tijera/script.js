//piedra = 0
//papel = 1
//tijera = 2
function piedra() {
    let resultado = CPU();
    let mensaje = "";
    if (resultado == 0) {
     mensaje = "Empate! - los dos sacaron piedra";
    } else if (resultado == 1) {
     mensaje = "wow perdiste - La CPU sacó papel";
     derrotas++; 
    } else if (resultado == 2) {
     mensaje = "has ganado! - La CPU sacó tijera";
     victorias++; 
    }
    
    actualizarContadores();
    verificarGanador(); 
    document.getElementById("resultado").textContent = mensaje;
 }


 
function papel() {
    let resultado = CPU();
    let mensaje = "";
    if (resultado == 0) {
    mensaje = "has ganado - La CPU sacó piedra";
    victorias++;
    } else if (resultado == 1) {
    mensaje = "Empate! - Ambos sacaron papel";
    } else if (resultado == 2) {
    mensaje = " wow perdiste - La CPU sacó tijera";
    derrotas++; 
    }
    actualizarContadores();
    verificarGanador(); 
    document.getElementById("resultado").textContent = mensaje;
}
 
function tigera() {
    let resultado = CPU();
    let mensaje = "";
    if (resultado == 0) {
    mensaje = " wow perdiste - La CPU sacó piedra";
    derrotas++; 
    } else if (resultado == 1) {
    mensaje = " has ganado - La CPU sacó papel";
    victorias++;
    } else if (resultado == 2) {
    mensaje = "Empate! - Ambos sacaron tijera";
    }
    actualizarContadores();
    verificarGanador(); 
    document.getElementById("resultado").textContent = mensaje;
}

 
function CPU() {
    let CPU = Math.floor(Math.random() * 3);
    return CPU;
}

let victorias = 0;
let derrotas = 0;

function actualizarContadores() {
   document.getElementById("victorias").textContent = "Victorias: " + victorias;
   document.getElementById("derrotas").textContent = "Derrotas: " + derrotas;
}

function verificarGanador() {
    if (victorias == 3) {
        reiniciarJuego();
    } else if (derrotas == 3) {
        reiniciarJuego();
    }
}
 
function reiniciarJuego()  {
    victorias = 0;
    derrotas = 0;
    actualizarContadores();
}