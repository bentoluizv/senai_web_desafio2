import { useEffect, useRef, useState } from "react";
import { FieldValues } from "react-hook-form";
import Swal from "sweetalert2";
import BookingList from "../components/BookingList";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";
import Nav from "../components/Nav";
import NewBookingForm from "../components/NewBookingForm";
import NewBookingModal from "../components/newBookingModal";
import CloseModalBtn from "../components/ui/CloseModalBtn";
import HeaderTitle from "../components/ui/HeaderTitle";
import ListItem from "../components/ui/ListItem";
import NewBookingModalBtn from "../components/ui/NewBookingModalBtn";
import PageTitle from "../components/ui/PageTitle";
import SubmitButton from "../components/ui/SubmitButton";
import { ReservaController } from "../controllers/ReservaController";
import { Reserva, ReservaModel } from "../models/ReservaModel";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [bookingData, setBookingData] = useState<Array<Reserva>>([]);

  const modelRef = useRef(new ReservaModel());
  const controllerRef = useRef(new ReservaController(modelRef.current));

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const data = controllerRef.current.list();
    setBookingData(data);
  }, []);

  const loadBookings = () => {
    const data = controllerRef.current.list();
    setBookingData(data);
  };
  const onDelete = (uuid: string) => {
    Swal.fire({
      title: "Tem certeza?",
      text: "Esta ação é irreversível. Deseja continuar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sim, excluir!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        controllerRef.current.delete(uuid);
        const updatedData = controllerRef.current.list();
        setBookingData(updatedData);
        Swal.fire(
          "Excluído!",
          "O recurso foi excluído com sucesso.",
          "success"
        );
      }
    });
  };
  const onSubmit = (formData: FieldValues) => {
    const newReserva = Reserva.fromFormData(formData);
    controllerRef.current.register(newReserva);
    loadBookings();
    closeModal();
  };

  return (
    <>
      <Container>
        {isModalOpen && (
          <NewBookingModal>
            <h3 className="font-semibold self-center text-xl mb-8">Cadastro</h3>
            <NewBookingForm onSubmit={onSubmit}>
              <SubmitButton />
              <CloseModalBtn closeModal={closeModal} />
            </NewBookingForm>
          </NewBookingModal>
        )}
        <Header>
          <HeaderTitle />
          <Nav>
            <NewBookingModalBtn openModal={openModal} />
          </Nav>
        </Header>
        <Main>
          <PageTitle content={"Reservas: "} />
          <BookingList>
            {bookingData.map((reserva) => {
              return ListItem({ reserva, onDelete });
            })}
          </BookingList>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
