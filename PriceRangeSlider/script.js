const input = document.querySelectorAll('.cal input');
const ran = document.querySelectorAll('.slide input');

let minnum = 0, maxnum = 0;

function check(){
    if(parseInt(input[0].value) > parseInt(input[1].value)){
        maxnum = parseInt(input[0].value);
        minnum = parseInt(input[1].value);
    }
    else{
        minnum = parseInt(input[0].value);
        maxnum = parseInt(input[1].value);
    }
    if(minnum >= parseInt(ran[0].min) && parseInt(ran[1].max) <= maxnum){
        ran[0].value = minnum;
        ran[1].value = maxnum;
    }
    else{
        return 0;
    }
}

input[0].addEventListener('input' , check);
input[1].addEventListener('input' , check);

check();