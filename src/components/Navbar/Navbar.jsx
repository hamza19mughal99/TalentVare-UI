import { Button, Container, Form, Image, InputGroup, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { SearchIcon } from '../../assets/icons';
import { images } from '../../assets/images';
import './Navbar.scss';

const CustomNavbar = () => {
    return (
        <Navbar expand="xl" className="custom-navbar bg-white">
            <Container fluid className="px-3 px-md-5">
                <Navbar.Brand href="/">
                    <img src={images.mainLogo} alt="Logo" className="navbar-logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto mb-2 mb-lg-0 nav-links">
                        <Nav.Link as={NavLink} to="/" className="nav-item" end>Find Jobs</Nav.Link>
                        <Nav.Link href="#top-companies" className="nav-item">Top Companies</Nav.Link>
                        <Nav.Link href="#job-tracker" className="nav-item">Job Tracker</Nav.Link>
                        <Nav.Link href="#my-calendar" className="nav-item">My Calendar</Nav.Link>
                        <Nav.Link href="#documents" className="nav-item">Documents</Nav.Link>
                        <Nav.Link href="#messages" className="nav-item">Messages</Nav.Link>
                        <Nav.Link href="#notifications" className="nav-item">Notifications</Nav.Link>
                    </Nav>
                    <div className="d-flex align-items-center right-section gap-2 gap-xxl-3 mt-3 mt-xl-0">
                        <InputGroup className="search-bar">
                            <InputGroup.Text className="search-icon-bg border-end-0">
                                <SearchIcon width={15} height={15} />
                            </InputGroup.Text>
                            <Form.Control
                                type="text"
                                placeholder="Search"
                                className="search-input border-start-0 ps-0 shadow-none"
                            />
                        </InputGroup>
                        <Button variant="primary" className="resume-btn">Resume Builder</Button>
                        <Image src={images.profileImg} alt="Profile" roundedCircle className="profile-img" />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default CustomNavbar;