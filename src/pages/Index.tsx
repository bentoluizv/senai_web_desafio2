import { useState } from "react";
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
import NewBookingModalBtn from "../components/ui/NewBookingModalBtn";
import PageTitle from "../components/ui/PageTitle";
import SubmitButton from "../components/ui/SubmitButton";

export default function Index() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
            <li></li>
          </BookingList>
        </Main>
      </Container>
      <Footer />
    </>
  );
}
