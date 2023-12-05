// Задание 1
let tovarsObj = [
    {
        nameTovar: "Фитнес-браслет DEXP SB60",
        imgSrc: "1.jpg",
        corpus: "черный",
        remen: "черный",
        displaySize: "0.96\"",
        displayType: "OLED",
        bluetooth: true,
        OS: {
            os1: "Android 4.2",
            os2: "IOS 8",
        }
    },
    {
        nameTovar: "Смарт-часы RunGo W2",
        imgSrc: "2.jpg",
        corpus: "зеленый",
        remen: "зеленый",
        displaySize: "0.96\"",
        displayType: "TFT (TN)",
        bluetooth: true,
        OS: {
            os1: "Android",
            os2: "IOS",
        }
    },
    {
        nameTovar: "Смарт-часы Welbe Prime",
        imgSrc: "3.jpg",
        corpus: "черный",
        remen: "розовый",
        displaySize: "1.69\"",
        displayType: "IPS",
        bluetooth: true,
        OS: {
            os1: "Android 5.0",
            os2: "IOS 9",
        }
    }
];
let cards = Array.from(document.querySelectorAll(".card"));
console.log(cards);
let pageLoad = cards.forEach(function(elem, index){
    elem.querySelector("img").src=`img/${tovarsObj[index].imgSrc}`;
    elem.querySelector("h5").innerHTML=`<br>${tovarsObj[index].nameTovar}`;
    let str=`
    <br>Корпус: ${tovarsObj[index].corpus}
    <br>Ремешок: ${tovarsObj[index].remen}
    <br>Размер дисплея: ${tovarsObj[index].displaySize}
    <br>Тип дисплея: ${tovarsObj[index].displayType}`;
    if (tovarsObj[index].displayType)
        str+="<br>Блютуз: есть";
    else
        str+="<br>Блютуз: нет";
    str+=`<br>Операционные системы: ${tovarsObj[index].OS.os1}, ${tovarsObj[index].OS.os2}`;
    elem.querySelector(".card-text").innerHTML=str;
});
    