import './App.css';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { Row, Col, Navbar, LinkContainer } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { useLocation } from "react-router";
import Ficha from './components/Ficha';
import Produtos from './components/Produtos';
import Maquinas from './components/Maquinas';
import Setores from './components/Setores';
import Funcionarios from './components/Funcionarios';
import Instrumentos from './components/Instrumentos';

const Header = props => {
    const location = useLocation();
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand >Ficha Dimensional</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav activeKey={location.pathname} className="mr-auto">
                    <Nav.Link to="/">Ficha</Nav.Link>
                    <Nav.Link to="/produtos">Produto</Nav.Link>
                    <Nav.Link eventKey="/maquinas">Maquinas</Nav.Link>
                    <Nav.Link eventKey="/setores">Setores</Nav.Link>
                    <Nav.Link eventKey="/funcionarios">Funcionários</Nav.Link>
                    <Nav.Link eventKey="/instrumentos">Instrumentos</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};
const HeaderWithRouter = Header;

function App() {
    return (
        <div className="App">
            <Container>
                <Router>
                <Row>
                        <HeaderWithRouter></HeaderWithRouter>
                        
                </Row>
                <Row>
                    <Routes>

                            <Route exact path="/" element={Ficha} />
                            <Route exact path="/produtos" element={Produtos} />
                            <Route path="/maquinas" element={Maquinas} />
                            <Route path="/setores" element={Setores} />
                            <Route path="/funcionarios" element={Funcionarios} />
                            <Route path="/instrumentos" element={Instrumentos} />
                    </Routes>
                </Row>
            </Router>
            </Container>
        </div>
    );
}

export default App;
