import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import Cookies from 'js-cookie';
import { Navbar } from '../Components/Navbar';

export function LoginSignupPage() {
  const navigate = useNavigate();
  const [createAccount, SetCreateAccount] = useState(false);
  const handleCreateAcc = () => {
    SetCreateAccount(!createAccount);
  }
 
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
      userType: "",
    });
    const { email, password, userType } = inputValue;
    const handleOnchange = (e) => {
      const { name, value } = e.target;
      setInputValue({
        ...inputValue,
        [name]: value,
      });
    };
    const handleError = (err) =>
      toast.error(err, {
        position: "bottom-left",
      });
    const handleSuccess = (msg) =>
      toast.success(msg, {
        position: "top-right",
      });
    const handleSignup = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/signup",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
        userType: "",
      });
    };
    const handleLogin = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/login",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        console.log(data);
        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          setTimeout(() => {
            navigate("/dashboard");
          }, 1000);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        email: "",
        password: "",
      });
      
    };


    return (
      <>
      <Navbar />
      
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative flex items-end px-4 pb-10 pt-60 sm:px-6 sm:pb-16 md:justify-center lg:px-8 lg:pb-24">
            <div className="absolute inset-0">
              <img
                className="h-full w-full rounded-md object-cover object-top"
                src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTk0fHxkZXNpZ25lcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
                alt=""
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute md:relative">
              <div className="w-full max-w-xl xl:mx-auto xl:w-full xl:max-w-xl xl:pr-24">
                <h3 className="text-base md:text-4xl font-bold text-white">
                  Are you any of the below, We can help you meet and grow
                </h3>
                <ul className="mt-1 md:mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-4 w-4 md:h-5 md:w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium text-white">
                      {' '}
                      Creator/Influencer
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-4 w-4 md:h-5 md:w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium text-white">
                      {' '}
                      Youtuber{' '}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-4 w-4 md:h-5 md:w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium text-white">
                      {' '}
                      Startup{' '}
                    </span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="inline-flex h-4 w-4 md:h-5 md:w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-500">
                      <svg
                        className="h-3.5 w-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-sm md:text-lg font-medium text-white">
                      {' '}
                      Brands{' '}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
            <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
              {
                !createAccount
                ? <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Login
              </h2>
              : <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Signup
            </h2>
              }
              {
                !createAccount
                ? <p className="mt-2 text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <button
                  onClick={handleCreateAcc}
                  title=""
                  className="font-semibold text-cyan-700 transition-all duration-200"
                >
                  Create account
                </button>
              </p>
              : <p className="mt-2 text-sm text-gray-600">
              Have an account?{' '}
              <button
                onClick={handleCreateAcc}
                title=""
                className="font-semibold text-cyan-700 transition-all duration-200"
              >
                Login
              </button>
            </p>
              }
              {
                !createAccount
                  ? <form onSubmit={handleLogin} className="mt-8">
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {' '}
                          Email address{' '}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            name='email'
                            value={email}
                            onChange={handleOnchange}
                            placeholder="Email"
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                          >
                            {' '}
                            Password{' '}
                          </label>
                          {/* <a
                      href="#"
                      title=""
                      className="text-sm font-semibold text-black hover:underline"
                    >
                      {' '}
                      Forgot password?{' '}
                    </a> */}
                        </div>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="password"
                            name='password'
                            value={password}
                            onChange={handleOnchange}
                            placeholder="Password"
                          ></input>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-800"
                        >
                          Login <ArrowRight className="ml-2" size={16} />
                        </button>
                      </div>
                    </div>
                    <ToastContainer />
                  </form>
                  : <form onSubmit={handleSignup} className="mt-8">
                    <div className="space-y-5">
                      <div>
                        <label
                          htmlFor=""
                          className="text-base font-medium text-gray-900"
                        >
                          {' '}
                          Email address{' '}
                        </label>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="email"
                            name='email'
                            value={email}
                            onChange={handleOnchange}
                            placeholder="Email"
                          ></input>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between">
                          <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                          >
                            {' '}
                            Password{' '}
                          </label>
                        </div>
                        <div className="mt-2">
                          <input
                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="password"
                            name='password'
                            value={password}
                            onChange={handleOnchange}
                            placeholder="Password"
                          ></input>
                        </div>
                      </div>
                      <div className=''>
                        <div className="">
                          {/* onChange={this.setGender.bind(this)} */}
                          <div className='flex gap-5 mt-5' >
                            <input onChange={handleOnchange} type="radio" className='mt-1' value="creator" name="userType" /> Creator
                            <input onChange={handleOnchange} type="radio" className='mt-1' value="business" name="userType" /> Business
                          </div>
                        </div>
                      </div>
                      <div>
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-800"
                        >
                          Signup <ArrowRight className="ml-2" size={16} />
                        </button>
                      </div>
                    </div>
                    <ToastContainer />
                  </form>
              }


            </div>
          </div>
        </div>
        <hr className="" />
      </section>
      </>
    );
  }
