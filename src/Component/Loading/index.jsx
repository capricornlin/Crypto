const Loading = () => {
  return (
    <>
      <div className="text-center mt-[200px] ">
        <div className="animate-bounce text-5xl font-extrabold text-center my-10">
          <span className=" bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">
            Processing...
          </span>
        </div>
        {/* <div className="animate-bounce text-2xl bg-cyan-400 w-[150px] rounded-md shadow-md p-2 mx-auto">
          Processing...
        </div> */}
      </div>
    </>
  );
};

export default Loading;
