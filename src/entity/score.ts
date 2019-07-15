"use strict";

import { Score as ScoreType } from "./types/score";

import { Base } from "./base";

export interface Score extends Base {
    score: ScoreType;
}

export default Score;
