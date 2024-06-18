import { Link, useNavigate } from "react-router-dom";
import {
  FaEnvira,
  FaReact,
  FaRightFromBracket,
  FaAngleDown,
} from "react-icons/fa6";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { useContext } from "react";
import { DispatchContext, UserContext } from "../context/Context";
import cookie from "react-cookies";
import { ROLE } from "../configs/Constant";

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

  return (
    <div className="h-14 max-w-full bg-black fixed top-0 left-0 right-0 bg-opacity-50 backdrop-blur shadow-xl flex justify-between items-center px-4">
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
          <Link
            to="/"
            className="text-decoration-none text-base text-white font-medium hover:scale-x-110 hover:bg-gray-700 rounded-md transition ease-in-out duration-200 mx-3.5"
          >
            Đăng ký hoạt động
          </Link>
          <Link
            to="/"
            className="text-decoration-none text-base text-white font-medium hover:scale-x-110 hover:bg-gray-700 rounded-md transition ease-in-out duration-200 mx-3.5"
          >
            Đang diễn ra
          </Link>
          <Link
            to="/"
            className="text-decoration-none text-base text-white font-medium hover:scale-x-110 hover:bg-gray-700 rounded-md transition ease-in-out duration-200 mx-3.5"
          >
            Dashboard
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {currentUser !== null ? (
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 items-center">
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
                        to="/assistant"
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
                          Hoạt động đã đăng ký
                        </Link>
                      )}
                    </MenuItem>
                  ) : (
                    <></>
                  )}
                  {currentUser.userRole.userRole === ROLE.ADMIN ? (
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
                  ) : (
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
                          Điểm rèn luyện
                        </Link>
                      )}
                    </MenuItem>
                  )}
                  {currentUser.userRole.userRole === ROLE.ADMIN ? (
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
                  ) : (
                    <></>
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
