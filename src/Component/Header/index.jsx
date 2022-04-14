import { useNavigate } from "react-router-dom";
import { HiOutlineMenu } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { BsLightning, BsCurrencyBitcoin } from "react-icons/bs";
import { useState } from "react";
import { useAuth } from "../../Context/AuthContext";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const go = useNavigate();
  return (
    <div
      className="hover:cursor-pointer  text-white hover:scale-105 duration-100"
      onClick={() => {
        go("/");
      }}
    >
      <div className="flex items-center">
        <AiOutlineHome />
        <div className="ml-1">Home</div>
      </div>
    </div>
  );
};

const Cryptocurrencies = () => {
  const go = useNavigate();
  return (
    <div
      className="hover:cursor-pointer  text-white hover:scale-105 duration-100"
      onClick={() => {
        go("/Cryptocurrencies");
      }}
    >
      <div className="flex items-center">
        <BsCurrencyBitcoin />
        Cryptocurrencies
      </div>
    </div>
  );
};

const News = () => {
  const go = useNavigate();
  return (
    <div
      className="hover:cursor-pointer  text-white hover:scale-105 duration-100"
      onClick={() => {
        go("/News");
      }}
    >
      <div className="flex items-center">
        <BsLightning />
        News
      </div>
    </div>
  );
};

const SigninNav = () => {
  const go = useNavigate();
  return (
    <div
      className="hover:cursor-pointer  text-white hover:scale-105 duration-100"
      onClick={() => {
        go("/Signin");
      }}
    >
      <div className="flex items-center">Signin</div>
    </div>
  );
};

const RegisterNav = () => {
  const go = useNavigate();
  return (
    <div
      className="hover:cursor-pointer  text-white hover:scale-105 duration-100"
      onClick={() => {
        go("/Register");
      }}
    >
      <div className="flex items-center">Register</div>
    </div>
  );
};

const Logout = () => {
  const go = useNavigate();
  const { logout } = useAuth();
  return (
    <div
      className="hover:cursor-pointer  text-white hover:scale-105 duration-100"
      onClick={() => {
        logout();
        toast.success("Logout Successfully");
        // go("/Logout");
      }}
    >
      <div className="flex items-center">Logout</div>
    </div>
  );
};

const Header = () => {
  const [modal, setModal] = useState(false);
  const { currentUser } = useAuth();
  const modalHandler = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="shadow-md sticky top-0 left-0 right-0 w-screen z-10">
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 min-h-[100px] ">
          <div className="hidden md:block pt-[35px]">
            <div className="flex justify-between items-center">
              <div className="flex">
                <div className="mx-2 ml-5">
                  <Home />
                </div>
                <div className="mx-2">
                  <Cryptocurrencies />
                </div>
                <div className="mx-2">
                  <News />
                </div>
              </div>
              <div className="flex mx-5">
                {!currentUser && (
                  <div className="mx-2">
                    <SigninNav />
                  </div>
                )}
                {!currentUser && (
                  <div className="mx-2">
                    <RegisterNav />
                  </div>
                )}
                {currentUser && (
                  <div className="mx-2">
                    <Logout />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="md:hidden pt-[35px] ml-2">
            <HiOutlineMenu className="text-white text-3xl hover:cursor-pointer" onClick={modalHandler} />
            {modal && (
              <div className="min-h-[100px]">
                <div className="my-2">
                  <Home />
                </div>
                <div className="my-2">
                  <Cryptocurrencies />
                </div>
                <div className="my-2">
                  <News />
                </div>

                {!currentUser && (
                  <div className="my-2 ml-4">
                    <SigninNav />
                  </div>
                )}
                {!currentUser && (
                  <div className="my-2 ml-4">
                    <RegisterNav />
                  </div>
                )}
                {currentUser && (
                  <div className="my-2 ml-4">
                    <Logout />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Toaster
        toastOptions={{
          style: { fontSize: "1.2rem" },
        }}
      />
    </>
  );
};

export default Header;
