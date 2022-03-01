import { Event } from "./event"

export class EventFactory {

    static createEvent<EventType, Payload>(eventType: EventType, payload: Payload) : Event<EventType, Payload> {
        return {
            type: eventType,
            payload,
            metadata: {}
        }
    }
}