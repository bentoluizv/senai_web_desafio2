import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Header({ children }: Props) {
  return (
    <header className="flex flex-col md:flex-row justify-between gap-4 p-4">
      {children}
    </header>
  );
}
