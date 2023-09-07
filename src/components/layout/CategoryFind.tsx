import React from 'react'
import { IoMdAddCircleOutline } from "react-icons/io";

export const CategoryFind = () => {
  return (
    <div className='text-white flex justify-around mb-12 sm:flex-col'>
        <ul className='flex md:flex-row flex-col text-center'>
            <li className='md:pr-5 sm:mb-3'>Sell</li>
            <li className='md:pr-5 sm:mb-3'>Lost/Found</li>
            <li className='md:pr-5 sm:mb-3'>In good hands</li>
        </ul>
        <div className='flex items-center cursor-pointer justify-center'>
            <p className='pr-1'>Add pet</p>
            <IoMdAddCircleOutline size={20} className='text-blue'/>
        </div>
    </div>
  )
}