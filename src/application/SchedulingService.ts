import SchedulingDate from "../domain/SchedulingDate"
import SchedulingHash from "../domain/SchedulingHash";
import SchedulingHour from "../domain/SchedulingHour";

export default class SchedulingService {
    calendar: any = {}

    async schedule(date: Date, clientName: string) {
        const formatedDate = new SchedulingDate(date).value;
        const hours = new SchedulingHour(date).value;
        const hash = new SchedulingHash(formatedDate, hours).value;
        this.calendar[hash] = {
            date: formatedDate,
            time: hours,
            clientName,
            avaiable: false
        }
        return {
            message: `Corte agendado para ${this.calendar[hash].date} às ${this.calendar[hash].time} para o cliente ${this.calendar[hash].clientName}`,
            success: true
        }
    }
}