import CustomCard from "@/components/Customcard";
import Navigation from "@/components/navigation/nav";
import TeamCard from "@/components/teamCard";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
// import { DropdownMenu } from "@/components/ui/dropdown-menu";
import Marquee from "@/components/ui/marquee";

import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { TextAlignJustifyIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";

interface Cards {
  title: string;
  imgSrc: string;
  link: string;
  titlecolor: string;
  titleBgColor: string;
  bgcolor: string;
  learnmorecolor: string;
}
const cards: Cards[] = [
  {
    title: "Search Engine Optimisation",
    imgSrc: "/accets/cards/p1.png",
    link: "/seo",
    titlecolor: "#191A23",
    titleBgColor: "#B9FF66",
    bgcolor: "#F3F3F3",
    learnmorecolor: "#191A23",
  },
  {
    title: "Pay-per-click advertising",
    imgSrc: "/accets/cards/p2.png",
    link: "/pay-per-click",
    titlecolor: "#191A23",
    titleBgColor: "#F3F3F3",
    bgcolor: "#B9FF66",
    learnmorecolor: "#191A23",
  },
  {
    title: "Social Media Marketing",
    imgSrc: "/accets/cards/p3.png",
    link: "/pay-per-click",
    titlecolor: "#191A23",
    titleBgColor: "#F3F3F3",
    bgcolor: "#191A23",
    learnmorecolor: "#F3F3F3",
  },
  {
    title: "Email Marketing",
    imgSrc: "/accets/cards/p1.png",
    link: "/seo",
    titlecolor: "#191A23",
    titleBgColor: "#B9FF66",
    bgcolor: "#F3F3F3",
    learnmorecolor: "#191A23",
  },
  {
    title: "Content Creation",
    imgSrc: "/accets/cards/p2.png",
    link: "/pay-per-click",
    titlecolor: "#191A23",
    titleBgColor: "#F3F3F3",
    bgcolor: "#B9FF66",
    learnmorecolor: "#191A23",
  },
  {
    title: "Analytics and tracking",
    imgSrc: "/accets/cards/p3.png",
    link: "/pay-per-click",
    titlecolor: "#191A23",
    titleBgColor: "#F3F3F3",
    bgcolor: "#191A23",
    learnmorecolor: "#F3F3F3",
  },
];

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="flex flex-row mt-3 ">
          <aside className="lg:w-[50%] p-2">
            <h1 className="text-4xl lg:text-6xl space-x-1 m-2">
              Navigating the digital landscape for success
            </h1>
            <div className="lg:hidden">
              <Image
                src={"/accets/illustration.svg"}
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
                alt="logo"
              />
            </div>
            <p className="lg:text-2xl space-x-1 m-3 mt-10">
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </p>
            <div className="space-x-1 m-3 mt-9">
              <Button className="text-2xl p-8 rounded-[15px]">
                Book a consultation
              </Button>
            </div>
          </aside>
          <aside className="hidden lg:block">
            <Image
              src={"/accets/illustration.svg"}
              width={100}
              height={100}
              layout="responsive"
              objectFit="cover"
              alt="logo"
            />
          </aside>
        </div>
      </main>
      <div className="h-30 w-full">
        <Marquee>
          <Image
            src={"/accets/companys/c1.png"}
            width={150}
            height={30}
            alt="company"
            className="mx-10"
          />
          <Image
            src={"/accets/companys/c2.png"}
            width={150}
            height={30}
            alt="company"
            className="mx-10"
          />
          <Image
            src={"/accets/companys/c3.png"}
            width={150}
            height={30}
            alt="company"
            className="mx-10"
          />
          <Image
            src={"/accets/companys/c4.png"}
            width={150}
            height={30}
            alt="company"
            className="mx-10"
          />
          <Image
            src={"/accets/companys/c5.png"}
            width={150}
            height={30}
            alt="company"
            className="mx-10"
          />
          <Image
            src={"/accets/companys/c6.png"}
            width={150}
            height={30}
            alt="company"
            className="mx-10"
          />
          <Image
            src={"/accets/companys/c7.png"}
            width={150}
            height={30}
            alt="company"
            className="mx-10"
          />
        </Marquee>
      </div>
      <section className="p-24">
        <div className="flex flex-col lg:flex-row gap-4">
          <h1 className="text-5xl  bg-[#B9FF66]  rounded-[10px] p-2 font-bold  space-x-2">
            Services
          </h1>

          <p className=" text-1xl max-w-[40vw] items-center mx-5 ">
            At our digital marketing agency, we offer a range of services to
            help busisness grow and succees online. These services include:
          </p>
        </div>
        <div className="mt-5 flex flex-wrap justify-evenly">
          {cards.map((items) => {
            return (
              <CustomCard
                title={items.title}
                imgSrc={items.imgSrc}
                link={items.link}
                titlecolor={items.titlecolor}
                titleBgColor={items.titleBgColor}
                bgcolor={items.bgcolor}
                learnmorecolor={items.learnmorecolor}
                key={items.title}
              />
            );
          })}
        </div>
      </section>
      <section className="   m-20 p-10 rounded-[10px] flex flex-row bg-violet-100 ">
        <div className="lg:w-[60%]">
          <h1 className="text-3xl p-3 m-4">Let’s make things happen</h1>
          <p className="text-2xl p-3 m-4">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button className=" text-2xl p-6  m-7">Get your free proposal</Button>
        </div>
        <div className="hidden lg:flex">
          <Image
            src={"/accets/things.png"}
            width={100}
            height={100}
            layout="responsive"
            objectFit="cover"
            alt="logo"
          />
        </div>
      </section>
      <section className="p-24 flex items-center">
        <div className="flex flex-col lg:flex-row gap-4 lg:max-w-[80%]">
          <h1 className="text-5xl  bg-[#B9FF66]  rounded-[10px] p-2 font-bold  space-x-2">
            Our Working Process
          </h1>

          <p className=" text-2xl max-w-[40%] items-center mx-5 ">
            Step-by-Step Guide to Achieving Your Business Goals{" "}
          </p>
        </div>
      </section>
      <section className="p-24 flex items-center">
        <Accordion type="multiple" className="w-[100%]  text-slate-800">
          <AccordionItem
            value="item-1"
            className="w-fill bg-[#B9FF66] py-5 px-10 rounded-[30px] my-5"
          >
            <AccordionTrigger>
              <h1 className="text-3xl mx-4">
                <span className="text-5xl bold pr-4">01</span>Consultation
              </h1>
            </AccordionTrigger>
            <AccordionContent className="text-1.5xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              veritatis nesciunt perferendis quis dignissimos distinctio animi
              dolores a, obcaecati delectus, sapiente quos recusandae placeat
              eius quae cum consequuntur, pariatur facere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-2"
            className="w-fill bg-[#B9FF66] py-5 px-10 rounded-[30px] my-5"
          >
            <AccordionTrigger>
              <h1 className="text-3xl mx-4">
                <span className="text-5xl bold pr-4">02</span>Research and
                Strategy Development
              </h1>
            </AccordionTrigger>
            <AccordionContent className="text-1.5xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              veritatis nesciunt perferendis quis dignissimos distinctio animi
              dolores a, obcaecati delectus, sapiente quos recusandae placeat
              eius quae cum consequuntur, pariatur facere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-3"
            className="w-fill bg-[#B9FF66] py-5 px-10 rounded-[30px] my-5"
          >
            <AccordionTrigger>
              <h1 className="text-3xl mx-4">
                <span className="text-5xl bold pr-4">03</span>Implementation
              </h1>
            </AccordionTrigger>
            <AccordionContent className="text-1.5xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              veritatis nesciunt perferendis quis dignissimos distinctio animi
              dolores a, obcaecati delectus, sapiente quos recusandae placeat
              eius quae cum consequuntur, pariatur facere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-4"
            className="w-fill bg-[#B9FF66] py-5 px-10 rounded-[30px] my-5"
          >
            <AccordionTrigger>
              <h1 className="text-3xl mx-4">
                <span className="text-5xl bold pr-4">04</span>Monitoring and
                Optimization
              </h1>
            </AccordionTrigger>
            <AccordionContent className="text-1.5xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              veritatis nesciunt perferendis quis dignissimos distinctio animi
              dolores a, obcaecati delectus, sapiente quos recusandae placeat
              eius quae cum consequuntur, pariatur facere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-5"
            className="w-fill bg-[#B9FF66] py-5 px-10 rounded-[30px] my-5"
          >
            <AccordionTrigger>
              <h1 className="text-3xl mx-4">
                <span className="text-5xl bold pr-4">05</span>Reporting and
                Communication
              </h1>
            </AccordionTrigger>
            <AccordionContent className="text-1.5xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              veritatis nesciunt perferendis quis dignissimos distinctio animi
              dolores a, obcaecati delectus, sapiente quos recusandae placeat
              eius quae cum consequuntur, pariatur facere.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem
            value="item-6"
            className="w-fill bg-[#B9FF66] py-5 px-10 rounded-[30px] my-5"
          >
            <AccordionTrigger>
              <h1 className="text-3xl mx-4">
                <span className="text-5xl bold pr-4">06</span>Continual
                Improvement
              </h1>
            </AccordionTrigger>
            <AccordionContent className="text-1.5xl">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              veritatis nesciunt perferendis quis dignissimos distinctio animi
              dolores a, obcaecati delectus, sapiente quos recusandae placeat
              eius quae cum consequuntur, pariatur facere.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
      <section className="p-10 m-4 px-24 flex items-center">
        <div className="flex flex-col lg:flex-row gap-4 lg:max-w-[80%]">
          <h1 className="text-5xl  bg-[#B9FF66]  rounded-[10px] p-2 font-bold  space-x-2">
            Team
          </h1>

          <p className=" text-2xl  items-center mx-4 ">
            Meet the skilled and experienced team behind our successful digital
            markiting strategies
          </p>
        </div>
      </section>
      <section className=" flex  flex-wrap px-20 gap-4 justify-evenly">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </section>
      <div className="flex  flex-wrap px-24 m-4  justify-end">
        <div className="w-fill flex justify-end">
          <button className=" bg-[#191a23] text-[#F3F3F3] p-3 rounded-[5px]">
            Lode More
          </button>
        </div>
      </div>
      <footer className="mx-20 p-8 rounded-tl-[20px] rounded-tr-[20px] text-gray-50 mt-4 bg-gray-900 ">
        <div className="flex w-[100%] px-1  justify-around">
          <div className="flex flex-row w-[100%] justify-between h-15 md:py-2 md:mx-20 ">
            <div className="flex items-center">
              <Image
                src={"/accets/logo-white.png"}
                width={133}
                height={40}
                alt="logo"
              />
            </div>
            <div>
              <ul className="hidden text-1xl lg:flex flex-row gap-5  items-center ">
                <li>
                  <Link href={"/about-us"}>About Us</Link>
                </li>
                <li>
                  <Link href={"/about-us"}>Services</Link>
                </li>
                <li>
                  <Link href={"/about-us"}>Use Case</Link>
                </li>
                <li>
                  <Link href={"/about-us"}>Pricing</Link>
                </li>
              </ul>
            </div>
            <div className="lg:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <TextAlignJustifyIcon
                    width={30}
                    height={30}
                    className="text-4xl "
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>
                    <Link href={"/about-us"}>About Us</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    <Link href={"/about-us"}>Services</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    <Link href={"/about-us"}>Use Cases</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    <Link href={"/about-us"}>Pricing</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    <Link href={"/about-us"}>Blog</Link>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>
                    <Button>
                      <Link href={"/about-us"}>Request quote</Link>
                    </Button>
                  </DropdownMenuLabel>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-2">
          <div className="flex flex-col m-3">
            <h1 className="m-2 p-2 flex rounded-[4px] bg-[#b9ff66] text-slate-900">
              Contact us:
            </h1>
            <h2 className="m-1 p-2">Email: info@positivus.com</h2>
            <div className="m-1 p-2">
              <h2>Address: 1234 Main St</h2>
              <h2>Moonstone City, Stardust State 12345</h2>
            </div>
          </div>
          <div className="flex  p-9 m-10 justify-center items-center bg-slate-600 rounded-[90px]">
            <Input
              placeholder="email"
              className="w-[300px] p-7 m-3 font-bold text-gray-200 font-4xl"
            />
            <button className=" bg-[#b9ff66] rounded-[10px] text-slate-900 w-[300px] p-4">
              Subscribe to news
            </button>
          </div>
        </div>
        <div className="w-[100%] my-2 border-[1px] border-r-slate-50"></div>
        <h1> &#169;Positivus.All rights reserved.</h1>
      </footer>
    </>
  );
}
