import React from 'react'
import Link from 'next/link'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return (
    <div>
        <nav className='w-full flex items-center justify-between max-w-2xl mx-auto px-4 py-5'>
          <Link href={"/"} className='font-bold text-3xl '>Bug<span className='text-blue-500 text-primary'>Busters</span></Link>
          <ModeToggle />
        </nav>
      
    </div>
  )
}

export default Navbar