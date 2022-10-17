const carouselSlide1 = document.querySelector("#carousel-slide-1");
const carouselSlide2 = document.querySelector("#carousel-slide-2");
const carouselIndicator = document.querySelector("#carousel-indicator");
const carouselIndicator1 = carouselIndicator.children[0];
const carouselIndicator2 = carouselIndicator.children[1];

var positionSlide1 = "middle";
var positionSlide2 = "right";

function changeIndicator(){
    if(positionSlide1 == "middle"){
        carouselIndicator1.style.backgroundColor = "#7f93d0";
    }else{
        carouselIndicator1.style.backgroundColor = "#c7d0ec";
    }
    if(positionSlide2 == "middle"){
        carouselIndicator2.style.backgroundColor = "#7f93d0";
    }else{
        carouselIndicator2.style.backgroundColor = "#c7d0ec";
    }
}

function slideTranslate(element, actualPosition, side){
    var newPosition = null;
    element.style.visibility = "visible";
    if(element == carouselSlide1){
        switch(true){
            case (actualPosition == "middle" && side == "right") :
                setTimeout(() => {
                    element.style.visibility = "hidden";
                    element.style.transform = "translateX(-100%)";
                }, 300);
                element.style.transform = "translateX(100%)";
                newPosition = "left";
                break;
            case (actualPosition == "middle" && side == "left") :
                setTimeout(() => {
                    element.style.visibility = "hidden";
                    element.style.transform = "translateX(100%)";
                }, 300);
                element.style.transform = "translateX(-100%)";
                newPosition = "right";
                break;
            case (actualPosition == "left" && side == "right") :
                element.style.transform = "translateX(0%)";
                newPosition = "middle";
                break;
            case (actualPosition == "left" && side == "left") :
                element.style.transform = "translateX(0%)";
                newPosition = "middle";
                break;
            case (actualPosition == "right" && side == "right") :
                element.style.transform = "translateX(0%)";
                newPosition = "middle";
                break;
            case (actualPosition == "right" && side == "left") :
                element.style.transform = "translateX(0%)";
                newPosition = "middle";
                break;
            default :
                break;
        }
        
    }else if(element == carouselSlide2){
        switch(true){
            case (actualPosition == "middle" && side == "right") :
                setTimeout(() => {
                    element.style.visibility = "hidden";
                    element.style.transform = "translateX(-200%)";
                }, 300);
                element.style.transform = "translateX(0%)";
                newPosition = "left";
                break;
            case (actualPosition == "middle" && side == "left") :
                setTimeout(() => {
                    element.style.visibility = "hidden";
                    element.style.transform = "translateX(0%)";
                }, 300);
                element.style.transform = "translateX(-200%)";
                newPosition = "right";
                break;
            case (actualPosition == "left" && side == "right") :
                element.style.transform = "translateX(-100%)";
                newPosition = "middle";
                break;
            case (actualPosition == "left" && side == "left") :
                element.style.transform = "translateX(-100%)";
                newPosition = "middle";
                break;
            case (actualPosition == "right" && side == "right") :
                element.style.transform = "translateX(-100%)";
                newPosition = "middle";
                break;
            case (actualPosition == "right" && side == "left") :
                element.style.transform = "translateX(-100%)";
                newPosition = "middle";
                break;
            default :
                break;
        }
    }
    return newPosition;
}

carouselIndicator1.style.backgroundColor = "#7f93d0"
carouselIndicator2.style.backgroundColor = "#c7d0ec"

document.querySelector("#right-arrow").addEventListener("click", function(){
    positionSlide1 = slideTranslate(carouselSlide1, positionSlide1, "left");
    positionSlide2 = slideTranslate(carouselSlide2, positionSlide2, "left");
    changeIndicator();
})

document.querySelector("#left-arrow").addEventListener("click", function(){
    positionSlide1 = slideTranslate(carouselSlide1, positionSlide1, "right");
    positionSlide2 = slideTranslate(carouselSlide2, positionSlide2, "right");
    changeIndicator();
})

carouselIndicator1.addEventListener("click", function(){
    if(carouselIndicator1.style.backgroundColor == "#c7d0ec" || carouselIndicator1.style.backgroundColor == "rgb(199, 208, 236)"){
        positionSlide1 = slideTranslate(carouselSlide1, positionSlide1, "left");
        positionSlide2 = slideTranslate(carouselSlide2, positionSlide2, "left");
        changeIndicator();
    }
})

carouselIndicator2.addEventListener("click", function(){
    if(carouselIndicator2.style.backgroundColor == "#c7d0ec" || carouselIndicator2.style.backgroundColor == "rgb(199, 208, 236)"){
        positionSlide1 = slideTranslate(carouselSlide1, positionSlide1, "right");
        positionSlide2 = slideTranslate(carouselSlide2, positionSlide2, "right");
        changeIndicator();
    }
})

setInterval(() => {
    positionSlide1 = slideTranslate(carouselSlide1, positionSlide1, "left");
    positionSlide2 = slideTranslate(carouselSlide2, positionSlide2, "left");
    changeIndicator();
}, 10000)