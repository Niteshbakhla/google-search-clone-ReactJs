import React from "react";

const News = ({ data }) => {
  console.log(data);
  return (
    <div className=" flex flex-col md:flex-row justify-center items-center mb-6  w-[100%] md:w-[50vw] ">
      <div className="w-25vw">
        <h1 onClick={()=>window.open(data.url)}  className="text-blue-900 text-[25px] hover:underline cursor-pointer">{data.title}</h1>
        <p className="text-gray-700">{data.content}</p>

        <h3 className="">{data.source.name}</h3>
      </div>

      <div className="w-25vw">
            <img className="w-[500px] md:w-[600px] rounded-3xl cursor-pointer" onClick={()=>window.open(data.url)} src={data.image} alt="" />
      </div>
    </div>
  );
};

export default News;
