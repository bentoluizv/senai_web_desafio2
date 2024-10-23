import { zodResolver } from "@hookform/resolvers/zod";
import { ReactNode } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { ReservaSchema } from "../models/ReservaModel";
import Input from "./ui/Input";
import InputGroup from "./ui/InputGroup";
import Label from "./ui/Label";
import LabelInput from "./ui/LabelInput";

type Props = {
  children: ReactNode;
  onSubmit: (formData: FieldValues) => void;
};

export default function NewBookingForm({ children, onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(ReservaSchema),
  });

  return (
    <form
      onSubmit={handleSubmit((formData) => onSubmit(formData))}
      id="register-form"
      className="flex flex-col items-center">
      <div className="flex flex-col mt-4 gap-4 ">
        <InputGroup>
          <LabelInput>
            <Label input={"proprietario"} content={"Proprietario"} />
            <Input
              type={"text"}
              name={"proprietario"}
              isRequired={true}
              register={register}
              errors={errors}
            />
          </LabelInput>
          <LabelInput>
            <Label input={"apartamento"} content={"Apartamento"} />
            <Input
              type={"text"}
              name={"apartamento"}
              isRequired={true}
              register={register}
              errors={errors}
            />
          </LabelInput>
        </InputGroup>
        <InputGroup>
          <LabelInput>
            <Label input={"bloco"} content={"Bloco"} />
            <Input
              type={"text"}
              name={"bloco"}
              isRequired={true}
              register={register}
              errors={errors}
            />
          </LabelInput>
          <LabelInput>
            <Label input={"placa"} content={"Placa"} />
            <Input
              type={"text"}
              name={"placa"}
              isRequired={true}
              register={register}
              errors={errors}
            />
          </LabelInput>
        </InputGroup>
        <InputGroup>
          <LabelInput>
            <Label input={"modelo"} content={"Modelo"} />
            <Input
              type={"text"}
              name={"modelo"}
              isRequired={true}
              register={register}
              errors={errors}
            />
          </LabelInput>
          <LabelInput>
            <Label input={"vaga"} content={"Vaga"} />
            <Input
              type={"text"}
              name={"vaga"}
              isRequired={true}
              register={register}
              errors={errors}
            />
          </LabelInput>
        </InputGroup>
        <InputGroup>
          <Label input={"cor"} content={"Cor"} />
          <Input
            type={"text"}
            name={"cor"}
            isRequired={true}
            register={register}
            errors={errors}
          />
        </InputGroup>
      </div>
      <div className="flex mt-8 mb-4 lg:mt-16 gap-5">{children}</div>
    </form>
  );
}
