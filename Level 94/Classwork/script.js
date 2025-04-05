// function main() {
//     var year = parseInt(readLine(), 10);

//     console.log(calcCentury(year));
// }

// function calcCentury(year) {
//     return Math.ceil(year/100);
// }

function loveCalc(person, crush) {
    let lovePercentage = Math.floor(Math.random() * 101);
    
    alert(`${person} and ${crush}, your love percentage is ${lovePercentage}%`);
}

loveCalc("Person1", "Person2");
