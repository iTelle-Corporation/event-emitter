import { Event } from "./event";

export interface EventSubscriber<EventType, Payload> {
    
    execute(event: Event<EventType, Payload>): void
    readonly eventType: EventType | 'all'
}