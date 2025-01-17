import SchedulingDate from "./SchedulingDate"
import SchedulingHour from "./SchedulingHour";

export default class SchedulingService {
    calendar: any = {}

    async schedule(date: Date) {
        const formatedDate = new SchedulingDate(date).value;
        const hours = new SchedulingHour(date).value;
        const hash = `${formatedDate}T${hours}`
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