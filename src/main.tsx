import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Container from "./components/Container";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Container>
      <Header />
      <Main />
    </Container>
    <Footer />
  </StrictMode>
);
