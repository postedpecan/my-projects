const numInput = document.querySelectorAll('.num input');
const slideInput = document.querySelectorAll('.slide input');
const rangeInput = document.querySelectorAll('.rangeInp input');

let minnum = 0, maxnum = 0 , minslide = 0 , maxslide = 0;

function findMin(a , b , min = 0){
    if(a >= b) min = b;
    else min = a;
    let rangeMax = parseInt(rangeInput.max) , rangeMin = parseInt(rangeInput.min);
    if(min > rangeMax){
        min = rangeMax;
    }
    else if(min < rangeMin){
        min = rangeMin;
    }
    return min;
}

function findMax(a , b , max = 0){
    if(a >= b) max = a;
    else max = b;
    let rangeMax = parseInt(rangeInput.max) , rangeMin = parseInt(rangeInput.min);
    if(max > rangeMax){
        max = rangeMax;
    }
    else if(max < rangeMin){
        max = rangeMin;
    }
    return max;
}

function minmaxRange(){
    let min = 0 , max = 0;
    min = findMin(parseInt(rangeInput[0].value) , parseInt(rangeInput[1].value));
    max = findMax(parseInt(rangeInput[0].value) , parseInt(rangeInput[1].value));
    slideInput[0].min = min;
    slideInput[0].max = max;
    slideInput[1].min = min;
    slideInput[1].max = max;
}

function checkNumber(){
    minnum = findMin(parseInt(numInput[0].value) , parseInt(numInput[1].value));
    maxnum = findMax(parseInt(numInput[0].value) , parseInt(numInput[1].value));
    slideInput[0].value = minnum;
    slideInput[1].value = maxnum;
}

function checkSlide(){
    numInput[0].value = findMin(parseInt(slideInput[0].value) , parseInt(slideInput[1].value));
    numInput[1].value = findMax(parseInt(slideInput[0].value) , parseInt(slideInput[1].value));
}

numInput[0].addEventListener('input' , checkNumber);
numInput[1].addEventListener('input' , checkNumber);
slideInput[0].addEventListener('input' , checkSlide);
slideInput[1].addEventListener('input' , checkSlide);
rangeInput[0].addEventListener('input' , minmaxRange);
rangeInput[1].addEventListener('input' , minmaxRange);

check();