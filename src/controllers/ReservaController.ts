import { Reserva, ReservaModel } from "../models/ReservaModel";

export class ReservaController {
  constructor(readonly model: ReservaModel) {}
  register(data: Reserva) {
    const properties = Object.keys({} as Reserva) as Array<keyof Reserva>;

    const hasAllProperties = properties.every((prop) => prop in data);
    if (!hasAllProperties) throw new Error("Invalid Input Data!");

    const reserva = new Reserva(
      data.placa,
      data.proprietario,
      data.apartamento,
      data.bloco,
      data.modelo,
      data.cor,
      data.vaga
    );

    this.model.register(reserva);
  }

  list() {
    const data = this.model.list();
    return data;
  }

  delete(uuid: string) {
    this.model.delete(uuid);
  }
}
