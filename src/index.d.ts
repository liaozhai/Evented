export default class Evented implements EventTarget {
    private listeners;
    addEventListener(type: string, callback: EventListener): void;
    on(type: string, callback: EventListener): this;
    removeEventListener(type: string, callback: EventListener): undefined;
    off(type: string, callback: EventListener): this;
    dispatchEvent(event: Event): boolean;
}
