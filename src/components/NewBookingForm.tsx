import { ReactNode } from "react";
import InputGroup from "./ui/InputGroup";
import LabelInput from "./ui/LabelInput";

type Props = {
  children: ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function NewBookingForm({ children, onSubmit }: Props) {
  return (
    <form
      onSubmit={onSubmit}
      id="register-form"
      className="flex flex-col items-center">
      <div className="flex flex-col mt-4 gap-4 ">
        <InputGroup>
          <LabelInput
            type={"text"}
            name={"proprietario"}
            content={"Proprietario"}
            isRequired={true}
          />
          <LabelInput
            type={"text"}
            name={"apartamento"}
            content={"Apartamento"}
            isRequired={true}
          />
        </InputGroup>
        <InputGroup>
          <LabelInput
            type={"text"}
            name={"bloco"}
            content={"Bloco"}
            isRequired={true}
          />
          <LabelInput
            type={"text"}
            name={"placa"}
            content={"Placa"}
            isRequired={true}
          />
        </InputGroup>
        <InputGroup>
          <LabelInput
            type={"text"}
            name={"modelo"}
            content={"Modelo"}
            isRequired={true}
          />
          <LabelInput
            type={"text"}
            name={"vaga"}
            content={"Vaga"}
            isRequired={true}
          />
        </InputGroup>
        <InputGroup>
          <LabelInput
            type={"text"}
            name={"cor"}
            content={"Cor"}
            isRequired={true}
          />
        </InputGroup>
      </div>
      <div className="flex mt-8 mb-4 lg:mt-16 gap-5">{children}</div>
    </form>
  );
}
