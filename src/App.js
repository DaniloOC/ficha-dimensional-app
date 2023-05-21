import { Col, Nav, Navbar, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import FichaModal from './components/FichaModal';
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

const Header = () => {
    return (
        <Navbar fill collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Ficha Dimensional</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav fill variant="pills">
                    <Nav.Item>
                        <Nav.Link as={Link} to="/">Fichas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/produtos">Produtos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/maquinas">Maquinas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/setores">Setores</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/funcionarios">Funcionários</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} to="/instrumentos">Instrumentos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

function App() {
    return (
        <Container>
            <Router>
                <Row>
                    <Col xs={12}>
                        <Header></Header>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
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
                    </Col>
                </Row>
            </Router>
        </Container>
    );
}

export default App;
