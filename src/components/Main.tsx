import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Main(props: Props) {
  return <main className="flex-grow mb[-20px]">{props.children}</main>;
}
