export default class Evented implements EventTarget {
    private listeners;
    addEventListener(type: string, callback: EventListener): void;
    on(type: string, callback: EventListener): Evented;
    removeEventListener(type: string, callback: EventListener): undefined;
    off(type: string, callback: EventListener): Evented;
    dispatchEvent(event: Event): boolean;
}
