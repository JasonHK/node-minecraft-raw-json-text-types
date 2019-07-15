"use strict";

import { Others as OtherActions } from "./others";
import { ShowText as ShowTextAction } from "./show-text";

export type HoverEvent = ShowTextAction | OtherActions;

export namespace HoverEvent {

    export type ShowText = ShowTextAction;
    export type Others = OtherActions;
}

export default HoverEvent;
