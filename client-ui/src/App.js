import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useReducer } from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./common/Footer";
import Header from "./common/Header";
import AssistantHome from "./components/assistant/AssistantHome";
import Class from "./components/assistant/Class";
import AssistantActivityDetail from "./components/assistant/activity/AssistantActivityDetail";
import AssistanActivityForm from "./components/assistant/activity/AssistantActivityForm";
import AssistantActivityList from "./components/assistant/activity/AssistantActivityList";
import AssistantActivityUpdate from "./components/assistant/activity/AssistantActivityUpdate";
import MissingReportDetail from "./components/assistant/missingreport/MissingReportDetail";
import MissingReportList from "./components/assistant/missingreport/MissingReportList";
import TestSelectSemester from "./components/assistant/missingreport/TestSelectSemester";
import ScoreDetail from "./components/assistant/scorestudent/ScoreDetail";
import StudentAchievement from "./components/assistant/student/StudentAchievement";
import StudentList from "./components/assistant/student/StudentList";
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
import Joining from "./components/user/Joining";
import MissingReport from "./components/user/MissingReport";
import Profile from "./components/user/Profile";
import cookies from "react-cookies";
import { authApi, endpoints } from "./apis/API";

function App() {
  const [user, dispatch] = useReducer(DispatchReducer, null);

  useEffect(() => {
    const fetchUser = async () => {
      if (cookies.load("token") !== undefined) {
        try {
          let user = await authApi().get(endpoints["current-user"]);
          dispatch({
            type: "login",
            payload: user.data.result,
          });
        } catch (ex) {
          alert("catch in");
        }
      }
    };
    fetchUser();
  }, []);
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
                  <Route
                    path="activity/list"
                    element={<AssistantActivityList />}
                  />
                  <Route
                    path="activity/detail/:id"
                    element={<AssistantActivityDetail />}
                  />
                  <Route
                    path="activity/detail/:id/update"
                    element={<AssistantActivityUpdate />}
                  />
                  <Route
                    path="activity/create"
                    element={<AssistanActivityForm />}
                  />
                  <Route
                    path="missing-report/list"
                    element={<MissingReportList />}
                  />
                  <Route
                    path="missing-report/detail/:id"
                    element={<MissingReportDetail />}
                  />
                  <Route path="class" element={<Class />} />
                  <Route path="class/:id" element={<StudentList />} />
                  <Route
                    path="class/:id/student/:studentId"
                    element={<StudentAchievement />}
                  />
                  <Route
                    path="class/:id/student/:studentId/join-activity/:joinActivityId/scores"
                    element={<ScoreDetail />}
                  />
                </Route>
                <Route path="" element={<Home />} />
                <Route
                  path="/activity-detail/:id"
                  element={<ActivityDetail />}
                />
                <Route path="/register" element={<RegisterSite />} />
                <Route path="/joined" element={<Joined />} />
                <Route path="/test" element={<Test />} />
                <Route path="/user-register" element={<Register />} />
                <Route path="/verify" element={<Verify />} />
                <Route path="/testss" element={<TestSelectSemester />} />
                <Route path="/joining" element={<Joining />} />
                <Route path="/missing-report" element={<MissingReport />} />
                <Route path="/profile" element={<Profile />} />
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
