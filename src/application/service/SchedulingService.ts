import SchedulingDate from "../../domain/SchedulingDate";
import SchedulingHash from "../../domain/SchedulingHash";
import SchedulingHour from "../../domain/SchedulingHour";


export default class SchedulingService {
    calendar: any = {}

    async schedule(date: Date, clientName: string) {
        const formatedDate = new SchedulingDate(date).value;
        const hours = new SchedulingHour(date).value;
        const hash = new SchedulingHash(formatedDate, hours).value;
        const calendarSchedule = this.calendar[hash]

        if(calendarSchedule) throw new Error(`Date already scheduled`)
        
        this.calendar[hash] = {
            date: formatedDate,
            time: hours,
            clientName,
            avaiable: false
        }
        return this.calendar[hash];
    }
}