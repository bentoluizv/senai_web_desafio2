import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  type: string;
  name: string;
  isRequired: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
};

export default function input({
  type,
  name,
  isRequired,
  register,
  errors,
}: Props) {
  return (
    <>
      <input
        {...register(name)}
        className="border border-gray-300 rounded py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        type={type}
        name={name}
        id={name}
        required={isRequired}
      />
      {errors.root?.message && <span>{errors.root.message}</span>}
    </>
  );
}
