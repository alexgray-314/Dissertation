import { State } from "../state/state";

export interface UI {
    update(state : State) : void;
}