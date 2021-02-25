var input = document.getElementById("inputTxt");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchButton").click();
    }
});
let x = 0;
let wordCheck = [];
function searchWord() {
    let inputWord = document.getElementById("inputTxt").value;
    wordCheck[x] = inputWord; 
    document.getElementById("inputTxt").value ='';
    let n;
    if(x > 0)  {
        for(let i = 0; i < x; ++i) {
            n =  wordCheck[i].localeCompare(wordCheck[x]);
            if(n == 0) {
                document.getElementById('warningText').innerHTML = "The word already exists!"; 
                break;
            }
        }
    }
   if(n != 0) {
        document.getElementById('arrayWords').innerHTML += wordCheck[x] + "<br>";
        document.getElementById('warningText').innerHTML = ""; 
    }
    ++x;
}
