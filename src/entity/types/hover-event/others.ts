"use strict";

import { Event } from "../event";

export type Others = Event<"show_achievement" | "show_item" | "show_entity", string>;

export default Others;
