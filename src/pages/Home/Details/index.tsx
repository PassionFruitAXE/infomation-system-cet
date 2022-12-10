import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Details: FC = () => {
  const navigator = useNavigate();
  return (
    <div>
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
