import { Col, Container, Row } from "react-bootstrap";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

const MainLayout = ({ children }) => {
    return (
        <div className="app">
            <Navbar />
            <Container fluid className="mt-3 px-3 px-md-5">
                <Row>
                    <Col xs={12} md={3} lg={3} className="mb-3 mb-md-0">
                        <Sidebar />
                    </Col>
                    <Col xs={12} md={9} lg={9}>
                        {children}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default MainLayout;