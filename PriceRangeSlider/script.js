const numInput = document.querySelectorAll('.num input');
const slideInput = document.querySelectorAll('.slide input');
const rangeInput = document.querySelectorAll('.rangeInp input');

let minRange = 0 ,maxRange = 10000;

function overRange(a){
    if(a < minRange){
        a = minRange;
    }
    else if(a > maxRange){
        a = maxRange;
    }
    return a;
}

function minmaxRange(){
    let min = 0 , max = 0;
    let value0 = parseInt(rangeInput[0].value) , value1 = parseInt(rangeInput[1].value);
    min = Math.min(value0 , value1);
    max = Math.max(value0 , value1);
    slideInput[0].min = min;
    slideInput[1].max = max;
    slideInput[0].min = min;
    slideInput[1].max = max;
    minRange = min;
    maxRange = max;
    checkNumber();
    checkSlide();
}

function checkNumber(){
    let min = 0 , max = 0;
    let value0 = parseInt(numInput[0].value) , value1 = parseInt(numInput[1].value);
    min = Math.min(value0 , value1);
    max = Math.max(value0 , value1);
    min = overRange(min);
    max = overRange(max);
    slideInput[0].value = min;
    slideInput[1].value = max;
    numInput[0].value = min;
    numInput[1].value = max;
}

function checkSlide(){
    let min = 0 , max = 0;
    let value0 = parseInt(slideInput[0].value) , value1 = parseInt(slideInput[1].value);
    min = Math.min(value0 , value1);
    max = Math.max(value0 , value1);
    min = overRange(min);
    max = overRange(max);
    numInput[0].value = min;
    numInput[1].value = max;
    slideInput[0].value = min;
    slideInput[1].value = max;
}

numInput[0].addEventListener('input' , checkNumber);
numInput[1].addEventListener('input' , checkNumber);
slideInput[0].addEventListener('input' , checkSlide);
slideInput[1].addEventListener('input' , checkSlide);
rangeInput[0].addEventListener('input' , minmaxRange);
rangeInput[1].addEventListener('input' , minmaxRange);

minmaxRange();