import React from 'react';
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

export function ForBusinessPage() {
  
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
          "http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/api/businesses",
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
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="flex flex-col justify-center px-4 pt-10 lg:px-6">
          <div className="rounded-lg bg-gray-200">
            <img
              className="aspect-[3/2] w-full rounded-lg bg-gray-50 object-cover lg:aspect-auto lg:h-[400px]"
              src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12 px-5 lg:gap-x-6">
          <div className="px-4 py-6 lg:col-span-5 lg:px-0">
            <span className="mb-2 inline-block rounded-full border text-xs font-semibold tracking-widest text-black bg-gray-100 px-4 py-1.5 uppercase">
              You would get deliverables against equity
            </span>
            <h1 className="text-3xl font-bold md:text-4xl">
              Startups, launching product soon or have marketing needs? Partner
              with listed creators.
            </h1>
            <p className="mt-8 max-w-3xl text-lg text-gray-700">
              Fill the form below so that we help you connect to creators in
              your niche.
            </p>
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
                        name='name'
                        value={name}
                        placeholder="Name"
                        required
                        onChange={handleOnchange}
                        
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
                        name='email'
                        value={email}
                        placeholder="Email"
                        required
                        onChange={handleOnchange}
                        
                      ></input>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor=""
                      className="text-base font-medium text-gray-900"
                    >
                      {' '}
                      Company Link{' '}
                    </label>
                    <div className="mt-2">
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                        type="text"
                        name='link'
                        value={link}
                        placeholder="Website"
                        required
                        onChange={handleOnchange}
                        
                      ></input>
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-800"
                    
                    >
                      Get started <ArrowRight className="ml-2" size={16} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center md:flex-row lg:col-span-7">
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Startups
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Are you a startup ?
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Services included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Range of creators
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Colabration Tools
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Legal Support
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full p-5 md:w-1/2">
              <div className="rounded-md border bg-white bg-opacity-90">
                <div className=" border-b">
                  <div className="px-9 py-7">
                    <h3 className="mb-3 text-xl font-bold leading-snug text-gray-900">
                      Brands
                    </h3>
                    <p className="font-medium leading-relaxed text-gray-500">
                      Are you running a business or brand ?
                    </p>
                  </div>
                </div>
                <div className="px-9 pb-9 pt-8">
                  <p className="mb-6 font-medium leading-relaxed text-gray-600">
                    Services included:
                  </p>
                  <ul className="mb-11">
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Branded colab
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Onboarding
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        Relationship Manager
                      </p>
                    </li>
                    <li className="mb-4 flex items-center">
                      <CheckCircle className="mr-2" size={16} />
                      <p className="font-semibold leading-normal">
                        End to End Support
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
    </div>
  );
}
