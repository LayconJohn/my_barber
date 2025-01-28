export default class SchedulingHour {
    value: string;

    constructor(date: Date) {
        this.value = `${(date.getUTCHours() - 3)}:00`
    }

}