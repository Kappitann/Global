function createGreetable (str) {
    const result = function(){};
    result.prototype.name = str;
    result.prototype.greet = function (greeting) {return `${greeting}, ${result.prototype.name}!`};
    return result;
}
const g = createGreetable('VladislavcheG');
console.log(g.prototype.greet('Salam'));