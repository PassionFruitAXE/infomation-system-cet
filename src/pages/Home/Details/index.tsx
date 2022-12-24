import { user } from "@/api";
import { RegistrationInfo } from "@/api/user";
import { FC, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Details: FC = () => {
  const [registrationInfo, setRegistrationsInfo] = useState<RegistrationInfo>();
  const { title, examId } = useLocation().state;
  const navigator = useNavigate();
  useEffect(() => {
    user.getRegistrationInfo(examId || "").then(response => {
      setRegistrationsInfo(response.data.data);
    });
  }, []);

  return (
    <div>
      <div className="overflow-hidden bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:px-6">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {title}
          </h3>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            关于考生的个人信息以及预报名的考试信息
          </p>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">考生名称</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {registrationInfo?.examineeName}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">身份证号</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {registrationInfo?.examineeIdNumber}
              </dd>
            </div>
            <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">准考证号</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {registrationInfo?.eaxmCardNumber}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">考试教室</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {registrationInfo?.examRoomNumber}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">座位号</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {registrationInfo?.seatNumber}
              </dd>
            </div>
            <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-500">考点</dt>
              <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                {registrationInfo?.addressName}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="mt-10 sm:mt-0">
        <div className="mt-5 md:col-span-2 md:mt-0">
          <div className="overflow-hidden shadow sm:rounded-md">
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                onClick={() => {
                  navigator(-1);
                }}
                type="submit"
                className="inline-flex justify-center mr-4 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Back
              </button>
              <button
                type="submit"
                className="inline-flex justify-center mr-4 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                打印准考证
              </button>
              <button
                type="submit"
                className="inline-flex justify-center rounded-md border border-transparent bg-red-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                取消报名
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
