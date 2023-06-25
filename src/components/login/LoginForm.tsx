import { useForm } from "react-hook-form";
import { IUser } from "../../types/userType";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import axios from "axios";
import Cookies from "js-cookie";
import { Alert } from "@mui/material";
import { IUserProfile } from "../../types/userProfile";
import Snackbar, { SnackbarOrigin } from "@mui/material/Snackbar";

export interface State extends SnackbarOrigin {
  open: boolean;
}
export interface ILoginForm {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = (props: ILoginForm) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IUser>({ mode: "onChange" });
  const { refresh, setRefresh } = props;
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/users/login`, data)
      .then((res: any) => {
        Cookies.set("auth", res.data.token);
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/api/users/profile/${res.data._id}`)
          .then((response) => {
            const dataUserInfo = JSON.stringify(response.data);
            localStorage.setItem("userInfo", dataUserInfo);
          });
        navigate("/");
        setRefresh(!refresh);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleTextClick = () => {
    navigate("/register"); // Redirect to the register component
  };

  return (
    <>
      <div className="bg-indigo-700 bg-opacity-25">
        <div className="px-auto py-10">
          <h2 className="text-center text-7xl text-indigo-900 font-semibold  ">Sign in to Junno</h2>
          <h3 className="text-center text-3xl text-indigo-800 font-semibold pt-4">
            Welcome to Junno
          </h3>
          <h3 className="text-center text-xl text-indigo-800 font-semibold ">
            Get free shipping, discount vouchers and members only products when you’re member
          </h3>
          <div className="mt-12 flex justify-center">
            <form className="w-full max-w-xl " onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full md:w-auto px-3 mb-6 md:mb-0">
                {/* username */}
                <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors?.email?.type === "pattern" && (
                  <p className="text-red-500">Please write correct email address</p>
                )}
                {errors?.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}

                {/* password  */}
                <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
                  Password
                </label>
                <input
                  className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  placeholder="********"
                  {...register("password", {
                    required: true,
                    pattern:
                      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/i,
                  })}
                />
                {errors?.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Your password must contains at least 8 characters, including at least one
                    number, uppercase letters and special characters
                  </p>
                )}
                {errors?.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}

                <div>
                  <input
                    type="checkbox"
                    id="showPassword"
                    checked={showPassword}
                    onChange={togglePasswordVisibility}
                    className="form-checkbox h-5 w-5 m-3"
                  />
                  <label
                    htmlFor="showPassword"
                    className="uppercase text-sm font-bold text-gray-700 my-2 tracking-wide"
                  >
                    Show Password
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className='bg-indigo-500 text-gray-100 text-2xl p-3 mt-12 w-full rounded-full tracking-wide
                    font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600
                    shadow-lg"'
              >
                Submit
              </button>
              <div className="uppercase text-sm font-bold text-gray-700 my-4 tracking-wide">
                {" "}
                Don't have an account?{" "}
                <button onClick={handleTextClick} className="underline text-lg">
                  {" "}
                  Sign up now
                </button>{" "}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
