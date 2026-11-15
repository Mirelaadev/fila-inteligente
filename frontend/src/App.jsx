import Administracao from "./pages/Administracao.jsx";
import Usuario from "./pages/Usuario.jsx";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Usuario/>}/>
                <Route path="/admin" element={<Administracao/>}/>

            </Routes>
        </BrowserRouter>
    )
}

export default App