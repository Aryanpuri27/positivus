import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CircleArrowOutUpRight } from "lucide-react";

export default function CustomCard({
  title,
  imgSrc,
  link,
  titlecolor,
  titleBgColor,
  bgcolor,

  learnmorecolor,
  key,
}: {
  title: string;
  imgSrc: string;
  link: string;
  titlecolor: string;
  titleBgColor: string;
  bgcolor: string;
  key: string;

  learnmorecolor: string;
}) {
  return (
    <div
      key={title}
      className={`shadow-[5px_5px_0px_0px_rgba(0,0,0)] bg-[${bgcolor}] !important flex border-black border-2 w-[500px] h-[270px] rounded-[20px]  hover:scale-105 m-4`}
    >
      <div className="flex flex-col justify-around w-[50%] p-3 leading-3">
        <span
          className={`flex  p-1 rounded-[10px] text-2xl text-[${titlecolor}] bg-[${titleBgColor}]`}
        >
          {title}
        </span>
        <div className="flex">
          <Link href={link} className="flex flex-row gap-1 items-center">
            {/* <Image src={linklogo} width={50} height={50} alt="logo" /> */}
            <CircleArrowOutUpRight />
            <h1 className={`font-xl m-3 ${learnmorecolor}`}>Learn more</h1>
          </Link>
        </div>
      </div>
      <div className=" p-10 items-center flex  w-fit">
        <Image
          src={imgSrc}
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          alt="logo"
        />
      </div>
    </div>
  );
}
