var MinhaVarial = "minha variável";
function MayFunc(x, y) {
    return x + y;
}
var Numeros = [1, 2, 3];
Numeros.map(function (valor) {
    return valor * 2;
});
Numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
