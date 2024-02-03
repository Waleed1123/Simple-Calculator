var displayInput = document.getElementById("displayInput");
function inputVal(value){
    displayInput.value += value;
}
function calculate(){
    displayInput.value = eval(displayInput.value);
}
function clearAll() {
    displayInput.value = "";
}
// Github Hosting Done