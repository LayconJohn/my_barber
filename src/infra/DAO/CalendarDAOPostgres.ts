import CalendarDAO from "../../application/DAO/CalendarDAO";
import pgp from "pg-promise";

export default class CalendarDAOPostgres implements CalendarDAO {
    async get(hash: string): Promise<any> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
        return connection.query("SELECT * FROM my_barber.calendar WHERE hash = $1", [hash]);
    }
    async save(calendarDTO: { user_id: string; date: string; time: string; start_date: string; }): Promise<void> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
        connection.query("INSERT INTO my_barber.calendar (user_id, date, time, start_date) values ($1, $2, $3, $4)", [calendarDTO.user_id, calendarDTO.date, calendarDTO.time, calendarDTO.start_date]);
    }
    update(calendarDTO: { user_id: string; date: string; time: string; start_date: Date; end_date: Date; }): Promise<void> {
        throw new Error("Method not implemented.");
    }

}