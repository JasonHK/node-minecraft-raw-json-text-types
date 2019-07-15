"use strict";

import { List } from "../list";

import { Base } from "./base";

export interface Translate extends Base {
    translate: string;
    with?: List;
}

export default Translate;
