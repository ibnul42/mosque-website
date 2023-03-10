import React from "react"
import { Helmet } from "react-helmet-async"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"

const portfolios = [
  {
    title: "portfolio_1",
    link: "https://images.unsplash.com/photo-1596193433486-02333accdc13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "portfolio_2",
    link: "https://images.unsplash.com/photo-1574545640323-59dc7a2b4a6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    title: "portfolio_3",
    link: "https://images.unsplash.com/photo-1528862973381-9bc5ad6d4227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
  },
];

const prayers = [
  {
    title: "Fajr",
    start: "06:21 AM",
    iqama: "06:40 AM",
  },
  {
    title: "Sunrise",
    start: "07:36 AM",
    iqama: "",
  },
  {
    title: "Dhuhr",
    start: "12:52 PM",
    iqama: "01:30 PM",
  },
  {
    title: "Asr",
    start: "03:44 PM",
    iqama: "04:45 PM",
  },
  {
    title: "Maghrib",
    start: "06:08 PM",
    iqama: "06:11 PM",
  },
  {
    title: "Isha",
    start: "07:22 PM",
    iqama: "07:45 PM",
  },
  {
    title: "First Jummah",
    start: "12:45 PM",
    iqama: "01:15 PM",
  },
  {
    title: "Second Jummah",
    start: "01:45 PM",
    iqama: "02:15 PM",
  },
];

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home - DHIC</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="max-w-7xl mx-auto px-2 my-2 overflow-hidden">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          emulateTouch={true}
          showThumbs={false}
          showStatus={false}
          stopOnHover={false}
        >
          {portfolios &&
            portfolios.map((item, index) => (
              <div
                key={index}
                className="h-[60vh] max-w-7xl mx-auto rounded-md overflow-hidden"
              >
                <img
                  src={item.link}
                  className="h-full w-full object-cover object-center"
                  alt={item.title}
                />
              </div>
            ))}
        </Carousel>
        <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1 bg-sky-300 px-2">
            <p className="font-bold text-2xl capitalize py-2 text-center">
              Prayer Times
            </p>
            <p className="font-bold text-lg capitalize py-2 text-center">Prayer times in Arlington, VA</p>
            <div className="grid grid-cols-3 gap-1 border-b-2 border-white pb-2">
              <div className="col-span-1 text-start font-bold">Prayer</div>
              <div className="col-span-1 text-center font-bold">Start Time</div>
              <div className="col-span-1 text-end font-bold">Iqama Time</div>
            </div>
            {prayers &&
              prayers.length > 0 &&
              prayers.map((item, index) => (
                <div
                  key={index}
                  className="grid grid-cols-3 gap-1 border-b-2 border-white py-2"
                >
                  <div className="col-span-1 text-start font-medium">{item.title}</div>
                  <div className="col-span-1 text-center font-medium">{item.start}</div>
                  <div className="col-span-1 text-end font-medium">{item.iqama}</div>
                </div>
              ))}
          </div>
          <div className="col-span-1">
            <h1 className="font-bold text-2xl md:text-4xl">
              WELCOME TO THE Darul Hikmah Islamic Center
            </h1>
            <p>
              Darul Hikmah Islamic Center (DHIC) is an independent, non-profit,
              community-based, religious 501(c)(3) organization. DHIC provides a
              dynamic space that cultivates an exchange of ideas about Islam
              through culture, charity, and education programs. The DHIC is not
              just a mosque for prayers rather it is a community center for all.
              The Center is committed to preserving an Islamic identity,
              building and supporting a viable Muslim community, promoting a
              comprehensive Islamic way of life based on the Holy Quran and the
              Sunnah of Prophet Muhammad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home