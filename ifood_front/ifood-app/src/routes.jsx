import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Home";
import AlbumList from "./pages/Album";
import Sobre from "./pages/Sobre";
import NotFound from "./pages/NotFound";
import Images from "./pages/Colecao";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Main />}/>
                <Route path="/albuns" element={<AlbumList />} />
                <Route path="/album/:id" element={<Images />} />
                <Route path="/sobre" element={<Sobre />} />

                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}