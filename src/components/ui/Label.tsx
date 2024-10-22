type Props = {
  input: string;
  content: string;
};

export default function label({ input, content }: Props) {
  return <label htmlFor={input}>{content}</label>;
}
