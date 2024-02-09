function convert() {
    var miles = document.getElementById('miles').value;
    var kilometers = miles * 1.60934;
    document.getElementById('output').innerHTML = miles + " miles is equal to " + kilometers.toFixed(2) + " kilometers.";
}
