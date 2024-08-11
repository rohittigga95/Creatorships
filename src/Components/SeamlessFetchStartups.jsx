import axios from 'axios';
import React, { useEffect, useState } from 'react'

const SeamlessFetchStartups = () => {
    const [seamless, setSeamless] = useState([]);
    useEffect(() => {
        //fetch notes from the server
        axios
            .get("http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/api/seamlessapi")
            .then((response) => {
                setSeamless(response.data.companies.companies)
                console.log(response.data.companies.companies)
            })
            .catch((error) => console.error("Error fetching creators:", error))
    }, [])
    return (
        <div className="p-5 flex justify-between">

            <div className="grid grid-cols-4">

                {
                    seamless.map((company) => (
                        <div key={company.name} className="m-1">
                            <div className="max-w-xs rounded overflow-hidden shadow-lg">
                                {/* <img className="w-full" src={company.companyLogoUrl} alt="creator image" /> */}
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">{company.name}</div>

                                </div>
                                <div className="px-6 pb-2">
                                    <a target="_blank" href={`https://${company.Domain}`}> <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">Link</span></a>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">#{company.industries}</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">{company.city}</span>
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