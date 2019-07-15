"use strict";

import { List } from "../list";

import { ClickEvent } from "./types/click-event";
import { Color } from "./types/color";
import { Effect } from "./types/effect";
import { HoverEvent } from "./types/hover-event";

export interface Base {
    color?: Color | Effect;
    bold?: boolean;
    italic?: boolean;
    underlined?: boolean;
    strikethrough?: boolean;
    obfuscated?: boolean;
    insertion?: string;
    clickEvent?: ClickEvent;
    hoverEvent?: HoverEvent;
    extra?: List;
}

export default Base;
