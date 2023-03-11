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
    bg: '#fdba74',
    text: '#ea580c'
  },
  {
    title: "Sunrise",
    start: "07:36 AM",
    iqama: "",
    bg: '#bef264',
    text: '#65a30d'
  },
  {
    title: "Dhuhr",
    start: "12:52 PM",
    iqama: "01:30 PM",
    bg: '#5eead4',
    text: '#0d9488'
  },
  {
    title: "Asr",
    start: "03:44 PM",
    iqama: "04:45 PM",
    bg: '#f0abfc',
    text: '#c026d3'
  },
  {
    title: "Maghrib",
    start: "06:08 PM",
    iqama: "06:11 PM",
    bg: '#fca5a5',
    text: '#dc2626'
  },
  {
    title: "Isha",
    start: "07:22 PM",
    iqama: "07:45 PM",
    bg: '#fda4af',
    text: '#e11d48'
  },
  {
    title: "First Jummah",
    start: "12:45 PM",
    iqama: "01:15 PM",
    bg: '#c4b5fd',
    text: '#7c3aed'
  },
  {
    title: "Second Jummah",
    start: "01:45 PM",
    iqama: "02:15 PM",
    bg: '#a5b4fc',
    text: '#4f46e5'
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
        <div className="my-2 grid grid-cols-1 md:grid-cols-2 gap-4 bg-teal-50">
          <div className="col-span-1 px-2">
            <p className="font-bold text-2xl md:text-4xl capitalize py-2 text-center">
              Prayer Times
            </p>
            <p className="font-bold text-lg capitalize py-2 text-center">Prayer times in Arlington, VA</p>
            {/* <div className="grid grid-cols-3 gap-1 border-b-2 border-white pb-2">
              <div className="col-span-1 text-start font-bold">Prayer</div>
              <div className="col-span-1 text-center font-bold">Start Time</div>
              <div className="col-span-1 text-end font-bold">Iqama Time</div>
            </div> */}
          </div>
          <div className="col-span-1 md:px-5">
            {prayers &&
              prayers.length > 0 &&
              prayers.map((item, index) => (
                <div
                  key={index}
                  className={`flex justify-between gap-1 border-b-2 border-white px-5 py-3 font-bold rounded-lg my-3 ${index % 2 === 0 ? 'ml-6 md:ml-10' : 'mr-6 md:mr-10'}`}
                  style={{
                    backgroundColor: item.bg,
                    color: item.text
                  }}
                >
                  <div className="text-start">{item.title}</div>
                  <div className="text-center">{item.start}</div>
                  {/* <div className="col-span-1 text-end font-medium">{item.iqama}</div> */}
                </div>
              ))}
          </div>
          {/* <div className="col-span-1">
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
          </div> */}
        </div>
        <div className="my-2">
          <p className="text-2xl md:text-4xl font-semibold text-center uppercase my-2">Announcement</p>
          <p className="text-xl md:text-2xl font-medium">DHIC Ramadan 1443</p>
          <p>Assalamu Alaikum Wa Rahmatullahi Wa Barakatuhu.</p>
          <p>Dear Brothers & Sisters,</p>
          <p>During this blessed month of Ramadan, we ask that Allah (SWT) accept our fasting and all the good deeds we have been doing during this best month of the year. As this blessed month is coming to an end, we do not know if we will be reaching the next Ramadan. We should take advantage of these last few days by doing as many good deeds as possible. The Messenger of Allah (ﷺ) said, “<span className="font-bold">Whoever builds a Masjid for Allah, Allah will build for him a house like it in Paradise.</span>” (Source: Sahih al-Bukhari 450, Sahih Muslim 533)</p>
          <p>Darul Hikmah Islamic Center (DHIC) would like to wish the best in this world and the hereafter, to all our well-wishers, supporters, and donors, throughout this blessed journey so far. </p>
          <p>Please watch our progress with your donation: <a href="https://youtu.be/rxZkx2gZhio" target="_blank">https://youtu.be/rxZkx2gZhio</a></p>
          <p className="font-bold">Darul Hikmah Islamic Center (DHIC) would like to invite everyone to join our fundraising event on Saturday, 23rd, 2022 between 9:30 pm to 11:30 pm at 5220 Fillmore Avenue, Alexandria VA 22311.</p>
          <p>Alhamdulillah, as you are aware, Darul Hikmah Islamic Center (DHIC) is in the process of purchasing land for an Islamic Center in Alexandria City. <span className="font-bold">The total area is 37,000 sqft and the total cost is $1.5 million</span>. Alhamdulillah, DHIC has made its first plot purchase of 12000 sqft to make this the permanent home of our beloved community. As of Ramadan 1443, below is where we stand financially with your support:</p>
          <div className="flex justify-center">
            <div className="border border-gray-900 max-w-md font-bold">
              <p className="px-2 py-3">5220 Fillmore Avenue Purchase Cost : $505,000</p>
              <p className="border-t border-b border-gray-900 px-2 py-3">Renovation Cost : $145,000Donation Raised :  $246,000</p>
              <p className="px-2 py-3">Total Qard-E-Hasanah : $404,000</p>
            </div>
          </div>
          <p>We have a long-term vision and goals to grow to make improvements and help people to have a better understanding of Islam and peaceful living. We have a contract with the owner of the 2nd & 3rd plots, to acquire these properties in the near future, insha’Allah. We need your support to keep building this house of Allah. All donations are appreciated, so please donate generously. Tell your family and friends about this great opportunity so that they may benefit as well. May Allah (SWT) give us the ability to support the House of Allah and build this community.</p>
          <p>As a community, we pledge to continue to work with everyone as a whole, to continue to contribute to our society, to make our community more inclusive, progressive, open, and a home for all who choose to be a part of this fascinating journey, irrespective of attributes or characteristics, in peace, friendship, and goodwill – we are all in this together.</p>
          <div className="flex justify-center">
          <p className="text-center bg-fuchsia-300 my-2 px-1 rounded">We need your support to raise $404,000.00 immediately.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home