import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import StudentHome from "./components/student/StudentHome";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Container } from "react-bootstrap";
import AssistantHome from "./components/assistant/AssistantHome";

function App() {
  return (
    <BrowserRouter>
      <>
        <div className="relative pt-16 overflow-hidden">
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<StudentHome />} />
              <Route path="/assistant" element={<AssistantHome />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </>
    </BrowserRouter>
  );
}

export default App;
