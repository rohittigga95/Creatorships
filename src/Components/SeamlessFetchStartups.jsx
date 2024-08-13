import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Linkedin, MapPin } from 'lucide-react';
import { ArrowRight } from 'lucide-react';

const SeamlessFetchStartups = () => {
    const [seamless, setSeamless] = useState([]);
    const [inputValue, setInputValue] = useState({
        industry: "",
        country: "",
        recordNo: "",
    });
    // const { industry, country } = inputValue;
    const handleOnchange = (e) => {
        const { name, value } = e.target;
        setInputValue({
            ...inputValue,
            [name]: value,
        });
    };


    const getSeamlessData = () => {
        axios
            .post("http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/api/seamlessapi", {
                ...inputValue,
            })
            .then((response) => {
                setSeamless(response.data.companies.companies)
                console.log(response.data.companies.companies)
            })
            .catch((error) => console.error("Error fetching creators:", error))
    }
    // useEffect(getSeamlessData, []);
    return (
        <div className="grid justify-center">
            <form className="mt-1">
                <div className="flex space-x-2 justify-between">
                    <div className='space-x-2'>
                        <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                        >

                            Country:
                        </label>
                        <select onChange={handleOnchange} className='bg-cyan-50 rounded-md p-1 text-sm' name="country">
                            <option>select</option>
                            <option value="india">India</option>
                            <option value="us">US</option>
                            <option value="canada">Canada</option>
                            <option value="germany">Germany</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                        >
                            Industry:
                        </label>
                        <select onChange={handleOnchange} className='bg-cyan-50 rounded-md p-1 text-sm' name="industry">
                            <option>select</option>
                            <option value="saas">SAAS</option>
                            <option value="fmcg">FMCG</option>
                            <option value="software">Software</option>
                            <option value="automobile">Automobile</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor=""
                            className="text-base font-medium text-gray-900"
                        >
                            No of records:
                        </label>
                        <select onChange={handleOnchange} className='bg-cyan-50 rounded-md p-1 text-sm' name="recordNo">
                            <option>select</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select>
                    </div>

                    <button
                        type="button"
                        onClick={getSeamlessData}
                        className="text-xs inline-flex w-25 pl-1 pr-1 items-center justify-center rounded-md bg-cyan-500   leading-7 text-white hover:bg-cyan-800"
                    >
                        Get Data <ArrowRight className="" size={12} />
                    </button>

                </div>
            </form>
            <div className="grid grid-cols-3">

                {
                    seamless.map((company) => (
                        <div key={company.name} className="m-4">
                            <div className="max-w-xs rounded overflow-hidden shadow-lg">
                                {/* <img className="w-full" src={company.companyLogoUrl} alt="creator image" /> */}
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{company.name}</div>

                                </div>
                                <div className="px-6 pb-2">
                                    <a target="_blank" href={`https://${company.Domain}`}> <span className="inline-flex bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"><Link /><p className="mt-1"></p></span></a>
                                    <a target="_blank" href={company.social.linkedin}> <span className="inline-flex bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"><Linkedin color="#000000" /><p className="mt-1"></p></span></a>
                                    <a > <span className="inline-flex bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-400"><MapPin /><p className="mt-1">{company.city}</p></span></a>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#{company.industries}</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SeamlessFetchStartups