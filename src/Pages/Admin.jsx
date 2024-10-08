import React, { useEffect, useState } from 'react'
import { BarChart, Wallet, Newspaper, BellRing, Paperclip, Brush, Wrench, Link } from 'lucide-react'
import ListComponent from '../Components/ListComponent'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from "react-toastify";
import ContactList from '../Components/ContactList';
import AddCustomers from '../Components/AddCustomers';

export function Admin() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("");
  const [nav, setNav] = useState("customer");
  const renderNav = () => {
    switch (nav) {
      case "customer": return <ListComponent />;
      case "add": return <AddCustomers />;
      case "contact": return <ContactList />;
    }
  }
  useEffect(() => {
    renderNav();
    const verifyCookie = async () => {
      if (!Cookies.get("token")) {
        navigate("/admin");
      }
      const { data } = await axios.post(
        "http://ec2-3-6-89-177.ap-south-1.compute.amazonaws.com:4000/admindashboard",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUserType(user);
      return status
        ? toast(`Hello ${user}`, {
          position: "top-right",
        })
        : (Cookies.remove('token'), navigate("/admin"));
    };
    verifyCookie();
  }, [Cookies, navigate]);


  return (
    <>
      <div className='flex'>
      <ToastContainer />
        <div className='hidden sm:block'>
          <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-white px-5 py-8">
            <div className="mt-6 flex flex-1 flex-col justify-between">
              <nav className="-mx-3 space-y-6 ">
                <div className="space-y-3 ">
                  <label className="px-3 text-xs font-semibold uppercase text-gray-900">analytics</label>
                  <NavLink
                    className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    onClick={() => setNav("customer")}
                  >
                    <BarChart className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium">Customers</span>
                  </NavLink>
                  <NavLink
                    className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    onClick={() => setNav("add")}
                  >
                    <Wallet className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium">Add Startup/Business</span>
                  </NavLink>
                  <NavLink
                    className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
                    onClick={() => {
                      
                      setNav("contact");
    
                    }}
                  >
                    <Newspaper className="h-5 w-5" aria-hidden="true" />
                    <span className="mx-2 text-sm font-medium">Contact</span>
                  </NavLink>
                </div>
                {/* <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">content</label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Contact</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Notifications</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-gray-900">
              Customization
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Brush className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Themes</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-600 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Setting</span>
            </a>
          </div> */}
              </nav>
            </div>
          </aside>
        </div>
        <div className="flex-initial w-200">
          {
            renderNav()
          }
        </div>

      </div>
      <hr className="mt-6" />
    </>
  )
}
