import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { IUser } from "../../types/userType";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router";
import axiosInstance from "../../api/axiosInstance";
import { toast } from "react-toastify";

export interface IRegisterForm {
  refresh: boolean;
  setRefresh: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm = (props: IRegisterForm) => {
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
    const dataRegister = {
      email: data.email,
      password: data.password,
      phone: data.phone,
      firstName: data.name.firstname,
      lastName: data.name.lastname,
    };
    axios
      .post(`${process.env.REACT_APP_SERVER_URL}/api/users/register`, dataRegister)
      .then((res: any) => {
        Cookies.set("auth", res.data.token);
        axios
          .get(`${process.env.REACT_APP_SERVER_URL}/api/users/profile/${res.data._id}`)
          .then((response) => {
            const dataUserInfo = JSON.stringify(response.data);
            localStorage.setItem("userInfo", dataUserInfo);
            toast.success("Đăng ký thành công!");
            navigate("/");
            setRefresh(!refresh);
          });
      })
      .catch((err: any) => {
        toast.error(`${err}`);
      });
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="bg-indigo-700 bg-opacity-25 p-1  ">
        <div className="mt-20 px-96 ">
          <h2 className="text-center text-7xl text-indigo-900 font-semibold  ">Register</h2>
          <h3 className="text-center text-3xl text-indigo-800 font-semibold pt-4">
            Welcome to Junno
          </h3>
          <h3 className="text-center text-xl text-indigo-800 font-semibold ">
            Get free shipping, discount vouchers and members only products when you’re member
          </h3>
          <div className="mt-12 flex justify-center">
            <form className="w-full max-w-xl " onSubmit={handleSubmit(onSubmit)}>
              <div className="w-full md:w-auto px-3 mb-6 md:mb-0">
                {/*Firstname */}
                <label className=" uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
                  First Name
                </label>
                <input
                  className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
                  type="text"
                  id="firstName"
                  placeholder="First Name"
                  {...register("name.firstname", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.name?.firstname?.type === "required" && (
                  <p className="text-red-500">First name is required</p>
                )}
                {errors?.name?.firstname?.type === "pattern" && (
                  <p className="text-red-500">Alphabetical characters only</p>
                )}

                {/* Lastname */}
                <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
                  Last Name
                </label>
                <input
                  className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
                  type="text"
                  id="lastName"
                  placeholder="Last Name"
                  {...register("name.lastname", {
                    required: true,
                    maxLength: 20,
                    pattern: /^[A-Za-z]+$/i,
                  })}
                />
                {errors?.name?.lastname?.type === "required" && (
                  <p className="text-red-500">Last name is required</p>
                )}
                {errors?.name?.lastname?.type === "pattern" && (
                  <p className="text-red-500">Alphabetical characters only</p>
                )}

                {/* Email  */}
                <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
                  type="email"
                  id="email"
                  placeholder="example@gmail.com"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors?.email?.type === "required" && (
                  <p className="text-red-500">Email is required</p>
                )}
                {errors?.email?.type === "pattern" && (
                  <p className="text-red-500">Please write correct email address</p>
                )}

                {/* Phone Number  */}
                <label className="block uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
                  Phone number
                </label>
                <input
                  className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
                  type="text"
                  id="phonenumber"
                  placeholder="Phone number"
                  {...register("phone", {
                    required: true,
                    pattern: /^(84|0[3|5|7|8|9])+([0-9]{8})\b$/i,
                  })}
                />
                {errors?.phone?.type === "pattern" && (
                  <p className="text-red-500">Wrong phone number's template</p>
                )}
                {errors?.phone?.type === "required" && (
                  <p className="text-red-500">Phone number is required</p>
                )}
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
                    number, special characters
                  </p>
                )}
                {errors?.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}

                {/* Comfirm password  */}
                <label className="uppercase text-sm font-bold text-gray-700 my-2 tracking-wide">
                  Confirm password
                </label>
                <input
                  className="shadow appearance-none border rounded-2xl w-full py-2.5 px-3 mb-1 text-gray-700 leading-tight focus:outline-none"
                  type={showPassword ? "text" : "password"}
                  id="repassword"
                  placeholder="********"
                  {...register("comfirmPassword", {
                    required: true,
                    validate: (val) => {
                      if (watch("password") !== val) {
                        return `${(
                          <p className="text-red-500">
                            Your confirm password do not match with your password
                          </p>
                        )}`;
                      }
                    },
                  })}
                />
                {errors?.comfirmPassword?.type === "validate" && (
                  <p className="text-red-500">
                    Your confirm password do not match with your password
                  </p>
                )}
                {errors?.comfirmPassword?.type === "required" && (
                  <p className="text-red-500">Re type your password.</p>
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
                className='bg-indigo-500 text-gray-100 text-2xl p-3 mt-12 mb-24 w-full rounded-full tracking-wide
                    font-semibold focus:outline-none focus:shadow-outline hover:bg-indigo-600
                    shadow-lg"'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
