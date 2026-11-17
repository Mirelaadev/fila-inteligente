import Administracao from "./pages/Administracao.jsx";
import Usuario from "./pages/Usuario.jsx";
import Painel from "./pages/Painel.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Usuario/>}/>
                <Route path="/admin" element={<Administracao/>}/>
                <Route path="/painel" element={<Painel/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App