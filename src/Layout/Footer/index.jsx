import React from "react"
import { HiLocationMarker } from 'react-icons/hi'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { SiMinutemailer } from 'react-icons/si'
const prayers = [
  {
    title: 'Fajr',
    start: '06:21 AM',
    iqama: '06:40 AM'
  },
  {
    title: 'Sunrise',
    start: '07:36 AM',
    iqama: ''
  },
  {
    title: 'Dhuhr',
    start: '12:52 PM',
    iqama: '01:30 PM'
  },
  {
    title: 'Asr',
    start: '03:44 PM',
    iqama: '04:45 PM'
  },
  {
    title: 'Maghrib',
    start: '06:08 PM',
    iqama: '06:11 PM'
  },
  {
    title: 'Isha',
    start: '07:22 PM',
    iqama: '07:45 PM'
  },
  {
    title: 'First Jummah',
    start: '12:45 PM',
    iqama: '01:15 PM'
  },
  {
    title: 'Second Jummah',
    start: '01:45 PM',
    iqama: '02:15 PM'
  }
]

const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#0b2d48] text-white py-3">
        <div className="max-w-7xl mx-auto px-2 grid col-span-1 md:grid-cols-3 gap-2">
          <div className="col-span-1">
            <p className="font-bold text-2xl capitalize py-2">Darul Hikmah Islamic Center</p>
            <p className="text-sm">"The best deeds for a person are to help humanity and to preserve the given knowledge in his heart for good."</p>
          </div>
          <div className="col-span-1">
            <p className="font-bold text-2xl capitalize py-2">Contact Information</p>
            <div className="flex flex-col gap-1">
              <div className="flex gap-3 items-start">
                <HiLocationMarker className="h-8 w-8" />
                <p>Darul Hikmah Islamic Center (DHIC) 5220 Fillmore Ave, Alexandria, VA 22311</p>
              </div>
              <div className="flex gap-3 items-start">
                <BsFillTelephoneFill />
                <p>(703)705-1666</p>
              </div>
              <div className="flex gap-3 items-start">
                <SiMinutemailer />
                <p>info@dhicva.org</p>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <p className="font-bold text-2xl capitalize py-2">Prayer Time schedule</p>
            <div className="grid grid-cols-3 gap-1 border-b-2 border-white">
                <div className="col-span-1 text-start">Prayer</div>
                <div className="col-span-1 text-center">Start Time</div>
                <div className="col-span-1 text-end">Iqama Time</div>
            </div>
            {prayers && prayers.length > 0 && prayers.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-1 border-b-2 border-white py-1">
                <div className="col-span-1 text-start">{item.title}</div>
                <div className="col-span-1 text-center">{item.start}</div>
                <div className="col-span-1 text-end">{item.iqama}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-black text-gray-400 text-center py-2">COPYRIGHT &copy; 2021-2023 DHIC. All Rights Reserved.</div>
    </div>
  )
}

export default Footer