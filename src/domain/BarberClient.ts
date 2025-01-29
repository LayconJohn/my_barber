export default class BarberClient {

    constructor(
        private readonly name: string,
    ) {}

    getName(): string {
        return this.name;
    }
}