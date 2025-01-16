import SchedulingDate from "./SchedulingDate"

export default class SchedulingService {
    calendar: any = {}

    async schedule(date: Date) {
        const formatedDate = new SchedulingDate(date).value;
        const hours = `${(date.getUTCHours() - 3)}:00`
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