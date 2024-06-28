import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useContext, useState } from "react";
import cookie from "react-cookies";
import {
  FaAngleDown,
  FaEnvira,
  FaReact,
  FaRightFromBracket,
} from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { ROLE } from "../configs/Constant";
import { DispatchContext, UserContext } from "../context/Context";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function Header() {
  const currentUser = useContext(UserContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "logout",
    });
    cookie.remove("token");
    setTimeout(() => {
      navigate("/login");
    }, 200);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-14 max-w-full bg-black fixed top-0 left-0 right-0 bg-opacity-50 backdrop-blur shadow-xl flex justify-between items-center px-4 z-30">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center">
          <FaEnvira className="size-10 bg-green-400" />
          <div className="h-10 w-0.5 bg-white mx-1"></div>
          <FaReact className="size-10 bg-cyan-400" />
        </div>
        <div className="flex justify-between items-center px-5">
          <Link
            to="/"
            className="text-decoration-none text-base text-white font-medium hover:scale-x-110 hover:bg-gray-700 rounded-md transition ease-in-out duration-200 mx-3.5"
          >
            Trang chủ
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center">
        {currentUser !== null ? (
          <Menu as="div" className="relative inline-block text-left">
            <div className="flex justify-between items-center">
              {currentUser.userRole.id !== 3 ? (
                <div
                  className="relative inline-block text-left"
                  onClick={toggle}
                >
                  <button className="text-decoration-none text-base text-white font-medium hover:scale-x-110 hover:bg-gray-700 rounded-md transition ease-in-out duration-200 mx-3.5 px-4 py-2">
                    Trang trợ lý sinh viên
                  </button>
                  {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <Link
                          to="/assistant/activity/list"
                          className="text-decoration-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Danh sách hoạt động
                        </Link>
                        <Link
                          to="/assistant/missing-report/list"
                          className="text-decoration-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Danh sách báo thiếu
                        </Link>
                        <Link
                          to="/assistant/class"
                          className="text-decoration-none block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                          role="menuitem"
                        >
                          Danh sách lớp
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <></>
              )}
              <MenuButton className="inline-flex max-w-40 justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center">
                {currentUser.username}
                <FaAngleDown />
              </MenuButton>
            </div>

            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <MenuItem>
                    {({ focus }) => (
                      <Link
                        to="/profile"
                        className={classNames(
                          focus ? "bg-gray-100 text-gray-900" : "text-gray-700",
                          "block px-4 py-2 text-sm"
                        )}
                      >
                        Thông tin cá nhân
                      </Link>
                    )}
                  </MenuItem>
                  {currentUser.userRole.userRole === ROLE.STUDENT ? (
                    <>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/register"
                            className={classNames(
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Hoạt động đã đăng ký
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/joining"
                            className={classNames(
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Hoạt động đang tham gia
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/missing-report"
                            className={classNames(
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Danh sách báo thiếu
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/joined"
                            className={classNames(
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Điểm rèn luyện
                          </Link>
                        )}
                      </MenuItem>
                    </>
                  ) : (
                    <>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/assistant"
                            className={classNames(
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Thống kê
                          </Link>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <Link
                            to="/assistant"
                            className={classNames(
                              focus
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Tạo hoạt động
                          </Link>
                        )}
                      </MenuItem>
                    </>
                  )}
                  <form method="POST" action="#">
                    <MenuItem>
                      {({ focus }) => (
                        <button
                          type="button"
                          className={classNames(
                            focus
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700",
                            "w-full px-4 py-2 text-left text-sm flex justify-between items-center text-red-700"
                          )}
                          onClick={logout}
                        >
                          Sign out
                          <FaRightFromBracket className="text-red-700" />
                        </button>
                      )}
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Transition>
          </Menu>
        ) : (
          <>
            <Link
              to="/login"
              className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center text-decoration-none"
            >
              Đăng nhập
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Header;
