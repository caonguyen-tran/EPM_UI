import { useContext, useState } from "react";
import { FaEnvira, FaReact } from "react-icons/fa6";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";
import { DispatchContext, UserContext } from "../../context/Context";
import API, { authApi, endpoints } from "../../apis/API";
import cookies from "react-cookies";

function Login() {
  const currentUser = useContext(UserContext);
  const dispatch = useContext(DispatchContext);
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const inputChange = (event, field) => {
    setUser((current) => {
      return { ...current, [field]: event.target.value };
    });
  };

  const login = async (e) => {
    e.preventDefault();

    try {
      let res = await API.post(endpoints["user-login"], user);
      cookies.save("token", res.data.result);

      setTimeout(async () => {
        let user = await authApi().get(endpoints["current-user"]);
        dispatch({
          type: "login",
          payload: user.data,
        });
        navigate("/");
      }, 200);
    } catch (ex) {
      console.log(ex);
    }
  };

  if (currentUser !== null) {
    return <Navigate to="/" />;
  }

  return (
    <div class="flex min-h-96 flex-col justify-center px-6 py-24 mt-14 lg:px-8">
      <div class="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center items-center">
          <FaEnvira className="size-14 bg-green-400" />
          <div className="h-10 w-0.5 bg-gray-700 mx-1"></div>
          <FaReact className="size-14 bg-cyan-400" />
        </div>
        <h2 class="mt-10 text-center text-4xl font-bold leading-9 tracking-tight text-gray-900">
          Đăng nhập
        </h2>
      </div>

      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" action="#" method="POST">
          <div>
            <label
              for="email"
              class="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div class="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="Tên đăng nhập hoặc email"
                required
                class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  inputChange(e, "username");
                }}
              />
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label
                for="password"
                class="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div class="text-sm">
                <Link
                  href="#"
                  class="font-semibold text-indigo-600 hover:text-indigo-500"
                >
                  Quên mật khẩu?
                </Link>
              </div>
            </div>
            <div class="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                placeholder="Mật khẩu"
                required
                class="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => {
                  inputChange(e, "password");
                }}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={login}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
