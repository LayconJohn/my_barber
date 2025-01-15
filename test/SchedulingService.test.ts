test("Deve agendar um corte de cabelo", async () => {
    const schedulingService = new SchedulingService();
    const date = new Date("2025-02-13T10:00:00");
    const output = await schedulingService.execute(date);
    expect(output).toBe({
        message: "Corte agendado para 13/02/2025 às 10:00",
        success: true
    });
});