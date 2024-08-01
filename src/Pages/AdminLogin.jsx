import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

export function AdminLogin() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
      email: "",
      password: "",
    });
    const {email, password} = inputValue;
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
      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "http://localhost:4000/admin",
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
              navigate("/admindashboard");
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
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-1">
        
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Admin Login
            </h2>
           <form onSubmit={handleLogin} className="mt-8">
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
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </section>
  );
}
