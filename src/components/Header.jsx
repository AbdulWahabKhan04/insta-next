import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='shadow-sm sticky border-b top-0 z-30 bg-white p-3'>
        <div className='flex justify-between items-center max-w-6xl mx-auto'>
            <Link className='text-pink-500 text-3xl' href={"/"}>
                INSTAHUB
            </Link>

            <input type="text" placeholder='Search' className='bg-gray-50 border max-w-[210px] border-gray-200 rounded text--sm w-full py-2 px-4' />

            <button className='font-semibold text-blue-500 text-sm'>
                LogIn
            </button>
        </div>
    </div>
  )
}

export default Header