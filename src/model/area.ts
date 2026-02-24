import { Stack } from "./stack";

export type Position = [string, number, number];

export class Area {
    id : string;
    stacks : Stack[];
    constructor (id: string) {
        this.id = id;
        this.stacks = [];
    }
}