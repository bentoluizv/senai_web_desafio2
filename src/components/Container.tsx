import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Container(props: Props) {
  return (
    <div className="p-4 container mx-auto flex flex-col min-h-screen mb-[-10px]">
      {props.children}
    </div>
  );
}
