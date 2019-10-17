( function (){
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');
    const position = {
        x: 0,
        y: 0
    };
    const confLine = {
        color: 'black',
        line: 5,
        type: 'round',
        pintar: false//teste
    };

    var cor0 = document.addEventListener('click', cor0);
    var cor1 = document.addEventListener('click', cor1);
    var cor2 = document.addEventListener('click', cor2);
    var cor3 = document.addEventListener('click', cor3);
    var cor4 = document.addEventListener('click', cor4);
    var selectColor = document.querySelector('selectColor');
   

    const draw = (event) => {
        for (var i = 0; i < 5; i++){
            selecionarCor = document.getElementById('cor'+ i).style.color = "";
        }
        if (event.buttons !== 1) {
            return;
        }
        ctx.beginPath();
        ctx.lineWidth = confLine.line;
        ctx.lineJoin = 'round';
        ctx.lineCap = confLine.type;
        ctx.strokeStyle = confLine.color;

        ctx.moveTo(position.x, position.y);
        setPosition(event);
        ctx.lineTo(position.x, position.y);
        ctx.stroke();
    };
    

    function setPosition (event) {
        position.x = event.clientX;
        position.y = event.clientY;
    }

    function resize () {
        ctx.canvas.width = window.innerWidth; // quando mover o mouse, queremos que o canvas tenha o tamanho da tela
        ctx.canvas.height = window.innerHeight;
        //console.log(window.innerWidth, window.innerHeight);
    }

    


    window.addEventListener('resize', resize);
    document.addEventListener('mousemove', draw);
    document.addEventListener('mousedown', setPosition);
    document.addEventListener('mouseenter', setPosition);

    resize();
    

})();