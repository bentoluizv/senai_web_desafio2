type Props = {
  closeModal: () => void;
};

export default function CloseModalBtn({ closeModal }: Props) {
  return (
    <button
      onClick={closeModal}
      className="max-w-12 text-red-800 border border-red-500 hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
      X
    </button>
  );
}
