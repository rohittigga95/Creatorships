import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DollarSign, Zap, Moon, Filter } from 'lucide-react';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export function ForCreatorPage() {
  const navigate = useNavigate()
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    link: "",
  });
  const {name, email, link} = inputValue;
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
    const handleForm = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/api/creators",
          {
            ...inputValue,
          },
          { withCredentials: true }
        );
        console.log(data);
        const { success, message } = data;
        if (success) {
          handleSuccess(message);
          window.scrollTo(0, 0);
        } else {
          handleError(message);
        }
      } catch (error) {
        console.log(error);
      }
      setInputValue({
        ...inputValue,
        name: "",
        email: "",
        link: "",
      });
    };

  return (
    <div className="mx-auto max-w-7xl">
      <ToastContainer />
      {/* <div className={ isActive ? 'hidden' : '' }>
        <Alert />
      </div> */}
      
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 py-10 lg:px-6">    
          <div className="rounded-lg bg-gray-200">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
              src="https://images.unsplash.com/photo-1562389943-c09604a84959?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="mx-auto max-w-screen-lg px-4 py-4 sm:px-6 lg:px-8">
            <div className="mx-auto text-center">
              <div className="mx-auto inline-flex rounded-full bg-gray-100 px-4 py-1.5">
                <p className="text-xs font-semibold uppercase tracking-widest text-black">
                  You would get equity against deliverables
                </p>
              </div>
              <h2 className="mt-4 text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl">
                Creators, want to build a business? Become
                a partner in our listed companies.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-600">
                Fill the form below so that we help you connect to businesses in
                your niche.
              </p>
            </div>
          </div>
          <div className="mt-2 lg:grid grid-cols-4 gap-4">
            <div>
              <form onSubmit={handleForm} className="mt-8">
                <div className="space-y-5">
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      Full Name
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="Name"
                        
                        name='name'
                        value={name}
                        required
                        onChange={handleOnchange}
                        // onChange={handleChange}
                      ></input>
                    </div>
                  </div>
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
                        placeholder="Email"
                        name='email'
                        value={email}
                        
                        required
                        onChange={handleOnchange}
                        // onChange={handleChange}
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Instagram Link{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        placeholder="insta profile"
                        required
                        name='link'
                        value={link}
                        onChange={handleOnchange}
                        // onChange={handleChange}
                        
                        
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                    type='submit'
                      className="inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-800"
                      
                    
                    >
                      Get started <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
                
              </form>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-y-8 text-center">
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <DollarSign className="h-9 w-9 text-gray-700" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Own Equity in startups
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Get anywhere between 2-10% of the company depending on your deliverables.
                </p>
              </div>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-y-8 text-center">
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Moon className="h-9 w-9 text-gray-700" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  Long term partnerships
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Commitment is required from both ends to meet specific goals.
                </p>
              </div>
            </div>
            <div className="mt-20 grid grid-cols-1 gap-y-8 text-center">
              <div>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Zap className="h-9 w-9 text-gray-700" />
                </div>
                <h3 className="mt-8 text-lg font-semibold text-black">
                  wealth Creation
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Wealth is created only by building businesses and owning some equity.
                </p>
              </div>
            </div>

            {/* <button
              type="button"
              className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Subscribe
            </button> */}
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  );
}
