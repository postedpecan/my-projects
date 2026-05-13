const ParagraphnumInput = document.querySelector('.paragraph-num');
const ParagraphrangeInput = document.querySelector('.paragraph-range');
const WordnumInput = document.querySelector('.word-num');
const WordrangeInput = document.querySelector('.word-range');
const output = document.getElementById("output");

let ParagraphCount = parseInt(ParagraphnumInput.value)
, WordCount = parseInt(WordnumInput.value);

function generateWord(){
    const text = `Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Diam in arcu cursus euismod 
        quis viverra nibh. Nunc aliquet bibendum
        enim facilisis gravida neque convallis 
        a cras. Sagittis purus sit amet volutpat
        Consequat mauris. Duis ultricies lacus 
        sed turpis tincidunt id. Consequat interdum
        varius sit amet mattis vulputate. Enim sed
        faucibus turpis in eu. Ridiculus mus mauris
        vitae ultricies leo integer malesuada nunc vel.
        Nulla pharetra diam sit amet nisl suscipit.
        Lobortis elementum nibh tellus molestie nunc
        non blandit massa enim. Dis parturient montes
        nascetur ridiculus mus. Justo nec ultrices dui
        sapien eget. Enim tortor at auctor urna nunc.
        Dictumst quisque sagittis purus sit amet volutpat
        consequat mauris nunc.`;

    const cleanText = text.replace(/\s+/g, " ").trim();

    let word = cleanText.split(" ") , size = word.length;
    let loopWord = Math.floor(WordCount / size) , left = WordCount % size;
    
    let textOutput = "";
    for(let i = 0; i < ParagraphCount; i++){
        for(let i = 0; i < loopWord; i++)textOutput += text + " ";
        textOutput += word.slice(0 , left).join(" ") + " ";
    }
    output.innerHTML = textOutput;
}

function linkParagraphNum(){
    let value = parseInt(ParagraphrangeInput.value);
    ParagraphnumInput.value = value;
    ParagraphCount = value;
    generateWord();
}

function linkParagraphRange(){
    let value = parseInt(ParagraphnumInput.value);
    if(value > 100) value = 100;
    else if(value < 1) value = 1;
    else if(isNaN(value)) value = 1;
    ParagraphnumInput.value = value;
    ParagraphrangeInput.value = value;
    ParagraphCount = value;
    generateWord();
}

function linkWordNum(){
    let value = parseInt(WordrangeInput.value);
    WordnumInput.value = value;
    WordCount = value;
    generateWord();
}

function linkWordRange(){
    let value = parseInt(WordnumInput.value);
    if(value > 1000) value = 1000;
    else if(value < 1) value = 1;
    else if(isNaN(value)) value = 1;
    WordnumInput.value = value;
    WordrangeInput.value = value;
    WordCount = value;
    generateWord();
}

ParagraphnumInput.addEventListener("input" , linkParagraphRange);
ParagraphrangeInput.addEventListener("input" , linkParagraphNum);
WordnumInput.addEventListener("input" , linkWordRange);
WordrangeInput.addEventListener("input" , linkWordNum);

linkParagraphNum();
linkParagraphRange();
linkWordNum();
linkWordRange();
generateWord();