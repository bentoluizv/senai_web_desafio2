type Props = {
  type: string;
  name: string;
  isRequired: boolean;
};

export default function input({ type, name, isRequired }: Props) {
  return (
    <input
      className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      type={type}
      name={name}
      id={name}
      required={isRequired}
    />
  );
}
