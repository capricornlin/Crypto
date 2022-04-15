import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const go = useNavigate();
  return (
    <>
      <h1 className="font-extrabold mt-[300px] text-transparent text-center text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
        Not Found
      </h1>
      <div
        className="mt-6 hover:cursor-pointer text-center text-transparent text-4xl bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
        onClick={() => go("/")}
      >
        Go to HomePage
      </div>
    </>
  );
};

export default NotFound;
