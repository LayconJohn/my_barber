import SchedulingService from "../src/application/SchedulingService";

test("Deve agendar um corte de cabelo", async () => {
    const schedulingService = new SchedulingService();
    const date = new Date("2025-02-13T10:00:00");
    const output = await schedulingService.schedule(date);
    expect(output).toStrictEqual({
        message: "Corte agendado para 13/02/2025 às 10:00",
        success: true
    });
});

test("Deve lançar um erro quando a data for fora do horário de expediente", async() => {
    const schedulingService = new SchedulingService();
    const date = new Date("202-02-13T22:00:00");
    await expect(() => schedulingService.schedule(date)).rejects.toThrow(new Error("Outside business hours"))
})

test("Deve lançar um erro quando a data já estiver agendada", async() => {
    const schedulingService = new SchedulingService();
    const dateScheduled = new Date("2025-02-13T10:00:00");
    await schedulingService.schedule(dateScheduled);
    const newScheduledDate = new Date("2025-02-13T10:00:00");
    await expect(() => schedulingService.schedule(newScheduledDate)).rejects.toThrow(new Error("Date already scheduled"))
});