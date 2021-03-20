export default class Evented extends EventTarget {
    private listeners:{ [type:string]:EventListener[] } = {};
    addEventListener(type: string, callback: EventListener): void {
        if(!(type in this.listeners)) {
            this.listeners[type] = [];
        }
        this.listeners[type].push(callback);
    }
    on(type: string, callback: EventListener): Evented {
        this.addEventListener(type, callback);
        return this;
    }
    removeEventListener (type: string, callback: EventListener): undefined {
        if(!(type in this.listeners)) {
            return;
        }
        let stack = this.listeners[type];
        for(let i = 0, l = stack.length; i < l; i++) {
            if(stack[i] === callback){
                stack.splice(i, 1);
                return this.removeEventListener(type, callback);
            }
        }
    }
    off(type: string, callback: EventListener): Evented {
        this.removeEventListener(type, callback);
        return this;
    }
    dispatchEvent(event: Event): boolean {
        if(!(event.type in this.listeners)) {
            return false;
        }
        let stack = this.listeners[event.type];
	    Object.defineProperty(event, 'target', {
            enumerable: false,
            configurable: false,
            writable: false,
            value: this
        });
        for(let i = 0, len = stack.length; i < len; i++) {
            stack[i].call(this, event);
        }
        return true;
    }
};