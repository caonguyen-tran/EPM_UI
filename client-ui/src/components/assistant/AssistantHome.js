import { Outlet, useNavigate } from "react-router-dom";

const AssistantHome = () => {
  const nav = useNavigate();

  const list = () => {
    nav('activity/list')
  }

  const form = () => {
    nav('activity/create')
  }

  const mrlist = () => {
    nav('missing-report/list')
  }

  const classlist = () => {
    nav('class')
  }


  return <>
    <div className="container mx-auto mt-4 mb-4 p-4 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Trang quản lý hoạt động của trợ lý sinh viên
      </h1>
    </div>
    <div className="mb-4">
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2" onClick={list}>Danh sách hoạt động</button>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2" onClick={form}>Tạo hoạt động mới</button>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2" onClick={mrlist}>Danh sách báo thiếu</button>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center mr-2" onClick={classlist}>Danh sách lớp</button>
    </div>
    <Outlet></Outlet>
  </>;
};

export default AssistantHome;
