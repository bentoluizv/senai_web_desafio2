import BookingList from "./BookingList";
import PageTitle from "./ui/PageTitle";

export default function Main() {
  return (
    <main className="flex-grow mb[-20px]">
      <PageTitle content={"Reservas: "} />
      <BookingList />
    </main>
  );
}
