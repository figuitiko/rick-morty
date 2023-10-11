import { ListCharacters } from '@/components/ListCharacters'
import { fetchCharacters } from '@/lib/characters'

type ISearchParms = Record<string, string | string | string[] | undefined>

export default async function Home ({ searchParams }: { searchParams: ISearchParms }) {
  const page =
    typeof searchParams.page === 'string' ? Number(searchParams.page) : 1
  const data = await fetchCharacters({ page })
  const { info, characters } = data
  const { pages } = info
  const pagesArr = pages !== undefined ? Array.from(Array(pages).keys()) : []
  return (
    <main className='flex min-h-screen flex-col justify-center items-center p-24'>
      <ListCharacters characters={characters} pages={pagesArr} currentPage={page} />
    </main>
  )
}
