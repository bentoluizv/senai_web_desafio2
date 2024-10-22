type Props = {
  openModal: () => void;
};

export default function NewBookingModalBtn({ openModal: closeModal }: Props) {
  return (
    <button
      onClick={closeModal}
      className="bg-blue-500 text-white text-lg py-4 px-8 md:py-2 md:px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-center">
      Nova Reserva
    </button>
  );
}
