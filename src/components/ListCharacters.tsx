import Paginations from './Paginations'

interface CharacterProps {
  id: number
  image: string
  name: string
}
interface ListProps {
  characters: CharacterProps[]
  pages: number[]
  currentPage: number
}

type ItemPropType = Pick<CharacterProps, 'image' | 'name'>

export const CharacterBox = ({ image, name }: ItemPropType) => {
  return (
    <div className='flex flex-col w-full sm:w-1/2 md:w-1/4  lg:w-1/5  min-w-[200px]'>
      <picture>
        <source type='image/jpeg' srcSet={`${image}?width=100 100w`} />
        <img
         className='rounded-lg shadow-lg'
          role='presentation'
          loading='lazy'
          src={image}
          alt={name}
          srcSet={`${image}?width=100 100w`}
          decoding='async'
          sizes='(min-width: 265px) 33vw, 100vw'
          />
      </picture>
      <p>{name}</p>
    </div>
  )
}
export const ListCharacters = ({ characters, pages, currentPage }: ListProps) => {
  return (
    <>
    <div className='flex gap-4 flex-wrap m-auto items-center w-full justify-center'>
      {
        characters.map((character) => {
          const { id, image, name } = character
          return <CharacterBox key={id} image={image} name={name} />
        })
      }
    </div>
      <Paginations pages={pages} currentPage={currentPage} />
    </>
  )
}
