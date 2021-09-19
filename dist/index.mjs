var Evented = /** @class */ (function () {
    function Evented() {
        this.listeners = {};
    }
    Evented.prototype.addEventListener = function (type, callback) {
        if (!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    };
    Evented.prototype.on = function (type, callback) {
        this.addEventListener(type, callback);
        return this;
    };
    Evented.prototype.removeEventListener = function (type, callback) {
        if (!(type in this.listeners)) {
            return;
        }
        var stack = this.listeners[type];
        for (var i = 0, l = stack.length; i < l; i++) {
            if (stack[i] === callback) {
                stack.splice(i, 1);
                return this.removeEventListener(type, callback);
            }
        }
    };
    Evented.prototype.off = function (type, callback) {
        this.removeEventListener(type, callback);
        return this;
    };
    Evented.prototype.dispatchEvent = function (event) {
        if (!(event.type in this.listeners)) {
            return false;
        }
        var stack = this.listeners[event.type];
        Object.defineProperty(event, 'target', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: this
        });
        for (var i = 0, len = stack.length; i < len; i++) {
            stack[i].call(this, event);
        }
        return true;
    };
    return Evented;
}());

export { Evented as default };
//# sourceMappingURL=index.mjs.map
