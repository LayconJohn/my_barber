import SchedulingService from "../src/application/SchedulingService";
import BarberClient from "../src/domain/BarberClient";

test("Deve agendar um corte de cabelo", async () => {
    const schedulingService = new SchedulingService();
    const baberClient = new BarberClient("Fulano");
    const date = new Date("2025-02-13T10:00:00");
    const output = await schedulingService.schedule(date, baberClient.getName());
    expect(output).toStrictEqual({
        message: "Corte agendado para 13/02/2025 às 10:00 para o cliente Fulano",
        success: true
    });
});

test("Deve lançar um erro quando a data for fora do horário de expediente", async() => {
    const schedulingService = new SchedulingService();
    const baberClient = new BarberClient("Fulano");
    const date = new Date("202-02-13T22:00:00");
    await expect(() => schedulingService.schedule(date, baberClient.getName())).rejects.toThrow(new Error("Outside business hours"))
})

test("Deve lançar um erro quando a data já estiver agendada", async() => {
    const schedulingService = new SchedulingService();
    const dateScheduled = new Date("2025-02-13T10:00:00");
    const baberClient = new BarberClient("Fulano");
    await schedulingService.schedule(dateScheduled, baberClient.getName());
    const newScheduledDate = new Date("2025-02-13T10:00:00");
    const newBarberClient = new BarberClient("Ciclano");
    await expect(() => schedulingService.schedule(newScheduledDate, newBarberClient.getName())).rejects.toThrow(new Error("Date already scheduled by Fulano"))
});