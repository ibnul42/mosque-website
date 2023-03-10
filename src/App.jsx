import { useState } from 'react'
import Layout from './Layout'
import { TfiEmail } from 'react-icons/tfi'
import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { ImLinkedin } from 'react-icons/im'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className="bg-[#1976d2] text-white py-1">
        <div className="max-w-7xl mx-auto px-2 flex justify-between">
          <a href="mailto:info@dhicva.org" className="flex gap-2 items-center"><TfiEmail className='h-4 w-4' />info@dhicva.org</a>
          {/* <div className="flex gap-2 items-center"> <TfiEmail /> info@dhicva.org</div> */}
          <div className="flex items-center justify-end gap-2">
            <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillTwitterCircle className='h-5 w-5 rounded-full' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebook className='h-5 w-5 rounded-full' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><ImLinkedin className='h-5 w-5 rounded-full' /></a>
            <a href="http://" target="_blank" rel="noopener noreferrer"><AiFillInstagram className='h-5 w-5 rounded-full' /></a>
          </div>
        </div>
      </div>
      <Layout />
    </div>
  )
}

export default App
