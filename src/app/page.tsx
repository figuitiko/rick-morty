import { ListCharacters } from '@/components/ListCharacters'
import Await from '@/components/share/Await'
import Skeleton from '@/components/share/Skeleton'
import { fetchCharacters } from '@/lib/characters'
import { Suspense } from 'react'

type ISearchParms = Record<string, string | string | string[] | undefined>

export default async function Home ({ searchParams }: { searchParams: ISearchParms }) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1

  return (
    <main className='flex min-h-screen flex-col justify-center items-center p-24'>
      <Suspense fallback={<Skeleton />}>
        <Await promise={fetchCharacters({ page })}>
          {({ info, characters }) => {
            const { pages } = info
            const pagesArr = pages !== undefined ? Array.from(Array(pages).keys()) : []
            return (
              <ListCharacters
                characters={characters}
                pages={pagesArr}
                currentPage={page}
              />
            )
          }}
        </Await>
      </Suspense>
    </main>
  )
}
