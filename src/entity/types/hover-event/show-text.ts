"use strict";

import RawJSONText from "../../index";
import { Event } from "../event";

export type ShowText = Event<"show_text", RawJSONText>;
