import { Navbar, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { NavLink, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Ficha from './components/Ficha';
import Funcionarios from './components/Funcionarios';
import Instrumentos from './components/Instrumentos';
import Maquinas from './components/Maquinas';
import Produtos from './components/Produtos';
import Setores from './components/Setores';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Ficha Dimensional</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <NavLink to="/">Ficha</NavLink>
                <NavLink to="/produtos">Produto</NavLink>
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
                            <Route exact path="/" element={<Ficha />} />
                            <Route exact path="/produtos" element={<Produtos />} />
                            <Route exact path="/maquinas" element={<Maquinas />} />
                            <Route exact path="/setores" element={<Setores />} />
                            <Route exact path="/funcionarios" element={<Funcionarios />} />
                            <Route exact path="/instrumentos" element={<Instrumentos />} />
                        </Routes>
                    </Row>
                </Router>
            </Container>
        </div>
    );
}

export default App;
