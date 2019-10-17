  
var minhaCor = "#000000";
var tamanho = 5;
var pintura = false;
var novoDoc;
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var ferramenta = "lapis";

const position = {
    x: 0,
    y: 0
};

const setPosition = (event) => {
    position.x = event.clientX;
    position.y = event.clientY;
}; 

const pintar = (event) => {
    if (pintura){
        if (ferramenta == "lapis") {
                ctx.beginPath();
                ctx.lineWidth = tamanho;
                ctx.lineCap = "round";
                ctx.strokeStyle = minhaCor;
                ctx.moveTo(position.x, position.y);
                setPosition(event);
                ctx.lineTo(position.x, position.y);
                ctx.stroke();
        }
    }
    
};
function scolor(){
    minhaCor = document.getElementById("selectColor").value;
}

function ativar(){
    pintura = true;
    setPosition(event);
}

function desenharFormas(){
    pintura = false;
    switch(ferramenta){
            case "quadrado":
                ctx.beginPath();
                ctx.lineWidth = tamanho;
                ctx.strokeStyle = minhaCor;
                ctx.rect(position.x, position.y, event.clientX - position.x, event.clientY - position.y);
                ctx.closePath();
                ctx.stroke();
                break;
            case "circle":
                ctx.beginPath();
                ctx.lineWidth = tamanho;
                ctx.strokeStyle = minhaCor;
                ctx.arc(position.x, position.y, Math.abs(event.clientX - position.x)/2, 0, Math.PI * 2);//math.abs transforma meu valor em positivo sempre. Pq neste caso o raio ficaria negativo e dividi por dois para reduzir o tam do diametro
                ctx.closePath();
                ctx.stroke();
                break;
    }
}

function borracha(){
    console.log("Antes: " + minhaCor);
    document.getElementById("canvas").style.cursor = "url('imgPaint/borrachacursor.png'), default";
    minhaCor = "#FFFFFF";
    document.getElementById("selectColor").setAttribute("disabled", "");
    console.log("Depois: " + minhaCor);
}

function lapis(){
    ferramenta = "lapis";
    document.getElementById("canvas").style.cursor = "url('imgPaint/lapizcursor.gif'), default";
    minhaCor = document.getElementById("selectColor").value;
    document.getElementById("selectColor").removeAttribute("disabled");
}

function desQuadrado (){
    ferramenta = "quadrado";
   
}

function desCircle (){
    ferramenta = "circle";
}


function stamanho(numero) {
    tamanho = numero;
}

function guardar(){
    if (confirm("Save?")) {
        var canvas = document.getElementById("canvas");
        var imagem = canvas.toDataURL("image/png");
        this.href = imagem;
        this.setAttribute('download', `Canvas.png`);
    }
}

function resetarTudo (){
        if (confirm('Quer um Novo documento?')) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    
}
window.addEventListener('load', setPosition);
document.getElementById("guardarimg").addEventListener("click", guardar);
document.getElementById("novoDoc").addEventListener("click",resetarTudo);
