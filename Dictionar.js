let input = document.getElementById("inputTxt");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById("searchWord").click();
    }
});
let index = 0;
let wordCheck = [];
function searchWord() {
    let inputWord = document.getElementById("inputTxt").value;
    wordCheck[index] = inputWord; 
    document.getElementById("inputTxt").value ='';
    let existingWord;
    if(index > 0)  {
        for(let i = 0; i < index; ++i) {
            existingWord =  wordCheck[i].localeCompare(wordCheck[index]);
            if(existingWord == 0) {
                document.getElementById('warningText').innerHTML = "The word already exists!"; 
                break;
            }
        }
    }
   if(existingWord != 0) {
        document.getElementById('arrayWords').innerHTML += wordCheck[index] + "<br>";
        document.getElementById('warningText').innerHTML = ""; 
    }
    ++index;
}
