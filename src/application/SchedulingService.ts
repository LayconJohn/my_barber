import SchedulingDate from "../domain/SchedulingDate"
import SchedulingHash from "../domain/SchedulingHash";
import SchedulingHour from "../domain/SchedulingHour";

export default class SchedulingService {
    calendar: any = {}

    async schedule(date: Date, clientName: string) {
        const formatedDate = new SchedulingDate(date).value;
        const hours = new SchedulingHour(date).value;
        const hash = new SchedulingHash(formatedDate, hours).value;
        const calendarSchedule = this.calendar[hash]
        
        // if(!calendar || !calendar?.avaible) throw new Error(`Date already scheduled by ${this.calendar[hash].clientName}`)
        
        // calendar.date =formatedDate;
        // calendar.time = hours;
        // calendar.clientName = clientName;
        // calendar.avaiable = false; 
        this.calendar[hash] = {
            date: formatedDate,
            time: hours,
            clientName,
            avaiable: false
        }
        return this.calendar[hash];
    }
}