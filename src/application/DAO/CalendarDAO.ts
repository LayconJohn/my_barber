export interface CalendarDAO {
    get(hash: string): Promise<any>
    save(calendarDTO: SaveInput): Promise<void>
    update(calendarDTO: UpdateInput): Promise<void>
}

type SaveInput = {
    user_id: string,
    date: string,
    time: string,
    start_Date: string
}

type UpdateInput = {
    user_id: string,
    date: string,
    time: string,
    start_date: Date,
    end_date: Date,
}