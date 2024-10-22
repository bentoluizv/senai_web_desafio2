import { z } from "zod";

const ReservaSchema = z.object({
  placa: z.string(),
  proprietario: z.string(),
  apartamento: z.string(),
  bloco: z.string(),
  modelo: z.string(),
  cor: z.string(),
  vaga: z.string(),
  uuid: z.string().optional(),
});

export class Reserva {
  constructor(
    readonly placa: string,
    readonly proprietario: string,
    readonly apartamento: string,
    readonly bloco: string,
    readonly modelo: string,
    readonly cor: string,
    readonly vaga: string,
    readonly uuid = crypto.randomUUID().toString()
  ) {}

  static fromFormData(data: { [k: string]: FormDataEntryValue }) {
    const parsedData = ReservaSchema.parse(data);

    const { apartamento, bloco, cor, modelo, placa, proprietario, uuid, vaga } =
      parsedData;
    return new Reserva(
      placa,
      proprietario,
      apartamento,
      bloco,
      modelo,
      cor,
      vaga,
      uuid
    );
  }
}

export class ReservaModel {
  reservas: Reserva[] = [];

  constructor() {
    this.#syncWithStorage();
  }

  register(reserva: Reserva) {
    this.reservas.push(reserva);
    this.#sendToStorage();
  }

  list() {
    this.#syncWithStorage();
    return this.reservas.reverse();
  }

  delete(uuid: string) {
    console.log(this.reservas);
    this.reservas = this.reservas.filter((reserva) => reserva.uuid !== uuid);
    this.#sendToStorage();
  }

  #sendToStorage() {
    window.localStorage.setItem("reservas", JSON.stringify(this.reservas));
  }

  #syncWithStorage() {
    const localData = window.localStorage.getItem("reservas");
    if (!localData) {
      return;
    }
    const parsedData = JSON.parse(localData);

    if (!Array.isArray(parsedData)) {
      throw new Error("Revervas is not an Array");
    }

    this.reservas = parsedData;
  }
}
