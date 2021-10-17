import { Redirect } from "react-router-dom";
import { Col, Row } from "reactstrap";
import './assets/sass/style.scss';
import { Header, Sidebar } from "./components/Layout/index";
import { useCheckAuth } from "./hooks";
import Navigation from "./Navigation/index";

function App() {
    const isLogin = useCheckAuth();

    if (!isLogin) return <Redirect to="/login"/>

    return (
        <div>
            <Header />

            <main>
                <Row className='h-100'>
                    <Col xl={2}>
                        <Sidebar />
                    </Col>
                    <Col xl={10} style={{paddingRight: '2rem'}}>
                        <Navigation />
                    </Col>
                </Row>
            </main>
        </div>
    );
}

export default App;
