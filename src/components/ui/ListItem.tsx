import { Reserva } from "../../models/ReservaModel";

type Props = {
  reserva: Reserva;
  onDelete: (uuid: string) => void;
};

export default function ListItem({ reserva, onDelete }: Props) {
  return (
    <li
      key={reserva.uuid}
      id={reserva.uuid}
      className="card bg-gray-100 text-gray-800 p-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition-all duration-300">
      <div className="flex justify-between">
        <h3 className="font-bold text-lg">
          Bloco: {reserva.bloco} | Ap: {reserva.apartamento}
        </h3>
        <button
          className="card-close-btn font-bold text-xl text-center cursor-pointer"
          onClick={() => onDelete(reserva.uuid)}>
          X
        </button>
      </div>
      <p>Vaga: {reserva.vaga}</p>
      <p>{reserva.proprietario}</p>
      <p>{reserva.placa}</p>
      <p>{`${reserva.modelo} (${reserva.cor})`}</p>
    </li>
  );
}
