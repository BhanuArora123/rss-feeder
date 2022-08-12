import {Navbar, Container, Nav} from "react-bootstrap";
const NavigationBar = () => {
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
                <Navbar.Brand href="/">RSS Feeder</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Feeds</Nav.Link>
                    <Nav.Link href="/feeds/subscribe">Subscribe A Feed</Nav.Link>
                    <Nav.Link href="/feeds/subscriptions">Current Subscriptions</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default NavigationBar;