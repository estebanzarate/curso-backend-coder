// Realizar un proyecto TypeScript node.js que genere un color aleatorio en formato RGB (canal rojo, verde y azul entre 0 y 255) y lo muestre por consola.
// La funcionalidad debe estar implementada dentro de una clase en un archivo color.ts y deberá utilizar sintaxis Typescript tipada.
// El proyecto deberá convertir este código TS a JS5 en forma automática con TSC CLI
var Color = /** @class */ (function () {
    function Color() {
        var _this = this;
        this.colorRGB = '';
        this.randomColor = function () { return Math.floor(Math.random() * 255); };
        this.getColor = function () { return _this.colorRGB; };
        this.colorRGB = "".concat(this.randomColor(), ", ").concat(this.randomColor(), ", ").concat(this.randomColor());
    }
    return Color;
}());
var color = new Color();
console.log(color.getColor());
