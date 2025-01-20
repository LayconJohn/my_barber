import SchedulingDate from "./SchedulingDate"
import SchedulingHash from "./SchedulingHash";
import SchedulingHour from "./SchedulingHour";

export default class SchedulingService {
    calendar: any = {}

    async schedule(date: Date) {
        const formatedDate = new SchedulingDate(date).value;
        const hours = new SchedulingHour(date).value;
        const hash = new SchedulingHash(formatedDate, hours).value;
        this.calendar[hash] = {
            date: formatedDate,
            time: hours,
            avaiable: false
        }
        return {
            message: `Corte agendado para ${this.calendar[hash].date} às ${this.calendar[hash].time}`,
            success: true
        }
    }
}