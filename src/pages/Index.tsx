import { useEffect, useRef, useState } from "react";
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

  const onDelete = (uuid: string) => {
    controllerRef.current.delete(uuid);
    const updatedData = controllerRef.current.list();
    setBookingData(updatedData);
  };

  return (
    <>
      <Container>
        {isModalOpen && (
          <NewBookingModal>
            <NewBookingForm>
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
