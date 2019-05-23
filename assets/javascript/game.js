
var chances = 4;
var win = 0;
var alpha = [];
for (var i = 65; i <= 90; i++) {
    res = String.fromCharCode(i);
    alpha.push(res);
}
console.log(alpha);

randNum = () => {
    var genRand = Math.floor(Math.random() * 90) + 65
    return genRand

}

var compRand = String.fromCharCode(randNum())
console.log(compRand)









