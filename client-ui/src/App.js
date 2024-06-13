import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "./App.css";
import StudentHome from "./components/student/StudentHome";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Container } from "react-bootstrap";
import AssistantHome from "./components/assistant/AssistantHome";
import Login from "./components/user/Login";
import { useReducer } from "react";
import { DispatchContext, UserContext } from "./context/Context";
import { DispatchReducer } from "./reducer/Reducers";

function App() {
  const [user, dispatch] = useReducer(DispatchReducer, null);
  return (
    <BrowserRouter>
      <UserContext.Provider value={user}>
        <DispatchContext.Provider value={dispatch}>
          <div className="relative pt-16">
            <Header />
            <Container>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<StudentHome />} />
                <Route path="/assistant" element={<AssistantHome />} />
              </Routes>
            </Container>
            <Footer />
          </div>
        </DispatchContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
