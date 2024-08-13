import React from 'react';
import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Hero() {
  useEffect(()=>{
	  (async function () {
		const cal = await getCalApi({"namespace":"10min"});
		cal("ui", {"styles":{"branding":{"brandColor":"#67e8f9"}},"hideEventTypeDetails":false,"layout":"month_view"});
	  })();
	}, [])
  return (
    <div className="relative w-full bg-gray-100">
      <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
        <div className="md:mt-20 flex-col justify-center px-4 py-5 md:py-16 lg:col-span-7 lg:gap-x-2 lg:px-2 lg:py-0 xl:col-span-6">
          <div className="flex max-w-max items-center space-x-2 rounded-full bg-gray-100 p-1">
            <div className="flex rounded-full  bg-white p-2">
              <p className="text-xs pt-1 md:pt-0 md:text-sm font-medium">Equity</p>
              <p>&#128200;</p>
            </div>
            <p className="text-xs md:text-sm font-medium">
              Partnership between creators and businesses &#x1F91D;
            </p>
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
            A place where creators and businesses meet
          </h1>
          <p className="mt-5 text-lg text-gray-700">
            If your are a creator we are here to get you business partnerships
            and for businesses its a platform to expand on the existing customer
            base you have.
          </p>       
            
            <div className=''>
              <button
              data-cal-namespace="10min"
              data-cal-link="creatorships/10min"
              
              data-cal-config='{"layout":"month_view"}'
                type="button"
                className="text-sm rounded-md bg-cyan-500 p-2 md:px-3 md:py-2.5 md:text-sm font-bold text-white shadow-sm hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                &#128197; Book Meeting
              </button>
              <div>
              <p className="mt-2 text-sm text-gray-500">
                We will keep you posted about Creator/Business
              </p>
            </div>
            </div>
          
        </div>
        <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
          <img
            className="aspect-[3/2] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
            src="https://plus.unsplash.com/premium_photo-1679079456783-5d862f755557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjQ3fHxtYW4lMjB3aXRoJTIwbGFwdG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
