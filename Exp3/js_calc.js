// Задание 3
let bwPrint = document.querySelector("#bwPrint");
bwPrint = 20;
let bwCopy = document.querySelector("#bwCopy");
bwCopy = 15;
let colorPrint = document.querySelector("#colorPrint");
colorPrint = 50;
let colorCopy = document.querySelector("#colorCopy");
colorCopy = 40;
let photo3040 = document.querySelector("#photo3040");
photo3040 = 60;
let photo5060 = document.querySelector("#photo5060");
photo5060 = 100;

function result () {
    document.querySelector("#sum0").innerHTML = bwPrint * document.querySelector("#bwPrintQ").value;
    document.querySelector("#sum1").innerHTML = bwCopy * document.querySelector("#bwCopyQ").value;
    document.querySelector("#sum2").innerHTML = colorPrint * document.querySelector("#colorPrintQ").value;
    document.querySelector("#sum3").innerHTML = colorCopy * document.querySelector("#colorCopyQ").value;
    document.querySelector("#sum4").innerHTML = photo3040 * document.querySelector("#photo3040Q").value;
    document.querySelector("#sum5").innerHTML = photo5060 * document.querySelector("#photo5060Q").value;
    document.querySelector("#itogo").innerHTML = (bwPrint * document.querySelector("#bwPrintQ").value)+(bwCopy * document.querySelector("#bwCopyQ").value)+(colorPrint * document.querySelector("#colorPrintQ").value)+(colorCopy * document.querySelector("#colorCopyQ").value)+(photo3040 * document.querySelector("#photo3040Q").value)+(photo5060 * document.querySelector("#photo5060Q").value);
}
