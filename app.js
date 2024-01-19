function btn (e){
var getinp = document.getElementById(Getinp)
 Getinp.value += e;
}
function eq(){
    var getinp = document.getElementById(Getinp)
    Getinp.value = eval(Getinp.value )
}
function ac(){
    Getinp.value = ''
}
function delet() {
    var getinp = document.getElementById('ipn');
    var currentValue = Getinp.value;

    // Check if there is any value to delete
    if (currentValue.length > 0) {
        // Remove the last character
        Getinp.value = currentValue.slice(0, -1);
    }
}
