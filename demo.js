var n = prompt("Введите любое число", "");
var answer = Math.sqrt(n)
alert("Корень этого числа " + n + " равен " + answer);
function printTime() {
    var d = new Date();
    var hours = d.getHours();
    var mins = d.getMinutes();
    var secs = d.getSeconds();
    document.body.innerHTML = hours+":"+mins+":"+secs;
}
setInterval(printTime,1000);
