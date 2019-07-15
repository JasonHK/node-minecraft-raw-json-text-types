"use strict";

import { Event } from "./event";

export type ClickEvent = Event<"open_url" | "open_file" | "run_command" | "suggest_command" | "change_page", string>;

export default ClickEvent;
