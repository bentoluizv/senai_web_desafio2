import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function InputGroup({ children }: Props) {
  return <div className="flex flex-col md:flex-row mt-4 gap-4">{children}</div>;
}
