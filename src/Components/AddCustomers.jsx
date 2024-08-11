import React from 'react';
import { useState } from 'react';
import { CheckCircle, ArrowRight } from 'lucide-react';
import axios from 'axios'
import { ToastContainer, toast } from "react-toastify";

const AddCustomers = () => {
    const [inputValue, setInputValue] = useState({
        name: "",
        place: "",
        link: "",
        img: "",
        userType: "creator" || "business",
    });
    const { name, place, link, img, userType } = inputValue;
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
                "http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/api/add",
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
            place: "",
            link: "",
            img: "",
        });
    };
    return (
        <section className="w-full max-w-7xl py-4 mx-5">
            <div className="flex flex-col space-y-4  md:flex-row md:items-center md:justify-between md:space-y-0">
                <div className='grid '>
                    <h2 className="text-lg font-semibold">Add Data</h2>
                    <p className="mt-1 text-sm text-gray-700">
                        Add creators/startus to database.
                    </p>
                </div>
                <ToastContainer />
            </div>

            <div className="flex flex-col">
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
                                Location{' '}
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    name='place'
                                    value={place}
                                    placeholder="Location"
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
                                Creator/startup Link{' '}
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
                            <label
                                htmlFor=""
                                className="text-base font-medium text-gray-900"
                            >
                                {' '}
                                Image Link{' '}
                            </label>
                            <div className="mt-2">
                                <input
                                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                    type="text"
                                    name='img'
                                    value={img}
                                    placeholder="Image"
                                    required
                                    onChange={handleOnchange}

                                ></input>
                            </div>
                            <div className='flex gap-5 mt-5' >
                                <input onChange={handleOnchange} type="radio" className='mt-1' value="creator" name="userType" /> Creator
                                <input onChange={handleOnchange} type="radio" className='mt-1' value="business" name="userType" /> Business
                            </div>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="inline-flex w-full items-center justify-center rounded-md bg-cyan-500 px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-cyan-800"

                            >
                                Add <ArrowRight className="ml-2" size={16} />
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default AddCustomers