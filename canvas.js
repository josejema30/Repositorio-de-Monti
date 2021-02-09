var texto = document.getElementById('text_lines')
var boton = document.getElementById('button')
boton.addEventListener('click', paintforclick); 
var d = document.getElementById("paint");
var lienzo = d.getContext("2d");

function paintinglines(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function paintforclick()
{
{
    var lines = parseInt (texto.value);
    var l = 0;
    var yi, xf, xi, yf;
}
        while(l < lines)
{
    yi = 10 * (l + 1);
    xf = 10 * (l + 1);
    paintinglines ("#AAF", 0, yi, xf, 300);
    console.log ("linea" + l);
    l++
}
    for(l=0; l < lines; l++)
{
    yi = 10 * (l + 1);
    yf = 10 * (l + 1);
    paintinglines ("red", 0, yi, 300, yf);
}
}