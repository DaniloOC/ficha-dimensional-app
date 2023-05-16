import { Navbar, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Fichas from './components/Fichas';
import Funcionarios from './components/Funcionarios';
import Instrumentos from './components/Instrumentos';
import Maquinas from './components/Maquinas';
import Produtos from './components/Produtos';
import Setores from './components/Setores';
import Ficha from './components/forms/Ficha';
import Funcionario from './components/forms/Funcionario';
import Instrumento from './components/forms/Instrumento';
import Maquina from './components/forms/Maquina';
import Produto from './components/forms/Produto';
import Setor from './components/forms/Setor';
import FichaModal from './components/FichaModal';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Ficha Dimensional</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavLink to="/">Fichas</NavLink>
                <NavLink to="/produtos">Produtos</NavLink>
                <NavLink to="/maquinas">Maquinas</NavLink>
                <NavLink to="/setores">Setores</NavLink>
                <NavLink to="/funcionarios">Funcionários</NavLink>
                <NavLink to="/instrumentos">Instrumentos</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
};

function App() {
    return (
        <div className="App">
            <Container>
                <Router>
                    <Row>
                        <Header></Header>
                    </Row>
                    <Row>
                        <Routes>
                            <Route exact path='/ficha-dimensional-app' element={<Fichas />} />
                            <Route exact path="/" element={<Fichas />} />
                            <Route exact path="/produtos" element={<Produtos />} />
                            <Route exact path="/maquinas" element={<Maquinas />} />
                            <Route exact path="/setores" element={<Setores />} />
                            <Route exact path="/funcionarios" element={<Funcionarios />} />
                            <Route exact path="/instrumentos" element={<Instrumentos />} />
                            <Route path="/forms/ficha/:id?" element={<Ficha />} />
                            <Route path="/forms/produto/:id?" element={<Produto />} />
                            <Route path="/forms/maquina/:id?" element={<Maquina />} />
                            <Route path="/forms/setor/:id?" element={<Setor />} />
                            <Route path="/forms/funcionario/:id?" element={<Funcionario />} />
                            <Route path="/forms/instrumento/:id?" element={<Instrumento />} />
                            <Route path='/modal/ficha' element={<FichaModal />} />
                        </Routes>
                    </Row>
                </Router>
            </Container>
        </div>
    );
}

export default App;
