
export class Time {
    public hours: number;
    public minuts: number;

    public toString = (): string => {
        return this.hours + ':' + (this.minuts > 9 ? this.minuts : '0' + this.minuts);
    }
}
