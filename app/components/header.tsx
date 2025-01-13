import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
 <>
 <header className='bg-gray-600 p-4'>
    <nav className='flex items-center justify-between'>
        <div>
            <h1 className='text-white text-3xl '>Logo</h1>
        </div>
        <div>
            <ul className='flex space-x-4 items-center text-white text-2xl'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>about</Link></li> 
                <li><Link href={'/'}>contact</Link></li>
              
                 </ul>



        </div>
    </nav>
 </header>
 </>
  )
}

export default Header