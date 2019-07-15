"use strict";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface Event<E extends string = any, V = any> {
    action: E;
    value: V;
}

export default Event;
