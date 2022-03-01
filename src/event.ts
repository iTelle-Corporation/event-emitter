
export type Event<EventType, Payload> = {
    type : EventType,
    payload: Payload,
    metadata: {
        user_id?: number,
        timestamp?: number,
        ip?: string,
        device?: string,
        browser?: string,
        url?: string
    }
}