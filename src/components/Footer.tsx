import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='flex border-t-2 items-end h-[100px] py-4 px-8 sticky bottom-0 bg-black'>
      <Link href='/'>
        <h1 className='text-3xl font-bold text-blue-400'>Rick and Morty</h1>
      </Link>
      <p className='ml-auto'>
        Made with <span className='heart'>❤</span> by{' '}
        <a href='https://portfolio-ffreeman.vercel.app/' target='_blank' rel='noopener noreferrer'>
          @ffreeman
        </a>
      </p>
    </footer>
  )
}

export default Footer
