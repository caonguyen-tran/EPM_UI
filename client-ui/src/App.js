import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./common/Header";
import Footer from "./common/Footer";
import { Container } from "react-bootstrap";
import AssistantHome from "./components/assistant/AssistantHome";
import Login from "./components/user/Login";
import { useReducer } from "react";
import { DispatchContext, UserContext } from "./context/Context";
import { DispatchReducer } from "./reducer/Reducers";
import Home from "./components/user/Home";
import ActivityDetail from "./components/user/ActivityDetail";
import RegisterSite from "./components/user/RegisterSite";
import Joined from "./components/user/Joined";
import Test from "./components/user/Test";
import Chart from "./static/Chart";

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
                <Route path="/assistant" element={<AssistantHome />} />
                <Route path="" element={<Home />}/>
                <Route path="/activity-detail" element={<ActivityDetail />}/>
                <Route path="/register" element={<RegisterSite/>}/>
                <Route path="/joined" element={<Joined />} />
                <Route path="/test" element={<Test />}/>
              </Routes>
            </Container>
            <Footer />
            <Chart />
          </div>
        </DispatchContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
