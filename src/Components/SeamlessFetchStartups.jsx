import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Linkedin, MapPin } from 'lucide-react';
import Select from 'react-dropdown-select';

const SeamlessFetchStartups = () => {
    const [seamless, setSeamless] = useState([]);
    const [countries, setCountries] = useState("");
    const [industries, setIndustries] = useState("");
    const [noOfRecord, setNoOfRecord] = useState("");
    const [inputValue, setInputValue] = useState({
        industry: "",
        country: "",
        recordNo: "",
    });
    const country = [
        {
          value: "india",
          label: "India"
        },
        {
          value: "us",
          label: "US"
        },
        {
          value: "canada",
          label: "Canada"
        },
        {
          value: "germany",
          label: "Germany"
        }
        
      ];
      const industry = [
        {
          value: "saas",
          label: "SAAS"
        },
        {
          value: "fmcg",
          label: "FMCG"
        },
        {
          value: "software",
          label: "Software"
        },
        {
          value: "automobile",
          label: "Automobile"
        }
        
      ];
      const records = [
        {
          value: 10,
          label: "10"
        },
        {
          value: 20,
          label: "20"
        },
        {
          value: 30,
          label: "30"
        },
        {
          value: 40,
          label: "40"
        }
        
      ];
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
                countries,industries,noOfRecord,
            })
            .then((response) => {
                setSeamless(response.data.companies.companies)
                console.log(response.data.companies.companies)
            })
            .catch((error) => console.error("Error fetching creators:", error))
    }
    // useEffect(getSeamlessData, []);
    return (
        <div className=" p-10 justify-center">
            <h4 className="text-2xl  font-bold">
                {" "}
                Data from seamless.ai
            </h4>
            <form className="mt-5">
                <div className="grid gap-2 md:flex md:space-x-6">
                    <div className='space-x-2'>
                        <label
                            htmlFor=""
                            className="text-lg font-medium text-gray-900"
                        >

                            Country:
                        </label>
                        <Select options={country} onChange={([values]) => setCountries(values.value) } />
                        {/* <select onChange={handleOnchange} className='bg-cyan-50 rounded-md p-1 text-sm' name="country">
                            <option className='text-sm'>select</option>
                            <option value="india">India</option>
                            <option value="us">US</option>
                            <option value="canada">Canada</option>
                            <option value="germany">Germany</option>
                        </select> */}
                    </div>
                    <div className='space-x-2'>
                        <label
                            htmlFor=""
                            className="text-lg font-medium text-gray-900"
                        >
                            Industry:
                        </label>
                        <Select options={industry} onChange={([values]) => setIndustries(values.value)} />
                        {/* <select onChange={handleOnchange} className='bg-cyan-50 rounded-md p-1 text-sm after:text-sm' name="industry">
                            <option>select</option>
                            <option value="saas">SAAS</option>
                            <option value="fmcg">FMCG</option>
                            <option value="software">Software</option>
                            <option value="automobile">Automobile</option>
                        </select> */}
                    </div>
                    <div className='space-x-2'>
                        <label
                            htmlFor=""
                            className="text-lg font-medium text-gray-900"
                        >
                            No of records:
                        </label>
                        <Select options={records} onChange={([values]) => setNoOfRecord(values.value)} />
                        {/* <select onChange={handleOnchange} className='bg-cyan-50 rounded-md p-1 text-sm' name="recordNo">
                            <option>select</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                            <option value="30">30</option>
                            <option value="40">40</option>
                        </select> */}
                    </div>
                    <div className='pl-10 pt-6'>
                    <button
                        type="button"
                        onClick={getSeamlessData}
                        className="rounded-md bg-cyan-500 px-2.5 py-1.5 text-md font-bold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Get Data
                    </button>
                    </div>
                    

                </div>
            </form>
            <div className="grid grid-cols-3">

                {
                    seamless.map((company) => (
                        <div key={company.domain} className="m-4">
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