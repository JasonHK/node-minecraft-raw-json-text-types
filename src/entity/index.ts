"use strict";

import { Keybind as KeybindEntity } from "./keybind";
import { NBT as NBTEntity } from "./nbt";
import { Score as ScoreEntity } from "./score";
import { Selector as SelectorEntity } from "./selector";
import { Text as TextEntity } from "./text";
import { Translate as TranslateEntity } from "./translate";

type Entity = TextEntity | TranslateEntity | ScoreEntity | SelectorEntity | KeybindEntity | NBTEntity;

namespace Entity {

    export type Text = TextEntity;
    export type Translate = TranslateEntity;
    export type Score = ScoreEntity;
    export type Selector = SelectorEntity;
    export type Keybind = KeybindEntity;
    export type NBT = NBTEntity;
}

export { Keybind } from "./keybind";
export { NBT } from "./nbt";
export { Score } from "./score";
export { Selector } from "./selector";
export { Text } from "./text";
export { Translate } from "./translate";

export default Entity;
