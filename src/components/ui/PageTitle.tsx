type Props = {
  content: string;
};

export default function PageTitle(props: Props) {
  return (
    <div className="flex flex-col mb-4 mt-6">
      <h1 className="font-bold text-2xl text-center underline decoration-indigo-500 underline-offset-8">
        {props.content}
      </h1>
    </div>
  );
}
