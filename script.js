let order = [];
let clickedOrder = [];
let score = 0;


const blue = document.querySelector('.blue');
const yellow = document.querySelector('.yellow');
const red = document.querySelector('.red');
const green = document.querySelector('.green');


let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    
    for (let i in order){
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1);
    }

}


let lightColor = (element, number) => {

    number = number * 500;
    setTimeout(()=> {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(()=>{
        element.classList.remove('selected');
    }, number);
}


let checkOrder = () => {
    for (let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            lose();
            break;
        }
    }

    if( clickedOrder.length == order.length){
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando proximada rodada!`);
        nextLevel();
    }
}


let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');


    setTimeout(()=> {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

    
}


let createColorElement = (color) => {
    if(color == 0){
        return green;
    } else if (color == 1){
        return red;
    }else if (color == 2){
        return yellow;
    }else if( color == 3){
        return blue;
    }
}


let nextLevel = ( ) => {
    score++;
    shuffleOrder();
}


let lose = () => {
    alert (`Pontuação:  ${score}\nVocê perdeu! Tente novamente`);
    order = [];
    clickedOrder =  [];


    playGame();
}


let playGame = ( ) => {
    
    alert('Você está preparado? ');
    score = 0;

    nextLevel ();
}

green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();