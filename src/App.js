import "bootstrap/dist/css/bootstrap.min.css";
import './assets/css/style.css'
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./Navigatiton/index";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Navigation />
            </main>
            <Footer />

            <ToastContainer
                position='bottom-left'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </Router>
    );
}

export default App;
