import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { ContainerHome } from "./styles";

export function App() {
    return (
        <ContainerHome>
            <Header />
            <Outlet />
            <Footer />
        </ContainerHome>
    )
}