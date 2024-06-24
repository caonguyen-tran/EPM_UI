import { Outlet } from "react-router-dom";

const AssistantHome = () => {

  return <>
    <div className="container mx-auto mt-4 mb-4 p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Trang quản lý hoạt động của trợ lý sinh viên
      </h1>
    </div>
    <Outlet></Outlet>
  </>;
};

export default AssistantHome;
