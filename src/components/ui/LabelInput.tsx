import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function LabelInput({ children }: Props) {
  return <div className="flex flex-col">{children}</div>;
}
