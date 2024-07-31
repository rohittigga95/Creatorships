import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const Dashboard = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [userType, setUserType] = useState("");
  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate("/login");
      }
      const { data } = await axios.post(
        "http://localhost:4000",
        {},
        { withCredentials: true }
      );
      const { status, user } = data;
      setUserType(user);
      return status
        ? toast(`Hello ${user}`, {
            position: "top-right",
          })
        : (removeCookie("token"), navigate("/login"));
    };
    verifyCookie();
  }, [cookies, navigate, removeCookie]);
  const Logout = () => {
    removeCookie("token");
    navigate("/");
  };
  return (
    <div className="relative w-full bg-white">
        <h4>
          {" "}
          Welcome <span>{userType}</span>
        </h4>
        <button 
         className="items-center justify-center rounded-md bg-black px-2 py-1 font-semibold leading-7 text-white hover:bg-black/80"
         onClick={Logout}>LOGOUT</button>


        <ToastContainer />
    </div>
  )
}

export default Dashboard;