import Image from "next/image";
import React from "react";

export default function TeamCard() {
  return (
    <div className="w-[350px] h-[320px] rounded-[30px] flex flex-col border-2 p-4 shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] my-6">
      <div className="flex p-3">
        <div>
          <Image
            src={"/accets/profile/Picture.png"}
            width={100}
            height={100}
            alt="logo"
          />
        </div>
        <div className="px-2 m-2 text-1xl font-semibold">
          <div className="h-[50%]"></div>
          <div>
            <h1>John Smith</h1>
            <h3>CEO and Founder</h3>
          </div>
        </div>
      </div>
      <div className="border-[1px] shadow-md my-3 border-b-slate-900 w-[100%]"></div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
        provident eius quidem quo dicta deserunt facere est voluptatum nulla
        aspernatur?
      </p>
    </div>
  );
}
