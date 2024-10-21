import Nav from "./Nav";
import HeaderTitle from "./ui/HeaderTitle";

export default function Header() {
  return (
    <header className="flex flex-col md:flex-row justify-between gap-4 p-4">
      <HeaderTitle />
      <Nav />
    </header>
  );
}
