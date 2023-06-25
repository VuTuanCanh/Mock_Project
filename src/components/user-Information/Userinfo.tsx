import { useForm } from "react-hook-form";
import { IUser } from "../../types/userType";
import { IUserProfile } from "../../types/userProfile";

export interface IUserinfo {}

const Userinfo = (props: IUserinfo) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>({ mode: "onChange" });

  const onSubmit = (data: any) => {
    alert("Change Information successfully");
  };

  const dataUserInfo = localStorage.getItem("userInfo");

  return (
    <div className="mx-96 py-7">
      <h2 className="font-sans text-3xl font-semibold  text-indigo-900 mb-5">Member Information</h2>
      <h2 className="font-sans text-2xl font-semibold  text-indigo-800 mb-12">Edit profile </h2>
      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              ID
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="text"
              value={dataUserInfo && JSON.parse(dataUserInfo)._id}
              disabled
            />

            {/* Email  */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="email"
              id="email"
              value={dataUserInfo && JSON.parse(dataUserInfo).email}
              disabled
            />

            {/* username */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type="text"
              id="username"
              value={
                dataUserInfo &&
                JSON.parse(dataUserInfo).firstName + JSON.parse(dataUserInfo).lastName
              }
              disabled
            />

            {/* Password  */}
            <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
              type={"password"}
              id="password"
              placeholder="********"
              disabled
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Userinfo;
