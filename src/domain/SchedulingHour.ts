export default class SchedulingHour {
    value: string;
    START_WORKING = 8;
    END_WORKING = 18;


    constructor(date: Date) {
        const currentHour = date.getUTCHours() - 3
        if(this.isOutWorkingHour(currentHour)) throw new Error("Outside business hours")
        this.value = `${currentHour}:00`
    }

    isOutWorkingHour(currentHour: number) {
        if(currentHour < this.START_WORKING || currentHour > this.END_WORKING) return true;
        return false;
    }

}