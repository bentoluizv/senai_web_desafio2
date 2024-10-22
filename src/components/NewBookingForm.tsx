import { ReactNode } from "react";
import InputGroup from "./ui/InputGroup";
import LabelInput from "./ui/LabelInput";

type Props = {
  children: ReactNode;
};

export default function NewBookingForm({ children }: Props) {
  return (
    <form id="register-form" className="flex flex-col items-center">
      <div className="flex flex-col mt-4 gap-4 ">
        <InputGroup>
          <LabelInput
            type={"text"}
            name={"proprietario-nome"}
            content={"Proprietario"}
            isRequired={true}
          />
          <LabelInput
            type={"text"}
            name={"proprietario-ap"}
            content={"Apartamento"}
            isRequired={true}
          />
        </InputGroup>
        <InputGroup>
          <LabelInput
            type={"text"}
            name={"proprietario-bl"}
            content={"Bloco"}
            isRequired={true}
          />
          <LabelInput
            type={"text"}
            name={"veiculo-placa"}
            content={"Placa"}
            isRequired={true}
          />
        </InputGroup>
        <InputGroup>
          <LabelInput
            type={"text"}
            name={"veiculo-modelo"}
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
      </div>
      <div className="flex mt-8 mb-4 lg:mt-16 gap-5">{children}</div>
    </form>
  );
}
