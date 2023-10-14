import CharacterBox, { type CharacterProps } from './CharacterBox'
import Paginations from './Paginations'
interface ListProps {
  characters: CharacterProps[]
  pages: number[]
  currentPage: number
}

export const ListCharacters = ({ characters, pages, currentPage }: ListProps) => {
  return (
    <>
    <div className='flex gap-4 flex-wrap m-auto items-center w-full justify-center'>
      {
        characters.map((character) => {
          const { id, image, name } = character
          return <CharacterBox key={id} image={image} name={name} id={id} />
        })
      }
    </div>
      <Paginations pages={pages} currentPage={currentPage} />
    </>
  )
}
