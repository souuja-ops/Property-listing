import React from "react";
import Link from "next/link";

const Location = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <section className="bg-primary lg:py-24 py-16 px-4">
        <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md">
            <div className="">
                <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 border-b border-solid border-white border-opacity-50 pb-11">
                    <div className="col-span-3">
                        <h2 className="text-white text-4xl leading-[1.2] font-bold">Nairobi Head Office</h2>
                    </div>
                    <div className="col-span-3">
                        <p className="text-xl text-IceBlue font-normal max-w-64 text-white text-opacity-50">Kenyatta Avenue, Nairobi Central, 00100</p>
                    </div>
                    <div className="col-span-3">
                        <Link href="mailto:headoffice@propertypro.co.ke" className="text-xl text-white font-medium underline">headoffice@propertypro.co.ke</Link>
                        <Link href="tel:+254-20-222-0000" className="text-xl text-white text-opacity-80 flex items-center gap-2 hover:text-opacity-100 w-fit"><span className="text-white !text-opacity-40">Call</span>+254-20-222-0000</Link>
                    </div>
                </div>
                <div className="grid md:grid-cols-6 lg:grid-cols-9 grid-cols-1 gap-7 pt-12">
                    <div className="col-span-3">
                        <h2 className="text-white text-4xl leading-[1.2] font-bold">Mombasa Office</h2>
                    </div>
                    <div className="col-span-3">
                        <p className="text-xl text-white text-opacity-50 font-normal max-w-64">Moi Avenue, Mombasa, 80100</p>
                    </div>
                    <div className="col-span-3">
                        <Link href="mailto:mombasa@propertypro.co.ke" className="text-xl text-white font-medium underline">mombasa@propertypro.co.ke</Link>
                        <Link href="tel:+254-41-222-0000" className="text-xl text-white text-opacity-80 text-IceBlue flex items-center gap-2 hover:text-opacity-100 w-fit"><span className="text-white !text-opacity-40">Call</span>+254-41-222-0000</Link>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Location;
