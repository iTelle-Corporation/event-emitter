import { Event } from "./event"

export default class EventFactory {

    static createEvent<EventType, Payload>(eventType: EventType, payload: Payload) : Event<EventType, Payload> {
        return {
            type: eventType,
            payload,
            metadata: {}
        }
    }
}