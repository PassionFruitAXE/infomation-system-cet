import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { setItem } from "@/utils/storage";
import { user } from "@/api";
import { useRef } from "react";
import { useUserInfo } from "@/hooks/user";

const Login = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();
  const { dispatch } = useUserInfo();
  const login = () => {
    user
      .login({
        mail: emailRef.current?.value || "",
        pwd: passwordRef.current?.value || "",
      })
      .then(value => {
        message.success("登陆成功");
        // dispatch(value.data.data);
        user.getUserInfo().then(response => {
          dispatch({
            name: response.data.data.examineeName,
            email: response.data.data.mail,
          });
        });
        setItem("token", value.data.data);
        navigate("/home");
      });
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 w-96 text-center text-3xl font-bold tracking-tight text-gray-900">
              登录你的账号
            </h2>
          </div>
          <section className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  ref={emailRef}
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/register"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  注册
                </Link>
              </div>

              <div className="text-sm">
                <a
                  href="/forget"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  忘记密码
                </a>
              </div>
            </div>

            <div>
              <button
                onClick={login}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
