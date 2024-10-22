import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function NewBookingModal({ children }: Props) {
  return (
    <dialog className="mt-24 p-6 rounded-lg flex flex-col">{children}</dialog>
  );
}
