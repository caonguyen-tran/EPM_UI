import "bootstrap/dist/css/bootstrap.min.css";
import { useReducer } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import AssistantActivityDetail from "./components/assistant/AssistantActivityDetail";
import AssistanActivityForm from "./components/assistant/AssistantActivityForm";
import AssistantActivityList from "./components/assistant/AssistantActivityList";
import AssistantActivityUpdate from "./components/assistant/AssistantActivityUpdate";
import AssistantHome from "./components/assistant/AssistantHome";
import ActivityDetail from "./components/user/ActivityDetail";
import Home from "./components/user/Home";
import Joined from "./components/user/Joined";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import RegisterSite from "./components/user/RegisterSite";
import Test from "./components/user/Test";
import Verify from "./components/user/Verify";
import { DispatchContext, UserContext } from "./context/Context";
import { DispatchReducer } from "./reducer/Reducers";
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
                <Route path="/assistant" element={<AssistantHome />}>
                    <Route path="activity/list" element={<AssistantActivityList />} />
                    <Route path="activity/detail/:id" element={<AssistantActivityDetail />} />
                    <Route path="activity/detail/:id/update" element={<AssistantActivityUpdate />}/>
                    <Route path="activity/create" element={<AssistanActivityForm />}/>
                </Route>
                <Route path="" element={<Home />} />
                <Route path="/activity-detail/:id" element={<ActivityDetail />} />
                <Route path="/register" element={<RegisterSite />} />
                <Route path="/joined" element={<Joined />} />
                <Route path="/test" element={<Test />} />
                <Route path="/user-register" element={<Register />} />
                <Route path="/verify" element={<Verify />} />
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
