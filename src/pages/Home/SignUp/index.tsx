import { Cascader, Divider } from "antd";
import { FC } from "react";
import { location } from "@/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserInfo } from "@/hooks/user";

enum LocationType {
  PROVINCE = 0,
  CITY = 1,
  SCHOOL = 2,
}

interface Option {
  value: string;
  label: string;
  type: LocationType;
  children?: Option[];
  isLeaf?: boolean;
  loading?: boolean;
}

const SignUp: FC = () => {
  const [province, setProvince] = useState<Option[]>([]);
  const {
    userInfo: { name, email },
  } = useUserInfo();
  const navigator = useNavigate();
  useEffect(() => {
    location.getProvince().then(response => {
      setProvince(
        response.data.data.map(province => ({
          value: province,
          label: province,
          type: LocationType.PROVINCE,
          isLeaf: false,
        }))
      );
    });
  }, []);

  const onChange = (value: string[], selectedOptions: Option[]) => {
    console.log(value, selectedOptions);
  };

  const loadData = (selectedOptions: Option[]) => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;
    if (targetOption.type === LocationType.PROVINCE) {
      location.getCity(targetOption.value).then(response => {
        targetOption.children = response.data.data.map(city => ({
          value: city,
          label: city,
          type: LocationType.CITY,
          isLeaf: false,
        }));
        targetOption.loading = false;
        setProvince([...province]);
      });
    } else if (targetOption.type === LocationType.CITY) {
      const currentProvince = selectedOptions[0].value;
      location.getSchool(currentProvince, targetOption.value).then(response => {
        targetOption.children = response.data.data.map(school => ({
          value: school,
          label: school,
          type: LocationType.SCHOOL,
          isLeaf: true,
        }));
        targetOption.loading = false;
        setProvince([...province]);
      });
    }
  };

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
                      value={name}
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
                      type="text"
                      name="email-address"
                      id="email-address"
                      autoComplete="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                    />
                  </div>
                  <div className="col-span-6 sm:col-span-5">
                    <label
                      htmlFor="location"
                      className="block text-sm font-medium text-gray-700"
                    >
                      选择考点
                    </label>
                    <Cascader
                      className="mt-1 block w-full"
                      options={province}
                      loadData={loadData}
                      onChange={onChange}
                      changeOnSelect
                    />
                  </div>
                </div>
              </div>
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

export default SignUp;
