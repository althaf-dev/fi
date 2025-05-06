/**
 * The EventCreator is designed to provide decoupling in code, allowing for future flexibility in event handling,
 *  such as moving events to 'Rudderstack', by simply passing the corresponding call method in the constructor or using the subscribe method.
 */

class EventCreator {
    public eventCreator: any;

    public events: {[key: string]: string} | undefined;

    constructor(eventCreator: any) {
        this.eventCreator = eventCreator;
    }

    public subscribe(eventCreator: any) {
        this.eventCreator = eventCreator;
    }

    public fireEvent(...args: any) {
        try {
            if (typeof (this.eventCreator) === 'function') {
                this.eventCreator.apply(null, args);
            }
        } catch (err) {
            console.error(err);
        }
    }
}

export default EventCreator;
