import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function BookingList({ children }: Props) {
  return (
    <div className="flex flex-col h-[440px] md:h-[570px] lg:h-[580px] xl:h-[740px]">
      <ul
        id="listagem"
        className="flex flex-col mt-4 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3  h-full overflow-auto">
        {children}
      </ul>
    </div>
  );
}
