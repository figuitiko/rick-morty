import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='flex p-12 border-b-2 sticky top-0 z-10 min-h-[120px] bg-black'>
      <Link href='/'>
        <h1 className='text-3xl font-bold text-blue-400'>Rick and Morty</h1>
      </Link>
    </header>
  )
}

export default Header
