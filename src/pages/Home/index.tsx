import { Outlet } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { ContainerHome } from "./styles";
import Modal from "../../components/Modal";

export function App() {
    return (
        <ContainerHome>
            <Header />
            <Outlet />
            <Footer />
            <Modal />
        </ContainerHome>
    )
}