import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerHome } from "./styles";
import { ContactSection } from "../../components/ContactSection";

export function App() {
    return (
        <ContainerHome>
            <Header />
            <Outlet />
            <ContactSection />
            <Footer />
        </ContainerHome>
    )
}