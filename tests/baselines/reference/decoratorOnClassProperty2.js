//// [decoratorOnClassProperty2.ts]
declare function dec(target: any, propertyKey: string): void;

class C {
    @dec public prop;
}

//// [decoratorOnClassProperty2.js]
var __decorate = this.__decorate || (typeof Reflect === "object" && Reflect.decorate) || function (decorators, target, key, desc) {
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var C = (function () {
    function C() {
    }
    __decorate([
        dec
    ], C.prototype, "prop");
    return C;
})();
