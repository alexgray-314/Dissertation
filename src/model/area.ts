import { Stack } from "./stack";

export type Position = [string, number, number];

export class Area {
    id : string;
    stacks : Stack[];
    args: Record<string, string | number>;
    constructor (id: string, args: Record<string, string|number>) {
        this.id = id;
        this.stacks = [];
        this.args = args;
    }
}