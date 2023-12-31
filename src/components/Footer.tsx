import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex flex-col md:flex-row border-t-2 items-end h-[100px] py-4 px-8 sticky bottom-0 bg-black'>
      <Link href='/'>
        <h1 className='text-xl md:text-3xl font-bold text-blue-400'>Rick and Morty</h1>
      </Link>
      <p className='ml-auto text-sm md:text-lg text-white'>
        Made with <span className='text-white'>❤</span> by{' '}
        <a className='text-blue-500' href='#' target='_blank' rel='noopener noreferrer'>
          @ffreeman
        </a>
      </p>
    </footer>
  )
}

export default Footer
