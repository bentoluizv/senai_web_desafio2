import Input from "./Input";
import Label from "./Label";

type Props = {
  type: string;
  name: string;
  content: string;
  isRequired: boolean;
};

export default function LabelInput({ type, name, isRequired, content }: Props) {
  return (
    <div className="flex flex-col">
      <Label input={name} content={content} />
      <Input type={type} name={name} isRequired={isRequired} />
    </div>
  );
}
