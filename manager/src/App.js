import './assets/sass/style.scss';
import { Header, Sidebar } from './components/Layout/';
import { Row, Col } from 'reactstrap';
import Navigation from './Navigation';

function App() {
    return (
        <div>
            <Header />

            <main>
                <Row className="h-100">
                    <Col xl={2}>
                        <Sidebar />
                    </Col>
                    <Col xl={10}>
                        <Navigation />
                    </Col>
                </Row>
            </main>
        </div>
    );
}

export default App;
