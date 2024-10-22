import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Nav({ children }: Props) {
  return <nav className="text-sm flex flex-col">{children}</nav>;
}
