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
    // <BrowserRouter>
    //   <>
    //     <Header />
    //     <Container>
    //       <Routes>
    //         <Route path="/" element={<StudentHome />} />
    //         <Route path="/assistant" element={<AssistantHome />} />
    //       </Routes>
    //     </Container>
    //     <Footer />
    //   </>
    // </BrowserRouter>
    <Footer />
  );
}

export default App;
