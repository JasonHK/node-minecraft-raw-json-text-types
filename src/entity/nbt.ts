"use strict";

import { Base } from "./base";

export interface NBT extends Base {
    nbt: string;
    interpret?: boolean;
    block?: string;
    entity?: string;
}

export default NBT;
