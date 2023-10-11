import Link from 'next/link'

interface Props {
  pages: number[]
  currentPage: number
}

const Paginations = ({ pages, currentPage }: Props) => {
  const totalPage = pages.length
  const itemsToShow = currentPage < 10 ? pages.slice(0, 10) : pages.slice(currentPage - 5, currentPage + 5)
  return (
    <nav aria-label='Page navigation example' className='flex flex-col gap-4 items-center justify-center mt-8'>
      <ul className=' -space-x-px text-sm flex-wrap hidden md:inline-flex'>
        <Link href={`/?page=${currentPage > 1 ? currentPage - 1 : 1}`} className='flex justify-center items-center px-4 cursor-pointer  text-blue-400'>{'<'}</Link>
        {
          itemsToShow.map((page) => {
            return (
              <li key={page}>
                <Link href={`/?page=${page + 1}`} className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>{page + 1}</Link>
              </li>
            )
          })
        }
        <Link href={`/?page=${currentPage < totalPage ? currentPage + 1 : totalPage}`} className='flex justify-center items-center px-4 cursor-pointer text-blue-400'>
          {'>'}
        </Link>
      </ul>
      <div className='flex flex-col w-full items-center justify-center'>
        <div className='flex md:hidden'>
        <Link href={`/?page=${currentPage > 1 ? currentPage - 1 : 1}`} className='flex justify-center items-center px-4 cursor-pointer  text-blue-400'>{'< Prev'}</Link>
        <Link href={`/?page=${currentPage < totalPage ? currentPage + 1 : totalPage}`} className='flex justify-center items-center px-4 cursor-pointer text-blue-400'>
          {'Next >'}
        </Link>
        </div>
        <span className='px-4 py-2 text-sm text-gray-700 dark:text-gray-400'>
         <Link className='text-blue-500' href={`/?page=${1}`}>{currentPage === 1 ? '' : 'One'}</Link> {currentPage !== 1 && 'to'} {currentPage} { currentPage !== totalPage && 'of' } <Link className='text-blue-500' href={`/?page=${totalPage}`}>{totalPage === currentPage ? '' : totalPage}</Link>
        </span>
      </div>
    </nav>
  )
}

export default Paginations
