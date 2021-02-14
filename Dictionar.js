var input = document.getElementById("inputTxt");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});
let x = 0;
let wordShape = [];
function buttonFunction() {
    let inputWord = document.getElementById("inputTxt").value;
    wordShape[x] = inputWord; 
    document.getElementById("inputTxt").value ='';
    let n;
    if(x > 0)  {
        for(let i = 0; i < x; ++i) {
            n =  wordShape[i].localeCompare(wordShape[x]);
            if(n == 0) {
                document.getElementById('test').innerHTML = "The word already exists!"; 
                break;
            }
        }
    }
   if(n != 0) {
        document.getElementById('arrayWords').innerHTML += wordShape[x] + "<br>";
        document.getElementById('test').innerHTML = ""; 
    }
    ++x;
}
