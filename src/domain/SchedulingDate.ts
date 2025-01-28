export default class SchedulingDate {
    readonly value: string;

    constructor(date: Date) {
        const options = { timeZone: 'America/Sao_Paulo', hour12: false };
        const formater = new Intl.DateTimeFormat('pt-BR', options);
        const formatedDate = formater.format(date);
        this.value = formatedDate;
    }
}