import { EventSubscriber } from './eventSubscriber';
import { Event } from './event';

export default class EventEmitterService<EventType> {
    private subscribers: EventSubscriber<EventType, any>[] = [];

    subscribe(eventSubscriber: EventSubscriber<EventType, any>) {
        this.subscribers.push(eventSubscriber)
    }

    emit(event: Event<EventType, any>) {
        this.subscribers.forEach(subscriber => {
            if (subscriber.eventType === 'all' || subscriber.eventType === event.type)
            subscriber.execute(event)
        })
    }
}