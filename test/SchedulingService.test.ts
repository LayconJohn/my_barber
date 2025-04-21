import SchedulingService from "../src/application/service/SchedulingService";
import BarberClient from "../src/domain/BarberClient";
import CalendarDAOPostgres from "../src/infra/DAO/CalendarDAOPostgres";

test("Deve agendar um corte de cabelo", async () => {
    const calendarDAOPosgres = new CalendarDAOPostgres()
    const schedulingService = new SchedulingService(calendarDAOPosgres);
    const baberClient = new BarberClient("Fulano");
    const date = new Date("2025-02-13T10:00:00j");

    await schedulingService.schedule(date, baberClient.getName());
    
    expect(calendarDAOPosgres.save).toHaveBeenCalled();
});

test("Deve lançar um erro quando a data for fora do horário de expediente", async() => {
    const calendarDAOPostgres =  new CalendarDAOPostgres();
    const schedulingService = new SchedulingService(calendarDAOPostgres);
    const baberClient = new BarberClient("Fulano");
    const date = new Date("2022-02-13T22:00:00");
    await expect(() => schedulingService.schedule(date, baberClient.getName())).rejects.toThrow(new Error("Outside business hours"))
})

test("Deve lançar um erro quando a data já estiver agendada", async() => {
    const calendarDAOPosgres = new CalendarDAOPostgres();
    const schedulingService = new SchedulingService(calendarDAOPosgres);
    const dateScheduled = new Date("2025-02-13T10:00:00");
    const baberClient = new BarberClient("Fulano");
    await schedulingService.schedule(dateScheduled, baberClient.getName());
    const newScheduledDate = new Date("2025-02-13T10:00:00");
    const newBarberClient = new BarberClient("Ciclano");
    await expect(() => schedulingService.schedule(newScheduledDate, newBarberClient.getName())).rejects.toThrow(new Error("Date already scheduled"))
});