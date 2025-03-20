import SchedulingDate from "../../domain/SchedulingDate";
import SchedulingHash from "../../domain/SchedulingHash";
import SchedulingHour from "../../domain/SchedulingHour";
import CalendarDAO from "../DAO/CalendarDAO";


export default class SchedulingService {

    constructor(
        private readonly calendarDAO: CalendarDAO
    ) {}    

    async schedule(date: Date, user_id: string) {
        const formatedDate = new SchedulingDate(date).value;
        const hours = new SchedulingHour(date).value;
        const hash = new SchedulingHash(formatedDate, hours).value;
        const calendarSchedule = await this.calendarDAO.get(hash)

        if(calendarSchedule) throw new Error(`Date already scheduled`)
        
        const calendar = {
            user_id,
            date: formatedDate,
            time: hours,
            start_date: date.toString()
        }

        await this.calendarDAO.save(calendar)
    }
}