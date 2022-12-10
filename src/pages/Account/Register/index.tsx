import { FC, MouseEventHandler, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { message } from "antd";
import { notify, user } from "@/api";

const Register: FC = () => {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const codeRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const [count, setCount] = useState(60);
  const latestCount = useRef<number>(count);
  const navigate = useNavigate();
  const register = () => {
    user
      .register({
        code: codeRef.current?.value || "",
        mail: emailRef.current?.value || "",
        pwd: passwordRef.current?.value || "",
        examineeName: nameRef.current?.value || "",
      })
      .then(() => {
        message.success("注册成功");
        navigate("/");
      });
  };

  const handleSend: MouseEventHandler = () => {
    if (count !== 60) return;
    notify.sendCaptchaCode(emailRef.current?.value || "").then(() => {
      setCount(cnt => cnt - 1);
      const timer = setInterval(() => {
        if (latestCount.current === 0) {
          clearInterval(timer);
          setCount(60);
          return;
        }
        setCount(cnt => cnt - 1);
      }, 1000);
      message.success("验证码已发送到邮箱");
    });
  };

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 w-96 text-center text-3xl font-bold tracking-tight text-gray-900">
              注册账号
            </h2>
          </div>
          <section className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="relative">
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
                <span
                  onClick={handleSend}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-indigo-600 cursor-pointer z-50"
                >
                  {count === 60 ? "发送验证码" : `${count}s`}
                </span>
              </div>
              <div>
                <label htmlFor="Code" className="sr-only">
                  Code
                </label>
                <input
                  ref={codeRef}
                  id="Code"
                  name="Code"
                  type="Code"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Code"
                />
              </div>
              <div>
                <label htmlFor="Password" className="sr-only">
                  Password
                </label>
                <input
                  ref={passwordRef}
                  id="Password"
                  name="Password"
                  type="Password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
              <div>
                <label htmlFor="Name" className="sr-only">
                  Name
                </label>
                <input
                  ref={nameRef}
                  id="Name"
                  name="Name"
                  type="Name"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  已有账号?立即登录
                </Link>
              </div>
            </div>
            <div>
              <button
                onClick={register}
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Register
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
