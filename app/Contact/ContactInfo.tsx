import { contactData } from '@/Data/data'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaMap, FaPhone } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div>
        <div className='flex items-center space-x-8'>
            <Link href={"https://wa.me/923132645183"} target='_blank' className='text-white w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex flex-col items-center justify-center hover:scale-125 duration-200 ease-linear'>
                <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white'/>
            </Link>
            <div className=''>
                <h1 className='font-bold text-lg sm:text-xl md text-white'>Phone</h1>
                <h1  className='text-base sm:text-lg text-white text-opacity-70'>{contactData.phone}</h1>
            </div>
            
        </div>

        <div className='flex items-center space-x-8 mt-8 mb-8'>
            <Link href={"https://mail.google.com/mail/?view=cm&fs=1&to=moizaman905@gmail.com"} target='_blank' className='text-white w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex flex-col items-center justify-center hover:scale-125 duration-200 ease-linear'>
                <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white'/>
            </Link>
            <div>
                <h1 className='font-bold text-lg sm:text-xl md text-white'>Email</h1>
                <h1  className='text-base sm:text-lg text-white text-opacity-70'>{contactData.email}</h1>
            </div>
            
        </div>

        <div className='flex items-center space-x-8 '>
            <div className='text-white w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex flex-col items-center justify-center hover:scale-125 duration-200 ease-linear'>
                <FaMap className='w-4 h-4 md:w-7 md:h-7 text-white'/>
            </div>
            <div>
                <h1 className='font-bold text-lg sm:text-xl md text-white'>Address</h1>
                <h1  className='text-base sm:text-lg text-white text-opacity-70'>{contactData.address}</h1>
            </div>
            
        </div>
    </div>
  )
}

export default ContactInfo