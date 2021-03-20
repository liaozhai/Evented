import Evented from '../src/index';

class Application extends Evented {
    run() {
        let event = document.createEvent('Event');
        event.initEvent('run', false, false);
        this.dispatchEvent(event);
    }
}

window.addEventListener('load', () => {
    const app = new Application();
    app.on('run', () => {
        console.log('Done!');
    });
    app.run();
});