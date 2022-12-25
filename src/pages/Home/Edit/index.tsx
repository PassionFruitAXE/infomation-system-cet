import { user } from "@/api";
import { useUserInfo } from "@/hooks/user";
import { Divider, message } from "antd";
import { FC, useRef } from "react";

const Edit: FC = () => {
  const oldPasswordRef = useRef<HTMLInputElement | null>(null);
  const newPasswordRef = useRef<HTMLInputElement | null>(null);
  const nameRef = useRef<HTMLInputElement | null>(null);
  const examineeIdNumberRef = useRef<HTMLInputElement | null>(null);

  const {
    userInfo: { name, email, examineeIdNumber },
  } = useUserInfo();
  return (
    <div>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <h3>账号信息</h3>
                <Divider />
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Exam name
                    </label>
                    <input
                      defaultValue={name}
                      ref={nameRef}
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <input
                      value={email}
                      readOnly={true}
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
                <Divider />
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-6">
                    <label
                      htmlFor="email-address"
                      className="block text-sm font-medium text-gray-700"
                    >
                      身份证号
                    </label>
                    <input
                      defaultValue={examineeIdNumber}
                      ref={examineeIdNumberRef}
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  onClick={() => {
                    const data = {
                      examineeIdNumber:
                        examineeIdNumberRef.current?.value ?? "",
                      examineeName: nameRef.current?.value ?? "",
                    };
                    user.updateUserInfo(data).then(() => {
                      message.success("修改成功");
                    });
                  }}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div>
            <div className="overflow-hidden shadow sm:rounded-md">
              <div className="bg-white px-4 py-5 sm:p-6">
                <h3>修改密码</h3>
                <Divider />
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="OldPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      OldPassword
                    </label>
                    <input
                      ref={oldPasswordRef}
                      type="text"
                      name="OldPassword"
                      id="OldPassword"
                      autoComplete="OldPassword"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="NewPassword"
                      className="block text-sm font-medium text-gray-700"
                    >
                      NewPassword
                    </label>
                    <input
                      ref={newPasswordRef}
                      type="text"
                      name="NewPassword"
                      id="NewPassword"
                      autoComplete="NewPassword"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  onClick={() => {
                    const data = {
                      oldPassword: oldPasswordRef.current?.value ?? "",
                      newPassword: newPasswordRef.current?.value ?? "",
                    };
                    user.alterPassword(data).then(() => {
                      message.success("修改成功");
                    });
                  }}
                  type="submit"
                  className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
