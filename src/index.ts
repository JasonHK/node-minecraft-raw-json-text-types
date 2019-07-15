"use strict";

import EntityType from "./entity";
import { List as ListType } from "./list";
import { Text as TextType } from "./text";

type RawJSONText = TextType | EntityType | ListType;

namespace RawJSONText {

    export type Text = TextType;
    export type Entity = EntityType;
    export type List = ListType;
}

export { default as Entity } from "./entity";
export { default as List } from "./list";
export { default as Text } from "./text";

export default RawJSONText;
